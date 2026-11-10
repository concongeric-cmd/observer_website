import { Link } from 'react-router'
import { editorialPrinciples, infoPages } from '../data/infoPages'
import useLanguage from '../hooks/useLanguage'
import NotFoundPage from './NotFoundPage'

export default function InfoPage({ section }) {
  const { pair } = useLanguage()
  const page = infoPages[section]
  if (!page) return <NotFoundPage />
  return (
    <section className="info-page">
      <span className="eyebrow">THE OBSERVER / {page.eyebrow}</span>
      <h1>{pair(...page.title)}</h1>
      <p>{pair(...page.intro)}</p>
      {section === 'about' && (
        <div className="about-grid">
          {editorialPrinciples.map(([zh, en, bodyZh, bodyEn]) => (
            <div key={en}>
              <h3>{pair(zh, en)}</h3>
              <p>{pair(bodyZh, bodyEn)}</p>
            </div>
          ))}
        </div>
      )}
      <Link className="button primary" to={page.action.to}>
        {pair(...page.action.label)} ↗
      </Link>
      <div className="preview-scope">
        <h3>{pair('本次预览范围', 'Preview scope')}</h3>
        <p>{pair(...page.scope)}</p>
      </div>
    </section>
  )
}
