import { useMemo, useState } from 'react'
import useLanguage from '../../hooks/useLanguage'
import { getVerifiedProviderTypes } from '../../data/providerTypes'

const hourValue = (hour, minute) => Number(hour) + Number(minute) / 60
const hourLabel = (value) => {
  const hour = Math.floor(value)
  const minute = Math.round((value - hour) * 60)
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
}

function readHours(text = '') {
  const matches = [...text.matchAll(/(\d{1,2}):(\d{2})\s*[–—-]\s*(\d{1,2}):(\d{2})/g)]
  const unique = new Map()
  for (const match of matches) {
    const start = hourValue(match[1], match[2])
    const end = hourValue(match[3], match[4])
    if (end > start) {
      const duration = end - start
      const kind = duration >= 2 ? 'core' : start >= 16 || end <= 8 ? 'extended' : 'support'
      unique.set(`${start}-${end}`, { start, end, label: match[0], kind })
    }
  }
  return [...unique.values()].sort((a, b) => a.start - b.start)
}

function readTuition(text = '') {
  const tiers = [...text.matchAll(/\$\s*([\d,]+)\s*(?:for\s*)?(two|three|five|\d+)\s*days?(?:\s*\/\s*week)?/gi)]
    .map((match) => ({ amount: Number(match[1].replaceAll(',', '')), days: match[2].toLowerCase() }))
  const discount = text.match(/(\d{1,2})%\s*(?:Stanford\s+)?(?:rate|discount)/i)
  const year = text.match(/(20\d{2})[–—-](\d{2,4})/)
  return {
    tiers,
    discountRate: discount ? Number(discount[1]) / 100 : 0,
    year: year ? `${year[1]}–${year[2]}` : '',
  }
}

function readAgeSpan(value = '') {
  const years = [...value.matchAll(/(\d+(?:\.\d+)?)\s*(weeks?|months?|years?|yrs?)/gi)]
  if (years.length >= 2) {
    const toYears = (match) => {
      const amount = Number(match[1])
      const unit = match[2].toLowerCase()
      return unit.startsWith('week') ? amount / 52 : unit.startsWith('month') ? amount / 12 : amount
    }
    return [toYears(years[0]), toYears(years[1])]
  }
  const range = value.match(/(\d+(?:\.\d+)?)\s*(?:to|[–—-])\s*(\d+(?:\.\d+)?)/i)
  if (range && /age|year|\by\b/i.test(value)) return [Number(range[1]), Number(range[2])]
  return null
}

const copy = {
  metrics: ['重點資料', 'KEY FIGURES'],
  session: ['課程時長', 'Session Length'],
  extended: ['延長照護時段', 'Extended Span'],
  tuition: ['學年學費', 'Tuition'],
  discount: ['符合資格的折扣', 'Eligible discount'],
  age: ['年齡範圍（0–6歲）', 'Age Coverage (0–6 Years)'],
  coverage: ['本檔案涵蓋項目', 'PROFILE COVERAGE MAP'],
  coverageNote: ['此圖顯示本檔案已收集的資料範圍，不代表園所沒有其他公開資訊。', 'This map shows what this profile contains; an uncollected item does not mean the school lacks published information.'],
  onFile: ['已收錄於檔案', 'In profile'],
  notCollected: ['尚未收集', 'Not collected'],
  pedagogy: ['教育方針與教學', 'Policy & pedagogy'],
  schedule: ['日程與一日流程', 'Hours & schedule'],
  fees: ['學費與資助', 'Tuition & aid'],
  staffing: ['人員與班級規模', 'Staffing & group size'],
  provider: ['機構類型', 'Provider classification'],
  family: ['家庭服務', 'Family services'],
  hoursTitle: ['開放時間與延長照護', 'OPERATING HOURS & EXTENDED CARE'],
  coverageWindow: ['每日服務時段', 'Schedule Timeline'],
  core: ['主要課程', 'Core Session'],
  support: ['早間／午間照護', 'Early / Midday'],
  care: ['延長照護', 'Extended Care'],
  am: ['上午時段', 'AM Session Track'],
  pm: ['下午時段', 'PM Session Track'],
  program: ['園所日程', 'Published day'],
  tuitionSchedule: ['已公布學費表', 'PUBLISHED TUITION SCHEDULE'],
  annualTier: ['每週出席天數與年學費', 'Annual tuition by weekly attendance'],
  applyDiscount: ['套用 Stanford 合資格折扣', 'Apply eligible Stanford discount'],
  perYear: ['／年', '/ yr'],
  tuitionNote: ['學費金額依園所公開資料整理；其他費用與資助以來源說明為準。', 'Tuition figures follow the school’s published information; see the source for additional fees and aid.'],
  rhythm: ['園方公布的一日流程', 'PUBLISHED DAILY RHYTHM'],
  daily: ['每日活動順序', 'Daily Sequence of Activities'],
}

export default function SchoolDataVisuals({ school }) {
  const { pair } = useLanguage()
  const [applyDiscount, setApplyDiscount] = useState(false)
  const schedule = school.dailySchedule || []
  const hours = useMemo(() => readHours(school.operations?.hours?.[1] || ''), [school])
  const tuition = useMemo(() => readTuition(school.operations?.fees?.[1] || ''), [school])
  const ageSpan = readAgeSpan(school.ages?.[1] || '')
  const verifiedTypes = getVerifiedProviderTypes(school)
  const coreRanges = hours.filter((range) => range.end - range.start >= 2)
  const minHour = hours.length ? Math.min(7, Math.floor(Math.min(...hours.map((item) => item.start)))) : 7
  const maxHour = hours.length ? Math.max(19, Math.ceil(Math.max(...hours.map((item) => item.end)))) : 19
  const coverageWidth = maxHour - minHour || 1
  const duration = coreRanges.length ? coreRanges[0].end - coreRanges[0].start : 0
  const totalSpan = hours.length ? Math.max(...hours.map((item) => item.end)) - Math.min(...hours.map((item) => item.start)) : 0
  const currency = school.country === 'japan' ? 'JPY' : 'USD'
  const money = (value) => new Intl.NumberFormat('en-US', {
    style: 'currency', currency, maximumFractionDigits: 0,
  }).format(value)
  const tuitionValues = tuition.tiers.map((tier) => tier.amount)
  const maxTuition = Math.max(...tuitionValues, 1)
  const discountFactor = applyDiscount && tuition.discountRate ? 1 - tuition.discountRate : 1
  const yearsMax = 6
  const ageLeft = ageSpan ? Math.max(0, Math.min(100, ageSpan[0] / yearsMax * 100)) : 0
  const ageWidth = ageSpan ? Math.max(8, Math.min(100 - ageLeft, (ageSpan[1] - ageSpan[0]) / yearsMax * 100)) : 0
  const hasMetrics = Boolean(hours.length || tuition.tiers.length || tuition.discountRate)

  const coverageRows = [
    [copy.pedagogy, school.policy?.length || school.strategies?.length, school.policy?.[0]?.[1] || school.strategies?.[0]?.[1]],
    [copy.schedule, hours.length || schedule.length, school.operations?.hours?.[1] || schedule[0]?.activity?.[1]],
    [copy.fees, tuition.tiers.length || school.operations?.fees?.length, school.operations?.fees?.[1]],
    [copy.staffing, school.operations?.staffing?.length, school.operations?.staffing?.[1]],
    [copy.provider, verifiedTypes.length, verifiedTypes[0]?.source?.evidence?.[1]],
    [copy.family, school.operations?.family?.length, school.operations?.family?.[1]],
  ]

  return (
    <div className="school-visuals">
      {hasMetrics && (
        <section className="school-visual-metrics" aria-label={pair(...copy.metrics)}>
          {duration > 0 && (
            <article><span>{pair(...copy.session)}</span><strong>{duration.toFixed(1)} hrs</strong><small>{coreRanges.length > 1 ? `${hourLabel(coreRanges[0].start)}–${hourLabel(coreRanges[0].end)} · ${hourLabel(coreRanges[1].start)}–${hourLabel(coreRanges[1].end)}` : coreRanges[0] ? `${hourLabel(coreRanges[0].start)}–${hourLabel(coreRanges[0].end)}` : ''}</small></article>
          )}
          {totalSpan > 0 && (
            <article><span>{pair(...copy.extended)}</span><strong>{hourLabel(Math.min(...hours.map((item) => item.start)))}–{hourLabel(Math.max(...hours.map((item) => item.end)))}</strong><small>{school.operations?.hours ? pair('根據園所公開日程整理', 'Based on published schedule') : ''}</small></article>
          )}
          {tuition.tiers.length > 0 && (
            <article><span>{pair(...copy.tuition)}{tuition.year ? ` · ${tuition.year}` : ''}</span><strong>{money(Math.min(...tuitionValues))}–{money(Math.max(...tuitionValues))}</strong><small>{tuition.tiers.length} {pair('種每週出席方案', 'weekly attendance tiers')}</small></article>
          )}
          {tuition.discountRate > 0 && (
            <article><span>{pair(...copy.discount)}</span><strong>{Math.round(tuition.discountRate * 100)}% off</strong><small>{pair('僅適用於園方列明的資格', 'Eligibility follows the school’s terms')}</small></article>
          )}
        </section>
      )}

      <div className="school-visual-secondary">
        {ageSpan && (
          <section className="school-visual-card school-age-card">
            <div><span className="eyebrow">{pair(...copy.age)}</span><h2>{pair(...school.ages)}</h2></div>
            <div className="age-ruler" role="img" aria-label={`${school.ages[1]} age range on a zero to six year scale`}>
              {[1, 2, 3, 4, 5].map((year) => <i key={year} style={{ left: `${year / yearsMax * 100}%` }} />)}
              <span className="age-ruler-bar" style={{ left: `${ageLeft}%`, width: `${ageWidth}%` }}>{ageSpan[0] < 1 ? `${Math.round(ageSpan[0] * 12)}m` : `${ageSpan[0]}y`}–{ageSpan[1]}y</span>
            </div>
            <div className="age-ruler-labels">{[0, 1, 2, 3, 4, 5, 6].map((year) => <span key={year}>{year}y</span>)}</div>
          </section>
        )}

        <section className="school-visual-card school-coverage-card">
          <div className="coverage-heading"><span className="eyebrow">{pair(...copy.coverage)}</span><p>{pair(...copy.coverageNote)}</p></div>
          <div className="coverage-grid">
            {coverageRows.map(([label, exists, detail]) => (
              <article key={label[1]} className={exists ? 'covered' : 'uncovered'}>
                <span className="coverage-status" aria-hidden="true">{exists ? '●' : '○'}</span>
                <div><h3>{pair(...label)}</h3><small>{exists ? pair(...copy.onFile) : pair(...copy.notCollected)}</small>{detail && <p>{detail}</p>}</div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {hours.length > 0 && (
        <section className="school-visual-card school-hours-card">
          <div className="visual-section-heading">
            <div><span className="eyebrow">{pair(...copy.hoursTitle)}</span><h2>{pair(...copy.coverageWindow)} ({String(minHour).padStart(2, '0')}:00–{String(maxHour).padStart(2, '0')}:00)</h2></div>
            <div className="hours-legend"><span className="legend-core">{pair(...copy.core)}</span><span className="legend-support">{pair(...copy.support)}</span><span className="legend-care">{pair(...copy.care)}</span></div>
          </div>
          <div className="hours-chart">
            <div className="hours-axis"><span />{Array.from({ length: Math.max(2, Math.floor(coverageWidth / 2) + 1) }, (_, index) => minHour + index * 2).filter((value) => value <= maxHour).map((value) => <span key={value}>{String(value).padStart(2, '0')}:00</span>)}</div>
            {(() => {
              const splitAt = 12.5
              const hasAmPm = coreRanges.length > 1
              const tracks = hasAmPm
                ? [[copy.am, hours.filter((item) => item.start < splitAt)], [copy.pm, hours.filter((item) => item.end > splitAt)]]
                : [[copy.program, hours]]
              return tracks.map(([label, segments]) => (
                <div className="hours-track-row" key={label[1]}><strong>{pair(...label)}</strong><div className="hours-track" style={{ '--hours-min': minHour, '--hours-width': coverageWidth }}>
                  {Array.from({ length: Math.max(0, coverageWidth - 1) }, (_, index) => <i key={index} style={{ left: `${(index + 1) * 2 / coverageWidth * 100}%` }} />)}
                  {segments.map((segment) => {
                    const left = Math.max(0, (segment.start - minHour) / coverageWidth * 100)
                    const width = (segment.end - segment.start) / coverageWidth * 100
                    return <span className={`hours-segment ${segment.kind}`} key={segment.label} style={{ left: `${left}%`, width: `${width}%` }} title={segment.label}>{segment.label}</span>
                  })}
                </div></div>
              ))
            })()}
          </div>
        </section>
      )}

      {tuition.tiers.length > 0 && (
        <section className="school-visual-card school-tuition-card">
          <div className="visual-section-heading tuition-heading">
            <div><span className="eyebrow">{pair(...copy.tuitionSchedule)}{tuition.year ? ` · ${tuition.year}` : ''}</span><h2>{pair(...copy.annualTier)}</h2></div>
            {tuition.discountRate > 0 && <label className="discount-control"><input type="checkbox" checked={applyDiscount} onChange={(event) => setApplyDiscount(event.target.checked)} />{pair(...copy.applyDiscount)} ({Math.round(tuition.discountRate * 100)}%)</label>}
          </div>
          <div className="tuition-bars">
            {tuition.tiers.map((tier) => {
              const amount = Math.round(tier.amount * discountFactor)
              const dayLabel = ({ two: '2', three: '3', five: '5' })[tier.days] || tier.days
              return <div className="tuition-row" key={`${tier.days}-${tier.amount}`}><div className="tuition-label"><span>{dayLabel} {pair('天／週', 'days / week')}</span><strong>{money(amount)} <small>{pair(...copy.perYear)}</small></strong></div><div className="tuition-bar-track"><span style={{ width: `${Math.max(4, tier.amount / maxTuition * 100)}%` }} /></div></div>
            })}
          </div>
          <p className="visual-note">{school.operations?.fees?.[1]}</p>
        </section>
      )}

      {schedule.length > 0 && (
        <section className="school-visual-card school-rhythm-card">
          <div className="visual-section-heading"><div><span className="eyebrow">{pair(...copy.rhythm)}</span><h2>{pair(...copy.daily)}</h2></div><span className="rhythm-icon" aria-hidden="true">◷</span></div>
          <ol className="dossier-timeline">
            {schedule.map((item, index) => <li key={item.time[1]}><span className="dossier-step">{String(index + 1).padStart(2, '0')}</span><span className="dossier-activity">{pair(...item.activity)}</span><time>{pair(...item.time)}</time></li>)}
          </ol>
        </section>
      )}
    </div>
  )
}
