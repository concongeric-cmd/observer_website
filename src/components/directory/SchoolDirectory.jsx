import { useSearchParams } from 'react-router'
import { filterSchools, schools } from '../../data/schools'
import useLanguage from '../../hooks/useLanguage'
import SchoolCard from './SchoolCard'
export default function SchoolDirectory({ country }) {
  const { pair, english } = useLanguage()
  const [params, setParams] = useSearchParams()
  const records = schools.filter((s) => s.country === country.slug)
  const filters = {
    query: params.get('q') || '',
    region: params.get('region') || 'all',
    approach: params.get('approach') || 'all',
  }
  const results = filterSchools(records, filters)
  const regions = [
    ...new Map(records.map((s) => [s.region, s.location])).entries(),
  ]
  const approaches = [
    ...new Map(records.map((s) => [s.approach, s.approachLabel])).entries(),
  ]
  const update = (key, value) =>
    setParams(
      (current) => {
        const next = new URLSearchParams(current)
        if (!value || value === 'all') next.delete(key)
        else next.set(key, value)
        return next
      },
      { replace: true },
    )
  return (
    <section className="directory-section" id="directory">
      <div className="section-heading">
        <div>
          <span className="eyebrow">EXPLORE THE SCHOOLS</span>
          <h2>{pair('园所目录', 'School directory')}</h2>
        </div>
        <span className="directory-count">
          {pair(
            results.length + ' / ' + records.length + ' 所样本园所',
            results.length + ' of ' + records.length + ' sample schools',
          )}
        </span>
      </div>
      <div className="directory-toolbar">
        <label className="directory-search">
          <span aria-hidden="true">⌕</span>
          <span className="sr-only">{pair('搜索园所', 'Search schools')}</span>
          <input
            aria-label={english ? 'Search schools' : '搜索园所'}
            placeholder={
              english
                ? 'Name, location or approach…'
                : '搜索名称、地区或教育理念…'
            }
            value={filters.query}
            onChange={(e) => update('q', e.target.value)}
          />
        </label>
        <label className="directory-select">
          {pair('地区', 'Region')}
          <select
            aria-label={english ? 'Region' : '地区'}
            value={filters.region}
            onChange={(e) => update('region', e.target.value)}
          >
            <option value="all">
              {english ? 'All regions / 全部地区' : '全部地区 / All regions'}
            </option>
            {regions.map(([id, label]) => (
              <option key={id} value={id}>
                {english ? label[1] : label[0]}
              </option>
            ))}
          </select>
        </label>
        <label className="directory-select">
          {pair('教育理念', 'Approach')}
          <select
            aria-label={english ? 'Approach' : '教育理念'}
            value={filters.approach}
            onChange={(e) => update('approach', e.target.value)}
          >
            <option value="all">
              {english
                ? 'All approaches / 全部理念'
                : '全部理念 / All approaches'}
            </option>
            {approaches.map(([id, label]) => (
              <option key={id} value={id}>
                {english ? label[1] : label[0]}
              </option>
            ))}
          </select>
        </label>
        <button className="directory-reset" onClick={() => setParams({})}>
          {pair('重置', 'Reset')} ↺
        </button>
      </div>
      <div className="school-grid" aria-live="polite">
        {results.map((s) => (
          <SchoolCard key={s.id} school={s} />
        ))}
      </div>
      {!results.length && (
        <div className="empty-state">
          {pair(
            '暂无匹配园所，请调整搜索或筛选。',
            'No matching schools. Adjust the search or filters.',
          )}
          <button onClick={() => setParams({})}>
            {pair('显示全部样本', 'Show all samples')}
          </button>
        </div>
      )}
      <p className="directory-disclaimer">
        {pair(
          '这是原型样本目录，并非全国完整名录或推荐排名。园所自述与独立评价分别标示，缺失信息不作估算。',
          'This sample directory is not a national census or ranking. School statements are identified separately from independent evaluation; missing information is not estimated.',
        )}
      </p>
    </section>
  )
}
