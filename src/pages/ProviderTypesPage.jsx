import { Link } from 'react-router'
import { schools } from '../data/schools'
import {
  getSchoolsByProviderType,
  getVerifiedProviderTypes,
  providerTypes,
} from '../data/providerTypes'
import SchoolCard from '../components/directory/SchoolCard'
import useCountry from '../hooks/useCountry'
import useLanguage from '../hooks/useLanguage'
export default function ProviderTypesPage() {
  const country = useCountry()
  const { pair } = useLanguage()
  const types = providerTypes.filter((type) =>
    type.countries.includes(country.slug),
  )
  const unclassified = schools.filter(
    (school) =>
      school.country === country.slug &&
      !getVerifiedProviderTypes(school).length,
  )
  return (
    <div className="provider-types-page">
      <header className="country-topic-header">
        <span className="eyebrow">{country.code} / PROVIDER TYPES</span>
        <h1>{pair('机构类型', 'Provider Types')}</h1>
        <p>
          {pair(
            '从类型出发，探索目录中的具体园所。',
            'Explore actual schools in the directory by provider type.',
          )}
        </p>
      </header>
      <div className="provider-types-content">
        <p className="provider-types-note">
          {pair(
            '以下只展示有原始来源支持的分类。设施类别、组织关系与运营主体可以交叉，同一园所可出现在多个组中；数量仅指当前目录样本。',
            'Only classifications supported by original sources are shown. Facility category, university relationship and private status can overlap, so a school may appear in several groups. Counts refer only to current directory samples.',
          )}
        </p>
        <nav className="provider-type-index" aria-label="Provider type groups">
          {types.map((type) => (
            <a href={'#provider-' + type.id} key={type.id}>
              {pair(...type.label)}
              <span>
                {
                  getSchoolsByProviderType(schools, country.slug, type.id)
                    .length
                }
              </span>
            </a>
          ))}
        </nav>
        {types.map((type) => {
          const matching = getSchoolsByProviderType(
            schools,
            country.slug,
            type.id,
          )
          return (
            <section
              className="provider-type-group"
              id={'provider-' + type.id}
              key={type.id}
            >
              <div className="provider-type-heading">
                <div>
                  <span className="eyebrow">{pair(...type.dimension)}</span>
                  <h2>{pair(...type.label)}</h2>
                  <p>{pair(...type.description)}</p>
                </div>
                <span className="directory-count">
                  {pair(
                    matching.length + ' 所匹配园所',
                    matching.length + ' matching schools',
                  )}
                </span>
              </div>
              {matching.length ? (
                <div className="school-grid">
                  {matching.map((school) => (
                    <SchoolCard key={school.id} school={school} />
                  ))}
                </div>
              ) : (
                <p className="provider-types-note">
                  {pair(
                    '当前目录暂无已核实的匹配园所；这不代表该国没有此类园所。',
                    'No verified matching schools in this directory yet; this does not mean the type is absent from the country.',
                  )}
                </p>
              )}
            </section>
          )
        })}
        {unclassified.length > 0 && (
          <section className="provider-type-group">
            <div className="provider-type-heading">
              <div>
                <span className="eyebrow">CLASSIFICATION PENDING</span>
                <h2>
                  {pair('机构类型待核实', 'Provider type pending verification')}
                </h2>
                <p>
                  {pair(
                    '这些园所仍可浏览，但未计入上方类型组。不根据名称或教育理念推定正式设施类别。',
                    'These profiles remain available but are excluded from the classified groups above. Formal facility categories are not inferred from school names or educational approaches.',
                  )}
                </p>
              </div>
            </div>
            <div className="school-grid">
              {unclassified.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          </section>
        )}
        <Link className="text-link" to={'/' + country.slug}>
          {pair('浏览全部园所', 'Browse all schools')} →
        </Link>
      </div>
    </div>
  )
}
