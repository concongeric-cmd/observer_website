import { Link } from 'react-router'
import useLanguage from '../../hooks/useLanguage'
export default function SectionHeading({ number, zh, en, to }) {
  const { pair } = useLanguage()
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{number} / THE OBSERVER</span>
        <h2>{pair(zh, en)}</h2>
      </div>
      {to && (
        <Link className="text-link" to={to}>
          {pair('全部专题', 'Explore section')} ↗
        </Link>
      )}
    </div>
  )
}
