import assert from 'node:assert/strict'
import { PassThrough } from 'node:stream'
import { createServer } from 'vite'
import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { MemoryRouter } from 'react-router'

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const { default: LanguageProvider } = await server.ssrLoadModule(
    '/src/context/LanguageProvider.jsx',
  )
  const { japanResearchReport: report } = await server.ssrLoadModule(
    '/src/data/japanResearchReport.js',
  )
  const { getResearchFigureSeries } = await server.ssrLoadModule(
    '/src/data/researchFigureSeries.js',
  )
  const { japanCompanyReport: companies } = await server.ssrLoadModule(
    '/src/data/japanCompanyReport.js',
  )
  const { default: ResearchFigure } = await server.ssrLoadModule(
    '/src/components/research/TranslatedResearchFigure.jsx',
  )
  let paragraphs = 0,
    tables = 0
  for (const topic of report.topics) {
    for (const block of topic.blocks) {
      if (block.type === 'paragraph') {
        assert.ok(block.textEn, topic.id + ': English paragraph')
        assert.ok(
          !/[\u3400-\u9fff]/.test(block.textEn),
          topic.id + ': English paragraph contains untranslated text',
        )
        paragraphs++
      }
      if (['table', 'timeline'].includes(block.type)) {
        assert.equal(
          block.columnsEn.length,
          block.columns.length,
          topic.id + ': all headers translated',
        )
        assert.equal(
          block.rowsEn.length,
          block.rows.length,
          topic.id + ': all rows translated',
        )
        block.rows.forEach((row, i) =>
          assert.equal(
            block.rowsEn[i].length,
            row.length,
            topic.id + ': all cells translated',
          ),
        )
        tables++
      }
    }
  }
  for (const source of Object.values(report.sources))
    assert.ok(
      source.titleEn && source.noteEn,
      source.id + ': source translation',
    )
  const render = (node) =>
    new Promise((resolve, reject) => {
      const output = new PassThrough()
      let html = ''
      let error
      output.on('data', (chunk) => (html += chunk))
      output.on('end', () => (error ? reject(error) : resolve(html)))
      output.on('error', reject)
      const stream = renderToPipeableStream(node, {
        onAllReady() {
          stream.pipe(output)
        },
        onError(cause) {
          error = cause
        },
      })
    })
  const paths = [
    '/japan',
    '/japan/overview',
    '/japan/regions',
    '/japan/research',
    '/japan/research/sources',
    '/japan/research/figures',
    ...[
      'sector',
      'types',
      'curriculum',
      'operations',
      'technology',
      'companies',
    ].map((s) => '/japan/' + s),
    '/japan/companies?view=compare',
    ...report.regions.map((r) => '/japan/regions/' + r.id),
    ...report.topics
      .filter((t) => t.volume !== 6 && !t.regionId)
      .map((t) => '/japan/research/' + t.id),
    ...companies.companies.map((c) => '/japan/companies/' + c.id),
  ]
  let checked = 0
  for (const mode of ['en', 'zh', 'bilingual']) {
    globalThis.localStorage = { getItem: () => mode, setItem: () => {} }
    for (const path of paths) {
      const html = await render(
        React.createElement(
          MemoryRouter,
          { initialEntries: [path] },
          React.createElement(LanguageProvider, null, React.createElement(App)),
        ),
      )
      assert.ok(!html.includes('404 / THE OBSERVER'), path)
      assert.ok(
        !html.includes('translation is pending'),
        path + ': no stale translation notice',
      )
      const text = html
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
        .replace(/<span[^>]*lang="ja"[^>]*>[\s\S]*?<\/span>/g, '')
        .replace(/<[^>]*>/g, '')
        .replaceAll('EN / 中', '')
      if (mode === 'en')
        assert.ok(
          !/[\u3400-\u9fff]/.test(text),
          path +
            ': unexpected Chinese text: ' +
            text.match(/.{0,35}[\u3400-\u9fff].{0,35}/)?.[0],
        )
      if (mode !== 'en')
        assert.ok(/[\u3400-\u9fff]/.test(text), path + ': Chinese available')
      if (mode === 'en' && path !== '/japan')
        assert.ok(
          !html.includes('images/japan-report/'),
          path + ': English figure replaces Chinese raster',
        )
      checked++
    }
  }
  for (const id of Object.keys(report.figures)) {
    assert.ok(getResearchFigureSeries(id), id + ': translated visual available')
    const html = await render(React.createElement(ResearchFigure, { id }))
    assert.ok(html.includes('<table>'), id + ': accessible English data table')
    assert.ok(
      !/[\u3400-\u9fff]/.test(html.replace(/<[^>]*>/g, '')),
      id + ': translated chart text',
    )
  }
  console.log(
    `Passed: ${paragraphs} bilingual paragraphs, ${tables} bilingual tables/timelines, ${Object.keys(report.sources).length} bilingual sources, ${Object.keys(report.figures).length} translated figures, ${checked} page renders across English, Chinese and bilingual modes.`,
  )
} finally {
  await server.close()
}
