import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router'
import { getCountry } from '../../data/countries'
import { sections } from '../../data/content'
import useLanguage from '../../hooks/useLanguage'
import NotFoundPage from '../../pages/NotFoundPage'
export default function CountryLayout() {
  const { countrySlug } = useParams()
  const { pathname } = useLocation()
  const country = getCountry(countrySlug)
  const { pair } = useLanguage()
  if (!country) return <NotFoundPage />
  const base = '/' + country.slug
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">{pair('首页', 'Home')}</Link>
        <span>/</span>
        <Link to={base}>{pair(...country.name)}</Link>
      </div>
      <nav className="country-nav" aria-label="Country topics">
        <NavLink
          to={base}
          end
          className={({ isActive }) =>
            isActive || pathname.startsWith(base + '/centres') ? 'active' : ''
          }
        >
          {pair('园所目录', 'School directory')}
        </NavLink>
        {sections
          .filter((s) => s[0] !== 'centres')
          .map(([id, zh, en]) => (
            <NavLink to={base + '/' + id} key={id}>
              {pair(zh, en)}
            </NavLink>
          ))}
      </nav>
      <Outlet context={country} />
    </>
  )
}
