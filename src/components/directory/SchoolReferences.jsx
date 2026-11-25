import { Link } from 'react-router'
import { getVerifiedProviderTypes } from '../../data/providerTypes'
import useLanguage from '../../hooks/useLanguage'
import MissingData from '../common/MissingData'

function referenceKey(url) {
  // Treat a trailing slash as the same page, while retaining queries and fragments.
  try {
    const parsed = new URL(url)
    parsed.pathname = parsed.pathname.replace(/\/+$/, '') || '/'
    return parsed.href
  } catch {
    return url
  }
}

export default function SchoolReferences({ school }) {
  const { pair } = useLanguage()
  const types = getVerifiedProviderTypes(school)
  const references = new Map()

  for (const source of [
    ...(school.sources || []),
    ...(school.caseStudy?.sources || []),
  ]) {
    const key = referenceKey(source.url)
    const existing = references.get(key)
    if (existing) {
      if (source.language) existing.languages.add(source.language)
    } else {
      references.set(key, {
        ...source,
        languages: new Set(source.language ? [source.language] : []),
        classifications: [],
      })
    }
  }

  for (const type of types) {
    const key = referenceKey(type.source.url)
    if (!references.has(key)) {
      references.set(key, {
        ...type.source,
        languages: new Set(),
        classifications: [],
      })
    }
    references.get(key).classifications.push(type)
  }

  return (
    <div className="case-references">
      <h3>{pair('参考资料与分类依据', 'References & verification')}</h3>
      {references.size ? (
        <ul className="case-reference-list">
          {[...references.values()].map((source) => (
            <li key={source.url}>
              <a
                className="case-reference-title"
                href={source.url}
                target="_blank"
                rel="noreferrer"
              >
                {source.title} <span aria-hidden="true">↗</span>
              </a>
              {source.languages.size > 0 && (
                <p className="case-reference-meta">
                  {[...source.languages].join(' · ')}
                </p>
              )}
              {source.checkedAt && !source.classifications.length && (
                <p className="case-reference-meta">
                  {pair('查看日期', 'Checked')}: {source.checkedAt}
                </p>
              )}
              {source.classifications.map((type) => (
                <div className="case-reference-evidence" key={type.id}>
                  <Link
                    to={'/' + school.country + '/types#provider-' + type.id}
                  >
                    {pair(...type.label)} <span aria-hidden="true">↗</span>
                  </Link>
                  <p>{pair(...type.source.evidence)}</p>
                  <p className="case-reference-meta">
                    {pair('查看日期', 'Checked')}: {type.source.checkedAt}
                    {type.source.asOf && (
                      <>
                        {' '}
                        · {pair('资料基准日', 'Source reference date')}:{' '}
                        {type.source.asOf}
                      </>
                    )}
                  </p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <MissingData />
      )}
      <p className="case-reference-limit">
        {types.length
          ? pair(
              '核验表示原始资料支持该分类，不代表已完成监管许可、认证或当前运营状态的全面审核。',
              'Verification means the original source supports this classification; it is not a full audit of licensing, accreditation or current operating status.',
            )
          : pair(
              '正式机构类型尚未核实，因此不在类型组中收录。不根据园名、课程或建筑推断许可类别、所有权或营利性质。',
              'The formal provider type has not been verified, so this school is excluded from type groups. Names, curriculum and buildings do not establish licence category, ownership or profit status.',
            )}
      </p>
    </div>
  )
}
