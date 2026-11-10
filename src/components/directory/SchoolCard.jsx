import { Link, useLocation } from 'react-router'
import useLanguage from '../../hooks/useLanguage'
import ProviderTypeBadges from './ProviderTypeBadges'
export default function SchoolCard({ school }) {
  const { pair } = useLanguage()
  const location = useLocation()
  return (
    <Link
      className="school-card"
      state={{ directorySearch: location.search }}
      to={'/' + school.country + '/centres/' + school.id}
    >
      <div className="school-card-top">
        <span className="school-mark">{school.code.slice(-2)}</span>
        <span className="school-location">{pair(...school.location)}</span>
        <span aria-hidden="true">↗</span>
      </div>
      <h3>{pair(...school.name)}</h3>
      {school.original !== school.name[1] && (
        <span className="school-original" lang="ja">
          {school.original}
        </span>
      )}
      <div className="school-tags">
        <ProviderTypeBadges school={school} />
        <span>{pair(...school.approachLabel)}</span>
      </div>
      <p>{pair(...school.summary)}</p>
      <div className="school-card-bottom">
        {pair(
          '教育方针 · 实践 · 资料来源',
          'Educational policy · Practices · Sources',
        )}
        <span>{pair('查看档案', 'View profile')} →</span>
      </div>
    </Link>
  )
}
