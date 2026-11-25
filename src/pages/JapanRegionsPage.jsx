import { Link, useParams, useSearchParams } from 'react-router'
import { japanResearchReport as report } from '../data/japanResearchReport'
import {
  regionMetricLabels,
  regionalGroups,
} from '../data/japanResearchPresentation'
import { schools } from '../data/schools'
import useLanguage from '../hooks/useLanguage'
import ResearchNavigation from '../components/research/ResearchNavigation'
import ResearchChart from '../components/research/ResearchChart'
import {
  ResearchBlocks,
  ResearchSources,
  ResearchSourceLinks,
  OriginalLanguageNotice,
} from '../components/research/ResearchContent'
import NotFoundPage from './NotFoundPage'

const format = (value) =>
  value === null
    ? '—'
    : value.toLocaleString('en-US', { maximumFractionDigits: 2 })

export default function JapanRegionsPage() {
  const { regionId, countrySlug } = useParams()
  const { pair, text } = useLanguage()
  const [params, setParams] = useSearchParams()
  const query = params.get('q') || ''
  const group = params.get('group') || 'all'
  const sort = [
    'capacity',
    'children',
    'waiting',
    'utilisation',
    'waitingChange',
  ].includes(params.get('sort'))
    ? params.get('sort')
    : 'capacity'
  const regions = report.regions
    .filter(
      (region) =>
        (group === 'all' ||
          !regionalGroups[Number(group)] ||
          String(region.group) === group) &&
        region.name
          .join(' ')
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    )
    .sort((a, b) => b.metrics[sort] - a.metrics[sort])
  const update = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }
  if (countrySlug !== 'japan') return <NotFoundPage />
  const scope = [
    '报告将另列的指定都市、中核市归回都道府县。保育所等集合；不是所有幼教设施。',
    'The report adds separately listed designated/core cities back to their prefectures. Defined childcare services, not all early-education facilities.',
  ]
  const note = [
    '容量差额不等于空位；等待人数、使用人数与充足率是不同指标。',
    'Capacity differences are not vacancies. Waiting counts, usage and utilisation are distinct measures.',
  ]
  if (regionId) {
    const region = report.regions.find((item) => item.id === regionId)
    if (!region) return <NotFoundPage />
    const topic = report.topics.find((item) => item.id === region.topicId)
    const relatedSchools = schools.filter(
      (school) => school.country === 'japan' && school.region === region.id,
    )
    return (
      <article className="research-page">
        <ResearchNavigation />
        <Link
          className="research-back"
          to={'/japan/regions' + (params.size ? '?' + params : '')}
        >
          ← {pair('返回地区表', 'Back to regional data')}
        </Link>
        <header>
          <span className="eyebrow">JAPAN · REGIONAL STATISTICS</span>
          <h1>{pair(...region.name)}</h1>
          <p>
            {pair(...regionalGroups[region.group])} · {region.asOf} ·{' '}
            {pair('暂定统计', 'Provisional statistics')}
          </p>
          <p>{pair(...scope)}</p>
        </header>
        <dl className="research-metrics">
          {Object.entries(region.metrics).map(([key, value]) => (
            <div key={key}>
              <dt>
                {pair(...regionMetricLabels[key])}
                {key === 'previousWaiting'
                  ? ' (2025-04-01)'
                  : key === 'waitingChange'
                    ? ' (2025?2026)'
                    : ''}
                {['capacity', 'capacityDifference'].includes(key)
                  ? pair(' ? \u540d\u989d', ' ? places')
                  : key === 'utilisation'
                    ? ' · %'
                    : key === 'facilities'
                      ? pair(' · 所', ' · sites')
                      : pair(' · 人或名额', ' · children / places')}
              </dt>
              <dd>{format(value)}</dd>
            </div>
          ))}
        </dl>
        <p className="research-small">
          {pair(
            '充足率和容量差额由报告计算。所有数字按2026年4月1日口径。',
            'Utilisation and capacity differences are calculated by the report. Current figures are as of 1 April 2026; previous waiting counts are as of 1 April 2025, and change compares those dates.',
          )}{' '}
          <ResearchSourceLinks ids={['J01']} />
        </p>
        <div className="research-chart-grid">
          <ResearchChart
            title={['定员与实际利用', 'Capacity and actual usage']}
            rows={[
              { label: ['定员', 'Capacity'], value: region.metrics.capacity },
              {
                label: ['利用儿童', 'Children using services'],
                value: region.metrics.children,
              },
            ]}
            unit={['名额、儿童', 'Places, children']}
            period={region.asOf}
            scope={scope}
            sources={['J01']}
            provisional
            note={note}
          />
          <ResearchChart
            title={[
              '官方等待儿童：两个年度',
              'Official waiting children across two years',
            ]}
            rows={[
              {
                label: '2025-04-01',
                year: 2025,
                value: region.metrics.previousWaiting,
              },
              {
                label: '2026-04-01',
                year: 2026,
                value: region.metrics.waiting,
              },
            ]}
            unit={['儿童', 'Children']}
            period="2025-04-01 / 2026-04-01"
            scope={[
              '同一定义的等待指标；不据此推算其他上年数据。',
              'Comparable waiting-child series; other previous-year measures are not inferred.',
            ]}
            sources={['J01']}
            line
            provisional
          />
        </div>
        <h2>{pair('地区说明与适用范围', 'Regional context and scope')}</h2>
        <OriginalLanguageNotice />
        <ResearchBlocks
          blocks={topic.blocks.filter((block) => block.type !== 'table')}
        />
        <section className="research-editorial">
          <h2>
            {pair('本地区的目录样本', 'Directory samples in this prefecture')}
          </h2>
          {relatedSchools.length ? (
            relatedSchools.map((school) => (
              <p key={school.id}>
                <Link to={'/japan/centres/' + school.id}>
                  {pair(...school.name)} →
                </Link>
              </p>
            ))
          ) : (
            <p>
              {pair(
                '当前学校目录尚未收录本地区样本。这不是地区园所数量。',
                'No school samples from this prefecture are collected in the current directory. This does not describe the prefecture’s school count.',
              )}
            </p>
          )}
        </section>
        <section className="research-gaps">
          <h2>{pair('仍需补充的资料', 'Further research needed')}</h2>
          <ul>
            <li>
              {pair(
                '市区町村与年龄分组的实际供需。',
                'Municipality-level and age-specific provision and demand.',
              )}
            </li>
            <li>
              {pair(
                '当前地方费用、资格和申请流程。',
                'Current local fees, eligibility and application procedures.',
              )}
            </li>
            <li>
              {pair(
                '具体园所的人员、开放时间与监管记录。',
                'Individual-centre staffing, opening hours and oversight records.',
              )}
            </li>
          </ul>
        </section>
        <ResearchSources ids={topic.sourceIds} />
      </article>
    )
  }
  const unit =
    sort === 'utilisation'
      ? ['%', '%']
      : sort === 'capacity'
        ? ['名额', 'Places']
        : ['儿童', 'Children']
  return (
    <div className="research-page">
      <header>
        <span className="eyebrow">JAPAN · 47 PREFECTURES</span>
        <h1>
          {pair(
            '探索日本的地区供给',
            'Explore provision across Japan’s prefectures',
          )}
        </h1>
        <p>
          {pair(
            '按地区查看保育服务设施、容量、实际利用和官方等待人数。',
            'Explore childcare facilities, capacity, actual usage and official waiting children by prefecture.',
          )}
        </p>
        <p className="research-small">
          2026-04-01 ·{' '}
          {pair(
            '暂定数据 · 报告核对基准日2026-10-21',
            'Provisional data · report cutoff 2026-10-21',
          )}
        </p>
      </header>
      <ResearchNavigation />
      <p>
        {pair(...scope)} <ResearchSourceLinks ids={['J01']} />
      </p>
      <div className="research-filters">
        <label>
          {pair('搜索都道府县', 'Search prefectures')}
          <input
            type="search"
            value={query}
            onChange={(event) => update('q', event.target.value)}
          />
        </label>
        <label>
          {pair('地理分组', 'Geographic group')}
          <select
            value={
              group === 'all' || regionalGroups[Number(group)] ? group : 'all'
            }
            onChange={(event) => update('group', event.target.value)}
          >
            <option value="all">{text('全部地区', 'All regions')}</option>
            {regionalGroups.map(([zh, en], index) => (
              <option value={index} key={en}>
                {text(zh, en)}
              </option>
            ))}
          </select>
        </label>
        <label>
          {pair('排序与图表指标', 'Sort and chart measure')}
          <select
            value={sort}
            onChange={(event) => update('sort', event.target.value)}
          >
            {[
              'capacity',
              'children',
              'waiting',
              'utilisation',
              'waitingChange',
            ].map((key) => (
              <option key={key} value={key}>
                {text(...regionMetricLabels[key])}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={() => setParams({})}>
          {pair('重置', 'Reset')}
        </button>
      </div>
      <p role="status">
        {pair(
          `显示${regions.length} / 47个地区`,
          `${regions.length} of 47 prefectures`,
        )}
      </p>
      {regions.length > 0 && (
        <ResearchChart
          title={[
            '当前筛选中数值较高的地区（最多10个）',
            'Highest values in the current selection (up to 10)',
          ]}
          rows={regions.slice(0, 10).map((region) => ({
            label: region.name,
            value: region.metrics[sort],
          }))}
          unit={unit}
          period="2026-04-01"
          scope={[
            regionMetricLabels[sort][0] + '；' + scope[0],
            regionMetricLabels[sort][1] + '; ' + scope[1],
          ]}
          sources={['J01']}
          provisional
          note={note}
        />
      )}
      <div
        className="research-table-scroll"
        role="region"
        tabIndex={0}
        aria-label="Prefecture statistics"
      >
        <table className="research-region-table">
          <caption>
            {pair(
              '47都道府县保育供给 · 2026年4月1日 · 暂定；单位见列标题。',
              'Childcare provision in 47 prefectures · 1 April 2026 · provisional; units follow column headings.',
            )}
          </caption>
          <thead>
            <tr>
              <th scope="col">{pair('地区', 'Prefecture')}</th>
              {[
                'facilities',
                'capacity',
                'children',
                'utilisation',
                'waiting',
                'previousWaiting',
                'waitingChange',
              ].map((key) => (
                <th scope="col" key={key}>
                  {pair(...regionMetricLabels[key])}
                  {key === 'previousWaiting'
                    ? ' (2025-04-01)'
                    : key === 'waitingChange'
                      ? ' (2025?2026)'
                      : ''}
                  <small>
                    {key === 'utilisation'
                      ? '%'
                      : key === 'facilities'
                        ? pair('所', 'sites')
                        : key === 'capacity'
                          ? pair('名额', 'places')
                          : pair('儿童', 'children')}
                  </small>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {regions.map((region) => (
              <tr key={region.id}>
                <th scope="row">
                  <Link
                    to={
                      '/japan/regions/' +
                      region.id +
                      (params.size ? '?' + params : '')
                    }
                  >
                    {pair(...region.name)} ↗
                  </Link>
                </th>
                {[
                  'facilities',
                  'capacity',
                  'children',
                  'utilisation',
                  'waiting',
                  'previousWaiting',
                  'waitingChange',
                ].map((key) => (
                  <td key={key}>{format(region.metrics[key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!regions.length && (
        <p>{pair('没有符合条件的地区。', 'No matching prefectures.')}</p>
      )}
      <p className="research-small">
        {pair(
          '充足率为利用儿童÷定员，由报告计算；三重划入近畿。',
          'Utilisation is calculated by the report as children using services divided by capacity. Mie is grouped with Kinki.',
        )}
      </p>
      <details>
        <summary>
          {pair(
            '阅读重建方法和数据限制',
            'Read the reconstruction method and limitations',
          )}
        </summary>
        <OriginalLanguageNotice />
        <ResearchBlocks
          blocks={
            report.topics.find((topic) => topic.id === 'volume-8-s1').blocks
          }
        />
      </details>
      <ResearchSources ids={['J01']} />
    </div>
  )
}
