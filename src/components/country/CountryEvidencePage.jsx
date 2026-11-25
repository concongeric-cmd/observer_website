import { Link } from 'react-router'
import { countryResearch, researchSources } from '../../data/countryResearch'
import { policyResources } from '../../data/policyResources'
import useCountry from '../../hooks/useCountry'
import useLanguage from '../../hooks/useLanguage'
import MissingData from '../common/MissingData'
import DetailModalCard from '../common/DetailModalCard'

function SourceList({ sources, pair }) {
  const availableSources = (sources || [])
    .map((source) => typeof source === 'string' ? researchSources[source] : source)
    .filter((source) => source?.url)
  return (
    <footer className="detail-modal-references">
      <h3>{pair('参考资料：', 'References:')}</h3>
      {availableSources.length ? (
        <div className="evidence-sources">
          {availableSources.map((item) => (
            <a href={item.url} target="_blank" rel="noreferrer" key={item.url}>
              {pair(item.titleZh || item.title, item.titleEn || item.title)} ↗
            </a>
          ))}
        </div>
      ) : <MissingData compact />}
    </footer>
  )
}

function PolicyResourcesSection({ resources, pair }) {
  if (!resources.length) return null
  return (
    <section className="evidence-policy">
      <div className="evidence-policy-heading">
        <span className="eyebrow">{pair('官方资料', 'OFFICIAL SOURCES')}</span>
        <h2>{pair('政策与数据入口', 'Policy and data sources')}</h2>
      </div>
      <div className="evidence-policy-grid">
        {resources.map((resource) => (
          <DetailModalCard
            className="evidence-policy-card"
            modalClassName="detail-modal-wide"
            key={resource.url}
            eyebrow={resource.publisher.includes(' / ')
              ? pair(...resource.publisher.split(' / '))
              : resource.publisher}
            title={pair(...resource.title)}
            summary={pair(...resource.note)}
          >
            <div className="detail-modal-reading">
              <p>{pair(...resource.note)}</p>
            </div>
            <footer className="detail-modal-references">
              <h3>{pair('参考资料：', 'References:')}</h3>
              <a className="detail-modal-source-link" href={resource.url} target="_blank" rel="noreferrer">
                {pair(...resource.title)}
              </a>
            </footer>
          </DetailModalCard>
        ))}
      </div>
    </section>
  )
}

export default function CountryEvidencePage({ sectionId, policyOnly = false }) {
  const country = useCountry()
  const { pair } = useLanguage()
  const section = countryResearch[country.slug]?.[sectionId] || {}

  if (sectionId === 'sector') {
    const resources = policyResources[country.slug] || []
    if (policyOnly) {
      return (
        <section className="country-topic-content evidence-page evidence-policy-only">
          <PolicyResourcesSection resources={resources} pair={pair} />
        </section>
      )
    }
    return (
      <section className="country-topic-content evidence-page evidence-sector">
        <header className="evidence-intro">
          <span className="eyebrow">{pair('行业概况', 'SECTOR SNAPSHOT')}</span>
          <p>{section.summary?.some(Boolean) ? pair(...section.summary) : <MissingData />}</p>
        </header>
        <div className="evidence-rows">
          {!section.blocks?.length && <MissingData />}
          {(section.blocks || []).map((block, index) => (
            <DetailModalCard
              className="evidence-row"
              modalClassName="detail-modal-wide"
              key={block.title?.[1] || index}
              eyebrow={pair('重点 ' + String(index + 1).padStart(2, '0'), 'KEY POINT ' + String(index + 1).padStart(2, '0'))}
              title={block.title?.some(Boolean) ? pair(...block.title) : <MissingData compact />}
              summary={block.text?.some(Boolean) ? pair(...block.text) : <MissingData />}
            >
              <div className="detail-modal-reading">
                <p>{block.text?.some(Boolean) ? pair(...block.text) : <MissingData />}</p>
              </div>
              <SourceList sources={block.sources} pair={pair} />
            </DetailModalCard>
          ))}
        </div>
        <p className="evidence-reviewed">
          {pair('来源复核日期', 'Sources reviewed')}: {section.reviewed || <MissingData compact />}
        </p>
        <PolicyResourcesSection resources={resources} pair={pair} />
        {country.slug === 'japan' && (
          <div className="evidence-report-link">
            <Link to="/japan/research">
              {pair('浏览完整研究主题', 'Browse the full research library')} →
            </Link>
          </div>
        )}
      </section>
    )
  }

  return (
      <section className="country-topic-content evidence-page evidence-profiles">
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
