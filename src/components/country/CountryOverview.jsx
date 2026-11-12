import { Link } from 'react-router'
import { sections } from '../../data/content'
import useLanguage from '../../hooks/useLanguage'

const overviewData = {
  japan: {
    sourceUrl: 'https://www.cfa.go.jp/policies/hoiku/torimatome/r8/',
    sourceTitle: ['令和8年 保育所等相关状况', 'Childcare provision, April 2026'],
    sourceDate: ['基准日期：2026年4月1日', 'Reference date: 1 April 2026'],
    scope: [
      '统计范围为日本“保育所等”利用定员与利用儿童，包含政策说明中列明的保育设施及部分认定こども园、地域型保育服务；不代表全部幼儿教育机构。2026年数据为暂定值，熊本县数据仍待确定。',
      'The figures cover capacity and children using Japan’s defined “childcare facilities, etc.” categories, including specified childcare centres, certified centres and community-based services. They do not represent every early education institution. The 2026 figures are provisional while Kumamoto Prefecture data are finalized.',
    ],
    metrics: [
      { label: ['利用定员', 'Places available'], value: '3,016,417' },
      { label: ['利用儿童', 'Children using provision'], value: '2,646,756' },
      { label: ['待机儿童', 'Children on waiting lists'], value: '2,435' },
    ],
    chartTitle: ['定员与利用儿童', 'Capacity and children using provision'],
    chartUnit: ['人', 'children'],
    bars: [
      { label: ['利用定员', 'Available capacity'], value: 3016417 },
      { label: ['利用儿童', 'Children using provision'], value: 2646756 },
    ],
    occupancy: '87.7%',
    chartNote: [
      '定员充足率为利用儿童数除以利用定员；较上一年下降0.7个百分点。待机儿童较上一年增加181人。',
      'Utilisation is children using provision divided by capacity; it fell 0.7 percentage points from the prior year. Waiting lists increased by 181 children.',
    ],
  },
  'united-states': {
    sourceUrl: 'https://nces.ed.gov/programs/coe/indicator/cfa/enrollment-of-young-children?tid=4',
    sourceTitle: ['NCES：幼儿入学率', 'NCES: School enrollment rates of young children'],
    sourceDate: ['数据年份：2022年；报告更新：2024年5月', 'Data year: 2022; report updated May 2024'],
    scope: [
      '数据来自美国社区调查（ACS），衡量3至5岁儿童在正式学校项目中的入学率；该口径不等同于托育服务使用率。',
      'These American Community Survey (ACS) estimates measure enrollment in formal school programs among children ages 3–5; they are not a measure of all child care use.',
    ],
    metrics: [
      { label: ['3至5岁入学率', 'Enrollment, ages 3–5'], value: '59%' },
      { label: ['3至4岁入学率', 'Enrollment, ages 3–4'], value: '47%' },
      { label: ['5岁入学率', 'Enrollment, age 5'], value: '84%' },
    ],
    chartTitle: ['按年龄划分的入学率', 'Enrollment rate by age'],
    chartUnit: ['百分比', 'percent'],
    bars: [
      { label: ['3至4岁', 'Ages 3–4'], value: 47 },
      { label: ['5岁', 'Age 5'], value: 84 },
    ],
    occupancy: null,
    chartNote: [
      '2022年3至5岁儿童总体入学率约为59%，高于2021年的53%，但低于2019年的61%。',
      'About 59% of children ages 3–5 were enrolled in 2022, up from 53% in 2021 and below 61% in 2019.',
    ],
  },
}

export default function CountryOverview({ country }) {
  const { pair } = useLanguage()
  const data = overviewData[country.slug]
  if (!data) return null
  const base = '/' + country.slug
  const entries = [
    ['centres', '园所目录', 'School directory', '按地区与理念查找具体园所档案。', 'Browse school profiles by region and approach.'],
    ...sections.filter(([id]) => id !== 'centres'),
  ]
  const max = Math.max(...data.bars.map((bar) => bar.value))

  return (
    <section className="country-overview" aria-labelledby="overview-title">
      <div className="overview-heading">
        <div>
          <span className="eyebrow">COUNTRY SNAPSHOT</span>
          <h2 id="overview-title">{pair('关键数据与探索入口', 'Key figures and ways in')}</h2>
        </div>
        <span className="overview-date">{pair(...data.sourceDate)}</span>
      </div>

      <div className="overview-content">
        <div className="overview-metrics">
          {data.metrics.map((metric) => (
            <div className="overview-metric" key={metric.label[1]}>
              <span>{pair(...metric.label)}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
        <figure className="overview-chart">
          <figcaption>
            <span>{pair(...data.chartTitle)}</span>
            <small>{pair(...data.chartUnit)}</small>
          </figcaption>
          {data.bars.map((bar) => (
            <div className="overview-bar-row" key={bar.label[1]}>
              <div className="overview-bar-label">
                <span>{pair(...bar.label)}</span>
                <strong>{country.slug === 'japan' ? bar.value.toLocaleString('en-US') : bar.value + '%'}</strong>
              </div>
              <div
                className="overview-bar-track"
                role="img"
                aria-label={country.slug === 'japan' ? bar.label[1] + ': ' + bar.value.toLocaleString('en-US') + ' ' + data.chartUnit[1] : bar.label[1] + ': ' + bar.value + '%'}
              >
                <span style={{ width: (bar.value / max) * 100 + '%' }} />
              </div>
            </div>
          ))}
          {data.occupancy && (
            <div className="overview-ratio">
              <span>{pair('定员充足率', 'Capacity utilisation')}</span>
              <strong>{data.occupancy}</strong>
            </div>
          )}
          <p className="overview-note">{pair(...data.chartNote)}</p>
        </figure>
      </div>

      <p className="overview-scope">{pair(...data.scope)}</p>
      <div className="overview-source">
        <a href={data.sourceUrl} target="_blank" rel="noreferrer">
          {pair(...data.sourceTitle)} ↗
        </a>
        <span>{pair('来源核对：2026年11月12日', 'Source checked: 12 November 2026')}</span>
      </div>

      <div className="overview-entries" aria-label="Country sections">
        {entries.map(([id, zh, en, summaryZh, summaryEn], i) => (
          <Link className="overview-entry" to={id === 'centres' ? base : base + '/' + id} key={id}>
            <span className="overview-entry-no">0{i + 1}</span>
            <div>
              <h3>{pair(zh, en)}</h3>
              <p>{pair(summaryZh, summaryEn)}</p>
            </div>
            <span className="overview-entry-arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
