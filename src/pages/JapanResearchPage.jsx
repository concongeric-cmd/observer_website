import { Link, Navigate, useParams } from 'react-router'
import useLanguage from '../hooks/useLanguage'
import { japanResearchReport as report } from '../data/japanResearchReport'
import { japanResearchIndex } from '../data/japanResearchIndex'
import {
  researchSections,
  researchVolumeTitles,
  researchFigureMetadata,
} from '../data/japanResearchPresentation'
import ResearchNavigation from '../components/research/ResearchNavigation'
import { researchPath } from '../data/researchPath'
import ResearchTopicList from '../components/research/ResearchTopicList'
import ResearchChart from '../components/research/ResearchChart'
import DetailModalCard from '../components/common/DetailModalCard'
import {
  ResearchBlocks,
  ResearchSources,
  ResearchSourceLinks,
  ResearchText,
  ResearchFigure,
  OriginalLanguageNotice,
} from '../components/research/ResearchContent'
import NotFoundPage from './NotFoundPage'

function NationalSnapshot() {
  const { pair } = useLanguage()
  return (
    <section>
      <h2>{pair('2026年保育供给快照', 'Childcare provision, 2026')}</h2>
      <p>
        {pair(
          '2026年4月1日，保育所等统计集合。暂定值，不包含全部幼稚园名额。',
          'As of 1 April 2026, for the report’s defined childcare-service population. Provisional; not all kindergarten places are included.',
        )}
      </p>
      <dl className="research-metrics">
        {[
          ['facilities', ['保育服务设施 · 所', 'Childcare facilities · sites']],
          ['capacity', ['利用定员 · 名额', 'Capacity · places']],
          ['children', ['利用儿童 · 人', 'Children using services · children']],
          [
            'waiting',
            ['官方等待儿童 · 人', 'Official waiting list · children'],
          ],
        ].map(([key, label]) => (
          <div key={key}>
            <dt>{pair(...label)}</dt>
            <dd>{report.national[key].toLocaleString('en-US')}</dd>
          </div>
        ))}
      </dl>
      <ResearchSourceLinks ids={['J01']} />
      <p className="research-small">
        {pair(
          '容量减利用人数为369,661，是算术差额，不是可预约空位。',
          'Capacity minus usage is 369,661. This arithmetic difference is not a count of bookable vacancies.',
        )}
      </p>
    </section>
  )
}

function ResearchTopicCard({ entry, eyebrow, className = 'research-topic-card' }) {
  const { pair } = useLanguage()
  const topic = report.topics.find((item) => item.id === entry.id)
  if (!topic) return null

  const firstParagraph = topic.blocks.find((block) => block.type === 'paragraph')

  return (
    <DetailModalCard
      className={className}
      modalClassName="detail-modal-wide"
      eyebrow={pair(...eyebrow)}
      title={pair(...entry.title)}
      summary={
        firstParagraph ? (
          <ResearchText zh={firstParagraph.textZh} en={firstParagraph.textEn} />
        ) : (
          pair('打开查看完整数据、图表与来源。', 'Open to view the full data, figures and sources.')
        )
      }
    >
      <ResearchTopicDetails topicIds={[topic.id]} />
    </DetailModalCard>
  )
}

function ResearchTopicDetails({ topicIds }) {
  const { pair } = useLanguage()
  const topics = topicIds
    .map((id) => report.topics.find((topic) => topic.id === id))
    .filter(Boolean)

  const references = [...new Set(topics.flatMap((topic) => [
    ...(topic.sourceIds || []),
    ...topic.blocks.flatMap((block) => block.sources || []),
  ]))].flatMap((id) => {
    const source = report.sources[id]
    return (source?.urls || []).map((url, index) => ({ source, url, index }))
  }).filter((item, index, items) => items.findIndex((other) => other.url === item.url) === index)

  return <>
    {topics.map((topic) => (
    <section className="sector-metric-modal-topic" key={topic.id}>
      {topics.length > 1 && <h3>{pair(...topic.title)}</h3>}
      <ResearchBlocks blocks={topic.blocks.map((block) => ({ ...block, sources: [] }))} />
    </section>
    ))}
    {references.length > 0 && (
      <footer className="detail-modal-references sector-modal-references">
        <h3>{pair('参考资料：', 'References:')}</h3>
        <ul>
          {references.map(({ source, url, index }) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noreferrer">
                {pair(source.titleZh, source.titleEn)}
                {source.urls.length > 1 ? ` (${index + 1})` : ''}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )}
  </>
}

function SectorResearchDashboard() {
  const { pair, text } = useLanguage()
  const contextLabels = {
    'volume-2-s5': ['市场范围', 'MARKET SCOPE'],
    'volume-2-s6': ['资金来源', 'FUNDING'],
    'volume-2-s7': ['公定价格', 'RATES'],
    'volume-2-s8': ['费用减免', 'FEE RELIEF'],
    'volume-2-s9': ['家庭支出', 'HOUSEHOLD COST'],
    'volume-2-s10': ['运营成本', 'OPERATIONS'],
  }
  const systemLabels = {
    'volume-1-s1': ['概览 · 两条制度线', 'OVERVIEW · 2 TRACKS'],
    'volume-1-s2': ['机构结构 · 四种类型', 'STRUCTURE · 4 FORMS'],
    'volume-1-s3': ['历史 · 1876', 'HISTORY · 1876'],
    'volume-1-s4': ['历史 · 战后', 'HISTORY · POST-WAR'],
    'volume-1-s5': ['改革 · 2015', 'REFORM · 2015'],
    'volume-1-s6': ['资格 · 1、2、3号', 'ELIGIBILITY · CAT 1–3'],
    'volume-1-s7': ['政策 · 2019年10月', 'POLICY · OCT 2019'],
    'volume-1-s9': ['运营主体 · 多元', 'PROVIDERS · MIXED'],
    'volume-1-s10': ['方法 · 统计口径', 'METHOD · DEFINITIONS'],
  }
  const contextTopics = japanResearchIndex.filter(
    (topic) => topic.volume === 2 && topic.number >= 5 && topic.number <= 10,
  )
  const systemTopics = japanResearchIndex.filter(
    (topic) => topic.volume === 1 && topic.number !== 8,
  )
  const timelineTopic = report.topics.find((topic) => topic.id === 'volume-1-s8')
  const timeline = timelineTopic?.blocks.find((block) => block.type === 'timeline')
  const timelineMilestones = [0, 1, 2, 4].flatMap((rowIndex) => {
    const row = timeline?.rows[rowIndex]
    const englishRow = timeline?.rowsEn?.[rowIndex]
    return row && englishRow
      ? [{ period: row[0], periodEn: englishRow[0], title: row[1], titleEn: englishRow[1], detail: row[2], detailEn: englishRow[2] }]
      : []
  })
  timelineMilestones.push({
    period: '2026年度',
    periodEn: '2026',
    title: '全国保育供给暂定快照',
    titleEn: 'Provisional childcare snapshot',
    detail: `官方等待儿童${report.national.waiting.toLocaleString('en-US')}人`,
    detailEn: `${report.national.waiting.toLocaleString('en-US')} official waiting children`,
  })
  const waitingByYear = [
    { year: '2017', value: 26081 },
    { year: '2025', value: 2254 },
    { year: '2026', value: report.national.waiting },
  ]
  const maxWaiting = Math.max(...waitingByYear.map((item) => item.value))
  const localWaiting = [
    { name: ['东京都', 'Tokyo'], value: 1113 },
    { name: ['兵库县', 'Hyogo'], value: 200 },
    { name: ['奈良县', 'Nara'], value: 147 },
    { name: ['埼玉县', 'Saitama'], value: 140 },
  ]

  return (
    <section className="country-topic-content company-page research-page research-section sector-dashboard">
      <header className="section-heading sector-directory-heading">
        <div>
          <span className="eyebrow">{pair('了解他们的政策', 'UNDERSTAND THEIR POLICY')}</span>
          <h2>{pair('行业与政策', 'Sector and Policy')}</h2>
        </div>
      </header>

      <section className="sector-dashboard-block">
        <header className="sector-dashboard-heading">
          <h2>{pair(...researchVolumeTitles[2])}</h2>
          <span>{pair('2026年暂定数据概览', 'About the 2026 provisional snapshot')} →</span>
        </header>
        <div className="sector-metric-grid">
          <DetailModalCard
            className="sector-metric-card"
            modalClassName="detail-modal-wide"
            ariaLabel={text('人口与需求', 'Population and demand')}
            eyebrow={pair('人口与需求', 'POPULATION & DEMAND')}
            title={pair('出生与未来需求', 'Births and future demand')}
            preview={(
              <span className="sector-metric-preview">
                <span className="sector-metric-label">
                  {pair('人口与需求', 'POPULATION & DEMAND')}
                </span>
                <span className="sector-birth-stats">
                  <span>
                    <strong>671,236</strong>
                    <span>{pair('2025年出生（此前686,173）', '2025 births (vs 686,173)')}</span>
                  </span>
                  <span>
                    <strong>1.14</strong>
                    <span>{pair('生育率（此前1.15）', 'Fertility rate (vs 1.15)')}</span>
                  </span>
                </span>
                <span className="sector-metric-note">
                  {pair('出生人口减少改变学前教育容量需求，双职工家庭的照护需求仍然存在。', 'Shrinking birth cohorts alter preschool capacity while dual-earner care demand persists.')}
                </span>
              </span>
            )}
          >
            <ResearchTopicDetails topicIds={['volume-2-s1']} />
          </DetailModalCard>

          <DetailModalCard
            className="sector-metric-card"
            modalClassName="detail-modal-wide"
            ariaLabel={text('官方等待儿童', 'Official waiting lists')}
            eyebrow={pair('官方等待儿童', 'OFFICIAL WAITING LISTS')}
            title={pair('官方等待儿童的变化', 'Changes in official waiting lists')}
            preview={(
              <span className="sector-metric-preview">
                <span className="sector-metric-label">
                  {pair('官方等待儿童', 'OFFICIAL WAITING LISTS')}
                </span>
                <span className="sector-metric-total">
                  <strong>{report.national.waiting.toLocaleString('en-US')}</strong>
                  <span>{pair('等待入园儿童（2026）', 'waiting children (2026)')}</span>
                </span>
                <span className="sector-waiting-list">
                  {waitingByYear.map((item) => (
                    <span className="sector-waiting-row" key={item.year}>
                      <span className="sector-waiting-column" aria-hidden="true">
                        <span style={{ height: `${(item.value / maxWaiting) * 100}%` }} />
                      </span>
                      <span>{item.year}: {item.value.toLocaleString('en-US')}</span>
                    </span>
                  ))}
                </span>
                <span className="sector-metric-note">
                  {pair('从2017年4月的26,081人长期下降，2026年略有回升。', 'Long-term drop from 26,081 in April 2017, with a slight uptick in 2026.')}
                </span>
              </span>
            )}
          >
            <ResearchTopicDetails topicIds={['volume-2-s2', 'volume-2-s3']} />
          </DetailModalCard>

          <DetailModalCard
            className="sector-metric-card"
            modalClassName="detail-modal-wide"
            ariaLabel={text('地区等待儿童分布', 'Regional waiting-list concentration')}
            eyebrow={pair('地区集中度 · 2026', 'LOCAL CONCENTRATION · 2026')}
            title={pair('各地区官方等待儿童', 'Official waiting children by region')}
            preview={(
              <span className="sector-metric-preview">
                <span className="sector-metric-label">
                  {pair('地区集中度 · 2026', 'LOCAL CONCENTRATION · 2026')}
                </span>
                <span className="sector-local-waiting">
                  {localWaiting.map((item) => {
                    const share = (item.value / report.national.waiting) * 100
                    return (
                      <span className="sector-local-waiting-row" key={item.name[1]}>
                        <span>{pair(...item.name)}</span>
                        <span className="sector-bar-track">
                          <span style={{ width: `${(item.value / localWaiting[0].value) * 100}%` }} />
                        </span>
                        <span className="sector-local-value">
                          <strong>{item.value.toLocaleString('en-US')}</strong>
                          <small>({share.toFixed(1)}%)</small>
                        </span>
                      </span>
                    )
                  })}
                </span>
                <span className="sector-metric-note">
                  {pair('尽管全国仍有空余名额，东京占全部等待儿童的45.7%。', 'Tokyo accounts for 45.7% of all waiting children despite national spare seats.')}
                </span>
              </span>
            )}
          >
            <ResearchTopicDetails topicIds={['volume-2-s4']} />
          </DetailModalCard>
        </div>

        <div className="research-topic-cards sector-context-grid">
          {contextTopics.map((entry) => (
            <ResearchTopicCard
              key={entry.id}
              entry={entry}
              className="research-topic-card sector-context-card"
              eyebrow={contextLabels[entry.id]}
            />
          ))}
        </div>
      </section>

      <section className="sector-dashboard-block sector-system-block">
        <header className="sector-dashboard-heading">
          <h2>{pair(...researchVolumeTitles[1])}</h2>
          <span>{pair('时间线与9个制度主题', 'Timeline strip + 9 balanced structure & policy cards')}</span>
        </header>
        <div className="sector-timeline-panel">
          <div className="sector-timeline-heading">
            <div>
              <span>{pair('时间线', 'TIMELINE')}</span>
              <strong>{pair(...(timelineTopic?.title || ['制度发展时间线', 'A timeline of the system']))}</strong>
            </div>
            <Link to="/japan/research/volume-1-s8">
              {pair('查看完整时间线', 'View full chronology')} →
            </Link>
          </div>
          <ol className="sector-timeline-strip">
            {timelineMilestones.map((item) => (
              <li key={item.periodEn}>
                <span>{pair(item.period, item.periodEn)}</span>
                <strong>{pair(item.title, item.titleEn)}</strong>
                <small>{pair(item.detail, item.detailEn)}</small>
              </li>
            ))}
          </ol>
        </div>
        <div className="research-topic-cards sector-system-grid">
          {systemTopics.map((entry) => (
            <ResearchTopicCard
              key={entry.id}
              entry={entry}
              eyebrow={systemLabels[entry.id]}
            />
          ))}
        </div>
      </section>
    </section>
  )
}

export default function JapanResearchPage({ sectionId, view }) {
  const { topicId, countrySlug, sectionId: routeSection } = useParams()
  const { pair } = useLanguage()
  if (countrySlug !== 'japan') return <NotFoundPage />
  const section = sectionId || routeSection
  if (topicId === 'sources')
    return (
      <div className="research-page">
        <h1>
          {pair('日本研究的来源与证据', 'Japan research sources and evidence')}
        </h1>
        <ResearchNavigation />
        <ResearchSources />
      </div>
    )
  if (topicId === 'figures')
    return (
      <div className="research-page">
        <h1>{pair('报告图表', 'Report figures')}</h1>
        <ResearchNavigation />
        <p>
          {pair(
            '25张原图保留原有口径、统计期与来源说明。',
            'The 25 original figures retain their definitions, reporting periods and sources.',
          )}
        </p>
        {Object.values(report.figures).map((figure) => (
          <details key={figure.id}>
            <summary>
              {pair(...researchFigureMetadata[figure.id].slice(0, 2))}
            </summary>
            <ResearchFigure figure={figure} />
          </details>
        ))}
      </div>
    )
  if (topicId) {
    const topic = report.topics.find((item) => item.id === topicId)
    if (!topic) return <NotFoundPage />
    if (topic.companyId || topic.regionId || topic.volume === 6)
      return <Navigate replace to={researchPath(topic)} />
    const guide = researchSections[topic.section]
    return (
      <article className="research-page research-article">
        <Link className="research-back" to={'/japan/' + topic.section}>
          ← {pair('返回相关主题', 'Back to related topics')}
        </Link>
        <header>
          <span className="eyebrow">
            JAPAN · {topic.recordType.replaceAll('_', ' ').toUpperCase()}
          </span>
          <h1>{pair(...topic.title)}</h1>
          <p>
            {guide
              ? pair(...guide.intro)
              : pair(
                  '日本幼教研究中的详细资料。',
                  'Detailed information from the Japan research report.',
                )}
          </p>
          <p className="research-small">
            {pair('报告资料截止', 'Report cutoff')}: {report.cutoff} ·{' '}
            {topic.id}
          </p>
        </header>
        <OriginalLanguageNotice />
        <ResearchBlocks blocks={topic.blocks} />
        <ResearchSources ids={topic.sourceIds} />
        <section className="research-gaps">
          <h2>{pair('进一步研究', 'Further research')}</h2>
          <p>
            {pair(
              '报告中的未知、暂定与适用范围按原文保留。当前地方政策、执行情况及单园实际资料仍需按具体地点另行核对。',
              'Unknowns, provisional status and limits remain attached to the original text. Current local implementation and individual-centre conditions require separate, location-specific research.',
            )}
          </p>
        </section>
      </article>
    )
  }
  if (view === 'all')
    return (
      <div className="research-page">
        <header>
          <h1>
            {pair(
              '探索日本幼教研究',
              'Explore Japan’s early childhood research',
            )}
          </h1>
          <p>
            {pair(
              '按主题查找八卷研究中的制度、课程、公共项目、企业和地区资料。',
              'Browse the eight-volume report by topic, including the system, curriculum, public programmes, companies and regions.',
            )}
          </p>
        </header>
        <ResearchNavigation />
        <ResearchTopicList topics={japanResearchIndex} filterTypes />
      </div>
    )
  if (section === 'overview')
    return (
      <div className="research-page">
        <header className="research-overview-header">
          <span className="eyebrow">JAPAN · NATIONAL OVERVIEW</span>
          <h1>
            {pair(
              '日本：全国与地区数据',
              'Japan: national & regional data',
            )}
          </h1>
          <p>
            {pair(
              '了解全国保育供给、人口变化，并比较47个都道府县的地区数据。',
              'See national childcare provision and population trends, then compare local figures across 47 prefectures.',
            )}
          </p>
          <p className="research-small">
            {pair('报告核对基准日', 'Report research cutoff')}: {report.cutoff}
          </p>
        </header>
        <ResearchNavigation />
        <NationalSnapshot />
        <div className="research-chart-grid">
          <ResearchChart
            title={[
              '出生数：两个年度的观察',
              'Births: two annual observations',
            ]}
            rows={[
              { label: '2024', year: 2024, value: 686173 },
              { label: '2025', year: 2025, value: 671236 },
            ]}
            unit={['出生人数', 'Live births']}
            period="2024–2025"
            scope={[
              '厚生劳动省所列人口动态统计序列，不能代替当年入园人数。',
              'The MHLW vital-statistics series used by the report; not current enrolment.',
            ]}
            sources={['J02']}
            line
          />
          <ResearchChart
            title={[
              '官方等待儿童的选定时间点',
              'Official waiting children: selected observations',
            ]}
            rows={[
              { label: '2017', year: 2017, value: 26081 },
              { label: '2025', year: 2025, value: 2254 },
              { label: '2026', year: 2026, value: 2435 },
            ]}
            unit={['儿童', 'Children']}
            period="1 April · 2017 / 2025 / 2026"
            scope={[
              '官方等待定义；2026暂定。',
              'Official waiting-list definition; 2026 provisional.',
            ]}
            sources={['J01']}
            line
            provisional
            note={[
              '仅连接报告正文列出的观察点，不补出缺失年度。',
              'Dashed segments connect only the observations stated in the report. Intervening years are not filled in.',
            ]}
          />
        </div>
        <section className="research-editorial">
          <h2>{pair('如何理解这些数据', 'Reading the data')}</h2>
          <p>
            {pair(
              '机构类型决定资料的适用范围；地方数据帮助理解供给；园所档案记录具体实践。这三层资料可以互相联系，但不能互相替代。',
              'Provider types define the scope, regional data describes provision, and school profiles document practice. Read these levels together while keeping their definitions distinct.',
            )}
          </p>
        </section>
        <h2>{pair('历史与制度时间线', 'History and system timeline')}</h2>
        <OriginalLanguageNotice />
        <ResearchBlocks
          blocks={
            report.topics.find((topic) => topic.id === 'volume-1-s8').blocks
          }
        />
        <Link to="/japan/research/figures">
          {pair('浏览全部25张报告图表', 'Browse all 25 report figures')} →
        </Link>
        <ResearchSources
          ids={[
            'J01',
            'J02',
            'J05',
            'J10',
            'J11',
            'J12',
            'J13',
            'J14',
            'J06',
            'J07',
            'J09',
          ]}
        />
      </div>
    )
  const guide = researchSections[section]
  if (!guide) return <NotFoundPage />
  const topics = japanResearchIndex.filter((topic) =>
    section === 'types'
      ? topic.section === 'types'
      : guide.volumes.includes(topic.volume) ||
        (section === 'sector' &&
          topic.volume === 3 &&
          [1, 2, 15].includes(topic.number)) ||
        (section === 'operations' &&
          topic.volume === 2 &&
          [9, 10, 11, 12, 13].includes(topic.number)) ||
        (section === 'technology' && topic.id === 'volume-4-s16'),
  )
        if (section === 'sector') return <SectorResearchDashboard />
  return (
    <section className="country-topic-content company-page research-page research-section">
      {section === 'types' ? (
        <header className="section-heading provider-types-heading">
          <div>
            <span className="eyebrow">{pair('了解各类机构', 'EXPLORE THE PROVIDERS')}</span>
            <h2>{pair('机构类型', 'Provider Types')}</h2>
          </div>
        </header>
      ) : (
        <header className="company-directory-intro">
          <div>
            <span className="eyebrow">JAPAN · RESEARCH</span>
            <h2>{pair(...guide.title)}</h2>
            <p>{pair(...guide.intro)}</p>
          </div>
          <p className="company-date">
            {pair('报告资料截止', 'Report cutoff')}
            <strong>{report.cutoff}</strong>
          </p>
        </header>
      )}
      <OriginalLanguageNotice />
      {section === 'technology' && (
        <div className="research-feature-links">
          <Link to="/japan/companies/codmon">CoDMON</Link>
          <Link to="/japan/companies/unifa">UniFa</Link>
          <Link to="/japan/companies/sen">Sen</Link>
          <Link to="/japan/companies/baby-job">BABY JOB</Link>
        </div>
      )}
      {section === 'types' ? (
        <section className="research-system-overview">
          <div className="research-certified-heading">
            <h2>{pair('机构类型与服务', 'Facility Types and Services')}</h2>
            <p>
              {pair(
                '先分清机构的法律类别、家庭资格和运营主体。',
                'Start with the facility category, family eligibility and who runs it.',
              )}
            </p>
          </div>
          <div className="research-system-grid">
            <article>
              <span className="research-card-number">01</span>
              <h3>{pair('三种主要机构', 'Three Main Facility Types')}</h3>
              <p>
                {pair(
                  '幼稚园主要按学校教育方式为学龄前儿童提供教育。保育所主要为需要日常照护的家庭照顾孩子。认定儿童园可以同时提供教育、日常照护和家庭支援，具体服务取决于园所类别。',
                  'Kindergartens mainly provide preschool education through a school-based approach. Nursery centres provide everyday care for families who need it. Certified centres can provide education, daily care and family support together, but the exact services vary by centre type.',
                )}
              </p>
            </article>
            <article>
              <span className="research-card-number">02</span>
              <h3>{pair('家庭资格：1、2、3号', 'Family Eligibility: Categories 1, 2 and 3')}</h3>
              <p>
                {pair(
                  '这是日本政府用于判断家庭可以使用哪些教育和保育给付的类别。1号主要用于三岁以上儿童的教育，2号用于三岁以上需要保育的家庭，3号用于未满三岁需要保育的家庭。具体费用和可用时长还须由当地政府确认。',
                  'These are the categories used to decide which education and childcare benefits a family may use. Category 1 mainly applies to education for children aged three or older. Category 2 applies to families needing care for children aged three or older, while Category 3 applies to children under three. Local rules determine exact fees and hours.',
                )}
              </p>
            </article>
            <article>
              <span className="research-card-number">03</span>
              <h3>{pair('由谁运营', 'Who Operates the Centre')}</h3>
              <p>
                {pair(
                  '机构可能由地方政府、学校法人、社会福祉法人或营利企业运营。“私立”并不一定等于营利企业。要了解实际运营者，还需核对园所地址、法人名称和官方登记资料，不能仅凭园名判断。',
                  'A centre may be run by a local authority, a school corporation, a social-welfare corporation or a for-profit company. “Private” does not always mean for-profit. Check the centre address, legal operator and official records rather than guessing from its name.',
                )}
              </p>
            </article>
          </div>
        </section>
      ) : (
        <div className="research-reading-sections">
          {[...new Set(topics.map((topic) => topic.volume))].map((volume) => {
            const entries = topics.filter((topic) => topic.volume === volume)
            return (
              <section key={volume}>
                <h2>{pair(...researchVolumeTitles[volume])}</h2>
                {section === 'sector' ? (
                  <div className="research-topic-cards">
                    {entries.map((entry) => {
                      const topic = report.topics.find((item) => item.id === entry.id)
                      if (!topic) return null
                      const firstParagraph = topic.blocks.find(
                        (block) => block.type === 'paragraph',
                      )
                      const blockSources = new Set(
                        topic.blocks.flatMap((block) => block.sources || []),
                      )
                      const extraSources = topic.sourceIds.filter(
                        (id) => !blockSources.has(id),
                      )
                      return (
                        <DetailModalCard
                          className="research-topic-card"
                          modalClassName="detail-modal-wide"
                          key={entry.id}
                          eyebrow={pair(
                            `第${entry.volume}卷 · 主题${entry.number}`,
                            `VOLUME ${entry.volume} · TOPIC ${entry.number}`,
                          )}
                          title={pair(...entry.title)}
                          summary={
                            firstParagraph ? (
                              <ResearchText
                                zh={firstParagraph.textZh}
                                en={firstParagraph.textEn}
                              />
                            ) : (
                              pair(
                                '打开查看完整数据、图表与来源。',
                                'Open to view the full data, figures and sources.',
                              )
                            )
                          }
                        >
                          <ResearchBlocks blocks={topic.blocks} />
                          {extraSources.length > 0 && (
                            <ResearchSourceLinks ids={extraSources} />
                          )}
                        </DetailModalCard>
                      )
                    })}
                  </div>
                ) : (
                  entries.map((entry, index) => {
                    const topic = report.topics.find((item) => item.id === entry.id)
                    return (
                      <details
                        key={entry.id}
                        open={index === 0}
                        className="research-reading-topic"
                      >
                        <summary>{pair(...entry.title)}</summary>
                        <div className="research-reading-body">
                          <ResearchBlocks blocks={topic.blocks} figuresCollapsed />
                          <ResearchSourceLinks ids={topic.sourceIds} />
                        </div>
                      </details>
                    )
                  })
                )}
              </section>
            )
          })}
        </div>
      )}
      {section === 'types' && (
        <section className="research-certified-figures">
          <div className="research-certified-heading">
            <h2>{pair('认定儿童园概览', 'Certified Centres at a Glance')}</h2>
            <p>
              {pair(
                '用三张图了解机构数、在籍儿童和可接纳名额。',
                'Three simple views of centre numbers, enrolled children and capacity.',
              )}
            </p>
          </div>
          <div className="research-certified-grid">
            {['chart-J13', 'chart-J14', 'chart-J15'].map((id) => (
              <ResearchFigure key={id} figure={report.figures[id]} />
            ))}
          </div>
        </section>
      )}
    </section>
  )
}
