import { Link } from 'react-router'
import useLanguage from '../hooks/useLanguage'
export default function NotFoundPage() {
  const { pair } = useLanguage()
  return (
    <section className="info-page">
      <span className="eyebrow">404 / THE OBSERVER</span>
      <h1>{pair('未找到页面', 'Page not found')}</h1>
      <p>
        {pair(
          '此页面可能已移动，请返回日本幼教预览。',
          'This page may have moved. Return to the Japan preview.',
        )}
      </p>
      <Link className="button primary" to="/japan">
        {pair('返回日本幼教', 'Back to Japan')} ↗
      </Link>
    </section>
  )
}
