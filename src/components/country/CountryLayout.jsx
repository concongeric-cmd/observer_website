import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router'
import { getCountry } from '../../data/countries'
import { sections } from '../../data/content'
import { schools } from '../../data/schools'
import useLanguage from '../../hooks/useLanguage'
import NotFoundPage from '../../pages/NotFoundPage'
export default function CountryLayout() {
  const { countrySlug, schoolId } = useParams()
  const { pathname } = useLocation()
  const country = getCountry(countrySlug)
  const school = schoolId
    ? schools.find((item) => item.id === schoolId && item.country === countrySlug)
    : null
  const { pair } = useLanguage()
  if (!country) return <NotFoundPage />
  const base = '/' + country.slug
  const isDirectory = pathname === base || pathname.startsWith(base + '/centres')
  const activeSection = sections.find(
    ([id]) => id !== 'centres' && pathname.startsWith(`${base}/${id}`),
  )
  return (
    <>
      <div className="breadcrumb">
        <Link to={base}>{pair(...country.name)}</Link>
        {(isDirectory || activeSection) && (
          <>
            <span>/</span>
            {isDirectory ? (
              school ? (
                <Link to={base}>{pair('园所目录', 'School Directory')}</Link>
              ) : (
                <span aria-current="page">{pair('园所目录', 'School Directory')}</span>
              )
            ) : (
              <span aria-current={school ? undefined : 'page'}>
                {pair(activeSection[1], activeSection[2])}
              </span>
            )}
            {school && (
              <>
                <span>/</span>
                <span aria-current="page">{pair(...school.name)}</span>
              </>
            )}
          </>
        )}
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
