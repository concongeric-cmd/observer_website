import { Link, useLocation, useParams } from 'react-router'
import { schools } from '../data/schools'
import { caseSections, schoolCaseMedia } from '../data/schoolCaseLayout'
import useCountry from '../hooks/useCountry'
import useLanguage from '../hooks/useLanguage'
import NotFoundPage from './NotFoundPage'
import SchoolReferences from '../components/directory/SchoolReferences'
import SchoolDataVisuals from '../components/directory/SchoolDataVisuals'
import SchoolCaseHeroVisual from '../components/directory/SchoolCaseHeroVisual'
import SchoolCaseBlocks from '../components/directory/SchoolCaseBlocks'
import MissingData from '../components/common/MissingData'

function Value({ value, compact = false }) {
  const { pair } = useLanguage()
  return value?.some(Boolean) ? (
    pair(...value)
  ) : (
    <MissingData compact={compact} />
  )
}

function CaseSection({ id, title, kicker, children }) {
  const { pair } = useLanguage()
  const section = caseSections.find((item) => item.id === id)
  return (
    <section
      className="case-section"
      id={id}
      aria-labelledby={'case-heading-' + id}
    >
      <div className="case-tag">{kicker || section.kicker}</div>
      <h2 id={'case-heading-' + id}>{pair(...(title || section.title))}</h2>
      {children}
    </section>
  )
}

function RecordCards({ records = [] }) {
  const { pair } = useLanguage()
  if (!records.length) return <MissingData />
  return (
    <div className="case-card-grid">
      {records.map(([zhTitle, enTitle, zhBody, enBody], index) => (
        <article className="case-card" key={enTitle || index}>
          <h3>
            <Value value={[zhTitle, enTitle]} compact />
          </h3>
          <p>{zhBody || enBody ? pair(zhBody, enBody) : <MissingData />}</p>
        </article>
      ))}
    </div>
  )
}

export default function SchoolPage() {
  const country = useCountry()
  const location = useLocation()
  const { schoolId } = useParams()
  const { pair } = useLanguage()
  const school = schools.find(
    (item) => item.id === schoolId && item.country === country.slug,
  )
  if (!school) return <NotFoundPage />

  const directoryPath =
    '/' + country.slug + (location.state?.directorySearch || '')
  const sources = school.sources || []
  const schedule = school.dailySchedule || []
  const media = schoolCaseMedia[school.id] || []
  const operations = school.operations || {}
  const study = school.caseStudy || {}
  const sections = study.sections || {}
  const facts = study.facts || [
    { label: ['服务年龄', 'Age range'], value: school.ages },
    {
      label: ['教育理念', 'Educational approach'],
      value: school.approachLabel,
    },
    {
      label: ['原始来源', 'Primary sources'],
      value: [String(sources.length), String(sources.length)],
      numeric: true,
    },
    {
      label: ['资料查阅日期', 'Sources checked'],
      value: [school.checked, school.checked],
      numeric: true,
    },
  ]

  return (
    <article className="school-case" key={school.id}>
      <section className="case-hero">
        <div className="case-wrap case-hero-grid">
          <div className="case-hero-copy">
            <div className="case-tag">
              <Value value={school.location} compact /> · {school.code}
            </div>
            <h1>{pair(...school.name)}</h1>
            <p className="case-original">
              {school.original || <MissingData compact />}
            </p>
            <h2>
              <Value value={study.heroTitle || school.approachLabel} compact />
            </h2>
            <p className="case-introduction">
              <Value value={study.heroIntro || school.summary} compact />
            </p>
            <Link className="case-back-link" to={directoryPath}>
              <span aria-hidden="true">←</span>{' '}
              {pair('返回园所目录', 'Back to directory')}
            </Link>
          </div>
          <SchoolCaseHeroVisual school={school} />
        </div>
      </section>

      <nav className="case-contents" aria-label="School profile contents">
        <div className="case-wrap">
          {caseSections.map((section) => (
            <Link key={section.id} to={'#' + section.id} state={location.state}>
              {pair(...section.label)}
            </Link>
          ))}
        </div>
      </nav>

      <div className="case-wrap">
        <dl className="case-stats" id="essentials">
          {facts.map((fact) => (
            <div
              key={fact.label[1]}
              className={fact.numeric ? 'case-stat-numeric' : ''}
            >
              <dd>
                <Value value={fact.value} compact />
              </dd>
              <dt>{pair(...fact.label)}</dt>
            </div>
          ))}
        </dl>

        {study.identity && (
          <p className="case-section-intro">
            <Value value={study.identity} />
          </p>
        )}

        <div className="case-identity">
          <span>
            {pair('学校原名', 'Original name')}:{' '}
            {school.original || <MissingData compact />}
          </span>
          <span>
            {pair('所在地', 'Location')}:{' '}
            <Value value={school.location} compact />
          </span>
          {study.facts && (
            <span>
              {pair('教育理念', 'Educational approach')}:{' '}
              <Value value={school.approachLabel} compact />
            </span>
          )}
        </div>

        <CaseSection id="day" title={sections.day?.title}>
          {sections.day ? (
            <SchoolCaseBlocks blocks={sections.day.blocks} />
          ) : (
            <p className="case-section-intro">
              {pair(
                '展开时间节点，查看本档案已收集的日程说明。',
                'Expand each time slot to explore the schedule information collected in this profile.',
              )}
            </p>
          )}
          {schedule.length ? (
            <div className="case-timetable">
              {schedule.map((item, index) => (
                <details key={item.time?.[1] || index} open={index === 0}>
                  <summary>
                    <strong>
                      <Value value={item.time} compact />
                    </strong>
                    <span>
                      <Value
                        value={
                          study.schedule?.[index]?.activity || item.activity
                        }
                        compact
                      />
                    </span>
                  </summary>
                  <div className="case-timetable-detail">
                    <span className="case-field-label">
                      {pair('活动说明', 'Activity notes')}
                    </span>
                    <Value
                      value={item.details || study.schedule?.[index]?.details}
                    />
                  </div>
                </details>
              ))}
            </div>
          ) : (
            <MissingData />
          )}
          <div className="case-visual-block">
            <SchoolDataVisuals school={school} view="hours" />
          </div>
        </CaseSection>

        <CaseSection id="spaces" title={school.campusTitle}>
          <RecordCards records={school.campus || []} />
          {media.length > 0 && (
            <div className="case-photos">
              {media.map((photo) => (
                <figure key={photo.file}>
                  <img
                    src={
                      import.meta.env.BASE_URL +
                      'images/school-cases/' +
                      photo.file
                    }
                    alt={photo.caption[1]}
                    loading="lazy"
                    width="1024"
                    height="768"
                  />
                  <figcaption>
                    <span>{pair(...photo.caption)}</span>
                    <span className="case-photo-credit">
                      <a href={photo.source} target="_blank" rel="noreferrer">
                        {photo.credit} ↗
                      </a>
                      {' · '}
                      <a href={photo.license} target="_blank" rel="noreferrer">
                        CC BY 2.0
                      </a>
                      {' · '}
                      {photo.year}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </CaseSection>

        <CaseSection
          id="curriculum"
          title={sections.curriculum?.title}
          kicker={sections.curriculum?.kicker}
        >
          <span className="case-anchor" id="school-policy" />
          {sections.curriculum && (
            <SchoolCaseBlocks blocks={sections.curriculum.blocks} />
          )}
          {sections.curriculum && (
            <h3 className="case-subheading">
              {pair(
                '原有档案中的教育方针与实践',
                'Additional policy and practice notes',
              )}
            </h3>
          )}
          <article className="case-card case-policy-card">
            <h3>
              {pair(
                '学校公开的教育方针',
                'The school’s stated educational policy',
              )}
            </h3>
            {school.policy?.length ? (
              school.policy.map(([zhTitle, enTitle, zhBody, enBody], index) => (
                <div className="case-policy-record" key={enTitle || index}>
                  <h4>
                    <Value value={[zhTitle, enTitle]} compact />
                  </h4>
                  <p>
                    <Value value={[zhBody, enBody]} />
                  </p>
                </div>
              ))
            ) : (
              <MissingData />
            )}
          </article>
          <span className="case-anchor" id="school-practice" />
          <h3 className="case-subheading">
            {pair('做法与策略', 'Practices and strategies')}
          </h3>
          <RecordCards records={school.strategies || []} />
        </CaseSection>

        <CaseSection id="staff" title={sections.staff?.title}>
          {sections.staff ? (
            <>
              <SchoolCaseBlocks blocks={sections.staff.blocks} />
              <p className="case-reference-meta">
                <Value value={operations.staffing} />
              </p>
            </>
          ) : (
            <div
              className="case-table-wrap"
              tabIndex={0}
              role="region"
              aria-label="Staffing and safety information"
            >
              <table>
                <thead>
                  <tr>
                    <th>{pair('项目', 'Topic')}</th>
                    <th>
                      {pair('已收集的资料', 'Information in this profile')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      {pair('人员与师幼配置', 'Staffing & ratios')}
                    </th>
                    <td>
                      <Value value={operations.staffing} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      {pair('安全与接送制度', 'Safety & collection procedures')}
                    </th>
                    <td>
                      <Value value={operations.safety} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </CaseSection>

        <CaseSection id="families" title={sections.families?.title}>
          {sections.families ? (
            <SchoolCaseBlocks blocks={sections.families.blocks} />
          ) : (
            <div className="case-callout">
              <h3>
                {pair('招生与家庭沟通', 'Admissions & family communication')}
              </h3>
              <p>
                <Value value={operations.family} />
              </p>
            </div>
          )}
        </CaseSection>

        <CaseSection id="operations" title={sections.operations?.title}>
          <span className="case-anchor" id="school-operations" />
          {sections.operations ? (
            <>
              <SchoolCaseBlocks blocks={sections.operations.blocks} />
              <div className="case-callout">
                <h3>{pair('开放时间与日程', 'Hours & schedules')}</h3>
                <p>
                  <Value value={operations.hours} />
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="case-card-grid">
                <article className="case-card">
                  <h3>{pair('开放时间与日程', 'Hours & schedules')}</h3>
                  <p>
                    <Value value={operations.hours} />
                  </p>
                </article>
                <article className="case-card">
                  <h3>
                    {pair('管理计划与成效', 'Management plans & outcomes')}
                  </h3>
                  <p>
                    <Value value={operations.management} />
                  </p>
                </article>
              </div>
              <h3 className="case-subheading">
                {pair('费用与资助', 'Fees & financial support')}
              </h3>
              <SchoolDataVisuals school={school} view="metrics" />
              <div className="case-visual-block">
                <SchoolDataVisuals school={school} view="tuition" />
              </div>
            </>
          )}
        </CaseSection>

        <CaseSection id="learning" title={sections.china?.title}>
          <span className="case-anchor" id="china" />
          {sections.china ? (
            <SchoolCaseBlocks blocks={sections.china.blocks} />
          ) : (
            <>
              <p className="case-section-intro">
                {pair(
                  '这一栏目用于记录结合本校背景、可供其他学校进一步探索的想法。',
                  'This section holds ideas for other schools to explore, with the original school’s context in mind.',
                )}
              </p>
              <RecordCards records={school.transferIdeas || []} />
            </>
          )}
        </CaseSection>

        <CaseSection id="sources" title={sections.sources?.title}>
          <span className="case-anchor" id="school-sources" />
          {sections.sources && (
            <SchoolCaseBlocks blocks={sections.sources.blocks} />
          )}
          <div className="case-callout">
            <p>
              {pair(
                '本档案保留学校公开资料与原始链接，未收集的信息会明确标注。学校自述不等于独立验证；收录不构成推荐或排名。',
                'This profile retains published school information and original links, with uncollected information marked explicitly. School statements are not independent verification; inclusion is not a recommendation or ranking.',
              )}
            </p>
            <p className="case-source-date">
              {study.provenance
                ? pair(
                    '原有档案资料查阅日期',
                    'Original profile sources checked',
                  )
                : pair('资料查阅日期', 'Sources checked')}
              : {school.checked || <MissingData compact />}
            </p>
            {study.provenance && (
              <p className="case-source-date">
                {pair('案例资料日期', 'Case study source date')}:{' '}
                {study.provenance.checkedAt}
              </p>
            )}
          </div>
          <SchoolDataVisuals
            school={school}
            view="coverage"
            coverageDetails={false}
          />
          <SchoolReferences school={school} />
          <Link className="case-directory-link" to={directoryPath}>
            ← {pair('返回园所目录', 'Back to directory')}
          </Link>
        </CaseSection>
      </div>
    </article>
  )
}
