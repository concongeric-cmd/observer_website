import { Link } from 'react-router'
import { countries } from '../data/countries'
import { schools } from '../data/schools'
import useLanguage from '../hooks/useLanguage'
import Garden from '../components/common/Garden'
export default function HomePage() {
  const { pair } = useLanguage()
  return (
    <div className="home-page">
      <section className="home-hero">
        <div>
          <span className="eyebrow">
            US–JAPAN EARLY CHILDHOOD EDUCATION OBSERVER
          </span>
          <h1>
            {pair(
              '了解世界的幼教，\n启发自己的实践。',
              'Understand early education.\nInform your own practice.',
            )}
          </h1>
          <p>
            {pair(
              '为幼儿园举办者、园长与教育管理者，整理美国和日本的园所信息、教育方针与经营实践。让国际经验变得可查、可理解、可借鉴。',
              'A reference for early childhood owners, directors and education leaders: explore schools, educational policies and operating practices in the United States and Japan.',
            )}
          </p>
          <a className="button primary" href="#countries">
            {pair('选择国家，开始探索', 'Choose a country to explore')} 
          </a>
        </div>
        <div className="home-illustration">
          <span className="eyebrow">TWO COUNTRIES. SHARED QUESTIONS.</span>
          <Garden />
          <span>
            {pair(
              '教育环境示意 · 非真实园所',
              'Illustrative learning environment · not an actual school',
            )}
          </span>
        </div>
      </section>
      <section className="home-purpose">
        <div className="purpose-heading">
          <span className="eyebrow">WHY THIS OBSERVER EXISTS</span>
          <h2>
            {pair(
              '从看见差异，到理解做法。',
              'From noticing differences to understanding practice.',
            )}
          </h2>
        </div>
        <p className="purpose-intro">
          {pair(
            '我们希望帮助经营管理者理解：不同园所如何组织教学、支持教师、服务家庭，又如何在各自制度下持续运营。通过园所案例、政策背景与原始资料，把宏观制度和日常实践放在一起观察。',
            'We help education leaders understand how schools organise learning, support educators, work with families and sustain their work within different systems. School profiles, policy context and original sources bring the wider system into view alongside everyday practice.',
          )}
        </p>
        <div className="purpose-points">
          {[
            [
              '01',
              '找到园所',
              'Discover schools',
              '按地区与理念浏览具体园所，了解各自的环境、服务对象与办学方向。',
              'Explore schools by location and approach, with a clearer view of their settings, communities and priorities.',
            ],
            [
              '02',
              '理解实践',
              'Understand practice',
              '把教育方针与具体做法联系起来，观察理念如何落实在日常工作中。',
              'Connect policy with practical choices and see how educational ideas take shape in daily work.',
            ],
            [
              '03',
              '回到证据',
              'Follow the evidence',
              '查看原始出处与更新时间，理解每项资料能够说明什么、又有哪些边界。',
              'Check original sources and dates, and understand what each piece of evidence can and cannot tell us.',
            ],
          ].map(([n, a, b, c, d]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{pair(a, b)}</h3>
              <p>{pair(c, d)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="country-gateways" id="countries">
        <div className="section-heading">
          <div>
            <span className="eyebrow">START WITH A COUNTRY</span>
            <h2>
              {pair(
                '两国视角，一个探索入口。',
                'Two perspectives. Your starting point.',
              )}
            </h2>
          </div>
        </div>
        <div className="gateway-grid">
          {countries.map((c) => (
            <Link
              key={c.slug}
              to={'/' + c.slug}
              className={'country-gateway gateway-' + c.code.toLowerCase()}
            >
              <span className="gateway-code">{c.code}</span>
              <div>
                <span className="eyebrow">COUNTRY COLLECTION</span>
                <h3>{pair(...c.name)}</h3>
                <p>
                  {pair(
                    '园所目录 · 行业政策 · 课程与管理',
                    'School directory · Sector policy · Curriculum & operations',
                  )}
                </p>
                <span className="gateway-bottom">
                  {pair(
                    schools.filter((s) => s.country === c.slug).length +
                      '所样本园所',
                    '' +
                      schools.filter((s) => s.country === c.slug).length +
                      ' sample schools',
                  )}
                  <strong>{pair('进入国家栏目', 'Explore country')} ↗</strong>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-reading">
        <div>
          <span className="eyebrow">HOW TO READ A SCHOOL PROFILE</span>
          <h2>
            {pair('一所园，不止一个名字。', 'A school is more than a name.')}
          </h2>
          <p>
            {pair(
              '每份档案围绕具体地点或学前项目整理，区分园所自己的教育方针与国家或地方的政策。',
              'Each profile represents a specific site or early years programme. A school’s own policies are kept separate from national and local rules.',
            )}
          </p>
        </div>
        <div className="profile-preview-list">
          {[
            [
              '基本信息',
              'School essentials',
              '地点、类型、年龄与服务',
              'Location, type, ages and services',
            ],
            [
              '教育方针与实践',
              'Policy & practice',
              '公开理念、课程和实施做法',
              'Published principles, curriculum and implementation',
            ],
            [
              '经营与家园服务',
              'Operations & families',
              '收费、人员、安排与沟通',
              'Fees, staffing, organisation and communication',
            ],
            [
              '原始来源与边界',
              'Sources & limitations',
              '核验日期与明确的数据缺口',
              'Check dates and explicit information gaps',
            ],
          ].map(([a, b, c, d], i) => (
            <div key={b}>
              <span>0{i + 1}</span>
              <h3>{pair(a, b)}</h3>
              <p>{pair(c, d)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
