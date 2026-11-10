// Provider categories require a verified source record; an empty array means unverified.
export const schools = [
  {
    id: 'fuji-kindergarten',
    country: 'japan',
    code: 'JPS01',
    name: ['藤幼儿园', 'Fuji Kindergarten'],
    original: 'ふじようちえん',
    region: 'tokyo',
    location: ['东京都 · 立川市', 'Tachikawa · Tokyo'],
    approach: 'montessori',
    approachLabel: ['蒙台梭利活动', 'Montessori-based practice'],
    ages: null,
    summary: [
      '从环境设计、自主选择与自然体验，了解园方的教育方针。',
      'Explore the school’s stated approach to the environment, independent choice and nature.',
    ],
    policy: [
      [
        '尊重个体差异',
        'Respect for individual differences',
        '教育方针强调尊重每个儿童的特点，并支持其自主活动。',
        'The school’s educational policy emphasises individual differences and support for independent activity.',
      ],
    ],
    strategies: [
      [
        '环境与活动',
        'Environment & activity',
        '园方介绍了屋顶、园庭与沙地等活动环境。',
        'The school describes its roof, outdoor grounds and sand areas as settings for activity.',
      ],
      [
        '自然与食育',
        'Nature & food',
        '官网介绍农场种植、收获与餐食的联系。',
        'Its website describes connections between cultivation, harvesting and meals.',
      ],
    ],
    sources: [
      {
        title: '教育方針 / Educational policy',
        url: 'https://fujikids.jp/guide/educational-policy/',
        language: '日本語 / Japanese',
      },
    ],
    checked: '2026-11-09',
    providerClassifications: [],
  },
  {
    id: 'ochanomizu-kindergarten',
    country: 'japan',
    code: 'JPS02',
    name: ['御茶水女子大学附属幼稚园', 'Ochanomizu University Kindergarten'],
    original: 'お茶の水女子大学附属幼稚園',
    region: 'tokyo',
    location: ['东京都 · 文京区', 'Bunkyo · Tokyo'],
    approach: 'play',
    approachLabel: ['游戏与研究', 'Play & research'],
    ages: null,
    summary: [
      '通过园方公开的教育使命，了解游戏、儿童兴趣与大学附属园的研究职责。',
      'Read the school’s published mission connecting play, children’s interests and university-based research.',
    ],
    policy: [
      [
        '教育目标',
        'Educational goals',
        '园方提出珍视自己、他人与环境的教育愿望。',
        'The school identifies care for oneself, other people and the environment as educational aims.',
      ],
    ],
    strategies: [
      [
        '儿童兴趣与游戏',
        'Children’s interests & play',
        '教育姿态强调儿童按兴趣与周围环境互动。',
        'Its approach places importance on children engaging with their surroundings through their interests.',
      ],
      [
        '研究与公开实践',
        'Research & shared practice',
        '大学附属职责包括实习、研究，以及公开保育实践。页面另列经营计划与学校评价。',
        'Its university role includes practicum, research and sharing practice. The page also links to management plans and school evaluations.',
      ],
    ],
    sources: [
      {
        title: '教育の目的と使命 / Educational mission',
        url: 'https://www.fz.ocha.ac.jp/fy/outline/education.html',
        language: '日本語 / Japanese',
      },
      {
        title: '幼稚園の概要 / School overview',
        url: 'https://www.fz.ocha.ac.jp/fy/outline/summary.html',
        language: '日本語 / Japanese',
      },
    ],
    checked: '2026-11-09',
    providerClassifications: [
      {
        typeId: 'kindergarten',
        status: 'verified',
        source: {
          title: '教育の目的と使命 / Educational mission',
          url: 'https://www.fz.ocha.ac.jp/fy/outline/education.html',
          checkedAt: '2026-11-09',
          evidence: [
            '大学附属幼稚园官方页面明确列出园名与教育使命。',
            'The university’s official kindergarten page identifies the school and its educational mission.',
          ],
        },
      },
      {
        typeId: 'university-affiliated',
        status: 'verified',
        source: {
          title: '教育の目的と使命 / Educational mission',
          url: 'https://www.fz.ocha.ac.jp/fy/outline/education.html',
          checkedAt: '2026-11-09',
          evidence: [
            '官方页面明确说明大学附属园承担研究与实习的使命。',
            'The page explicitly describes its role as a university kindergarten for research and practicum.',
          ],
        },
      },
    ],
  },
  {
    id: 'wako-kindergarten',
    country: 'japan',
    code: 'JPS03',
    name: ['和光幼稚园', 'Wako Kindergarten'],
    original: '和光幼稚園',
    region: 'tokyo',
    location: ['东京都 · 世田谷区', 'Setagaya · Tokyo'],
    approach: 'play',
    approachLabel: ['游戏与共同生活', 'Play & shared life'],
    ages: null,
    summary: [
      '了解园方如何描述儿童的安全感、同伴关系与游戏生活。',
      'Explore the school’s description of belonging, peer relationships and play.',
    ],
    policy: [
      [
        '被接纳的安全感',
        'A sense of acceptance',
        '园方强调儿童被接纳的体验，以及由此建立的人际关系。',
        'The school emphasises children’s experience of being accepted and building relationships.',
      ],
    ],
    strategies: [
      [
        '参观与沟通',
        'Visits & communication',
        '官网介绍入园说明会，内容包括保育参观、园舍与教育介绍。',
        'Its website describes information sessions including observation, a campus introduction and educational explanations.',
      ],
      [
        '公开资料',
        'Published materials',
        '园方提供教育方针、生活、环境与自评资料入口，详细制度仍需逐项核验。',
        'The school provides gateways to educational policy, daily life, environment and evaluation materials. Detailed procedures require separate verification.',
      ],
    ],
    sources: [
      {
        title: '和光幼稚園 / Official website',
        url: 'https://wakok.wako.ed.jp/',
        language: '日本語 / Japanese',
      },
    ],
    checked: '2026-11-09',
    providerClassifications: [
      {
        typeId: 'kindergarten',
        status: 'verified',
        source: {
          title: '和光幼稚園 · 基本情報 / School information',
          url: 'https://wakok.wako.ed.jp/about/schoolinfo',
          checkedAt: '2026-11-09',
          evidence: [
            '学校官方基本信息明确将和光幼稚园列为幼稚园，地址为世田谷区桜2-18-18。',
            'The school’s own information page identifies Wako as a kindergarten at Sakura 2-18-18, Setagaya.',
          ],
        },
      },
      {
        typeId: 'private-provider',
        status: 'verified',
        source: {
          title:
            '世田谷区私立幼稚園協会 · 2025年度会員名簿 / Private-kindergarten association directory',
          url: 'https://www.sesiyou.jp/accession/',
          checkedAt: '2026-11-09',
          asOf: '2025',
          evidence: [
            '私立幼稚园协会的2025年度名录收录同址的学校法人和光学园和光幼稚园；此处依据协会名录，不是监管许可核验。',
            'The private-kindergarten association’s 2025 directory lists Wako Gakuen’s Wako Kindergarten at the same address. This is association-directory evidence, not a licensing check.',
          ],
        },
      },
    ],
  },
  {
    id: 'bing-nursery-school',
    country: 'united-states',
    code: 'USS01',
    name: ['宾幼儿学校', 'Bing Nursery School'],
    original: 'Bing Nursery School',
    region: 'california',
    location: ['加利福尼亚州 · 斯坦福', 'Stanford · California'],
    approach: 'play',
    approachLabel: ['游戏本位', 'Play-based'],
    ages: ['3–5岁 · Nursery项目', 'Ages 3–5 · Nursery programme'],
    summary: [
      '以Nursery项目为范围，观察儿童发起活动与教师支持之间的联系。',
      'A Nursery-programme profile exploring child-initiated activity and teacher support.',
    ],
    policy: [
      [
        '项目与招生目的',
        'Programme & enrolment purpose',
        '园方说明项目与招生同时考虑大学研究培训、班级与家庭的需要。',
        'The school states that programme and enrolment decisions consider university research and training, classroom and family needs.',
      ],
    ],
    strategies: [
      [
        '游戏与自主学习',
        'Play & independent learning',
        '项目介绍强调游戏，并在准备好的室内外环境中提供活动选择。',
        'The programme emphasises play and activity choices in prepared indoor and outdoor environments.',
      ],
      [
        '儿童与教师共同参与',
        'Child and teacher participation',
        'Nursery项目将儿童发起的活动与教师引导的活动相结合。',
        'The Nursery programme combines child-initiated and teacher-facilitated activities.',
      ],
    ],
    sources: [
      {
        title: 'Program Overview',
        url: 'https://bingschool.stanford.edu/childrens-programs/program-overview',
        language: 'English / 英文',
      },
    ],
    checked: '2026-11-09',
    providerClassifications: [
      {
        typeId: 'university-affiliated',
        status: 'verified',
        source: {
          title: 'Bing Nursery School · Program Overview',
          url: 'https://bingschool.stanford.edu/childrens-programs/program-overview',
          checkedAt: '2026-11-09',
          evidence: [
            '斯坦福大学官方园所页面列明大学关系，并解释大学研究与培训的目的。',
            'Stanford’s official school page identifies its university connection and describes university research and training purposes.',
          ],
        },
      },
    ],
  },
  {
    id: 'boulder-journey-school',
    country: 'united-states',
    code: 'USS12',
    name: ['博尔德旅程学校', 'Boulder Journey School'],
    original: 'Boulder Journey School',
    region: 'colorado',
    location: ['科罗拉多州 · 博尔德', 'Boulder · Colorado'],
    approach: 'reggio',
    approachLabel: ['瑞吉欧启发式', 'Reggio-inspired'],
    ages: ['8周–5岁', '8 weeks–5 years'],
    summary: [
      '了解园方关于儿童能力、探究与共同体关系的教育立场。',
      'Explore the school’s stated views on children’s capabilities, inquiry and community.',
    ],
    policy: [
      [
        '儿童作为有能力的学习者',
        'Children as capable learners',
        '园方理念将儿童视为有能力、拥有权利的共同体成员。',
        'The school’s philosophy views children as capable community members with rights.',
      ],
    ],
    strategies: [
      [
        '关注儿童表达',
        'Attention to children’s expression',
        '园方强调认真对待儿童的话语、行动与作品。',
        'The school emphasises attention to children’s words, actions and creations.',
      ],
      [
        '探究与教师支持',
        'Inquiry & educator support',
        '其理念受到瑞吉欧教育与Hawkins工作的启发，教师支持儿童开展的探究。',
        'Its philosophy draws inspiration from Reggio Emilia and the Hawkinses, with educators supporting children’s investigations.',
      ],
    ],
    sources: [
      {
        title: 'Our Philosophy',
        url: 'https://www.boulderjourneyschool.com/philosophy.html',
        language: 'English / 英文',
      },
      {
        title: 'School overview',
        url: 'https://www.boulderjourneyschool.com/',
        language: 'English / 英文',
      },
    ],
    checked: '2026-11-09',
    providerClassifications: [
      {
        typeId: 'private-provider',
        status: 'verified',
        source: {
          title: 'Boulder Journey School · School overview',
          url: 'https://www.boulderjourneyschool.com/',
          checkedAt: '2026-11-09',
          evidence: [
            '园方官方简介明确称其为私立学校。',
            'The school’s official overview explicitly describes it as a private school.',
          ],
        },
      },
    ],
  },
  {
    id: 'greenspring-montessori',
    country: 'united-states',
    code: 'USS07',
    name: [
      '绿泉蒙台梭利学校 · 儿童之家',
      'Greenspring Montessori · Children’s House',
    ],
    original: 'Greenspring Montessori School',
    region: 'maryland',
    location: [
      '马里兰州 · Lutherville-Timonium',
      'Lutherville-Timonium · Maryland',
    ],
    approach: 'montessori',
    approachLabel: ['蒙台梭利', 'Montessori'],
    ages: ['3–6岁 · 儿童之家', 'Ages 3–6 · Children’s House'],
    summary: [
      '仅介绍儿童之家项目，关注感官学习、教师观察与户外环境。',
      'A Children’s House profile focused on hands-on learning, observation and outdoor environments.',
    ],
    policy: [
      [
        '无屏幕环境',
        'Screen-free environment',
        '园方说明Toddler与儿童之家教室采用无屏幕环境。',
        'The school states that Toddler and Children’s House classrooms are screen-free.',
      ],
    ],
    strategies: [
      [
        '观察后引入新内容',
        'Observation before new presentations',
        '项目介绍说明教师观察儿童，并根据其准备情况引入新概念。',
        'The programme describes guides observing children and introducing concepts when they are ready.',
      ],
      [
        '室内外连接',
        'Indoor–outdoor connection',
        '园方说明各教室可直接进入户外学习环境。',
        'The school describes direct access from each classroom to an outdoor learning environment.',
      ],
    ],
    sources: [
      {
        title: 'Children’s House Program',
        url: 'https://greenspringmontessori.org/programs/primary-program/',
        language: 'English / 英文',
      },
    ],
    checked: '2026-11-09',
    providerClassifications: [
      {
        typeId: 'private-provider',
        status: 'verified',
        source: {
          title: 'Visit Greenspring Montessori School',
          url: 'https://greenspringmontessori.org/visit/',
          checkedAt: '2026-11-09',
          evidence: [
            '官方访问指南明确称学校为私立组织，未据此判断营利或非营利性质。',
            'The official visit page explicitly identifies the school as a private organisation. No for-profit or nonprofit classification is inferred.',
          ],
        },
      },
    ],
  },
]

export function filterSchools(
  records,
  { query = '', region = 'all', approach = 'all' } = {},
) {
  const term = query.trim().toLocaleLowerCase()
  return records.filter(
    (school) =>
      (region === 'all' || school.region === region) &&
      (approach === 'all' || school.approach === approach) &&
      [
        school.original,
        ...school.name,
        ...school.location,
        ...school.approachLabel,
      ]
        .join(' ')
        .toLocaleLowerCase()
        .includes(term),
  )
}
