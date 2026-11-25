import useLanguage from '../../hooks/useLanguage'
import { japanCompanyReport as report } from '../../data/japanCompanyReport'
import { chineseCompanySources } from '../../data/companyBilingual'
import { researchFigureMetadata } from '../../data/japanResearchPresentation'
import { companyChartLabels } from '../../data/companyChartLabels'

function Citations({ ids = [] }) {
  return ids.map((id) => (
    <a className="company-citation" href={'#company-source-' + id} key={id}>
      [{id}]
    </a>
  ))
}

export function CompanySources({
  ids = Object.keys(report.sources),
  open = false,
}) {
  const { pair } = useLanguage()
  return (
    <section className="company-sources" id="company-sources">
      <h2>{pair('来源与证据', 'Sources & evidence')}</h2>
      <p>
        {pair('报告资料截止日期', 'Report research cutoff')}: {report.cutoff}
      </p>
      <p className="company-muted">
        {pair(
          '原报告于2026年10月21日核对资料。政府数据保留原统计日期及暂定状态。企业自述、实际财务结果和作者分析分别标识，参考编号连接正文与原始来源及表格。',
          report.sourceNote,
        )}
      </p>
      {ids.map((id) => {
        const source = report.sources[id]
        if (!source) return null
        return (
          <details id={'company-source-' + id} key={id} open={open}>
            <summary>
              [{id}]{' '}
              {chineseCompanySources[id]
                ? pair(chineseCompanySources[id].titleZh, source.title)
                : source.title}
            </summary>
            <p>
              {chineseCompanySources[id]
                ? pair(chineseCompanySources[id].noteZh, source.note)
                : source.note}
            </p>
            <ul>
              {[
                ...new Set([
                  ...source.urls,
                  ...(chineseCompanySources[id]?.urls || []),
                ]),
              ].map((url) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {url} ↗
                  </a>
                </li>
              ))}
            </ul>
          </details>
        )
      })}
    </section>
  )
}

function ReportChart({ block }) {
  const { pair } = useLanguage()
  const meta = researchFigureMetadata[block.id]
  return (
    <figure className="company-chart" id={block.id}>
      <h3>{block.titleZh ? pair(block.titleZh, block.title) : block.title}</h3>
      {block.groups.map((group, index) => {
        const percentage = group.rows.every((row) => row.display.endsWith('%'))
        const positiveMax = percentage
          ? 100
          : Math.max(...group.rows.map((row) => row.value), 1)
        const negativeMax = Math.max(...group.rows.map((row) => -row.value), 0)
        const extent = positiveMax + negativeMax
        const zero = (negativeMax / extent) * 100
        return (
          <div key={index}>
            {group.title && (
              <h4>
                {pair(
                  companyChartLabels[group.title] || group.title,
                  group.title,
                )}
              </h4>
            )}
            <ul className="company-chart-rows">
              {group.rows.map((row) => (
                <li key={row.label}>
                  <span>
                    {pair(
                      companyChartLabels[row.label] || row.label,
                      row.label,
                    )}
                  </span>
                  <div
                    className={
                      'company-bar-track' + (negativeMax ? ' signed' : '')
                    }
                    aria-hidden="true"
                    style={{ '--company-zero': `${zero}%` }}
                  >
                    <i
                      style={{
                        left: `${row.value < 0 ? zero - (Math.abs(row.value) / extent) * 100 : zero}%`,
                        width: `${(Math.abs(row.value) / extent) * 100}%`,
                      }}
                      className={row.value < 0 ? 'negative' : ''}
                    />
                  </div>
                  <strong>{row.display}</strong>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      <figcaption>
        <span>
          {block.captionZh
            ? pair(block.captionZh, block.caption)
            : block.caption}
        </span>{' '}
        <Citations ids={block.sources} />
        {meta && (
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
        )}
      </figcaption>
      <p className="company-chart-unit">
        {pair(
          '数值的单位、期间与统计范围见上方标题及说明。',
          'Units, reporting periods and scope follow the chart title and notes.',
        )}
      </p>
    </figure>
  )
}

export default function CompanyReportContent({ blocks = [] }) {
  const { pair } = useLanguage()
  return (
    <div className="company-report-text">
      {blocks.map((block, index) =>
        block.type === 'paragraph' ? (
          <p key={index}>
            {block.textZh ? (
              pair(block.textZh, block.text)
            ) : (
              <span lang="en">{block.text}</span>
            )}{' '}
            <Citations ids={block.sources} />
          </p>
        ) : block.type === 'chart' ? (
          <ReportChart block={block} key={block.id} />
        ) : null,
      )}
    </div>
  )
}
