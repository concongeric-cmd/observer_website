import useLanguage from '../../hooks/useLanguage'
import { japanResearchReport as report } from '../../data/japanResearchReport'
import { researchFigureMetadata } from '../../data/japanResearchPresentation'
import TranslatedResearchFigure from './TranslatedResearchFigure'

export function ResearchText({ zh, en }) {
  const { pair } = useLanguage()
  return en ? pair(zh, en) : <span lang="zh-CN">{zh}</span>
}

export function ResearchSourceLinks({ ids = [] }) {
  const { english } = useLanguage()
  return (
    <span className="research-source-links">
      {[...new Set(ids)].flatMap((id) =>
        (report.sources[id]?.urls || []).map((url, index) => (
          <a
            href={url}
            key={id + url}
            target="_blank"
            rel="noreferrer"
            title={report.sources[id][english ? 'titleEn' : 'titleZh']}
          >
            [{id}
            {report.sources[id].urls.length > 1 ? `·${index + 1}` : ''}] ↗
          </a>
        )),
      )}
    </span>
  )
}

export function ResearchSources({ ids = Object.keys(report.sources) }) {
  const { pair } = useLanguage()
  return (
    <section className="research-sources">
      <h2>{pair('来源与资料范围', 'Sources and scope')}</h2>
      <p>
        {pair('报告核对基准日', 'Report research cutoff')}: {report.cutoff}
      </p>
      {[...new Set(ids)].map((id) => {
        const source = report.sources[id]
        return source ? (
          <details key={id} id={'research-source-' + id}>
            <summary>
              [{id}] {pair(source.titleZh, source.titleEn)}
            </summary>
            <p>{pair(source.noteZh, source.noteEn)}</p>
            <ul>
              {source.urls.map((url) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {url} ↗
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ) : null
      })}
    </section>
  )
}

export function ResearchFigure({ figure }) {
  const { pair, mode } = useLanguage()
  const meta = researchFigureMetadata[figure.id]
  return (
    <figure className="research-figure" id={figure.id}>
      <h3>{pair(meta[0], meta[1])}</h3>
      {mode !== 'zh' && <TranslatedResearchFigure id={figure.id} />}
      {mode === 'zh' && (
        <img
          loading="lazy"
          src={import.meta.env.BASE_URL + 'images/japan-report/' + figure.file}
          alt={figure.title}
        />
      )}
      {mode === 'bilingual' && (
        <details>
          <summary>
            {pair('查看中文原图', 'View original Chinese figure')}
          </summary>
          <img
            loading="lazy"
            src={
              import.meta.env.BASE_URL + 'images/japan-report/' + figure.file
            }
            alt={figure.title}
          />
        </details>
      )}
      <figcaption>
        <dl className="research-chart-meta">
          <div>
            <dt>{pair('单位', 'Units')}</dt>
            <dd>
              {meta[2].includes(' / ')
                ? pair(...meta[2].split(' / '))
                : meta[2]}
            </dd>
          </div>
          <div>
            <dt>{pair('统计期', 'Period')}</dt>
            <dd>{meta[3]}</dd>
          </div>
          <div>
            <dt>{pair('范围', 'Scope')}</dt>
            <dd>{pair(meta[4], meta[5])}</dd>
          </div>
        </dl>
        <p>{pair(figure.caption, figure.captionEn || meta[5])}</p>
        <ResearchSourceLinks ids={figure.sources} />
      </figcaption>
    </figure>
  )
}

export function ResearchBlocks({ blocks = [], figuresCollapsed = false }) {
  const { pair, text } = useLanguage()
  return (
    <div className="research-prose">
      {blocks.map((block, index) => {
        if (block.type === 'paragraph')
          return (
            <p key={index}>
              <ResearchText zh={block.textZh} en={block.textEn} />{' '}
              <ResearchSourceLinks ids={block.sources} />
            </p>
          )
        if (block.type === 'figure')
          return figuresCollapsed ? (
            <details key={block.id}>
              <summary>
                {pair('查看报告原图', 'View original report figure')}:{' '}
                {pair(...researchFigureMetadata[block.id].slice(0, 2))}
              </summary>
              <ResearchFigure figure={block} />
            </details>
          ) : (
            <ResearchFigure key={block.id} figure={block} />
          )
        if (block.type === 'timeline')
          return (
            <div key={index}>
              <ol className="research-timeline">
                {block.rows.map((row, rowIndex) => (
                  <li key={rowIndex}>
                    <strong>{pair(row[0], block.rowsEn[rowIndex][0])}</strong>
                    <div>
                      <h3>{pair(row[1], block.rowsEn[rowIndex][1])}</h3>
                      <p>{pair(row[2], block.rowsEn[rowIndex][2])}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <ResearchSourceLinks ids={block.sources} />
            </div>
          )
        if (block.type === 'table')
          return (
            <div key={index}>
              <div
                className={
                  'research-table-scroll' +
                  (block.columns.length >= 5 ? ' research-comparison-table' : '')
                }
                role="region"
                tabIndex={0}
                aria-label="Report comparison table"
              >
                <table>
                  <thead>
                    <tr>
                      {block.columns.map((column, columnIndex) => (
                        <th scope="col" key={columnIndex}>
                          {pair(column, block.columnsEn[columnIndex])}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th scope="row" key={cellIndex}>
                              {cell
                                ? pair(cell, block.rowsEn[rowIndex][cellIndex])
                                : pair('未收集', 'Not collected')}
                            </th>
                          ) : (
                            <td
                              data-label={text(block.columns[cellIndex], block.columnsEn[cellIndex])}
                              key={cellIndex}
                            >
                              {cell
                                ? pair(cell, block.rowsEn[rowIndex][cellIndex])
                                : pair('未收集', 'Not collected')}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ResearchSourceLinks ids={block.sources} />
            </div>
          )
        return null
      })}
    </div>
  )
}

// Kept as a compatibility component for existing page imports.
export function OriginalLanguageNotice() {
  return null
}
