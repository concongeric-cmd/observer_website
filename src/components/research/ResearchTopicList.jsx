import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import useLanguage from '../../hooks/useLanguage'
import { researchPath } from '../../data/researchPath'

export default function ResearchTopicList({ topics, filterTypes = false }) {
  const { pair, text } = useLanguage()
  const [params, setParams] = useSearchParams()
  const [limit, setLimit] = useState(24)
  const query = params.get('q') || ''
  const type = params.get('type') || 'all'
  const types = {
    industry_topic: ['行业主题', 'Industry topic'],
    public_program: ['公共项目', 'Public programme'],
    company: ['企业', 'Company'],
    regional_statistic: ['地区统计', 'Regional statistics'],
  }
  const filtered = topics.filter(
    (topic) =>
      topic.title
        .join(' ')
        .toLowerCase()
        .includes(query.trim().toLowerCase()) &&
      (!filterTypes ||
        type === 'all' ||
        !types[type] ||
        topic.recordType === type),
  )
  const update = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
    setLimit(24)
  }
  return (
    <div className="research-topic-browser">
      <div className="research-filters">
        <label>
          {pair('搜索研究主题', 'Search research topics')}
          <input
            type="search"
            value={query}
            onChange={(event) => update('q', event.target.value)}
          />
        </label>
        {filterTypes && (
          <label>
            {pair('资料类型', 'Record type')}
            <select
              value={types[type] ? type : 'all'}
              onChange={(event) => update('type', event.target.value)}
            >
              <option value="all">{text('全部', 'All')}</option>
              {Object.entries(types).map(([id, label]) => (
                <option key={id} value={id}>
                  {text(...label)}
                </option>
              ))}
            </select>
          </label>
        )}
        <button
          type="button"
          onClick={() => {
            setParams({})
            setLimit(24)
          }}
        >
          {pair('重置', 'Reset')}
        </button>
      </div>
      <p className="research-small" role="status">
        {pair(`${filtered.length} 个主题`, `${filtered.length} topics`)}
      </p>
      <div className="research-topic-list">
        {filtered.slice(0, limit).map((topic) => (
          <Link
            className="research-topic-link"
            to={researchPath(topic)}
            key={topic.id}
          >
            <span className="research-small">
              {pair(...types[topic.recordType])} ·{' '}
              {String(topic.volume).padStart(2, '0')}.
              {String(topic.number).padStart(2, '0')}
            </span>
            <h3>{pair(...topic.title)}</h3>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
      {!filtered.length && (
        <p>
          {pair(
            '没有符合条件的主题，请尝试其他关键词。',
            'No matching topics. Try another search.',
          )}
        </p>
      )}
      {filtered.length > limit && (
        <button
          type="button"
          className="research-more"
          onClick={() => setLimit(limit + 24)}
        >
          {pair('显示更多主题', 'Show more topics')} (
          {Math.min(limit, filtered.length)} / {filtered.length})
        </button>
      )}
    </div>
  )
}
