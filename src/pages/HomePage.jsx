import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { articles } from '../data/content'
import { countries } from '../data/countries'
import { schools } from '../data/schools'
import useLanguage from '../hooks/useLanguage'

const base = import.meta.env.BASE_URL
const countryImages = {
  'united-states': `${base}images/observer-us-studio.jpg`,
  japan: `${base}images/observer-japan-courtyard.jpg`,
}

const illustrativeCaption = [
  'æ•™è‚²çŽ¯å¢ƒç¤ºæ„ Â· éžçœŸå®žå›­æ‰€',
  'Illustrative learning environment · not an actual school',
]

const cp1252SpecialBytes = new Map([
  [0x20ac, 0x80], [0x201a, 0x82], [0x0192, 0x83], [0x201e, 0x84],
  [0x2026, 0x85], [0x2020, 0x86], [0x2021, 0x87], [0x02c6, 0x88],
  [0x2030, 0x89], [0x0160, 0x8a], [0x2039, 0x8b], [0x0152, 0x8c],
  [0x017d, 0x8e], [0x2018, 0x91], [0x2019, 0x92], [0x201c, 0x93],
  [0x201d, 0x94], [0x2022, 0x95], [0x2013, 0x96], [0x2014, 0x97],
  [0x02dc, 0x98], [0x2122, 0x99], [0x0161, 0x9a], [0x203a, 0x9b],
  [0x0153, 0x9c], [0x017e, 0x9e], [0x0178, 0x9f],
])

function restoreLegacyText(value) {
  if (typeof value !== 'string') return value
  let restored = value
  for (let pass = 0; pass < 3 && /[ÃÂäåæçèéã]/.test(restored); pass += 1) {
    const bytes = []
    for (const character of restored) {
      const code = character.codePointAt(0)
      if (code <= 0x7f || (code >= 0x80 && code <= 0xff)) bytes.push(code)
      else if (cp1252SpecialBytes.has(code)) bytes.push(cp1252SpecialBytes.get(code))
      else return restored
    }
    try {
      restored = new TextDecoder('utf-8', { fatal: true }).decode(new Uint8Array(bytes))
    } catch {
      return restored
    }
  }
  return restored
}

const profileSections = [
  [
    'åŸºæœ¬ä¿¡æ¯ä¸ŽæœåŠ¡èŒƒå›´',
    'School essentials & scope',
    'åœ°ç‚¹ã€åŽŸå§‹åç§°ã€æœºæž„ç±»åž‹ã€å¹´é¾„æ®µä¸ŽæœåŠ¡æ—¶é—´ã€‚',
    'Location, original name, provider type, age range and hours.',
  ],
  [
    'æ•™è‚²æ–¹é’ˆä¸Žæ—¥å¸¸å®žè·µ',
    'Policy & daily practice',
    'å›­æ‰€å…¬å¼€ç†å¿µã€æ•™å­¦ç­–ç•¥ä¸Žå·²å…¬å¸ƒçš„æ—¥å¸¸å®žè·µã€‚',
    'Published principles, classroom strategies and documented practice.',
  ],
  [
    'ç»è¥ä¸Žå®¶åº­æœåŠ¡',
    'Operations & family services',
    'æ”¶è´¹ã€äººå‘˜è¯´æ˜Žã€æœåŠ¡å®‰æŽ’ä¸Žå®¶åº­æ²Ÿé€šã€‚',
    'Published fees, staffing details, services and family touchpoints.',
  ],
  [
    'åŽŸå§‹æ¥æºä¸Žè¯æ®è¾¹ç•Œ',
    'Sources & evidence limits',
    'ä¿ç•™åŽŸå§‹å‡ºå¤„ã€æ\u00a0¸éªŒæ—¥æœŸä¸Žæœªå…¬å¼€çš„èµ„æ–™ç¼ºå£ã€‚',
    'Original sources, checked dates and information gaps.',
  ],
]

function getLatestCheckedDate() {
  return schools
    .map((school) => school.checked)
    .filter(Boolean)
    .sort()
    .at(-1)
}

export default function HomePage() {
  const { pair: sourcePair, english, mode, setMode } = useLanguage()
  const pair = (primary, secondary) => {
    const zh = restoreLegacyText(primary)
    const en = restoreLegacyText(secondary)
    if (mode === 'bilingual') return sourcePair(zh, en)
    return <span lang={english ? 'en' : 'zh-CN'}>{english ? en : zh}</span>
  }
  const [query, setQuery] = useState('')
  const [countryFilter, setCountryFilter] = useState('all')
  const [approachFilter, setApproachFilter] = useState('all')

  const approaches = useMemo(
    () => [...new Map(schools.map((school) => [school.approach, school.approachLabel])).entries()]
      .sort(([left], [right]) => ['play', 'montessori', 'reggio'].indexOf(left) - ['play', 'montessori', 'reggio'].indexOf(right)),
    [],
  )

  const filteredSchools = useMemo(() => {
    const term = query.normalize('NFKC').toLocaleLowerCase().trim()
    return schools.filter((school) => {
      if (countryFilter !== 'all' && school.country !== countryFilter) return false
      if (approachFilter !== 'all' && school.approach !== approachFilter) return false
      if (!term) return true
      return [
        school.code,
        restoreLegacyText(school.original),
        ...school.name.map(restoreLegacyText),
        ...(school.aliases || []).map(restoreLegacyText),
        ...school.location.map(restoreLegacyText),
        ...school.approachLabel.map(restoreLegacyText),
      ]
        .filter(Boolean)
        .join(' ')
        .normalize('NFKC')
        .toLocaleLowerCase()
        .includes(term)
    })
  }, [query, countryFilter, approachFilter])

  const sourceCount = schools.reduce(
    (count, school) => count + (school.sources?.length || 0),
    0,
  )
  const latestArticles = articles.slice(0, 3)
  const latestChecked = getLatestCheckedDate()
  const schoolCountByCountry = Object.fromEntries(
    countries.map((country) => [
      country.slug,
      schools.filter((school) => school.country === country.slug).length,
    ]),
  )

  const filterButtons = [
    { id: 'all', label: [`å…¨éƒ¨æ\u00a0·æœ¬ (${schools.length})`, `All Profiles (${schools.length})`] },
    { id: 'japan', label: [`æ—¥æœ¬ (${schoolCountByCountry.japan})`, `Japan (${schoolCountByCountry.japan})`] },
    { id: 'united-states', label: [`ç¾Žå›½ (${schoolCountByCountry['united-states']})`, `United States (${schoolCountByCountry['united-states']})`] },
    ...approaches.map(([id, label]) => ({ id: `approach:${id}`, label })),
  ]

  const resetFilters = () => {
    setQuery('')
    setCountryFilter('all')
    setApproachFilter('all')
  }

  return (
    <div className="home-page">
      <section className="home-opening" aria-labelledby="home-title">
        <div className="home-opening-grid">
          <div className="home-opening-copy">
            <span className="eyebrow">
              US–JAPAN EARLY CHILDHOOD EDUCATION OBSERVER
            </span>
            <h1 id="home-title">
              {pair(
                'äº†è§£ç¾Žæ—¥å¹¼æ•™çš„åˆ¶åº¦ä¸Žæ—¥å¸¸ï¼Œ\nå¯å‘è‡ªå·±çš„åŠžå›­å®žè·µã€‚',
                'Wider perspectives. Better-informed practice.',
              )}
            </h1>
            <p className="home-opening-intro">
              {pair(
                'ä¸ºå¹¼å„¿å›­ä¸¾åŠžè€…ã€å›­é•¿ä¸Žæ•™è‚²ç®¡ç†è€…ï¼Œæ•´ç†ç¾Žå›½å’Œæ—¥æœ¬çš„å›­æ‰€æ¡£æ¡ˆã€å›½å®¶ä¸Žåœ°æ–¹æ”¿ç­–ã€è¯¾ç¨‹å®žæ–½åŠç»è¥å®žè·µã€‚åŒºåˆ†å›­æ‰€è‡ªè¿°ä¸Žå®˜æ–¹èµ„æ–™ï¼Œä¿ç•™åŽŸå§‹å‡ºå¤„ã€‚',
                'Helping early childhood leaders learn from schools in the US and Japan, with practical insights into teaching, daily routines, and school management.',
              )}
            </p>
            <div className="home-opening-actions">
              <a className="home-button home-button-primary" href="#school-directory">
                {pair('æµè§ˆæ\u00a0·æœ¬å›­æ‰€', 'Explore sample schools')}
                <span aria-hidden="true">→</span>
              </a>
              <a className="home-text-link" href="#country-portals">
                {pair('æŒ‰å›½å®¶è¿›å…¥æ\u00a0ç›®', 'Browse country portals')}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="home-reading-mode">
              <span>{pair('åŒè¯­é˜…è¯»', 'Bilingual reading')}</span>
              <div className="home-language-switch" role="group" aria-label="Select reading language mode">
                {[
                  ['en', 'English'],
                  ['zh', '中文'],
                  ['bilingual', '双语对照'],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={mode === value ? 'active' : ''}
                    aria-pressed={mode === value}
                    onClick={() => setMode(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <figure className="home-opening-media">
            <img
              src={`${base}images/observer-hero.jpg`}
              alt="Illustrative wooden early childhood learning space beside a garden courtyard"
            />
            <figcaption>
              <span className="home-media-label">01 / LEARNING ENVIRONMENT</span>
              <span>{pair(...illustrativeCaption)}</span>
            </figcaption>
          </figure>
        </div>
        <div className="home-stat-strip" aria-label="Observer at a glance">
          <div className="home-stat">
            <span>{pair('å›­æ‰€æ¡£æ¡ˆ', 'School profiles')}</span>
            <strong>{String(schools.length).padStart(2, '0')}</strong>
            <small>{pair('åˆ†å¸ƒäºŽç¾Žå›½ä¸Žæ—¥æœ¬', 'Across the United States and Japan')}</small>
          </div>
          <div className="home-stat">
            <span>{pair('å›½å®¶æ\u00a0ç›®', 'Country portals')}</span>
            <strong>{String(countries.length).padStart(2, '0')}</strong>
            <small>{pair('ç‹¬ç«‹çš„å›½å®¶ä¸Žåœ°æ–¹èƒŒæ™¯', 'National and local context')}</small>
          </div>
          <div className="home-stat">
            <span>{pair('å›­æ‰€åŽŸå§‹æ¥æº', 'School source links')}</span>
            <strong>{String(sourceCount).padStart(2, '0')}</strong>
            <small>{pair('æŒ‰æ¡£æ¡ˆè®°å½•', 'Listed in school profiles')}</small>
          </div>
          <div className="home-stat">
            <span>{pair('æ¡£æ¡ˆæ\u00a0¸éªŒæ—¥æœŸ', 'Latest profile check')}</span>
            <strong className="home-stat-date">{latestChecked || '—'}</strong>
            <small>{pair('å›­æ‰€æ¡£æ¡ˆçš„æœ€æ–°æ\u00a0¸éªŒè®°å½•', 'Most recent date listed in a school profile')}</small>
          </div>
        </div>
      </section>

      <section className="home-country-section" id="country-portals" aria-labelledby="country-title">
        <div className="home-wide-wrap">
          <div className="home-section-intro">
            <span className="eyebrow">START WITH A COUNTRY</span>
            <h2 id="country-title">
              {pair(
                'ä¸¤å›½åˆ¶åº¦è§†è§’ï¼Œç‹¬ç«‹ç›®å½•ä¸Žæ”¿ç­–è¯æ®',
                'Two national systems, structured for direct comparison.',
              )}
            </h2>
            <p>
              {pair(
                'æ¯ä¸ªå›½å®¶æ\u00a0ç›®åŒºåˆ†å›­æ‰€å®žè·µä¸Žå›½å®¶æˆ–åœ°æ–¹åˆ¶åº¦ï¼Œä¾¿äºŽä»Žä¸ªæ¡ˆè¿›å…¥ï¼Œå†æŸ¥çœ‹ç›¸åº”çš„åˆ¶åº¦èƒŒæ™¯ã€‚',
                'Each portal separates individual school practices from national or local frameworks, so you can move from a specific example to its wider context.',
              )}
            </p>
          </div>
          <div className="home-country-grid">
            {countries.map((country) => {
              const count = schools.filter((school) => school.country === country.slug).length
              const topicLinks = [
                ['centres', ['å›­æ‰€ç›®å½•', 'School directory']],
                ['sector', ['行业与政策', 'Sector & policy']],
                ['curriculum', ['ç†å¿µä¸Žè¯¾ç¨‹', 'Curriculum']],
                ['operations', ['ç»è¥ä¸Žç®¡ç†', 'Operations']],
                ['types', ['æœºæž„ç±»åž‹', 'Provider types']],
              ]
              return (
                <article className="home-country-card" key={country.slug}>
                  <Link className="home-country-photo" to={'/' + country.slug}>
                    <img src={countryImages[country.slug]} alt="" loading="lazy" />
                    <span className="home-country-photo-caption">{pair(...illustrativeCaption)}</span>
                  </Link>
                  <div className="home-country-body">
                    <div className="home-country-kicker">
                      <span>{country.code}</span>
                      <span>{pair(`${count} æ‰€æ\u00a0·æœ¬å›­æ‰€`, `${count} sample schools`)}</span>
                    </div>
                    <h3>{pair(...country.title)}</h3>
                    <p className="home-country-description">{pair(...country.description)}</p>
                    <nav className="home-country-topics" aria-label={`${country.name[1]} topics`}>
                      {topicLinks.map(([section, label]) => (
                        <Link
                          key={section}
                          to={section === 'centres' ? `/${country.slug}` : `/${country.slug}/${section}`}
                        >
                          {pair(...label)}
                        </Link>
                      ))}
                    </nav>
                    <Link className="home-country-cta" to={'/' + country.slug}>
                      {pair(`è¿›å…¥${country.name[0]}æ\u00a0ç›®`, `Explore ${country.name[1]} portal`)}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="home-directory" id="school-directory" aria-labelledby="directory-title">
        <div className="home-wide-wrap">
          <div className="home-directory-heading">
            <div>
              <span className="eyebrow">SCHOOL DIRECTORY</span>
              <h2 id="directory-title">
                {pair('æŒ‰åœ°åŒºä¸Žæ•™è‚²ç†å¿µæµè§ˆå›­æ‰€æ¡ˆä¾‹', 'Browse profiles by country and approach')}
              </h2>
            </div>
            <label className="home-search">
              <span aria-hidden="true">⌕</span>
              <span className="sr-only">{pair('æœç´¢æ\u00a0·æœ¬å›­æ‰€', 'Search school profiles')}</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search school, location or approach…"
                aria-label="Search school, location or approach"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} aria-label="Clear search">×</button>
              )}
            </label>
          </div>
          <div className="home-directory-toolbar">
            <div className="home-filter-tabs" role="group" aria-label="Filter schools by country">
              {filterButtons.map((filter) => (
                <button
                  className={
                    (filter.id === 'all' && countryFilter === 'all' && approachFilter === 'all') ||
                    (filter.id.startsWith('approach:') && countryFilter === 'all' && approachFilter === filter.id.slice(9)) ||
                    (filter.id === countryFilter && filter.id !== 'all' && approachFilter === 'all')
                      ? 'active'
                      : ''
                  }
                  key={filter.id}
                  type="button"
                  aria-pressed={
                    (filter.id === 'all' && countryFilter === 'all' && approachFilter === 'all') ||
                    (filter.id.startsWith('approach:') && countryFilter === 'all' && approachFilter === filter.id.slice(9)) ||
                    (filter.id === countryFilter && filter.id !== 'all' && approachFilter === 'all')
                  }
                  onClick={() => {
                    if (filter.id.startsWith('approach:')) {
                      setCountryFilter('all')
                      setApproachFilter(filter.id.slice(9))
                    } else {
                      setCountryFilter(filter.id)
                      setApproachFilter('all')
                    }
                  }}
                >
                  {pair(...filter.label)}
                </button>
              ))}
            </div>
            {(query || countryFilter !== 'all' || approachFilter !== 'all') && (
              <button className="home-filter-reset" type="button" onClick={resetFilters}>
                {pair('é‡ç½®ç­›é€‰', 'Reset filters')}
              </button>
            )}
            <span className="home-result-count">
              {pair(
                `æ˜¾ç¤º ${filteredSchools.length} / ${schools.length} æ‰€`,
                `${filteredSchools.length} of ${schools.length} profiles`,
              )}
            </span>
          </div>
          {filteredSchools.length ? (
            <div className="home-school-grid" aria-live="polite">
              {filteredSchools.map((school) => (
                <Link
                  className="home-school-card"
                  to={`/${school.country}/centres/${school.id}`}
                  aria-labelledby={`home-school-${school.id}`}
                  key={school.id}
                >
                  <div className="home-school-meta">
                    <span className="home-school-code">{school.code}</span>
                    <span>{pair(...school.location)}</span>
                    <span>{pair(...school.ages)}</span>
                  </div>
                  <h3 id={`home-school-${school.id}`}>{pair(...school.name)}</h3>
                  <p className="home-school-original" lang={school.country === 'japan' ? 'ja' : undefined}>
                    {school.original !== school.name[1] && <>{restoreLegacyText(school.original)} <span aria-hidden="true">·</span> </>}
                    {pair(...school.approachLabel)}
                  </p>
                  <p className="home-school-summary">{pair(...school.summary)}</p>
                  <div className="home-school-bottom">
                    <span>{pair('æ\u00a0¸éªŒæ—¥æœŸ', 'Checked')} {school.checked}</span>
                    <span className="home-school-profile-link">
                      {pair('æŸ¥çœ‹æ¡£æ¡ˆ', 'View profile')} <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="home-no-results">
              <p>{pair('æœªæ‰¾åˆ°åŒ¹é…çš„å›­æ‰€æ¡£æ¡ˆ', 'No matching school profiles found')}</p>
              <button type="button" onClick={resetFilters}>{pair('æ¸…é™¤ç­›é€‰', 'Clear filters')}</button>
            </div>
          )}
          <p className="home-directory-note">
            {pair(
              'è¿™æ˜¯æ\u00a0·æœ¬ç›®å½•ï¼Œå¹¶éžå…¨é¢åå½•æˆ–æŽ¨èæŽ’åã€‚æ¡£æ¡ˆæŒ‰åŽŸå§‹å‡ºå¤„æ•´ç†ï¼Œç¼ºå¤±ä¿¡æ¯ä¿ç•™ä¸ºæœªçŸ¥ã€‚',
              'This is a sample directory, not a comprehensive census or ranking. Profiles follow their cited sources; missing information remains unknown.',
            )}
          </p>
        </div>
      </section>

      <section className="home-context-section" aria-labelledby="profile-reading-title">
        <div className="home-wide-wrap home-context-grid">
          <div className="home-profile-anatomy">
            <span className="eyebrow">HOW TO READ A SCHOOL PROFILE</span>
            <h2 id="profile-reading-title">
              {pair(
                'ä¸€æ‰€å›­ï¼Œä¸æ­¢ä¸€ä¸ªåå­—ã€‚\nåŒºåˆ†æ—¥å¸¸å®žè·µä¸Žåˆ¶åº¦èƒŒæ™¯ã€‚',
                'A school is more than a name.\nRead practice in its wider context.',
              )}
            </h2>
            <p className="home-context-intro">
              {pair(
                'æ¯ä»½æ¡£æ¡ˆå›´ç»•å…·ä½“åœ°ç‚¹æˆ–å­¦å‰é¡¹ç›®æ•´ç†ï¼ŒåŒºåˆ†å›­æ‰€è‡ªå·±çš„æ•™è‚²æ–¹é’ˆä¸Žå›½å®¶æˆ–åœ°æ–¹æ”¿ç­–ã€‚',
                'Each profile represents a specific site or early years programme. School statements are kept separate from national and local rules.',
              )}
            </p>
            <div className="home-profile-anatomy-list">
              {profileSections.map(([zhTitle, enTitle, zhText, enText], index) => (
                <div className="home-profile-anatomy-row" key={enTitle}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{pair(zhTitle, enTitle)}</h3>
                  <p>{pair(zhText, enText)}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="home-editorial-aside">
            <div className="home-operations-card">
              <div className="home-operations-photo">
                <img src={`${base}images/observer-materials.jpg`} alt="Illustrative early learning materials and observation notebook" />
                <span>{pair(...illustrativeCaption)}</span>
              </div>
              <div className="home-operations-content">
                <span className="eyebrow">OPERATIONS & MANAGEMENT</span>
                <h3>{pair('é¢å‘å›­é•¿çš„å®žè·µæ¡†æž¶', 'Field notes for centre directors')}</h3>
                {latestArticles.map((article) => (
                  <Link className="home-article-link" to={`/japan/operations/${article.id}`} key={article.id}>
                    <span>
                      <small>{pair(...article.category)} · {article.time} min</small>
                      <strong>{pair(...article.title)}</strong>
                    </span>
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
