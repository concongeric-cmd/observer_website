import { sources } from '../../data/content'
export default function SourceLink({ sourceId }) {
  const source = sources[sourceId]
  return (
    <a
      className="source-link"
      href={source.url}
      target="_blank"
      rel="noreferrer"
    >
      {source.name} · {source.title} ↗
    </a>
  )
}
