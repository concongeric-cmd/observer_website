import { Link, useSearchParams } from 'react-router'
import { japanCompanyReport as report } from '../data/japanCompanyReport'
import {
  companyPresentation,
  companyRoles,
  reportContextTitles,
} from '../data/companyPresentation'
import useLanguage from '../hooks/useLanguage'
import CompanyReportContent, {
  CompanySources,
} from '../components/companies/CompanyReportContent'
import { countryResearch } from '../data/countryResearch'
import { bilingualCompanyBlocks } from '../data/companyBilingual'

export default function CompanyDirectoryPage() {
  const { pair, text } = useLanguage()
  const [params, setParams] = useSearchParams()
  const query = params.get('q') || ''
  const role = companyRoles.some(([id]) => id === params.get('role'))
    ? params.get('role')
    : 'all'
  const comparing = params.get('view') === 'compare'
  const update = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }
  const companies = report.companies.filter((company) => {
    const meta = companyPresentation[company.id]
    const search = [
      company.name,
      company.title,
      company.businessRole,
      company.customers,
      meta.titleZh,
      meta.roleZh,
      meta.customersZh,
      meta.noteZh,
      ...meta.summary,
      ...meta.brands,
      ...company.roles.flatMap((id) =>
        companyRoles.find(([roleId]) => roleId === id).slice(1),
      ),
    ]
      .join(' ')
      .toLocaleLowerCase()
    return (
      (role === 'all' || company.roles.includes(role)) &&
      search.includes(query.trim().toLocaleLowerCase())
    )
  })
  const comparison = report.context.find((section) => section.number === 18)
  const matrix = comparison.blocks.find((block) => block.type === 'matrix')

  return (
    <div className="country-topic-content company-page company-profiles">
      <div className="company-directory-intro">
        <div>
          <span className="eyebrow">JAPAN · COMPANY REPORT</span>
          <h2>
            {pair('认识日本幼教企业', 'Meet Japan’s early childhood companies')}
          </h2>
          <p>
            {pair(
              '了解谁运营园所、谁提供软件、教材和空间，以及这些企业如何服务家庭与学校。',
              'Explore who runs centres, who supplies software, materials and spaces, and how their businesses serve schools and families.',
            )}
          </p>
        </div>
        <p className="company-date">
          {pair('报告资料截止', 'Report research cutoff')}
          <strong>{report.cutoff}</strong>
          {pair(
            '15家主要企业 · 另附相关机构',
            '15 main companies · related organisations included',
          )}
        </p>
      </div>
      <div className="company-filters">
        <label className="company-search">
          {pair('搜索企业、品牌或服务', 'Search companies, brands or services')}
          <input
            type="search"
            value={query}
            onChange={(event) => update('q', event.target.value)}
            placeholder="CoDMON, childcare, Lookmee…"
          />
        </label>
        <label>
          {pair('主要业务', 'Main role')}
          <select
            value={role}
            onChange={(event) => update('role', event.target.value)}
          >
            <option value="all">{text('全部业务', 'All roles')}</option>
            {companyRoles.map(([id, zh, en]) => (
              <option value={id} key={id}>
                {text(zh, en)}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="company-reset"
          onClick={() =>
            setParams(comparing ? { view: 'compare' } : {}, { replace: true })
          }
        >
          {pair('重置', 'Reset')} ↺
        </button>
      </div>
      <div className="company-results-toolbar">
        <p role="status" aria-live="polite">
          {pair(
            `显示 ${companies.length} / 15 家企业`,
            `${companies.length} of 15 companies`,
          )}
        </p>
        <div
          className="company-view-switch"
          role="group"
          aria-label="Company display"
        >
          <button
            type="button"
            aria-pressed={!comparing}
            onClick={() => update('view', '')}
          >
            {pair('企业目录', 'Directory')}
          </button>
          <button
            type="button"
            aria-pressed={comparing}
            onClick={() => update('view', 'compare')}
          >
            {pair('比较业务', 'Compare roles')}
          </button>
        </div>
      </div>
      {!companies.length ? (
        <div className="company-empty">
          <h3>{pair('没有符合条件的企业', 'No matching companies')}</h3>
          <p>
            {pair(
              '尝试其他关键词，或重置筛选。',
              'Try another search or reset the filters.',
            )}
          </p>
        </div>
      ) : !comparing ? (
        <div className="company-grid">
          {companies.map((company) => {
            const meta = companyPresentation[company.id]
            return (
              <Link
                className="company-directory-card"
                key={company.id}
                to={{
                  pathname: '/japan/companies/' + company.id,
                  search: params.toString(),
                }}
              >
                <div className="company-role-tags">
                  {company.roles.map((id) => (
                    <span key={id}>
                      {pair(
                        ...companyRoles
                          .find(([roleId]) => roleId === id)
                          .slice(1),
                      )}
                    </span>
                  ))}
                </div>
                <h3>{company.name}</h3>
                <p>{pair(...meta.summary)}</p>
                <p className="company-brands">{meta.brands.join(' · ')}</p>
                <span className="company-card-footer">
                  {pair('阅读企业档案', 'Read company profile')}{' '}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            )
          })}
        </div>
      ) : (
        <>
          <div className="company-comparison">
            <h3>{pair('15家企业的主要角色', matrix.title)}</h3>
            <p>
              {pair(
                '圆点表示报告归纳的主要业务，空白不表示企业没有其他业务。',
                'Dots mark the report’s main-role classifications. Blank cells allow for other activities.',
              )}
            </p>
            <div
              className="company-table-scroll"
              tabIndex={0}
              role="region"
              aria-label="Company role matrix"
            >
              <table>
                <thead>
                  <tr>
                    <th scope="col">{pair('企业', 'Company')}</th>
                    {companyRoles.map(([id, zh], index) => (
                      <th scope="col" key={id}>
                        {pair(zh, matrix.columns[index + 1])}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => (
                    <tr key={company.id}>
                      <th scope="row">
                        <Link
                          to={{
                            pathname: '/japan/companies/' + company.id,
                            search: params.toString(),
                          }}
                        >
                          {company.name}
                        </Link>
                      </th>
                      {companyRoles.map(([id]) => (
                        <td key={id}>
                          <span
                            aria-label={
                              company.roles.includes(id)
                                ? 'Main role'
                                : 'Not classified as a main role'
                            }
                          >
                            {company.roles.includes(id) ? '●' : '—'}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="company-muted">
              {pair(
                '圆点表示报告归纳的主要角色；空白不表示没有任何相关业务。这些分类不是市场份额或质量评分。作者依据J27至J41进行分类。',
                matrix.caption,
              )}{' '}
              {matrix.sources.map((id) => (
                <a
                  className="company-citation"
                  href={'#company-source-' + id}
                  key={id}
                >
                  [{id}]
                </a>
              ))}
            </p>
          </div>
          <div className="company-comparison company-scope-card">
            <h3>
              {pair('服务对象与数据口径', 'Customers and scope of figures')}
            </h3>
            <div
              className="company-table-scroll"
              tabIndex={0}
              role="region"
              aria-label="Company services and data scope"
            >
              <table>
                <thead>
                  <tr>
                    {[
                      ['企业', 'Company'],
                      ['报告中的主要业务', 'Main role in this study'],
                      ['付款或签约方', 'Who pays or holds the contract'],
                      ['阅读数据时注意', 'A figure that can be misread'],
                    ].map((label) => (
                      <th scope="col" key={label[1]}>
                        {pair(...label)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => {
                    const meta = companyPresentation[company.id]
                    return (
                      <tr key={company.id}>
                        <th scope="row">{company.name}</th>
                        <td>{pair(meta.roleZh, company.businessRole)}</td>
                        <td>{pair(meta.customersZh, company.customers)}</td>
                        <td>{pair(meta.noteZh, company.readingNote)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      <section className="company-context">
        <h2>{pair('阅读这份报告', 'Reading the report')}</h2>
        <p>
          {pair(
            '公司研究原文提供中英文，保留各自的统计期、口径与来源说明。',
            'The company research is available in Chinese and English, retaining reporting periods, definitions and source notes.',
          )}
        </p>
        {report.context
          .filter((section) => section.number !== 18)
          .map((section) => (
            <details
              key={section.number}
              id={'report-context-' + section.number}
            >
              <summary>{pair(...reportContextTitles[section.number])}</summary>
              <CompanyReportContent
                blocks={bilingualCompanyBlocks(section.blocks, section.number)}
              />
            </details>
          ))}
        <details>
          <summary>
            {pair('原有研究笔记与来源', 'Earlier research notes & sources')}
          </summary>
          <p>{pair(...countryResearch.japan.companies.summary)}</p>
          {countryResearch.japan.companies.profiles.map((profile) => (
            <div key={profile.name[1]}>
              <h3>{pair(...profile.name)}</h3>
              <p>{pair(...profile.body)}</p>
              <p>
                {pair('来源查阅日期', 'Sources checked')}: {profile.checked}
              </p>
              <ul>
                {profile.sources.map((url, index) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noreferrer">
                      {profile.sourceTitles[index]} ↗
                    </a>
                  </li>
                ))}
              </ul>
              <p>{pair(...profile.update)}</p>
            </div>
          ))}
          <p>{pair(...countryResearch.japan.companies.note)}</p>
        </details>
      </section>
      <CompanySources />
    </div>
  )
}
