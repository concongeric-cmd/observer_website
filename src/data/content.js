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
    title: '保育所等関連状況取りまとめ（令和8年4月1日）',
    url: 'https://www.cfa.go.jp/policies/hoiku/torimatome/r8/',
    period: '2026-04-01',
    checked: '2026-11-12',
  },
  fuji: {
    name: 'ふじようちえん · Fuji Kindergarten',
    title: '教育方針 · Educational policy',
    url: 'https://fujikids.jp/guide/educational-policy/',
    checked: '2026-11-12',
  },
  mextEvaluation: {
    name: '文部科学省 · Ministry of Education, Culture, Sports, Science and Technology',
    title: '幼児理解に基づいた評価 / Assessment based on understanding young children',
    url: 'https://www.mext.go.jp/a_menu/shotou/youchien/07121724/1296261.htm',
    checked: '2026-11-12',
  },
  mhlwGuidelines: {
    name: '厚生労働省 · Ministry of Health, Labour and Welfare',
    title: '保育所保育指針 / Guidelines for Nursery School Care',
    url: 'https://www.mhlw.go.jp/web/t_doc?dataId=00010450&dataType=0',
    checked: '2026-11-12',
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
    time: 6,
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
          '2026年4月1日，日本保育所等利用定员为3,016,417人、利用儿童为2,646,756人、待机儿童为2,435人，定员充足率为87.7%。这是儿童家庭厅暂定数据，熊本县资料尚未确定；统计范围是报告所覆盖的保育服务，并非所有学前教育机构的总量。',
          'On 1 April 2026, the Children and Families Agency reported capacity of 3,016,417, 2,646,756 children using provision and 2,435 children on waiting lists, with 87.7% utilisation. The figures are provisional while Kumamoto Prefecture data are pending. They cover the childcare services in the report, not every early education institution.',
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
      {
        title: ['把需求拆成可核对的表格', 'Turn demand into a checkable worksheet'],
        text: [
          '可按年龄段逐行记录：居住儿童人数与来源、咨询和候补人数、实际入园人数、可用名额、家庭希望的星期与时段、通勤距离，以及数据日期。每个字段标注地区边界、统计周期、收集方法和负责人；无法核实的值留空并写明原因。',
          'Create one row per age band and record the local child population and source, enquiries and waiting pool, enrolled children, available places, preferred days and hours, travel distance, and date. For every field, note the geographic boundary, period, collection method and owner. Leave unverifiable values blank and state why.'
        ],
      },
      {
        title: ['用条件清单筛选可行方案', 'Screen options against operating conditions'],
        text: [
          '只有在需求信号持续出现时再比较方案：先核对许可、人员配置、空间、预算、接送与邻近服务；再把需求按年龄和时段与可提供容量对齐。建议先做有期限的小规模调整，预先写明负责人、成本、观察指标和复核日期。法规或许可条件应向所在地主管机关确认。',
          'Compare options only after a demand signal persists: check licensing, staffing, space, budget, transport and nearby provision, then match demand by age and time to available capacity. If appropriate, pilot a time-limited change with an owner, cost, measures and review date. Confirm legal and licensing conditions with the local authority.'
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
    time: 6,
    color: 'sand',
    kind: ['基于国家指导纲要的编辑框架', 'Guideline-based editorial framework'],
    source: 'mextEvaluation',
    blocks: [
      {
        title: ['先确定需要回答的问题', 'Start with a question'],
        text: [
          '文部科学省的《幼児理解に基づいた評価》强调从儿童的具体表现理解其兴趣、体验与发展，并据此改善保育。团队可先把问题缩小到一项日常实践，例如户外活动中的材料选择，再确定观察点，避免无目的地增加记录。本文的会议流程是编辑建议，不是某家园所已实施的制度。',
          'MEXT’s guidance on assessment based on understanding young children asks educators to interpret children’s concrete actions, interests and experiences, then use that understanding to improve practice. A team could focus on one routine, such as children’s choices of outdoor materials, and agree what to observe before adding records. The meeting sequence below is editorial advice, not an observed centre procedure.',
        ],
      },
      {
        title: ['明确角色与讨论边界', 'Agree roles and discussion boundaries'],
        text: [
          '编辑建议将讨论分为观察、解释与下一步行动，标明记录、主持和跟进责任。讨论儿童的表现时回到具体情境与记录，避免把解释写成事实。对儿童与家庭的个人信息应限制用途和访问。',
          'For a team discussion, separate observation, interpretation and next action, and assign responsibility for recording, facilitation and follow-up. Return to the context and evidence instead of treating an interpretation as a fact. Limit the purpose and access scope for personal information about children and families.',
        ],
      },
      {
        title: ['用一次复盘结束一个循环', 'Close the loop with a review'],
        text: [
          '每次讨论形成少量可执行行动，写清负责人、完成时间与复核日期。复核时检查行动是否完成、是否影响儿童的游戏与体验、记录负担是否合理，再决定是否继续。该流程尚无园所实施或效果数据。',
          'End each discussion with a small number of actions, owners, due dates and a review point. Review completion, effects on children’s play and experience, and recording workload before deciding what to do next. No implementation or outcome data are available for this editorial framework.',
        ],
      },
      {
        title: ['用一页记录单保护证据边界', 'Use a one-page record to protect evidence boundaries'],
        text: [
          '实用记录可分三栏：可观察事实（时间、情境、儿童的言行）、团队解释（注明是谁的理解）和待验证的问题。记录应服务于具体改进目的，避免无必要的个人信息；按园所隐私制度限定访问，并设定删除或复核时间。',
          'A practical record can separate observable facts (time, context and what the child did or said), team interpretation (identify whose interpretation it is), and questions to check. Collect only what serves a defined improvement purpose, limit access under the provider’s privacy rules, and set a review or deletion date.'
        ],
      },
      {
        title: ['试行后看行动与负担', 'Review actions and workload after a trial'],
        text: [
          '选一项日常实践试行一至两周，记录行动是否完成、儿童是否获得不同的参与机会、教师新增了多少工作，以及是否出现意外影响。与试行前的观察对照，但小样本只能帮助团队提问，不能据此宣称因果效果；若发现儿童安全或福祉风险，应立即按园所程序处理。',
          'Trial one routine for one or two weeks and record whether actions were completed, whether children had different opportunities to participate, the added staff workload and any unintended effects. Compare with earlier observations, but treat a small sample as a prompt for discussion, not causal proof. Address any safety or wellbeing concern through the provider’s procedures.'
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
    time: 6,
    color: 'rose',
    kind: ['基于保育所保育指针的编辑框架', 'Guideline-based editorial framework'],
    source: 'mhlwGuidelines',
    blocks: [
      {
        title: ['把服务过程画出来', 'Make the service journey visible'],
        text: [
          '厚生劳动省《保育所保育指针》要求园所借日常交流传达并收集儿童情况、说明保育意图，以促进与家长的相互理解。基于这一要求，本文提出将咨询、参观、申请与入园适应画成旅程图；这是一种编辑工具，不是已观察到的园所流程。',
          'Japan’s Nursery School Care Guidelines call for daily communication that shares and gathers information about children and explains the purpose of care, supporting mutual understanding with families. This article proposes mapping enquiries, visits, applications and settling in as an editorial tool; it is not a documented centre workflow. Adapt it to local requirements and each provider’s procedures.',
        ],
      },
      {
        title: [
          '让信息一致，也给差异留出空间',
          'Keep information consistent and allow for differences',
        ],
        text: [
          '可检查收费说明、服务时段、申请材料与回应方式是否一致，并留出收集家庭信息与说明日常保育意图的机会。对语言、无障碍、健康或其他个别支持需求，应与家庭沟通并在必要时与相关机构协作；统一模板不能代替个别判断。',
          'Check consistency in fee explanations, service hours, application materials and response channels, while making room to gather information about the child and explain daily practice. Discuss language, accessibility, health or other individual support needs with the family and, where needed, relevant agencies. A standard form does not replace individual judgment.',
        ],
      },
      {
        title: [
          '记录问题，而不是预设成效',
          'Record questions without assuming results',
        ],
        text: [
          '可记录常见重复问题、信息遗漏与家庭反馈，作为下一轮检查的依据。遵守保密原则，限定个人信息的用途和访问范围。没有前后可比数据时，不宣称流程改善提高了招生、满意度或留存。',
          'Use recurring questions, missed information and family feedback to inform the next review. Protect confidentiality and limit the purpose and access scope of personal information. Without comparable before-and-after data, do not claim improved enrolment, satisfaction or retention.',
        ],
      },
      {
        title: ['逐个触点检查信息与责任人', 'Check information and ownership at each touchpoint'],
        text: [
          '建立咨询、参观、申请、录取、入园前沟通和适应期六个触点。每一处列出家庭应收到的信息、需要家庭提供的内容、负责员工、回应时限、可用语言与无障碍方式，并链接到当前收费表、服务时段和申请材料。内容变更时指定维护者和生效日期。',
          'Map six touchpoints: enquiry, visit, application, offer, pre-entry communication and settling-in. At each point list what families receive and provide, the staff owner, response time, language and accessibility options, and links to the current fee schedule, service hours and application materials. Assign an owner and effective date to each update.'
        ],
      },
      {
        title: ['为例外情形准备升级路径', 'Prepare an escalation path for exceptions'],
        text: [
          '说明未录取、候补、材料缺失、语言协助、健康或支持需求、费用困难及投诉分别由谁接手、多久回应、如何转交。工作人员应遵循所在地法律、园所政策与家庭授权；涉及紧急健康或安全问题时走既定应急程序，而不是等待常规服务复盘。',
          'State who handles non-placement, the applicant pool, missing documents, language support, health or additional support needs, financial difficulty and complaints; give response times and handoff points. Follow local law, provider policy and family consent. Use established emergency procedures for urgent health or safety issues instead of waiting for a routine service review.'
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
