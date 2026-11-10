import { Link } from 'react-router'
import { getVerifiedProviderTypes } from '../../data/providerTypes'
import useLanguage from '../../hooks/useLanguage'
export default function ProviderClassification({ school }) {
  const { pair } = useLanguage()
  const types = getVerifiedProviderTypes(school)
  return (
    <div className="provider-evidence">
      <h3>{pair('机构类型与核验依据', 'Provider types & verification')}</h3>
      {types.length ? (
        types.map((type) => (
          <div className="provider-evidence-record" key={type.id}>
            <Link to={'/' + school.country + '/types#provider-' + type.id}>
              {pair(...type.label)} ↗
            </Link>
            <p>{pair(...type.source.evidence)}</p>
            <a href={type.source.url} target="_blank" rel="noreferrer">
              {type.source.title} ↗
            </a>
            <span>
              {pair('查看日期', 'Checked')}: {type.source.checkedAt}
              {type.source.asOf && (
                <>
                  {' '}
                  · {pair('资料基准日', 'Source reference date')}:{' '}
                  {type.source.asOf}
                </>
              )}
            </span>
          </div>
        ))
      ) : (
        <p>
          {pair(
            '正式机构类型尚未核实，因此不在类型组中收录。不根据园名、课程或建筑推断许可类别、所有权或营利性质。',
            'The formal provider type has not been verified, so this school is excluded from type groups. Names, curriculum and buildings do not establish licence category, ownership or profit status.',
          )}
        </p>
      )}
      <p className="provider-evidence-limit">
        {pair(
          '核验表示原始资料支持该分类，不代表已完成监管许可、认证或当前运营状态的全面审核。',
          'Verification means the original source supports this classification; it is not a full audit of licensing, accreditation or current operating status.',
        )}
      </p>
    </div>
  )
}
