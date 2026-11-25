import { getResearchFigureSeries } from '../../data/researchFigureSeries'

function DataTable({ columns, rows, caption }) {
  return (
    <div
      className="research-table-scroll"
      role="region"
      tabIndex={0}
      aria-label={caption}
    >
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={j}>{cell === '' ? '—' : cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TranslatedResearchFigure({ id }) {
  const data = getResearchFigureSeries(id)
  if (data.table)
    return (
      <DataTable
        {...data.table}
        caption="Main company roles · a blank is not proof of no related business"
      />
    )
  if (data.scatter) {
    const max =
      Math.max(
        ...data.scatter.flatMap((r) => [
          r.metrics.capacity,
          r.metrics.children,
        ]),
      ) * 1.05
    return (
      <div lang="en">
        <svg
          className="research-scatter"
          viewBox="0 0 800 460"
          role="img"
          aria-label="Prefecture capacity against usage; bubble area represents waiting children"
        >
          <title>Childcare capacity and usage across 47 prefectures</title>
          {[0, 0.25, 0.5, 0.75, 1].map((f) => (
            <g key={f}>
              <line
                x1="95"
                x2="755"
                y1={380 - f * 320}
                y2={380 - f * 320}
                stroke="#dce1d6"
              />
              <text x="85" y={385 - f * 320} textAnchor="end">
                {Math.round(max * f).toLocaleString('en-US')}
              </text>
              <text x={95 + f * 660} y="407" textAnchor="middle">
                {Math.round(max * f).toLocaleString('en-US')}
              </text>
            </g>
          ))}
          <line
            x1="95"
            x2="755"
            y1="380"
            y2="60"
            stroke="#95aa99"
            strokeDasharray="5 5"
          />
          {data.scatter.map((r) => (
            <circle
              key={r.id}
              cx={95 + (r.metrics.capacity / max) * 660}
              cy={380 - (r.metrics.children / max) * 320}
              r={Math.sqrt(r.metrics.waiting + 10) * 0.65}
              fill="#285d48"
              opacity=".65"
            >
              <title>{`${r.name[1]}: capacity ${r.metrics.capacity}; usage ${r.metrics.children}; waiting ${r.metrics.waiting}`}</title>
            </circle>
          ))}
          <text x="425" y="445" textAnchor="middle">
            Capacity · places
          </text>
          <text
            x="20"
            y="220"
            textAnchor="middle"
            transform="rotate(-90 20 220)"
          >
            Children using services · children
          </text>
        </svg>
      </div>
    )
  }
  return (
    <div className="research-translated-figure" lang="en">
      {data.groups.map((group, i) => {
        const values = group.rows.map((r) => r.value),
          min = Math.min(0, ...values),
          max = Math.max(1, ...values),
          extent = max - min,
          zero = (-min / extent) * 100
        const format = (row) =>
          row.display ??
          row.value.toLocaleString('en-US', { maximumFractionDigits: 2 })
        return (
          <section key={i}>
            <h4>
              {group.title || 'Published values'}{' '}
              <span className="research-small">· {group.unit}</span>
            </h4>
            {group.line ? (
              <svg viewBox="0 0 800 330" role="img" aria-label={group.title}>
                <title>{`${group.title} · ${group.unit}`}</title>
                {[0, 0.5, 1].map((f) => (
                  <g key={f}>
                    <line
                      x1="85"
                      x2="750"
                      y1={245 - f * 190}
                      y2={245 - f * 190}
                      stroke="#dce1d6"
                    />
                    <text x="75" y={249 - f * 190} textAnchor="end">
                      {Math.round(max * f).toLocaleString('en-US')}
                    </text>
                  </g>
                ))}
                <polyline
                  fill="none"
                  stroke="#285d48"
                  strokeWidth="3"
                  points={group.rows
                    .map(
                      (r, j) =>
                        `${85 + (j / (group.rows.length - 1 || 1)) * 650},${245 - (r.value / max) * 190}`,
                    )
                    .join(' ')}
                />
                {group.rows.map((r, j) => (
                  <g key={j}>
                    <circle
                      fill="#285d48"
                      r="4"
                      cx={85 + (j / (group.rows.length - 1 || 1)) * 650}
                      cy={245 - (r.value / max) * 190}
                    >
                      <title>{`${r.label}: ${format(r)}`}</title>
                    </circle>
                    <text
                      transform={`translate(${85 + (j / (group.rows.length - 1 || 1)) * 650} 270) rotate(-45)`}
                      textAnchor="end"
                    >
                      {r.label}
                    </text>
                  </g>
                ))}
              </svg>
            ) : (
              <ul className="research-bars">
                {group.rows.map((row, j) => (
                  <li key={j}>
                    <span>{row.label}</span>
                    <div
                      className="research-bar-track"
                      aria-hidden="true"
                      style={{ '--zero': `${zero}%` }}
                    >
                      <i
                        className={row.value < 0 ? 'negative' : ''}
                        style={{
                          left: `${row.value < 0 ? zero - (Math.abs(row.value) / extent) * 100 : zero}%`,
                          width: `${(Math.abs(row.value) / extent) * 100}%`,
                        }}
                      />
                    </div>
                    <strong>{format(row)}</strong>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )
      })}
    </div>
  )
}
