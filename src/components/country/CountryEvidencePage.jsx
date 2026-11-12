import { countryResearch, researchSources } from '../../data/countryResearch'
import useCountry from '../../hooks/useCountry'
import useLanguage from '../../hooks/useLanguage'

function SourceList({ sources, pair }) {
  return (
    <div className="evidence-sources">
      {sources.map((source) => {
        const item =
          typeof source === 'string' ? researchSources[source] : source
        return (
          <a href={item.url} target="_blank" rel="noreferrer" key={item.url}>
            {pair(item.titleZh || item.title, item.titleEn || item.title)} ↗
          </a>
        )
      })}
    </div>
  )
}

export default function CountryEvidencePage({ sectionId }) {
  const country = useCountry()
  const { pair } = useLanguage()
  const section = countryResearch[country.slug]?.[sectionId]
  if (!section) return null

  if (sectionId === 'sector') {
    return (
      <section className="country-topic-content evidence-page">
        <p className="topic-explanation">{pair(...section.summary)}</p>
        <div className="evidence-rows">
          {section.blocks.map((block, index) => (
            <article className="evidence-row" key={block.title[1]}>
              <span className="evidence-index">0{index + 1}</span>
              <div>
                <h2>{pair(...block.title)}</h2>
                <p>{pair(...block.text)}</p>
                <SourceList sources={block.sources} pair={pair} />
              </div>
            </article>
          ))}
        </div>
        <p className="evidence-reviewed">
          {pair('来源复核日期', 'Sources reviewed')}: {section.reviewed}
        </p>
      </section>
    )
  }

  return (
    <section className="country-topic-content evidence-page">
      <p className="topic-explanation">{pair(...section.summary)}</p>
      <div className="evidence-rows">
        {section.profiles.map((profile, index) => (
          <article className="evidence-row evidence-profile" key={profile.name}>
            <span className="evidence-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <span className="eyebrow">{pair(...profile.label)}</span>
              <h2>{Array.isArray(profile.name) ? pair(...profile.name) : profile.name}</h2>
              <p>{pair(...profile.body)}</p>
              <SourceList
                sources={profile.sources.map((url, sourceIndex) => ({
                  url,
                  title: profile.sourceTitles[sourceIndex],
                }))}
                pair={pair}
              />
              <div className="evidence-maintenance">
                <strong>{pair('需持续更新', 'Keep current')}</strong>
                <p>{pair(...profile.update)}</p>
                <span>
                  {pair('来源核对', 'Source checked')}: {profile.checked}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      {section.note && (
        <p className="evidence-note">{pair(...section.note)}</p>
      )}
    </section>
  )
}
