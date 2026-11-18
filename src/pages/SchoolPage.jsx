import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router'
import { schools } from '../data/schools'
import useCountry from '../hooks/useCountry'
import useLanguage from '../hooks/useLanguage'
import NotFoundPage from './NotFoundPage'
import ProviderClassification from '../components/directory/ProviderClassification'
import SchoolDataVisuals from '../components/directory/SchoolDataVisuals'

const operationLabels = [
  ['hours', 'Hours & schedules', '開放時間與日程'],
  ['fees', 'Fees & financial support', '收費與資助'],
  ['staffing', 'Staffing & ratios', '人員與師幼配置'],
  ['family', 'Admissions & family communication', '招生與家庭溝通'],
  ['safety', 'Safety & collection procedures', '安全與接送制度'],
  ['management', 'Management plans & outcomes', '管理計劃與成效'],
]

const tabs = [
  ['overview', 'Data & daily rhythm', '資料與一日流程'],
  ['pedagogy', 'Policy & pedagogy', '教育方針與教學'],
  ['operations', 'Operations & notes', '營運與備註'],
]

export default function SchoolPage() {
  const country = useCountry()
  const location = useLocation()
  const search = location.state?.directorySearch || ''
  const directoryPath = '/' + country.slug + search
  const { schoolId } = useParams()
  const { pair } = useLanguage()
  const englishFirst = (en, zh) => pair(zh, en)
  const [activeTab, setActiveTab] = useState('overview')
  const school = schools.find(
    (s) => s.id === schoolId && s.country === country.slug,
  )

  if (!school) return <NotFoundPage />

  const unknown = [
    '本檔案尚未研究或收集；不代表園所沒有該項',
    'Not yet researched or collected in this profile; this does not mean the school lacks it',
  ]
  const factRows = [
    [['Original name', '原始名稱'], [school.original, school.original]],
    [['Location', '地區'], school.location],
    [['Ages', '年齡範圍'], school.ages || unknown],
  ]

  return (
    <div className="school-dossier">
      <header className="school-dossier-header">
        <div className="school-dossier-heading">
          <div className="school-dossier-title">
            <div className="school-dossier-kicker">
              <span>{country.code} · {school.code}</span>
              <span>{pair(...school.location)}</span>
              {school.ages && <span>{pair(...school.ages)}</span>}
            </div>
            <h1>{pair(...school.name)}</h1>
            <p className="school-dossier-original">{school.original}<span aria-hidden="true"> · </span>{pair(...school.approachLabel)}</p>
            <p className="school-dossier-summary">{pair(...school.summary)}</p>
          </div>
          <Link className="school-dossier-back" to={directoryPath}>
            <span aria-hidden="true">←</span> {englishFirst('Back to directory', '返回園所目錄')}
          </Link>
        </div>
      </header>

      <div className="school-dossier-tabs-wrap">
        <div className="school-dossier-tabs-row">
          <div className="school-dossier-tabs" role="tablist" aria-label={englishFirst('School profile sections', '園所檔案內容')}>
            {tabs.map(([id, en, zh]) => (
              <button
                key={id}
                id={`school-tab-${id}`}
                type="button"
                role="tab"
                aria-selected={activeTab === id}
                aria-controls={`school-panel-${id}`}
                onClick={() => setActiveTab(id)}
                className={activeTab === id ? 'active' : ''}
              >
                {englishFirst(en, zh)}
              </button>
            ))}
          </div>
          <span className="school-dossier-meta">
            {englishFirst('Sources checked', '資料查閱日期')}: {school.checked} · {school.sources.length} {englishFirst('primary sources', '項原始出處')}
          </span>
        </div>
      </div>

      <div className="school-dossier-layout">
        <main className="school-dossier-main">
          {activeTab === 'overview' && (
            <div id="school-panel-overview" role="tabpanel" aria-labelledby="school-tab-overview">
              <SchoolDataVisuals school={school} />
            </div>
          )}

          {activeTab === 'pedagogy' && (
            <div id="school-panel-pedagogy" role="tabpanel" aria-labelledby="school-tab-pedagogy" className="dossier-panel-stack">
              <section className="dossier-panel">
                <div className="dossier-panel-heading">
                  <span className="eyebrow">01 · EDUCATIONAL POLICY</span>
                  <h2>{englishFirst('The school’s stated educational policy', '園方公開立場與核心目標')}</h2>
                  <p>{pair('Published school-level principles and procedures, separate from national regulation.', '園所層面的公開理念與制度，與國家法規分開。')}</p>
                </div>
                <div className="dossier-detail-list">
                  {school.policy.map(([zhTitle, enTitle, zhBody, enBody]) => (
                    <article key={enTitle}>
                      <div><h3>{pair(zhTitle, enTitle)}</h3><p>{pair(zhBody, enBody)}</p></div>
                    </article>
                  ))}
                </div>
              </section>
              <section className="dossier-panel">
                <div className="dossier-panel-heading">
                  <span className="eyebrow">02 · PRACTICES & STRATEGIES</span>
                  <h2>{englishFirst('How educational ideas appear in daily work', '理念如何落實在班級與日常中')}</h2>
                  <p>{pair('Published practices, not a complete internal strategy or proof of outcomes.', '以下為公開做法摘要，不代表內部完整策略或成效證明。')}</p>
                </div>
                <div className="dossier-detail-list">
                  {school.strategies.map(([zhTitle, enTitle, zhBody, enBody]) => (
                    <article key={enTitle}>
                      <div><h3>{pair(zhTitle, enTitle)}</h3><p>{pair(zhBody, enBody)}</p></div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'operations' && (
            <div id="school-panel-operations" role="tabpanel" aria-labelledby="school-tab-operations" className="dossier-panel-stack">
              <section className="dossier-panel">
                <div className="dossier-panel-heading">
                  <span className="eyebrow">03 · OPERATIONS & FAMILY SERVICES</span>
                  <h2>{englishFirst('Hours, fees, staffing, and family touchpoints', '時間安排、收費、人員與家庭溝通')}</h2>
                  <p>{pair('Uncollected information does not mean a school lacks the service.', '未收集資訊不代表園所沒有該項服務。')}</p>
                </div>
                <div className="dossier-detail-list dossier-operations-list">
                  {operationLabels.map(([key, en, zh]) => (
                    <article key={key}>
                      <div><h3>{englishFirst(en, zh)}</h3><p>{pair(...(school.operations?.[key] || unknown))}</p></div>
                    </article>
                  ))}
                </div>
              </section>
              {school.dailySchedule?.length > 0 && (
                <section className="dossier-panel">
                  <div className="dossier-panel-heading">
                    <span className="eyebrow">SCHOOL-PUBLISHED RHYTHM</span>
                    <h2>{englishFirst('Daily schedule', '園方公布的一日流程')}</h2>
                  </div>
                  <ol className="dossier-schedule-list">
                    {school.dailySchedule.map((item) => (
                      <li key={item.time[1]}><time>{pair(...item.time)}</time><span>{pair(...item.activity)}</span></li>
                    ))}
                  </ol>
                  <p className="dossier-caption">{pair('This is a school-published sample day; the weekly schedule may vary.', '這是園方公開的一日流程示例；每週安排可能不同。')}</p>
                </section>
              )}
            </div>
          )}
        </main>

        <aside className="school-dossier-sidebar">
          <section className="dossier-side-card">
            <h2>{englishFirst('School essentials', '檔案基本資訊')}</h2>
            <dl>
              {factRows.map(([label, value]) => (
                <div key={label[0]}><dt>{englishFirst(...label)}</dt><dd>{pair(...value)}</dd></div>
              ))}
              <div><dt>{englishFirst('Sources checked', '資料查閱日期')}</dt><dd>{school.checked}</dd></div>
            </dl>
          </section>

          <section className="dossier-side-card dossier-classification-card">
            <ProviderClassification school={school} />
          </section>

          <section className="dossier-side-card">
            <h2>{englishFirst('Primary sources', '原始來源')}</h2>
            <ul className="dossier-sources-list">
              {school.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    <span>{source.title}</span><span aria-hidden="true">↗</span>
                  </a>
                  <small>{source.language}</small>
                </li>
              ))}
            </ul>
            <p className="dossier-source-note">{englishFirst('This basic profile summarises available material without estimating uncollected information. School statements are not independent verification; inclusion is not a recommendation or ranking.', '本檔案摘要現有資料，不推測未收集資訊。園方自述不等於獨立驗證；收錄不構成推薦或排名。')}</p>
          </section>
        </aside>
      </div>
    </div>
  )
}
