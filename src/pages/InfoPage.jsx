import { editorialPrinciples, infoPages } from '../data/infoPages'
import useLanguage from '../hooks/useLanguage'
import NotFoundPage from './NotFoundPage'

export default function InfoPage({ section }) {
  const { pair } = useLanguage()
  const page = infoPages[section]
  if (!page) return <NotFoundPage />

  return (
    <article className="info-page about-page">
      <header className="about-intro">
        <span className="eyebrow">{page.eyebrow}</span>
        <h1>{pair(...page.title)}</h1>
        <p>{pair(...page.intro)}</p>
      </header>

      <div className="about-purpose-grid">
        {page.purpose.map((purpose) => (
          <section
            className={'about-purpose-card about-purpose-' + purpose.id}
            aria-labelledby={'about-' + purpose.id}
            key={purpose.id}
          >
            <span className="eyebrow">{pair(...purpose.label)}</span>
            <h2 id={'about-' + purpose.id}>{pair(...purpose.title)}</h2>
            <p>{pair(...purpose.body)}</p>
          </section>
        ))}
      </div>

      <section className="about-section about-collection" aria-labelledby="about-collection-title">
        <div className="about-section-heading">
          <h2 id="about-collection-title">{pair(...page.collectionTitle)}</h2>
          <p>{pair(...page.collectionIntro)}</p>
        </div>
        <div className="about-data-grid">
          {page.collection.map((item) => (
            <div className="about-data-card" key={item.title[1]}>
              <h3>{pair(...item.title)}</h3>
              <p>{pair(...item.body)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section about-process" aria-labelledby="about-process-title">
        <h2 id="about-process-title">{pair(...page.processTitle)}</h2>
        <ol className="about-process-list">
          {page.process.map((step, index) => (
            <li key={step.title[1]}>
              <span className="about-process-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{pair(...step.title)}</h3>
              <p>{pair(...step.body)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-section about-principles" id="editorial-principles" aria-labelledby="about-principles-title">
        <div className="about-section-heading">
          <h2 id="about-principles-title">{pair(...page.principlesTitle)}</h2>
          <p>{pair(...page.principlesIntro)}</p>
        </div>
        <div className="about-principles-list">
          {editorialPrinciples.map(([zh, en, bodyZh, bodyEn]) => (
            <div key={en}>
              <h3>{pair(zh, en)}</h3>
              <p>{pair(bodyZh, bodyEn)}</p>
            </div>
          ))}
        </div>
      </section>

    </article>
  )
}