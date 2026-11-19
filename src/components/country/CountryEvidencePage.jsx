import { countryResearch, researchSources } from '../../data/countryResearch'
import useCountry from '../../hooks/useCountry'
import useLanguage from '../../hooks/useLanguage'
import MissingData from '../common/MissingData'

function SourceList({ sources, pair }) {
  const availableSources = (sources || [])
    .map((source) => typeof source === 'string' ? researchSources[source] : source)
    .filter((source) => source?.url)
  if (!availableSources.length) return <MissingData compact />
  return (
    <div className="evidence-sources">
      {availableSources.map((item) => {
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
  const section = countryResearch[country.slug]?.[sectionId] || {}

  if (sectionId === 'sector') {
    return (
      <section className="country-topic-content evidence-page evidence-sector">
        <p className="topic-explanation">{section.summary?.some(Boolean) ? pair(...section.summary) : <MissingData compact />}</p>
        <div className="evidence-rows">
          {!section.blocks?.length && <MissingData />}
          {(section.blocks || []).map((block, index) => (
            <article className="evidence-row" key={block.title?.[1] || index}>
              <span className="evidence-index">0{index + 1}</span>
              <div>
                <h2>{block.title?.some(Boolean) ? pair(...block.title) : <MissingData compact />}</h2>
                <p>{block.text?.some(Boolean) ? pair(...block.text) : <MissingData />}</p>
                <SourceList sources={block.sources} pair={pair} />
              </div>
            </article>
          ))}
        </div>
        <p className="evidence-reviewed">
          {pair('来源复核日期', 'Sources reviewed')}: {section.reviewed || <MissingData compact />}
        </p>
      </section>
    )
  }

  return (
      <section className="country-topic-content evidence-page evidence-profiles">
      <p className="topic-explanation">{section.summary?.some(Boolean) ? pair(...section.summary) : <MissingData compact />}</p>
      <div className="evidence-rows">
        {!section.profiles?.length && <MissingData />}
        {(section.profiles || []).map((profile, index) => (
          <article className="evidence-row evidence-profile" key={profile.name}>
            <span className="evidence-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <span className="eyebrow">{profile.label?.some(Boolean) ? pair(...profile.label) : <MissingData compact />}</span>
              <h2>{Array.isArray(profile.name) ? pair(...profile.name) : profile.name || <MissingData compact />}</h2>
              <p>{profile.body?.some(Boolean) ? pair(...profile.body) : <MissingData />}</p>
              <SourceList
                sources={(profile.sources || []).map((url, sourceIndex) => ({
                  url,
                  title: profile.sourceTitles?.[sourceIndex] || url,
                }))}
                pair={pair}
              />
              <div className="evidence-maintenance">
                <strong>{pair('需持续更新', 'Keep current')}</strong>
                <p>{profile.update?.some(Boolean) ? pair(...profile.update) : <MissingData />}</p>
                <span>
                  {pair('来源核对', 'Source checked')}: {profile.checked || <MissingData compact />}
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
