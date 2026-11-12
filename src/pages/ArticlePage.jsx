import { Link, useParams } from 'react-router'
import { articles } from '../data/content'
import useLanguage from '../hooks/useLanguage'
import useCountry from '../hooks/useCountry'
import SourceLink from '../components/common/SourceLink'
import NotFoundPage from './NotFoundPage'

export default function ArticlePage() {
  const { pair } = useLanguage()
  const country = useCountry()
  const { articleId } = useParams()
  const article = articles.find((item) => item.id === articleId)
  if (!article || country.slug !== 'japan') return <NotFoundPage />
  return (
    <>
      <div className="breadcrumb">
        <Link to="/japan">{pair('日本幼教', 'Japan')}</Link>
        <span>/</span>
        <Link to="/japan/operations">
          {pair('经营与管理', 'Operations & management')}
        </Link>
      </div>
      <article className="reading-page">
        <header className="reading-header">
          <span className="eyebrow">OPERATIONS / FIELD NOTES</span>
          <div className="article-tags">
            {pair(...article.category)}
            <span>·</span>
            {pair(...article.kind)}
            <span>· {article.time} MIN</span>
          </div>
          <h1>{pair(...article.title)}</h1>
          <p className="reading-deck">{pair(...article.intro)}</p>
        </header>
        <div className="reading-layout">
          <aside className="reading-toc">
            <span className="eyebrow">IN THIS FEATURE</span>
            {article.blocks.map((b, i) => (
              <a
                key={i}
                href={'#block-' + i}
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById('block-' + i)
                    .scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <small>0{i + 1}</small>
                {pair(...b.title)}
              </a>
            ))}
            <Link to="/japan/operations" className="back-link">
              ← {pair('返回专题', 'Back to features')}
            </Link>
          </aside>
          <div className="reading-body">
            <div className="article-status">
              {pair(
                article.source
                  ? '来源解读与编辑建议 · 2026年11月12日'
                  : '编辑示例 · 尚无实施效果数据',
                article.source
                  ? 'Source interpretation & suggestions · 12 November 2026'
                  : 'Editorial example · no implementation outcomes available',
              )}
            </div>
            {article.blocks.map((b, i) => (
              <section id={'block-' + i} key={i}>
                <span className="eyebrow">0{i + 1}</span>
                <h2>{pair(...b.title)}</h2>
                <p>{pair(...b.text)}</p>
                {i === 1 && (
                  <div className="process-diagram">
                    {article.steps.map((s, j) => (
                      <div key={j}>
                        <span>0{j + 1}</span>
                        {pair(...s)}
                        {j < 3 && <b>→</b>}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
            <div className="article-sources">
              <h3>{pair('来源与边界', 'Sources & limitations')}</h3>
              {article.source ? (
                <SourceLink sourceId={article.source} />
              ) : (
                <p>
                  {pair(
                    '本内容为编辑制作的讨论框架，无外部实施案例或成效证据。',
                    'This editorial discussion framework has no external implementation or outcome evidence.',
                  )}
                </p>
              )}
              <p>
                {pair(
                  '具体做法需结合当地要求。',
                  'Adapt practices to applicable local requirements.',
                )}
              </p>
            </div>
            <Link className="button primary" to="/japan/operations">
              ← {pair('返回经营与管理', 'Back to operations')}
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
