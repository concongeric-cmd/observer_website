import useLanguage from '../../hooks/useLanguage'

export default function MissingData({ compact = false }) {
  const { pair } = useLanguage()
  return (
    <span className={'missing-data' + (compact ? ' missing-data-compact' : '')}>
      <span className="missing-data-label">
        {pair('资料尚未收集', 'Information not yet collected')}
      </span>
      {!compact && (
        <span className="missing-data-detail">
          {pair('资料收集后将在此显示。', 'Details will appear here when added.')}
        </span>
      )}
    </span>
  )
}

export function MissingDataPanel({ title, className = '', children }) {
  const { pair } = useLanguage()
  return (
    <section className={'missing-data-panel ' + className}>
      <h2>{pair(...title)}</h2>
      {children || <MissingData />}
    </section>
  )
}
