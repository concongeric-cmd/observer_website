import { Link, NavLink } from 'react-router'
import useLanguage from '../../hooks/useLanguage'

export default function ResearchNavigation() {
  const { pair } = useLanguage()
  return (
    <nav className="research-nav" aria-label="Japan research navigation">
      {[
        ['/japan/overview', ['全国概况', 'National overview']],
        ['/japan/regions', ['地区数据', 'Regional data']],
      ].map(([to, label]) => (
        <NavLink end to={to} key={to}>
          {pair(...label)}
        </NavLink>
      ))}
    </nav>
  )
}

export function ResearchEntry() {
  const { pair } = useLanguage()
  return (
    <section className="research-entry">
      <div>
        <span className="eyebrow">JAPAN · RESEARCH</span>
        <h2>
          {pair(
            '了解园所背后的行业与地区',
            'Explore the sector and regions around the schools',
          )}
        </h2>
        <p>
          {pair(
            '阅读制度、教学、运营及47个都道府县的供给数据。',
            'Explore the system, teaching, operations and childcare provision across 47 prefectures.',
          )}
        </p>
      </div>
      <div>
        <Link to="/japan/overview">
          {pair('全国概况', 'National overview')} →
        </Link>
        <Link to="/japan/regions">{pair('浏览地区', 'Explore regions')} →</Link>
      </div>
    </section>
  )
}
