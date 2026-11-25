import { Link, useLocation, useParams } from 'react-router'
import { japanCompanyReport as report } from '../data/japanCompanyReport'
import { companyPresentation, companyRoles } from '../data/companyPresentation'
import useLanguage from '../hooks/useLanguage'
import useCountry from '../hooks/useCountry'
import CompanyReportContent, {
  CompanySources,
} from '../components/companies/CompanyReportContent'
import NotFoundPage from './NotFoundPage'
import { bilingualCompanyBlocks } from '../data/companyBilingual'

export default function CompanyPage() {
  const { companyId } = useParams()
  const country = useCountry()
  const { search } = useLocation()
  const { pair } = useLanguage()
  const company = report.companies.find((item) => item.id === companyId)
  if (country.slug !== 'japan' || !company) return <NotFoundPage />
  const meta = companyPresentation[company.id]
  const finance = meta.finance
  const missing = pair(
    '报告未整理可比数据',
    'Comparable data not compiled in report',
  )
  return (
    <article className="company-page company-detail">
      <header className="company-detail-header">
        <Link className="company-back" to={'/japan/companies' + search}>
          ← {pair('返回企业目录', 'Back to company directory')}
        </Link>
        <div className="company-role-tags">
          {company.roles.map((id) => (
            <span key={id}>
              {pair(...companyRoles.find(([roleId]) => roleId === id).slice(1))}
            </span>
          ))}
        </div>
        <h1>{company.name}</h1>
        <p className="company-detail-deck">{pair(...meta.summary)}</p>
        <p className="company-muted">
          {pair('报告资料截止', 'Report research cutoff')}: {report.cutoff}
        </p>
      </header>
      <dl className="company-key-figures">
        <div>
          <dt>{pair('集团营收 · 百万日元', 'Group revenue · ¥ million')}</dt>
          <dd>{finance ? finance.revenue.toLocaleString('en-US') : missing}</dd>
        </div>
        <div>
          <dt>
            {pair(
              '集团营业利润 · 百万日元',
              'Group operating profit · ¥ million',
            )}
          </dt>
          <dd>
            {finance
              ? finance.operatingProfit.toLocaleString('en-US')
              : missing}
          </dd>
        </div>
        <div>
          <dt>{pair('报告期间', 'Reporting period')}</dt>
          <dd>{finance ? pair(...finance.period) : missing}</dd>
        </div>
        <div>
          <dt>{pair('统计范围', 'Basis of figures')}</dt>
          <dd>{finance ? pair(...finance.scope) : missing}</dd>
        </div>
      </dl>
      <div className="company-detail-grid">
        <div className="company-detail-main">
          <section aria-labelledby="company-report-heading">
            <span className="eyebrow">
              {pair('企业研究原文', 'COMPANY RESEARCH PROFILE')}
            </span>
            <h2 id="company-report-heading">
              {pair(meta.titleZh, company.title)}
            </h2>
            <CompanyReportContent
              blocks={bilingualCompanyBlocks(
                company.blocks,
                report.companies.indexOf(company) + 2,
              )}
            />
          </section>
          <CompanySources ids={company.sourceIds} open />
        </div>
        <aside className="company-sidebar" aria-label="Company essentials">
          <section>
            <h2>{pair('企业概况', 'Company essentials')}</h2>
            <dl>
              <div>
                <dt>{pair('国家', 'Country')}</dt>
                <dd>{pair('日本', 'Japan')}</dd>
              </div>
              <div>
                <dt>{pair('主要业务', 'Main role')}</dt>
                <dd>{pair(meta.roleZh, company.businessRole)}</dd>
              </div>
              <div>
                <dt>{pair('品牌与相关服务', 'Brands & related services')}</dt>
                <dd>{meta.brands.join(' · ')}</dd>
              </div>
              <div>
                <dt>
                  {pair('付款或签约方', 'Who pays or holds the contract')}
                </dt>
                <dd>{pair(meta.customersZh, company.customers)}</dd>
              </div>
            </dl>
          </section>
          <section>
            <h2>{pair('理解数据', 'Reading the figures')}</h2>
            <p>{pair(meta.noteZh, company.readingNote)}</p>
            <p>
              {pair(
                '财务及规模数据按原报告的期间和统计范围展示。',
                'Financial and scale figures retain the periods and scope used in the report.',
              )}
            </p>
          </section>
          <Link
            className="company-comparison-link"
            to="/japan/companies?view=compare"
          >
            {pair('比较企业角色', 'Compare company roles')} →
          </Link>
        </aside>
      </div>
    </article>
  )
}
