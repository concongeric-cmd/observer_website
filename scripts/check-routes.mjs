import assert from 'node:assert/strict'
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
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
  const { articles, sections } = await server.ssrLoadModule(
    '/src/data/content.js',
  )
  const { countries } = await server.ssrLoadModule('/src/data/countries.js')
  const { schools, filterSchools } = await server.ssrLoadModule(
    '/src/data/schools.js',
  )
  const { getVerifiedProviderTypes, getSchoolsByProviderType, providerTypes } =
    await server.ssrLoadModule('/src/data/providerTypes.js')
  const routes = [
    '/',
    '/monthly',
    '/about',
    ...countries.flatMap((c) => [
      '/' + c.slug,
      '/' + c.slug + '/centres',
      ...sections
        .filter((s) => s[0] !== 'centres')
        .map((s) => '/' + c.slug + '/' + s[0]),
    ]),
    ...schools.map((s) => '/' + s.country + '/centres/' + s.id),
    ...articles.map((a) => '/japan/operations/' + a.id),
  ]
  let checked = 0
  for (const language of ['zh', 'en']) {
    globalThis.localStorage = { getItem: () => language, setItem: () => {} }
    const render = (entry) =>
      renderToString(
        React.createElement(
          MemoryRouter,
          { initialEntries: [entry] },
          React.createElement(LanguageProvider, null, React.createElement(App)),
        ),
      )
    for (const path of routes) {
      const html = render(path)
      assert.equal(
        (html.match(/<h1>/g) || []).length,
        1,
        path + ': one heading',
      )
      assert.ok(!html.includes('404 / THE OBSERVER'), path + ': page exists')
      const nav = html.match(
        /<nav[^>]*aria-label="Main navigation"[^>]*>[\s\S]*?<\/nav>/,
      )[0]
      const active = [...nav.matchAll(/<a\b[^>]*aria-current="page"[^>]*>/g)]
      assert.equal(active.length, 1, path + ': one active nation or top tab')
      const expected = path.startsWith('/japan')
        ? '/japan'
        : path.startsWith('/united-states')
          ? '/united-states'
          : path
      assert.ok(
        active[0][0].includes('href="' + expected + '"'),
        path + ': active tab',
      )
      for (const pair of html.matchAll(
        /class="pair [^"]*"><span lang="([^"]+)"/g,
      ))
        assert.equal(
          pair[1],
          language === 'en' ? 'en' : 'zh-CN',
          path + ': language order',
        )
      for (const link of html.matchAll(/href="([^"]+)"/g)) {
        const href = link[1]
        if (href.startsWith('http')) continue
        const [target, anchor] = href.split('#')
        assert.ok(
          !target || routes.includes(target.split('?')[0]),
          path + ': known link ' + href,
        )
        if (anchor)
          assert.ok(
            (!target || target === path ? html : render(target)).includes(
              'id="' + anchor + '"',
            ),
            path + ': anchor ' + href,
          )
      }
      checked++
    }
    const monthly = render('/monthly')
    assert.ok(monthly.includes('Monthly Updates'), 'Monthly Updates title')
    assert.ok(
      monthly.includes('Content pending research'),
      'Honest pending notice',
    )
    assert.ok(
      monthly.includes('No monthly updates have been published yet.'),
      'No invented updates',
    )
    assert.ok(
      !monthly.includes('class="monthly-entry"'),
      'No sample events presented as updates',
    )
    const monthlyFiltered = render(
      '/monthly?month=2026-11&country=japan&topic=centres',
    )
    assert.ok(
      monthlyFiltered.includes('Content pending research'),
      'Filters preserve empty state',
    )
    for (const country of countries) {
      const html = render('/' + country.slug + '/types')
      assert.ok(
        !html.includes('This topic is in preparation'),
        'Types is a real directory view',
      )
      for (const type of providerTypes.filter((t) =>
        t.countries.includes(country.slug),
      )) {
        const group = html
          .split('id="provider-' + type.id + '"')[1]
          ?.split('</section>')[0]
        assert.ok(group, 'Type group ' + type.id)
        assert.ok(group.includes(type.description[1]), 'Type explanation')
        for (const school of schools) {
          const matches =
            school.country === country.slug &&
            getVerifiedProviderTypes(school).some((t) => t.id === type.id)
          assert.equal(
            group.includes('/' + school.country + '/centres/' + school.id),
            matches,
            'Only verified type matches: ' + school.id,
          )
        }
      }
    }
    for (const school of schools) {
      const profile = render('/' + school.country + '/centres/' + school.id)
      const types = getVerifiedProviderTypes(school)
      if (!types.length)
        assert.ok(
          profile.includes('Provider type pending verification'),
          'Unknown type stays unknown',
        )
      for (const type of types) {
        assert.ok(profile.includes(type.label[1]), 'Profile type label')
        assert.ok(profile.includes(type.source.url), 'Classification source')
        assert.ok(profile.includes(type.source.checkedAt), 'Verification date')
      }
    }
    for (const c of countries) {
      const directory = render('/' + c.slug)
      assert.equal(
        (directory.match(/class="school-card"/g) || []).length,
        3,
        'Three schools per country',
      )
      for (const s of schools)
        assert.equal(
          directory.includes('/' + s.country + '/centres/' + s.id),
          s.country === c.slug,
          'Country isolation: ' + s.id,
        )
      const empty = render('/' + c.slug + '?q=not-a-real-school')
      assert.equal(
        (empty.match(/class="school-card"/g) || []).length,
        0,
        'Empty search',
      )
      const school = schools.find((s) => s.country === c.slug)
      const filtered = render(
        '/' + c.slug + '?q=' + encodeURIComponent(school.original),
      )
      assert.equal(
        (filtered.match(/class="school-card"/g) || []).length,
        1,
        'Search original school name',
      )
      const profile = render({
        pathname: '/' + c.slug + '/centres/' + school.id,
        state: { directorySearch: '?approach=play' },
      })
      assert.ok(
        profile.includes('href="/' + c.slug + '?approach=play"'),
        'Profile returns to directory filters',
      )
      for (const section of [
        'essentials',
        'school-policy',
        'school-practice',
        'school-operations',
        'school-sources',
      ])
        assert.ok(
          profile.includes('id="' + section + '"'),
          'Profile section ' + section,
        )
    }
    for (const path of [
      '/missing',
      '/japan/not-a-section',
      '/japan/centres/missing',
      '/united-states/centres/fuji-kindergarten',
      '/united-states/operations/local-demand',
    ])
      assert.ok(render(path).includes('Page not found'), '404: ' + path)
  }
  assert.equal(
    filterSchools(schools, { query: '  BING  ' }).length,
    1,
    'Trimmed case-insensitive search',
  )
  assert.equal(
    filterSchools(schools, { query: 'ふじようちえん' }).length,
    1,
    'Japanese search',
  )
  assert.equal(
    filterSchools(schools, { region: 'maryland', approach: 'montessori' })
      .length,
    1,
    'Combined filters',
  )
  assert.equal(
    filterSchools(schools, { region: 'maryland', approach: 'reggio' }).length,
    0,
    'Nonmatching filters',
  )
  assert.equal(
    new Set(schools.map((s) => s.id)).size,
    schools.length,
    'Unique school IDs',
  )
  for (const school of schools)
    assert.ok(
      school.sources.every((s) => s.url.startsWith('https://')) &&
        school.checked,
      'Source records',
    )
  const exampleSchool = schools.find((s) => s.id === 'bing-nursery-school')
  const verified = exampleSchool.providerClassifications[0]
  for (const record of [
    { ...verified, status: 'pending' },
    { ...verified, source: null },
    { ...verified, typeId: 'invented-type' },
    { ...verified, source: { ...verified.source, checkedAt: null } },
    { ...verified, source: { ...verified.source, evidence: [] } },
  ])
    assert.equal(
      getVerifiedProviderTypes({
        ...exampleSchool,
        providerClassifications: [record],
      }).length,
      0,
      'Unverified/unsupported classifications excluded',
    )
  assert.equal(
    getVerifiedProviderTypes({
      ...exampleSchool,
      providerClassifications: [{ ...verified, typeId: 'kindergarten' }],
    }).length,
    0,
    'Wrong-country type excluded',
  )
  assert.equal(
    getVerifiedProviderTypes({
      ...exampleSchool,
      providerClassifications: [verified, verified],
    }).length,
    1,
    'Duplicate type counted once',
  )
  assert.equal(
    getVerifiedProviderTypes(schools.find((s) => s.id === 'fuji-kindergarten'))
      .length,
    0,
    'Fuji category not inferred',
  )
  assert.equal(
    getSchoolsByProviderType(schools, 'japan', 'kindergarten').length,
    2,
    'Two verified Japanese kindergartens',
  )
  console.log(
    'PASS: ' +
      checked +
      ' route/language combinations, school search and filters, country isolation, source records, profile anchors, return links and missing pages.',
  )
} finally {
  delete globalThis.localStorage
  await server.close()
}
