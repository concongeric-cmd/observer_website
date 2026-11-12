import { Link, useParams } from 'react-router'
import { sections } from '../data/content'
import useCountry from '../hooks/useCountry'
import useLanguage from '../hooks/useLanguage'
import ArticleList from '../components/articles/ArticleList'
import NotFoundPage from './NotFoundPage'
import ProviderTypesPage from './ProviderTypesPage'
import PedagogyCurriculumPage from '../components/country/PedagogyCurriculumPage'
import CountryEvidencePage from '../components/country/CountryEvidencePage'
export default function CountrySectionPage() {
  const { sectionId } = useParams()
  const country = useCountry()
  const { pair } = useLanguage()
  const section = sections.find((s) => s[0] === sectionId)
  if (!section) return <NotFoundPage />
  if (sectionId === 'types') return <ProviderTypesPage />
  return (
    <>
      <header className="country-topic-header">
        <span className="eyebrow">
          {country.code} / {section[2].toUpperCase()}
        </span>
        <h1>{pair(section[1], section[2])}</h1>
        <p>{pair(section[3], section[4])}</p>
      </header>
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
