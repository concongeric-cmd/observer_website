import { NavLink } from 'react-router'
import useLanguage from '../../hooks/useLanguage'
import Brand from './Brand'

const navigation = [
  ['/', '首页', 'Home'],
  ['/united-states', '美国幼教', 'United States'],
  ['/japan', '日本幼教', 'Japan'],
  ['/monthly', '月度更新', 'Monthly Updates'],
  ['/about', '关于本站', 'About'],
]
export default function Header() {
  const { pair, english, toggle } = useLanguage()
  return (
    <>
      <div className="topline">
        <span>
          {pair(
            '连接国际视野与园所实践',
            'GLOBAL PERSPECTIVES. EVERYDAY PRACTICE.',
          )}
        </span>
        <span>
          VOL. 01 <i /> {pair('设计预览', 'DESIGN PREVIEW')}
        </span>
      </div>
      <header className="header">
        <Brand />
        <nav aria-label="Main navigation">
          {navigation.map(([path, zh, en]) => (
            <NavLink
              to={path}
              end={!['/japan', '/united-states'].includes(path)}
              className={({ isActive }) => (isActive ? 'active' : '')}
              key={path}
            >
              {pair(zh, en)}
            </NavLink>
          ))}
        </nav>
        <button
          className="language-button"
          onClick={toggle}
          aria-label="Switch bilingual reading order"
        >
          {english ? 'EN / 中' : '中 / EN'} ⇅
        </button>
      </header>
    </>
  )
}
