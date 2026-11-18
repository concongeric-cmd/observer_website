import { Link } from 'react-router'
export default function Brand({ className = '' }) {
  return (
    <Link className={'brand ' + className} to="/" aria-label={'US\u2013Japan Observer'}>
      <span className="brand-symbol">
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>{'US\u2013Japan Observer'}</strong>
        <small>{'US\u2013JAPAN OBSERVER'}</small>
      </span>
    </Link>
  )
}
