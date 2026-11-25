import useLanguage from '../../hooks/useLanguage'
import { ResearchSourceLinks } from './ResearchContent'

export default function ResearchChart({
  title,
  rows,
  unit,
  period,
  scope,
  sources,
  line = false,
  provisional = false,
  note,
}) {
  const { pair, english } = useLanguage()
  const label = (value) =>
    Array.isArray(value) ? value[english ? 1 : 0] : String(value)
  const values = rows
    .map((row) => row.value)
    .filter((value) => value !== null && Number.isFinite(value))
  const max = Math.max(...values, 1)
  const min = Math.min(...values, 0)
  const extent = max - min || 1
  const zero = (-min / extent) * 100
  const validRows = rows.filter(
    (row) => row.value !== null && Number.isFinite(row.value),
  )
  const xValue = (row, index) => row.year ?? index
  const xValues = validRows.map(xValue)
  const xMin = Math.min(...xValues)
  const xMax = Math.max(...xValues)
  const point = (row, index) => [
    70 + ((xValue(row, index) - xMin) / (xMax - xMin || 1)) * 650,
    245 - ((row.value - min) / extent) * 190,
  ]
  return (
    <figure className="research-data-chart">
      <h3>{pair(...title)}</h3>
      {line ? (
        <svg viewBox="0 0 800 300" role="img" aria-label={label(title)}>
          <title>{label(title)}</title>
          {[0, 0.5, 1].map((fraction) => (
            <g key={fraction}>
              <line
                x1="70"
                x2="750"
                y1={245 - fraction * 190}
                y2={245 - fraction * 190}
                stroke="#d9e0d5"
              />
              <text x="60" y={249 - fraction * 190} textAnchor="end">
                {Math.round(min + extent * fraction).toLocaleString('en-US')}
              </text>
            </g>
          ))}
          <polyline
            points={validRows
              .map((row, index) => point(row, index).join(','))
              .join(' ')}
            fill="none"
            stroke="#285d48"
            strokeWidth="3"
            strokeDasharray={note ? '7 5' : undefined}
          />
          {validRows.map((row, index) => {
            const [x, y] = point(row, index)
            return (
              <g key={index}>
                <circle cx={x} cy={y} r="5" fill="#285d48" />
                <text x={x} y={y - 14} textAnchor="middle">
                  {row.value.toLocaleString('en-US')}
                </text>
                <text x={x} y="277" textAnchor="middle">
                  {label(row.label)}
                </text>
              </g>
            )
          })}
        </svg>
      ) : (
        <ul className="research-bars">
          {rows.map((row, index) => (
            <li key={index}>
              <span>
                {Array.isArray(row.label) ? pair(...row.label) : row.label}
              </span>
              <div
                className="research-bar-track"
                aria-hidden="true"
                style={{ '--zero': `${zero}%` }}
              >
                {row.value !== null && Number.isFinite(row.value) && (
                  <i
                    className={row.value < 0 ? 'negative' : ''}
                    style={{
                      left: `${row.value < 0 ? zero - (Math.abs(row.value) / extent) * 100 : zero}%`,
                      width: `${(Math.abs(row.value) / extent) * 100}%`,
                    }}
                  />
                )}
              </div>
              <strong>
                {row.value === null
                  ? pair('未收集', 'Not collected')
                  : row.value.toLocaleString('en-US', {
                      maximumFractionDigits: 2,
                    })}
              </strong>
            </li>
          ))}
        </ul>
      )}
      <figcaption>
        <dl className="research-chart-meta">
          <div>
            <dt>{pair('单位', 'Units')}</dt>
            <dd>{pair(...unit)}</dd>
          </div>
          <div>
            <dt>{pair('统计期', 'Period')}</dt>
            <dd>{period}</dd>
          </div>
          <div>
            <dt>{pair('范围', 'Scope')}</dt>
            <dd>{pair(...scope)}</dd>
          </div>
        </dl>
        {provisional && (
          <p>
            {pair(
              '暂定值，后续可能修订。',
              'Provisional figures; revisions are possible.',
            )}
          </p>
        )}
        {note && <p>{pair(...note)}</p>}
        <ResearchSourceLinks ids={sources} />
      </figcaption>
    </figure>
  )
}
