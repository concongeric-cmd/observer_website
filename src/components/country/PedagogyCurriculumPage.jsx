import { pedagogyCurriculum } from '../../data/pedagogyCurriculum'
import useCountry from '../../hooks/useCountry'
import useLanguage from '../../hooks/useLanguage'

export default function PedagogyCurriculumPage() {
  const country = useCountry()
  const { pair } = useLanguage()
  const content = pedagogyCurriculum[country.slug]

  if (!content) return null

  return (
    <section className="country-topic-content curriculum-content">
      <p className="topic-explanation curriculum-intro">
        {pair(...content.intro)}
      </p>

      <div className="curriculum-blocks">
        {content.blocks.map((block) => (
          <article className="curriculum-block" key={block.number}>
            <span className="curriculum-number">{block.number}</span>
            <div className="curriculum-block-body">
              <h2>{pair(...block.title)}</h2>
              <p>{pair(...block.text)}</p>
              {block.items && (
                <ul className="curriculum-domain-list">
                  {block.items.map((item) => (
                    <li key={item[1]}>{pair(...item)}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="curriculum-note">{pair(...content.note)}</p>

      <div className="curriculum-sources">
        <h2>{pair('原始指导资料', 'Primary guidance sources')}</h2>
        {content.sources.map((source) => (
          <a
            className="curriculum-source"
            href={source.url}
            target="_blank"
            rel="noreferrer"
            key={source.url}
          >
            <span>
              <small>{source.publisher}</small>
              <strong>{pair(...source.title)}</strong>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
