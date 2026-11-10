import { Link, useSearchParams } from 'react-router'
import { countries } from '../data/countries'
import {
  filterMonthlyUpdates,
  monthlyUpdates,
  updateTopics,
} from '../data/monthlyUpdates'
import useLanguage from '../hooks/useLanguage'

const updateFields = [
  [
    '变化内容',
    'What changed',
    '说明新旧情况与变化范围。',
    'Explain the change and its scope.',
  ],
  [
    '相关日期',
    'When',
    '区分发生、公布与生效日期。',
    'Separate event, publication and effective dates.',
  ],
  [
    '影响对象',
    'Who it affects',
    '指出国家、地区、园所或家庭。',
    'Identify affected countries, regions, schools or families.',
  ],
  [
    '管理意义',
    'Why it matters',
    '说明对经营管理的具体影响。',
    'Explain practical implications for owners and managers.',
  ],
  [
    '原始来源',
    'Original source',
    '保留原文链接与核验记录。',
    'Retain original links and verification records.',
  ],
  [
    '关联内容',
    'Related content',
    '连接相关园所档案或文章。',
    'Link to the relevant school profile or article.',
  ],
]

export default function MonthlyUpdatesPage() {
  const { pair, english } = useLanguage()
  const [params, setParams] = useSearchParams()
  const filters = {
    month: params.get('month') || '',
    country: params.get('country') || 'all',
    topic: params.get('topic') || 'all',
  }
  const updates = filterMonthlyUpdates(monthlyUpdates, filters)
  const setFilter = (key, value) =>
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
    <div className="monthly-page">
      <header className="monthly-header">
        <span className="eyebrow">MONTHLY UPDATES / US & JAPAN</span>
        <h1>{pair('月度更新', 'Monthly Updates')}</h1>
        <p>
          {pair(
            '美国与日本幼教有什么变化？为什么值得经营者关注？按月整理政策、数据、园所服务与教育工具的新变化，并回到原始资料。',
            'What has changed in US and Japanese early childhood education, and why does it matter to owners and managers? Follow monthly changes in policy, data, school services and educational tools, with original sources.',
          )}
        </p>
        <span className="monthly-status">
          {pair('内容待研究与审核', 'Content pending research')}
        </span>
      </header>
      <div className="monthly-layout">
        <section className="monthly-archive" aria-labelledby="archive-title">
          <div className="section-heading">
            <div>
              <span className="eyebrow">BROWSE BY MONTH</span>
              <h2 id="archive-title">{pair('更新档案', 'Update archive')}</h2>
            </div>
            <span className="directory-count">
              {pair(
                updates.length + ' 条已发布更新',
                updates.length + ' published updates',
              )}
            </span>
          </div>
          <div className="monthly-filters">
            <label>
              {pair('年月', 'Month')}
              <input
                type="month"
                aria-label={english ? 'Update month' : '更新年月'}
                value={filters.month}
                onChange={(e) => setFilter('month', e.target.value)}
              />
            </label>
            <label>
              {pair('国家', 'Country')}
              <select
                aria-label={english ? 'Update country' : '更新国家'}
                value={filters.country}
                onChange={(e) => setFilter('country', e.target.value)}
              >
                <option value="all">
                  {english
                    ? 'All countries / 全部国家'
                    : '全部国家 / All countries'}
                </option>
                {countries.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {english ? c.name[1] : c.name[0]}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {pair('主题', 'Topic')}
              <select
                aria-label={english ? 'Update topic' : '更新主题'}
                value={filters.topic}
                onChange={(e) => setFilter('topic', e.target.value)}
              >
                <option value="all">
                  {english ? 'All topics / 全部主题' : '全部主题 / All topics'}
                </option>
                {updateTopics.map(([id, zh, en]) => (
                  <option value={id} key={id}>
                    {english ? en : zh}
                  </option>
                ))}
              </select>
            </label>
            <button className="directory-reset" onClick={() => setParams({})}>
              {pair('重置', 'Reset')} ↺
            </button>
          </div>
          <div aria-live="polite">
            {updates.length ? (
              updates.map((update) => (
                <article className="monthly-entry" key={update.id}>
                  <span className="eyebrow">
                    {update.month} / {update.country}
                  </span>
                  <h3>{pair(...update.title)}</h3>
                  <dl>
                    {[
                      [['变化内容', 'What changed'], update.change],
                      [['影响对象', 'Who it affects'], update.affected],
                      [['管理意义', 'Why it matters'], update.implications],
                    ].map(([label, value]) => (
                      <div key={label[1]}>
                        <dt>{pair(...label)}</dt>
                        <dd>{pair(...value)}</dd>
                      </div>
                    ))}
                  </dl>
                  <p>
                    {pair('发生日期', 'Event date')}: {update.eventDate} ·{' '}
                    {pair('公布日期', 'Published')}: {update.publicationDate}
                    {update.effectiveDate && (
                      <>
                        {' '}
                        · {pair('生效日期', 'Effective')}:{' '}
                        {update.effectiveDate}
                      </>
                    )}
                  </p>
                  <div className="monthly-entry-links">
                    {update.sources.map((source) => (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        key={source.url}
                      >
                        {source.title} ↗
                      </a>
                    ))}
                    {update.related.map((item) => (
                      <Link to={item.to} key={item.to}>
                        {pair(...item.title)} →
                      </Link>
                    ))}
                  </div>
                </article>
              ))
            ) : (
              <div className="monthly-empty">
                <span className="monthly-empty-symbol" aria-hidden="true">
                  ↻
                </span>
                <h3>{pair('内容待研究与审核', 'Content pending research')}</h3>
                <p>
                  {pair(
                    '目前尚无已发布的月度更新。资料经过核验与审核后，将按年月归档；没有可靠新信息的月份可以留空。',
                    'No monthly updates have been published yet. Verified and reviewed material will be archived by month. Months without reliable new information may remain empty.',
                  )}
                </p>
                <span>
                  {pair(
                    '筛选器仅筛选已发布内容，不会生成新闻或示例事件。',
                    'Filters only select published records; they do not generate news or example events.',
                  )}
                </span>
              </div>
            )}
          </div>
          <p className="monthly-review-note">
            {pair(
              '更新将连接到受影响的园所档案或文章，并同步修订相关内容。',
              'Updates will link to affected school profiles or articles and accompany revisions to related content.',
            )}
          </p>
        </section>
        <aside className="monthly-guide">
          <span className="eyebrow">THE UPDATE FORMAT</span>
          <h2>
            {pair(
              '每条更新，回答六个问题。',
              'Six questions for every update.',
            )}
          </h2>
          <p>
            {pair(
              '以下是内容结构说明，不是一条真实更新。',
              'This explains the content structure; it is not a published update.',
            )}
          </p>
          <div>
            {updateFields.map(([zh, en, bodyZh, bodyEn], i) => (
              <div className="monthly-guide-field" key={en}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{pair(zh, en)}</h3>
                  <p>{pair(bodyZh, bodyEn)}</p>
                </div>
              </div>
            ))}
          </div>
          <Link className="text-link" to="/about">
            {pair('编辑与核验原则', 'Editorial & verification principles')} ↗
          </Link>
        </aside>
      </div>
    </div>
  )
}
