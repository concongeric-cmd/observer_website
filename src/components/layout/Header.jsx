import { NavLink, useLocation } from 'react-router'
import { useLayoutEffect, useRef, useState } from 'react'
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
  const { pair, english, mode, setMode } = useLanguage()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const indicatorRef = useRef(null)
  const hasPositionedIndicator = useRef(false)

  useLayoutEffect(() => {
    setMenuOpen(false)
    const nav = navRef.current
    const indicator = indicatorRef.current
    if (!nav || !indicator) return

    const updateIndicator = () => {
      const activeLink = nav.querySelector('a.active')
      if (!activeLink) return

      const navBounds = nav.getBoundingClientRect()
      const linkBounds = activeLink.getBoundingClientRect()
      if (!hasPositionedIndicator.current) indicator.style.transition = 'none'
      indicator.style.left = `${linkBounds.left - navBounds.left + linkBounds.width * 0.3}px`
      indicator.style.width = `${linkBounds.width * 0.4}px`

      if (!hasPositionedIndicator.current) {
        hasPositionedIndicator.current = true
        requestAnimationFrame(() => {
          indicator.style.transition = 'left 320ms cubic-bezier(0.22, 1, 0.36, 1), width 320ms cubic-bezier(0.22, 1, 0.36, 1)'
        })
      }
    }

    updateIndicator()
    const observer = new ResizeObserver(updateIndicator)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [location.pathname, english, mode])
  return (
    <>
      <header className="header">
        <Brand />
        <nav className={menuOpen ? 'mobile-open' : ''} aria-label="Main navigation" ref={navRef}>
          {navigation.map(([path, zh, en]) => (
            <NavLink
              to={path}
              end={!['/japan', '/united-states'].includes(path)}
              className={({ isActive }) => (isActive ? 'active' : '')}
              key={path}
            >
              <span onClick={() => setMenuOpen(false)}>{pair(zh, en)}</span>
            </NavLink>
          ))}
          <span className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
        </nav>
        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
        <button
          className="language-button"
          type="button"
          aria-label="Cycle display language: English, Chinese, bilingual"
          title="Cycle display language"
          onClick={() => setMode(mode === 'en' ? 'zh' : mode === 'zh' ? 'bilingual' : 'en')}
        >
          {mode === 'en' ? 'EN / \u4e2d' : mode === 'zh' ? '\u4e2d / EN' : '\u4e2d + EN'}
        </button>
      </header>
    </>
  )
}
