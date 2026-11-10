export const sections = [
  [
    'sector',
    '行业与政策',
    'Sector & policy',
    '人口、供给与制度背景',
    'Population, provision and policy',
  ],
  [
    'types',
    '机构类型',
    'Provider types',
    '理解不同制度与运营主体',
    'Understand systems and operators',
  ],
  [
    'curriculum',
    '理念与课程',
    'Pedagogy & curriculum',
    '从教育理念到日常实践',
    'From educational ideas to daily practice',
  ],
  [
    'operations',
    '经营与管理',
    'Operations & management',
    '面向园长的实践与思考',
    'Practical perspectives for directors',
  ],
  [
    'centres',
    '园所案例',
    'Centre cases',
    '走进具体园所的日常',
    'A closer look at individual centres',
  ],
  [
    'companies',
    '企业观察',
    'Company profiles',
    '组织、服务与运营支持',
    'Organisations, services and support',
  ],
  [
    'technology',
    '科技与服务',
    'Technology & services',
    '让工具服务于保教工作',
    'Tools that support education and care',
  ],
]
export const sources = {
  cfa: {
    name: 'こども家庭庁 · Children and Families Agency',
    title: '保育所等関連状況取りまとめ（令和7年4月1日）',
    url: 'https://www.cfa.go.jp/policies/hoiku/torimatome/r7/',
    period: '2025-04-01',
    checked: '2026-11-09',
  },
  fuji: {
    name: 'ふじようちえん · Fuji Kindergarten',
    title: '教育方針 · Educational policy',
    url: 'https://fujikids.jp/guide/educational-policy/',
    checked: '2026-11-09',
  },
}
export const articles = [
  {
    id: 'local-demand',
    category: ['需求与供给', 'Demand & supply'],
    title: [
      '少子化之下，先看清本地需求',
      'Fewer births. A closer look at local demand.',
    ],
    intro: [
      '把全国趋势转化为园所决策之前，先建立一张地区需求检查表。',
      'Build a local demand checklist before translating national trends into centre decisions.',
    ],
    time: 4,
    color: 'sage',
    kind: ['编辑分析', 'Editorial analysis'],
    source: 'cfa',
    blocks: [
      {
        title: [
          '全国数据，是讨论的起点',
          'National figures start the conversation',
        ],
        text: [
          '2025年4月1日，日本保育所等利用定员为303万人，利用儿童为268万人，定员充足率为88.4%。这些数字属于报告所覆盖的保育体系，并非所有学前教育机构的总量。',
          'On 1 April 2025, the report recorded capacity of 3.03 million, 2.68 million children using provision, and 88.4% utilisation. These figures cover the report’s childcare systems, rather than every early education institution.',
        ],
      },
      {
        title: [
          '为本地决策准备四类资料',
          'Prepare four inputs for a local decision',
        ],
        text: [
          '建议将招生年龄人口、家庭需要的服务时段、周边同类供给，以及本园分年龄的定员与在园人数放在一起核对。各项数据须记录地区、时期和来源，缺失字段保留为空。',
          'Review the local age-eligible population, families’ required hours, comparable nearby provision, and your own capacity and enrolment by age. Record geography, period and source for each input; preserve missing fields as unknown.',
        ],
      },
      {
        title: [
          '先做小范围验证，再调整服务',
          'Validate demand before changing services',
        ],
        text: [
          '编辑建议：通过咨询记录与家庭访谈识别未满足需求，再评估人员、场地和许可条件。延长时段或调整年龄结构应有明确的服务目标与复核日期，不能仅凭全国数据判断是否需要缩减定员。',
          'Editorial suggestion: use enquiry records and family conversations to identify unmet demand, then assess staffing, premises and licensing conditions. Changes to hours or age mix need an explicit service objective and review date. National totals alone cannot determine a centre’s capacity decision.',
        ],
      },
    ],
    steps: [
      ['需求', 'Demand'],
      ['供给', 'Supply'],
      ['条件', 'Conditions'],
      ['复核', 'Review'],
    ],
  },
  {
    id: 'team-review',
    category: ['团队与质量', 'Teams & quality'],
    title: [
      '把观察变成团队共同的工作',
      'Make observation a shared team practice',
    ],
    intro: [
      '一份可讨论的工作框架：从观察记录到行动与复盘。',
      'A discussion framework connecting observations, actions and review.',
    ],
    time: 3,
    color: 'sand',
    kind: ['编辑工作框架', 'Editorial framework'],
    source: null,
    blocks: [
      {
        title: ['先确定需要回答的问题', 'Start with a question'],
        text: [
          '这是用于展示内容形式的编辑工作框架，不是某家园所已实施的制度。团队可以先选一个具体问题，例如交接时信息是否完整，并确定需要记录什么，避免无目的地增加文书工作。',
          'This editorial framework demonstrates the content format; it is not an observed centre procedure. A team could choose a specific question, such as whether handovers contain sufficient information, and agree what to record before adding documentation.',
        ],
      },
      {
        title: ['明确角色与讨论边界', 'Agree roles and discussion boundaries'],
        text: [
          '建议明确记录人、讨论主持人和行动负责人。记录应聚焦可观察事实，讨论时区分观察与解释。涉及儿童和家庭的内容应仅向有权限的人员开放。',
          'Assign responsibility for recording, facilitating discussion and following up actions. Keep observable facts separate from interpretation, and limit access to child and family information to authorised people.',
        ],
      },
      {
        title: ['用一次复盘结束一个循环', 'Close the loop with a review'],
        text: [
          '每次讨论只形成少量具体行动，写清负责人、所需时间与下次复核点。复盘时检查行动是否完成、工作负担是否可接受，以及是否需要继续收集证据。该框架尚无实测效果数据。',
          'End each discussion with a small number of actions, owners, time requirements and a review point. Check completion, workload and whether more evidence is needed. No measured outcome data are available for this framework.',
        ],
      },
    ],
    steps: [
      ['提问', 'Question'],
      ['观察', 'Observe'],
      ['行动', 'Act'],
      ['复盘', 'Review'],
    ],
  },
  {
    id: 'family-journey',
    category: ['招生与家园', 'Families & enrolment'],
    title: [
      '从第一次咨询开始，梳理家园服务',
      'Map family service from the first enquiry',
    ],
    intro: [
      '用服务旅程发现信息断点，让家长知道下一步。',
      'Use a service journey to reveal information gaps and clarify next steps.',
    ],
    time: 3,
    color: 'rose',
    kind: ['编辑工作框架', 'Editorial framework'],
    source: null,
    blocks: [
      {
        title: ['把服务过程画出来', 'Make the service journey visible'],
        text: [
          '此文提供用于讨论的编辑示例。将咨询、参观、申请与入园适应作为四个阶段，逐项记录家庭需要的信息、园方负责人和下一步。实际流程应按当地要求和本园制度调整。',
          'This is an editorial example for discussion. Map enquiries, visits, applications and settling in as four stages. For each, record what families need to know, who responds and what happens next. Adapt the process to local requirements and centre procedures.',
        ],
      },
      {
        title: [
          '让信息一致，也给差异留出空间',
          'Keep information consistent and allow for differences',
        ],
        text: [
          '可检查收费说明、服务时段、申请所需材料和回应方式是否一致。语言、无障碍和个别支持需要单独沟通；不要以统一模板代替对家庭具体情况的了解。',
          'Check consistency in fee explanations, service hours, application documents and response channels. Discuss language, accessibility and individual support separately; a standard template should not replace understanding a family’s circumstances.',
        ],
      },
      {
        title: [
          '记录问题，而不是预设成效',
          'Record questions without assuming results',
        ],
        text: [
          '可记录常见重复问题、交接遗漏和家庭反馈，用于下一次流程讨论。若没有前后可比数据，不宣称流程优化提高了招生或留存。任何收集的信息都应限定用途与访问范围。',
          'Recurring questions, missed handovers and family feedback can inform the next process discussion. Without comparable before-and-after data, do not claim improved enrolment or retention. Limit the purpose and access scope of collected information.',
        ],
      },
    ],
    steps: [
      ['咨询', 'Enquire'],
      ['参观', 'Visit'],
      ['申请', 'Apply'],
      ['适应', 'Settle in'],
    ],
  },
]
