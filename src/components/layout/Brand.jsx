import { Link } from 'react-router'
export default function Brand({ className = '' }) {
  return (
    <Link className={'brand ' + className} to="/">
      <span className="brand-symbol">
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>美日幼教观察</strong>
        <small>US–JAPAN ECE OBSERVER</small>
      </span>
    </Link>
  )
}
