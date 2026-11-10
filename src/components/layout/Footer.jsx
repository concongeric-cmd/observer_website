import { Link } from 'react-router'
import useLanguage from '../../hooks/useLanguage'
import Brand from './Brand'

export default function Footer() {
  const { pair } = useLanguage()

  return (
    <footer>
      <Brand className="footer-brand" />
      <div>
        {pair(
          '国际视野 · 本地理解 · 日常实践',
          'GLOBAL PERSPECTIVES · LOCAL CONTEXT · EVERYDAY PRACTICE',
        )}
        <small>
          {pair(
            '演示原型 · 历史数据与编辑样稿 · 非完整内容库',
            'Presentation prototype · historical data & editorial samples · incomplete research',
          )}
        </small>
      </div>
      <Link to="/about">{pair('关于与来源说明', 'About & methodology')} ↗</Link>
    </footer>
  )
}
