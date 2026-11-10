import { Link, useParams } from 'react-router'
import { sections } from '../data/content'
import { policyResources } from '../data/policyResources'
import useCountry from '../hooks/useCountry'
import useLanguage from '../hooks/useLanguage'
import ArticleList from '../components/articles/ArticleList'
import NotFoundPage from './NotFoundPage'
import ProviderTypesPage from './ProviderTypesPage'
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
      {sectionId === 'sector' ? (
        <section className="country-topic-content">
          <p className="topic-explanation">
            {pair(
              '这里展示国家层面的制度与政策资料入口。具体园所自己的教育方针、服务与做法请进入园所档案查看。',
              'These resources concern country-level systems and policies. For an individual school’s educational policy, services and practices, open its school profile.',
            )}
          </p>
          <div className="policy-resource-grid">
            {policyResources[country.slug].map((resource) => (
              <a
                className="policy-resource"
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="eyebrow">{resource.publisher}</span>
                <h2>{pair(...resource.title)}</h2>
                <p>{pair(...resource.note)}</p>
                <span>{pair('查看资料入口', 'Open source gateway')} ↗</span>
              </a>
            ))}
          </div>
          <p className="directory-disclaimer">
            {pair(
              '此处为资料入口，不是完整政策库。尚未提供逐条政策解读或监管建议。',
              'These are source gateways, not a complete policy library. Detailed policy interpretation and regulatory guidance are not provided.',
            )}
          </p>
        </section>
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
