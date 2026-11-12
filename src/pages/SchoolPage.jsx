import { Link, useLocation, useParams } from 'react-router'
import { schools } from '../data/schools'
import useCountry from '../hooks/useCountry'
import useLanguage from '../hooks/useLanguage'
import NotFoundPage from './NotFoundPage'
import { getProviderTypeLabel } from '../data/providerTypes'
import ProviderTypeBadges from '../components/directory/ProviderTypeBadges'
import ProviderClassification from '../components/directory/ProviderClassification'
export default function SchoolPage() {
  const country = useCountry()
  const location = useLocation()
  const search = location.state?.directorySearch || ''
  const directoryPath = '/' + country.slug + search
  const { schoolId } = useParams()
  const { pair } = useLanguage()
  const school = schools.find(
    (s) => s.id === schoolId && s.country === country.slug,
  )
  if (!school) return <NotFoundPage />
  const unknown = [
    '本档案尚未研究或收集；不代表园所没有该项',
    'Not yet researched or collected in this profile; this does not mean the school lacks it',
  ]
  return (
    <div className="school-profile">
      <Link className="school-back" to={directoryPath}>
        ← {pair('返回园所目录', 'Back to school directory')}
      </Link>
      <header className="school-profile-header">
        <div className="profile-record">
          <span className="eyebrow">SOURCE RECORD</span>
          <span className="record-monogram">{country.code}</span>
          <strong>{pair('基础档案', 'Basic profile')}</strong>
          <p>
            {pair('原始资料核验', 'Original sources checked')}
            <span>{school.checked}</span>
          </p>
          <p>
            {pair(
              '园方自述 · 非独立成效评价',
              'School-reported · not an independent outcome evaluation',
            )}
          </p>
        </div>
        <div>
          <span className="eyebrow">SCHOOL PROFILE / {school.code}</span>
          <h1>{pair(...school.name)}</h1>
          <p className="profile-original">{school.original}</p>
          <p>{pair(...school.location)}</p>
          <p className="profile-summary">{pair(...school.summary)}</p>
          <div className="school-tags">
            <ProviderTypeBadges school={school} />
            <span>{pair(...school.approachLabel)}</span>
          </div>
        </div>
      </header>
      <nav className="profile-anchors" aria-label="School profile contents">
        {[
          ['essentials', '基本信息', 'Essentials'],
          ['school-policy', '教育方针', 'School policy'],
          ['school-practice', '实践与策略', 'Practices & strategies'],
          ['school-operations', '运营与服务', 'Operations & services'],
          ['school-sources', '原始来源', 'Sources'],
        ].map(([id, zh, en], i) => (
          <a href={'#' + id} key={id}>
            <span>0{i + 1}</span>
            {pair(zh, en)}
          </a>
        ))}
      </nav>
      <section id="essentials" className="profile-section">
        <div className="profile-section-title">
          <span className="eyebrow">01 / ESSENTIALS</span>
          <h2>{pair('先了解这所园', 'Understand the school')}</h2>
        </div>
        <dl className="school-facts">
          {[
            [['所在地区', 'Location'], school.location],
            [['机构类型', 'Provider type'], getProviderTypeLabel(school)],
            [['教育理念', 'Educational approach'], school.approachLabel],
            [['年龄范围', 'Ages covered'], school.ages || unknown],
            [['认证身份', 'Accreditation'], unknown],
            [
              ['档案范围', 'Profile coverage'],
              ['具体园所或学前项目', 'Specific site or early years programme'],
            ],
          ].map(([label, value]) => (
            <div key={label[1]}>
              <dt>{pair(...label)}</dt>
              <dd>{pair(...value)}</dd>
            </div>
          ))}
        </dl>
        <ProviderClassification school={school} />
      </section>
      <section id="school-policy" className="profile-section">
        <div className="profile-section-title">
          <span className="eyebrow">02 / SCHOOL POLICY</span>
          <h2>{pair('园方的教育方针', 'The school’s educational policy')}</h2>
          <p>
            {pair(
              '园所层面的公开理念与制度，与国家法规分开。',
              'Published school-level principles and procedures, separate from national regulation.',
            )}
          </p>
        </div>
        <div className="school-practices">
          {school.policy.map(([a, b, c, d]) => (
            <div key={b}>
              <span className="evidence-tag">
                {pair('园方自述', 'School-reported')}
              </span>
              <h3>{pair(a, b)}</h3>
              <p>{pair(c, d)}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="school-practice" className="profile-section">
        <div className="profile-section-title">
          <span className="eyebrow">03 / PRACTICES & STRATEGIES</span>
          <h2>{pair('理念如何进入实践', 'From principles to practice')}</h2>
          <p>
            {pair(
              '以下为公开做法摘要，不代表内部完整战略或成效证明。',
              'Published practices, not a complete internal strategy or proof of outcomes.',
            )}
          </p>
        </div>
        <div className="school-practices">
          {school.strategies.map(([a, b, c, d], i) => (
            <div key={b}>
              <span className="practice-no">0{i + 1}</span>
              <h3>{pair(a, b)}</h3>
              <p>{pair(c, d)}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="school-operations" className="profile-section">
        <div className="profile-section-title">
          <span className="eyebrow">04 / OPERATIONS & SERVICES</span>
          <h2>{pair('经营与家园服务', 'Operations & family services')}</h2>
          <p>
            {pair(
              '未收集信息不代表园所没有该服务。',
              'Uncollected information does not mean a school lacks the service.',
            )}
          </p>
        </div>
        <dl className="school-facts">
          {[
            ['fees', '收费与资助', 'Fees & financial support'],
            ['staffing', '人员与师幼配置', 'Staffing & ratios'],
            ['hours', '开放时间与日程', 'Hours & daily schedule'],
            ['family', '招生与家庭沟通', 'Admissions & family communication'],
            ['safety', '安全与接送制度', 'Safety & collection procedures'],
            ['management', '管理计划与效果', 'Management plans & outcomes'],
          ].map(([key, zh, en]) => (
            <div key={key}>
              <dt>{pair(zh, en)}</dt>
              <dd>{pair(...(school.operations?.[key] || unknown))}</dd>
            </div>
          ))}
        </dl>
        {school.dailySchedule?.length > 0 && (
          <div className="daily-schedule">
            <h3>{pair('园方公布的一日流程', 'School-published daily schedule')}</h3>
            <ol>
              {school.dailySchedule.map((item) => (
                <li key={item.time[1]}>
                  <time>{pair(...item.time)}</time>
                  <span>{pair(...item.activity)}</span>
                </li>
              ))}
            </ol>
            <p>
              {pair(
                '这是园方公开的日程示例；实际每周安排可能不同。',
                'This is a school-published sample day; the weekly schedule may vary.',
              )}
            </p>
          </div>
        )}
      </section>
      <section id="school-sources" className="profile-section">
        <div className="profile-section-title">
          <span className="eyebrow">05 / ORIGINAL SOURCES</span>
          <h2>{pair('回到原始资料', 'Follow the original sources')}</h2>
          <p>
            {pair('资料查看日期：', 'Sources checked: ')} {school.checked}
          </p>
        </div>
        <div className="school-sources">
          {school.sources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="eyebrow">{source.language}</span>
              <strong>{source.title}</strong>
              <span>{pair('查看原文', 'Read original')} ↗</span>
            </a>
          ))}
          <p>
            {pair(
              '档案为基础资料摘要；未收集的信息不作推测。园方自述不等于独立验证，目录收录不构成推荐或排名。',
              'This basic profile summarises available material without estimating uncollected information. School statements are not independent verification; inclusion is not a recommendation or ranking.',
            )}
          </p>
        </div>
      </section>
      <Link className="button primary" to={directoryPath}>
        ← {pair('返回园所目录', 'Back to school directory')}
      </Link>
    </div>
  )
}
