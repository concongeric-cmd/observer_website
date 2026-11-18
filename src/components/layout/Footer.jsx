import { Link } from 'react-router'
import useLanguage from '../../hooks/useLanguage'
import Brand from './Brand'

export default function Footer() {
  const { pair } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="site-footer-intro">
        <Brand className="footer-brand" />
        <p>{pair(
          '面向幼教园举办者、园长与教育管理者的美日比较参考。',
          'A comparative reference for early childhood owners, directors, and education leaders.',
        )}</p>
      </div>
      <nav className="site-footer-links" aria-label="Footer navigation">
        <section>
          <strong>{pair('国家栏目', 'Country Portals')}</strong>
          <Link to="/united-states">{pair('美国', 'United States')}</Link>
          <Link to="/japan">{pair('日本', 'Japan')}</Link>
        </section>
        <section>
          <strong>{pair('编辑', 'Editorial')}</strong>
          <Link to="/monthly">{pair('月度更新', 'Monthly Updates')}</Link>
          <Link to="/japan/operations">{pair('经营实践', 'Operations Notes')}</Link>
        </section>
        <section>
          <strong>{pair('方法', 'Methodology')}</strong>
          <Link to="/about">{pair('关于与来源', 'About & Sources')} ↗</Link>
        </section>
      </nav>
      <div className="site-footer-note">
        {pair(
          '演示原型 · 资料包含历史记录与样本内容',
          'Research prototype · includes historical records and sample content',
        )}
      </div>
    </footer>
  )
}
