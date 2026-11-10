import { useState } from 'react'
import { articles } from '../../data/content'
import useLanguage from '../../hooks/useLanguage'
import SectionHeading from '../common/SectionHeading'
import ArticleCard from './ArticleCard'

export default function ArticleList({ operations = false }) {
  const { pair } = useLanguage()
  const { english } = useLanguage()
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('all')
  const filtered = articles.filter(
    (article) =>
      (topic === 'all' || article.id === topic) &&
      [...article.title, ...article.intro, ...article.category]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase()),
  )
  return (
    <section className="section articles-section" id="articles">
      <SectionHeading
        number={operations ? '01' : '02'}
        zh={operations ? '经营与管理专题' : '给经营者的实践观察'}
        en={
          operations
            ? 'Operations & management'
            : 'Ideas for everyday leadership'
        }
        to={operations ? null : '/japan/operations'}
      />
      <div className="article-toolbar">
        <div className="filter-tabs">
          {[
            ['all', '全部', 'All'],
            ['local-demand', '需求与供给', 'Demand'],
            ['team-review', '团队与质量', 'Teams'],
            ['family-journey', '招生与家园', 'Families'],
          ].map(([id, zh, en]) => (
            <button
              className={topic === id ? 'selected' : ''}
              onClick={() => setTopic(id)}
              key={id}
            >
              {pair(zh, en)}
            </button>
          ))}
        </div>
        <label className="search">
          <span>⌕</span>
          <input
            aria-label="Search sample articles"
            placeholder={english ? 'Search features…' : '搜索专题 / Search…'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button aria-label="Clear search" onClick={() => setQuery('')}>
              ×
            </button>
          )}
        </label>
      </div>
      <div className="article-grid">
        {filtered.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            index={articles.indexOf(article)}
          />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          {pair(
            '没有匹配的样稿，请尝试其他关键词。',
            'No matching samples. Try another search.',
          )}
          <button
            onClick={() => {
              setQuery('')
              setTopic('all')
            }}
          >
            {pair('重置筛选', 'Reset filters')}
          </button>
        </div>
      )}
      <div className="editor-note">
        <span>✳</span>
        {pair(
          '样稿阅读说明：专题包含来源解读与编辑工作框架，不代表已验证的园所成效。',
          'Samples include source interpretation and editorial frameworks, not verified centre outcomes.',
        )}
      </div>
    </section>
  )
}
