import { lazy, Suspense } from 'react'
import { Link, useParams } from 'react-router'
import { sections } from '../data/content'
import useCountry from '../hooks/useCountry'
import useLanguage from '../hooks/useLanguage'
import ArticleList from '../components/articles/ArticleList'
import NotFoundPage from './NotFoundPage'
import ProviderTypesPage from './ProviderTypesPage'
import PedagogyCurriculumPage from '../components/country/PedagogyCurriculumPage'
import CountryEvidencePage from '../components/country/CountryEvidencePage'
import { companyNames, companyPresentation } from '../data/companyPresentation'
const CompanyDirectoryPage = lazy(() => import('./CompanyDirectoryPage'))
const JapanResearchPage = lazy(() => import('./JapanResearchPage'))
const JapanRegionsPage = lazy(() => import('./JapanRegionsPage'))
export default function CountrySectionPage() {
  const { sectionId } = useParams()
  const country = useCountry()
  const { pair } = useLanguage()
  const research = (content) => (
    <Suspense
      fallback={
        <p className="company-loading" role="status">
          {pair('正在载入研究资料…', 'Loading research…')}
        </p>
      }
    >
      {content}
    </Suspense>
  )
  if (country.slug === 'japan' && sectionId === 'overview')
    return research(<JapanResearchPage />)
  if (country.slug === 'japan' && sectionId === 'regions')
    return research(<JapanRegionsPage />)
  const section = sections.find((s) => s[0] === sectionId)
  if (!section) return <NotFoundPage />
  if (country.slug === 'japan' && sectionId === 'sector')
    return (
      <>
        {research(<JapanResearchPage sectionId="sector" />)}
        <CountryEvidencePage sectionId="sector" policyOnly />
      </>
    )
  if (
    country.slug === 'japan' &&
    ['types', 'operations', 'technology'].includes(
      sectionId,
    )
  )
    return (
      <>
        {research(<JapanResearchPage sectionId={sectionId} />)}
        {sectionId === 'types' && <ProviderTypesPage showPageHeading={false} />}
        {sectionId === 'operations' && <ArticleList operations />}
        {sectionId === 'technology' && (
          <details className="research-earlier-notes">
            <summary>
              {pair('原有研究笔记与来源', 'Earlier research notes and sources')}
            </summary>
            <CountryEvidencePage sectionId={sectionId} />
          </details>
        )}
      </>
    )
  if (sectionId === 'types') return <ProviderTypesPage />
  if (sectionId === 'companies' && country.slug === 'japan')
    return (
      <Suspense
        fallback={
          <p className="company-loading" role="status">
            {pair('正在载入企业目录…', 'Loading company directory…')}
          </p>
        }
      >
        <CompanyDirectoryPage />
      </Suspense>
    )
  if (sectionId === 'technology' && country.slug === 'japan')
    return (
      <>
        <CountryEvidencePage sectionId={sectionId} />
        <section className="country-topic-content company-page">
          <h2>
            {pair(
              '认识提供这些服务的企业',
              'Meet the companies behind the services',
            )}
          </h2>
          <div className="company-grid">
            {['codmon', 'unifa', 'sen', 'baby-job'].map((companyId) => (
              <Link
                className="company-directory-card"
                key={companyId}
                to={'/japan/companies/' + companyId}
              >
                <h3>{companyNames[companyId]}</h3>
                <p>{pair(...companyPresentation[companyId].summary)}</p>
                <span className="company-card-footer">
                  {pair('阅读企业档案', 'Read company profile')} →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </>
    )
  return (
    <>
      {sectionId === 'sector' ||
      sectionId === 'companies' ||
      sectionId === 'technology' ||
      (sectionId === 'operations' && country.slug === 'united-states') ? (
        <CountryEvidencePage sectionId={sectionId} />
      ) : sectionId === 'curriculum' ? (
        <PedagogyCurriculumPage />
      ) : sectionId === 'operations' && country.slug === 'japan' ? (
        <ArticleList operations />
      ) : (
        <section className="country-topic-content">
          <div className="topic-pending">
            <span className="eyebrow">IN PREPARATION</span>
            <h2>{pair('专题内容正在整理', 'This topic is in preparation')}</h2>
            <p>
              {pair(
                '当前可先从园所目录阅读基础档案中的教育方针与公开实践。完整专题将在资料核验后补充。',
                'Start with the directory to read educational policies and published practices in basic school profiles. Full topic content will follow source verification.',
              )}
            </p>
            <Link className="button primary" to={'/' + country.slug}>
              {pair('浏览本国园所', 'Browse this country’s schools')} ↗
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
