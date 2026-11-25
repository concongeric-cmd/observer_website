import { useId, useState } from 'react'
import { pedagogyCurriculum } from '../../data/pedagogyCurriculum'
import { curriculumExamples } from '../../data/curriculumExamples'
import useCountry from '../../hooks/useCountry'
import useLanguage from '../../hooks/useLanguage'
import MissingData from '../common/MissingData'
import DetailModalCard from '../common/DetailModalCard'

const areaDescriptions = {
  japan: [
    ['身体活动、生活节奏、安全与身心健康。', 'Movement, daily habits, safety, and well-being.'],
    ['与成人建立信任，与同伴合作并理解他人。', 'Trust with adults, cooperation, and empathy with peers.'],
    ['探索自然、材料、季节与日常环境。', 'Explore nature, materials, seasons, and everyday surroundings.'],
    ['倾听、交流想法并分享故事。', 'Listen, share ideas, and tell stories.'],
    ['通过动作、艺术、声音与游戏表达感受。', 'Convey ideas and feelings through movement, art, sound, and play.'],
  ],
  'united-states': [
    ['主动尝试、持续投入并灵活调整。', 'Initiative, persistence, and flexible thinking.'],
    ['建立关系、理解情绪并与同伴合作。', 'Relationships, understanding emotions, and working with peers.'],
    ['倾听、交流并用语言理解故事。', 'Listening, communicating, and making sense of stories.'],
    ['观察、推理、预测并解决问题。', 'Observing, reasoning, predicting, and solving problems.'],
    ['运用感官、协调身体动作并操作材料。', 'Using the senses, coordinating movement, and handling materials.'],
  ],
}

export default function PedagogyCurriculumPage() {
  const { slug } = useCountry()
  const { pair, text } = useLanguage()
  const [activityIndex, setActivityIndex] = useState(0)
  const activityId = useId()
  const content = pedagogyCurriculum[slug]
  if (!content) return <section className="country-topic-content"><MissingData /></section>

  const japan = slug === 'japan'
  const [play, domains, planning, comparison] = content.blocks
  const examples = curriculumExamples[slug]
  const [, ...activityExamples] = examples[activityIndex]
  const steps = [
    {
      title: japan ? ['国家指导', 'National guidance'] : ['州与项目指导', 'State and program guidance'],
      summary: japan
        ? ['先根据机构类型核对适用的国家方针。', 'Identify the national guidance that applies to the facility type.']
        : ['先核对州、年龄组与项目要求。', 'Identify the state, age group, and applicable program requirements.'],
      detail: japan ? content.intro : play.text,
    },
    {
      title: ['园所课程计划', 'Provider curriculum plan'],
      summary: ['把指导目标融入课程、日程与家庭协作。', 'Connect learning aims to the curriculum, daily routines, and family partnerships.'],
      detail: planning.text,
    },
    {
      title: ['游戏与学习环境', 'Play and the learning environment'],
      summary: ['通过空间、材料和教师支持丰富日常游戏。', 'Use spaces, materials, and educator support to enrich everyday play.'],
      detail: japan ? play.text : [
        '观察儿童如何选择材料、与同伴合作，以及教师何时提问或提供帮助。',
        'Notice how children choose materials and work with peers, and when educators ask questions or offer support.',
      ],
    },
  ]
  const checklist = [
    [
      ['机构类型与适用指导', 'Provider type and applicable guidance'],
      japan
        ? ['确认是幼稚园、保育所还是认定儿童园，并核对适用方针。', 'Check the applicable guidance for kindergartens, nursery schools, or certified centres.']
        : ['记录州、年龄组和项目类型，并核对适用要求。', 'Record the state, age group, and program type, then check applicable requirements.'],
    ],
    [
      ['理念如何体现在日程中', 'Philosophy in the daily rhythm'],
      ['查看日程和活动实例如何体现园所目标。', 'Look for schedules and activities that show how the provider puts its aims into practice.'],
    ],
    [
      ['儿童主导的游戏与户外活动', 'Child-led play and outdoor activity'],
      ['比较自由游戏时间、户外机会与可选材料。', 'Compare time for free play, outdoor access, and the choice of materials.'],
    ],
    [
      ['教师观察与反思', 'Educator observation and reflection'],
      ['查看教师如何记录儿童的经验并据此调整活动。', 'Look for how educators record children’s experiences and use them to adjust activities.'],
    ],
  ]

  function detailLink(label, title, description) {
    return (
      <DetailModalCard
        className="curriculum-dashboard-link"
        ariaLabel={text(`${label[0]}：${title[0]}`, `${label[1]}: ${title[1]}`)}
        eyebrow={pair('教学与课程', 'PEDAGOGY & CURRICULUM')}
        title={pair(...title)}
        preview={pair(...label)}
      >
        <p>{pair(...description)}</p>
      </DetailModalCard>
    )
  }

  return (
    <section className="country-topic-content curriculum-content curriculum-dashboard">
      <header className="section-heading curriculum-dashboard-title">
        <div>
          <span className="eyebrow">{pair('在游戏中学习', 'WHERE PLAY BECOMES LEARNING')}</span>
          <h2>{pair('教学与课程', 'Pedagogy & Curriculum')}</h2>
        </div>
      </header>
      <div className="curriculum-dashboard-top">
        <header>
          <span className="eyebrow">{pair('从指导到实践', 'GUIDANCE TO PRACTICE')}</span>
          <h2>{japan
            ? pair('国家方针提供共同方向，园所据此规划课程。', 'National guidance sets a shared direction. Each provider shapes its curriculum.')
            : pair('课程取决于州、项目和园所。', 'Curriculum depends on the state, program, and provider.')}</h2>
          <p>{pair(...content.intro)}</p>
        </header>
        <section className="curriculum-dashboard-sources">
          <h2 className="eyebrow">{japan
            ? pair('主要国家指导文件', 'PRIMARY NATIONAL FRAMEWORKS')
            : pair('主要指导来源', 'PRIMARY GUIDANCE SOURCES')}</h2>
          {content.sources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
              <small>{japan ? pair(...source.publisher.split(' · ')) : source.publisher}</small>
              <strong>{pair(...source.title)}</strong>
            </a>
          ))}
        </section>
      </div>

      <section className="curriculum-dashboard-areas">
        <div className="curriculum-activity-heading">
          <header>
            <span className="eyebrow">{pair('主题 02 · 五个领域', 'TOPIC 02 · FIVE AREAS')}</span>
            <h2>{japan
              ? pair('从五个角度看一次游戏', 'Five lenses for one play experience')
              : pair('在一次游戏中探索 Head Start 五个领域', 'Explore the five Head Start domains through play')}</h2>
            <p>{pair('选择一项活动，查看五个领域如何相互联系。', 'Choose an activity to see how the five areas can connect.')}</p>
          </header>
          <div className="curriculum-activity-controls" role="group" aria-label={text('活动示例', 'Example activity')}>
            {examples.map(([label], index) => (
              <button
                type="button"
                key={label[1]}
                aria-pressed={index === activityIndex}
                aria-controls={activityId}
                onClick={() => setActivityIndex(index)}
              >
                {pair(...label)}
              </button>
            ))}
          </div>
        </div>
        <div className="curriculum-dashboard-panel" id={activityId}>
          <div className="curriculum-panel-heading">
            <strong aria-live="polite">{pair(...examples[activityIndex][0])}</strong>
            {detailLink(['阅读框架说明', 'Read framework details'], domains.title, domains.text)}
          </div>
          <div className="curriculum-area-grid">
            {domains.items.map((area, index) => (
              <article className="curriculum-dashboard-tile" key={area[1]}>
                <h3>{pair(...area)}</h3>
                <p>{pair(...areaDescriptions[slug][index])}</p>
                <div className="curriculum-activity-example">
                  <span className="eyebrow">{pair('活动示例', 'IN THIS ACTIVITY')}</span>
                  <p>{pair(...activityExamples[index])}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="curriculum-practice-grid">
        <section className="curriculum-dashboard-panel">
          <span className="eyebrow">{pair('主题 01 与 03 · 从指导到日常游戏', 'TOPICS 01 & 03 · FROM GUIDANCE TO DAILY PLAY')}</span>
          <h2>{pair('指导方针如何落实到日常实践', 'How guidance becomes daily practice')}</h2>
          <div className="curriculum-step-grid">
            {steps.map((step, index) => (
              <DetailModalCard
                className="curriculum-dashboard-tile curriculum-step-card"
                key={step.title[1]}
                ariaLabel={text(...step.title)}
                eyebrow={pair('步骤 ' + (index + 1), 'STEP ' + (index + 1))}
                title={pair(...step.title)}
                preview={(
                  <span className="curriculum-step-preview">
                    <span className="curriculum-step-heading">
                      <span className="eyebrow">{pair('步骤 ' + (index + 1), 'STEP ' + (index + 1))}</span>
                      <strong className="curriculum-step-title">{pair(...step.title)}</strong>
                    </span>
                    <span className="curriculum-step-summary">{pair(...step.summary)}</span>
                    <span className="curriculum-step-action">{pair('查看说明', 'Read full note')}</span>
                  </span>
                )}
              >
                <p>{pair(...step.detail)}</p>
              </DetailModalCard>
            ))}
          </div>
        </section>
        <section className="curriculum-dashboard-panel">
          <div className="curriculum-panel-heading">
            <span className="eyebrow">{pair('主题 04 · 比较清单', 'TOPIC 04 · COMPARISON CHECKLIST')}</span>
            {detailLink(['查看完整指南', 'Full guide'], comparison.title, comparison.text)}
          </div>
          <h2>{pair('比较园所档案时看什么', 'What to compare in school profiles')}</h2>
          <ul className="curriculum-checklist">
            {checklist.map(([title, description]) => (
              <li key={title[1]}>
                <strong>{pair(...title)}</strong>
                <p>{pair(...description)}</p>
              </li>
            ))}
          </ul>
          <small className="curriculum-dashboard-note">
            {pair('公开档案反映园所描述的做法。若要了解日常实施情况，请查阅其他资料或实地观察。', 'Published profiles describe stated practice. Use additional evidence or direct observation to assess what happens day to day.')}
          </small>
        </section>
      </div>
    </section>
  )
}
