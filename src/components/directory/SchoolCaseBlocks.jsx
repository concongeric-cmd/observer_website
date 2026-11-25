import { Fragment } from 'react'
import useLanguage from '../../hooks/useLanguage'

// Shared content blocks keep case-study data editable without embedding HTML.
export default function SchoolCaseBlocks({ blocks = [] }) {
  const { pair, english } = useLanguage()
  return (
    <div className="case-study-blocks">
      {blocks.map((block, index) => (
        <Fragment key={index}>
          {block.type === 'paragraph' && (
            <p className={block.note ? 'case-reference-meta' : undefined}>
              {pair(...block.text)}
            </p>
          )}
          {block.type === 'heading' && <h3>{pair(...block.text)}</h3>}
          {block.type === 'cards' && (
            <div className="case-card-grid">
              {block.items.map((item, itemIndex) => (
                <article className="case-card" key={itemIndex}>
                  <h3>{pair(...item.title)}</h3>
                  <SchoolCaseBlocks blocks={item.blocks} />
                </article>
              ))}
            </div>
          )}
          {block.type === 'callout' && (
            <div className="case-callout">
              <SchoolCaseBlocks blocks={block.blocks} />
            </div>
          )}
          {block.type === 'flow' && (
            <ol className="case-flow">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <h3>{pair(...item.title)}</h3>
                  <p>{pair(...item.text)}</p>
                </li>
              ))}
            </ol>
          )}
          {block.type === 'table' && (
            <div
              className="case-table-wrap case-study-table"
              tabIndex={0}
              role="region"
              aria-label={block.columns
                .map((column) => column[english ? 1 : 0])
                .join(', ')}
            >
              <table>
                <thead>
                  <tr>
                    {block.columns.map((column, columnIndex) => (
                      <th scope="col" key={columnIndex}>
                        {pair(...column)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) =>
                        cellIndex === 0 ? (
                          <th scope="row" key={cellIndex}>
                            {pair(...cell)}
                          </th>
                        ) : (
                          <td key={cellIndex}>{pair(...cell)}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {block.type === 'interestChart' && (
            <div className="case-card case-interest">
              <h3>{pair(...block.title)}</h3>
              <p className="case-reference-meta">{pair(...block.notes[0])}</p>
              <div
                className="case-table-wrap"
                tabIndex={0}
                role="region"
                aria-label={block.title[english ? 1 : 0]}
              >
                <table>
                  <thead>
                    <tr>
                      <th scope="col">{pair('入园类别', 'Entry group')}</th>
                      <th scope="col">
                        {pair('第一志愿人数', 'First-choice interest')}
                      </th>
                      <th scope="col">
                        {pair('一般募集名额', 'General places')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <th scope="row">{pair(...row.label)}</th>
                        <td>
                          <div className="case-interest-bar" aria-hidden="true">
                            <span
                              style={{
                                width: `${(row.interest / Math.max(...block.rows.map((entry) => entry.interest), 1)) * 100}%`,
                              }}
                            />
                          </div>
                          <strong>{row.interest}</strong>
                        </td>
                        <td>
                          <strong>{row.places}</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {block.notes.slice(1).map((note, noteIndex) => (
                <p className="case-reference-meta" key={noteIndex}>
                  {pair(...note)}
                </p>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
