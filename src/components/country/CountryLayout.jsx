import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router'
import { getCountry } from '../../data/countries'
import { articles, sections, sectionDescriptions } from '../../data/content'
import { schools } from '../../data/schools'
import useLanguage from '../../hooks/useLanguage'
import NotFoundPage from '../../pages/NotFoundPage'
import { companyNames } from '../../data/companyPresentation'

export default function CountryLayout() {
  const {
    countrySlug,
    schoolId,
    sectionId,
    articleId,
    companyId,
    topicId,
    regionId,
  } = useParams()
  const { pathname } = useLocation()
  const country = getCountry(countrySlug)
  const school = schoolId
    ? schools.find(
        (item) => item.id === schoolId && item.country === countrySlug,
      )
    : null
  const article = articles.find((item) => item.id === articleId)
  const companyName = countrySlug === 'japan' ? companyNames[companyId] : null
  const { pair } = useLanguage()

  if (!country) return <NotFoundPage />

  const base = '/' + country.slug
  const countrySections =
    country.slug === 'japan'
      ? [
          ...sections,
          ['overview', '全国与地区数据', 'National & regional data'],
        ]
      : sections
  const isDirectory =
    pathname === base || pathname.startsWith(base + '/centres')
  const isArticle = Boolean(articleId)
  const isCompany = Boolean(companyId)
  const isResearch =
    Boolean(topicId || regionId) ||
    pathname.startsWith(base + '/research') ||
    ['overview', 'regions'].includes(sectionId)
  const topicParts = topicId?.match(/^volume-(\d+)-s(\d+)$/)
  const researchSection = isResearch
    ? topicParts
      ? topicParts[1] === '1' && ['2', '6', '9'].includes(topicParts[2])
        ? 'types'
        : {
            1: 'sector',
            2: 'sector',
            3: 'operations',
            4: 'curriculum',
            5: 'operations',
            6: 'companies',
            7: 'technology',
            8: 'overview',
          }[topicParts[1]]
      : 'overview'
    : null
  const activeSection = countrySections.find(
    ([id]) =>
      id !== 'centres' &&
      (pathname.startsWith(`${base}/${id}`) || id === researchSection),
  )
  const pageSection = isDirectory
    ? null
    : sections.find(([id]) => id === sectionId)
  const title = isDirectory ? country.title : pageSection?.slice(1, 3)
  const description = isDirectory
    ? country.description
    : sectionDescriptions[sectionId] || pageSection?.slice(3, 5)

  return (
    <div
      className={
        'country-layout' +
        (isDirectory && !school ? ' country-layout-directory' : '') +
        (school || isArticle || isCompany
          ? ' country-layout-detail'
          : '')
      }
    >
      <div className="country-workspace-header">
        <div className="country-workspace-inner">
          <div className="country-breadcrumb">
            <Link to="/">{pair('é¦–é¡µ', 'Home')}</Link>
            <span aria-hidden="true">/</span>
            <Link to={base}>{pair(...country.name)}</Link>
            {(isDirectory || activeSection || school || isArticle) && (
              <>
                <span aria-hidden="true">/</span>
                {isDirectory ? (
                  school ? (
                    <Link to={base}>
                      {pair('å›­æ‰€ç›®å½•', 'School Directory')}
                    </Link>
                  ) : (
                    <span aria-current="page">
                      {pair('å›­æ‰€ç›®å½•', 'School Directory')}
                    </span>
                  )
                ) : (
                  <Link to={base + '/' + (activeSection?.[0] || 'operations')}>
                    {pair(
                      ...(activeSection?.slice(1, 3) || [
                        'ç»è¥ä¸Žç®¡ç†',
                        'Operations & management',
                      ]),
                    )}
                  </Link>
                )}
                {school && (
                  <>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">{pair(...school.name)}</span>
                  </>
                )}
                {article && (
                  <>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">{pair(...article.title)}</span>
                  </>
                )}
                {companyName && (
                  <>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">{companyName}</span>
                  </>
                )}
              </>
            )}
          </div>

          {!school && !isArticle && !isCompany && !isResearch && (
            <div className="country-workspace-intro">
              <div className="country-workspace-title">
                <p className="eyebrow">
                  {country.code} ·{' '}
                  {isDirectory
                    ? 'SCHOOL DIRECTORY'
                    : pageSection?.[2]?.toUpperCase()}
                </p>
                <h1>{pair(...(title || country.title))}</h1>
                <p className="country-workspace-description">
                  {pair(...(description || country.description))}
                </p>
              </div>
              <Link
                className="country-switch"
                to={country.slug === 'japan' ? '/united-states' : '/japan'}
              >
                {pair(
                  country.slug === 'japan'
                    ? 'åˆ‡æ¢è‡³ç¾Žå›½å¹¼æ•™ →'
                    : 'åˆ‡æ¢è‡³æ—¥æœ¬å¹¼æ•™ →',
                  country.slug === 'japan'
                    ? 'Switch to United States →'
                    : 'Switch to Japan →',
                )}
              </Link>
            </div>
          )}
        </div>
      </div>
      <nav className="country-nav" aria-label="Country topics">
        <NavLink
          to={base}
          end
          className={({ isActive }) =>
            isActive || pathname.startsWith(base + '/centres') ? 'active' : ''
          }
        >
          {pair('å›­æ‰€ç›®å½•', 'School directory')}
        </NavLink>
        {countrySections
          .filter(([id]) => id !== 'centres')
          .map(([id, zh, en]) => (
            <NavLink
              to={base + '/' + id}
              key={id}
              className={({ isActive }) =>
                isActive || researchSection === id ? 'active' : ''
              }
            >
              {pair(zh, en)}
            </NavLink>
          ))}
      </nav>
      <Outlet context={country} />
    </div>
  )
}
