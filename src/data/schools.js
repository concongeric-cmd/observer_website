// Provider categories require a verified source record; an empty array means unverified.
export const schools = [
  {
    id: 'fuji-kindergarten',
    country: 'japan',
    code: 'JPS01',
    name: ['藤幼儿园', 'Fuji Kindergarten'],
    original: 'ふじようちえん',
    aliases: ['藤幼稚園', '藤幼兒園', 'ふじ幼稚園', 'Fuji Yochien'],
    region: 'tokyo',
    location: ['东京都 · 立川市', 'Tachikawa · Tokyo'],
    approach: 'montessori',
    approachLabel: ['自主选择与蒙台梭利活动', 'Independent choice & Montessori activities'],
    ages: ['满3岁至5岁', 'From age 3 to 5'],
    summary: [
      '从环境设计、自主选择与自然体验，了解园方的教育方针。',
      'Explore the school’s stated approach to the environment, independent choice and nature.',
    ],
    policy: [
      [
        '支持每个儿童的自主活动',
        'Support each child’s independent activity',
        '园方表示会为儿童创造安全的环境，并守护每个孩子充分投入自己最想做之事的机会；园方认为这有助于自信、成就感与自主。',
        'The school says it provides a safe environment and stays close enough to support each child in pursuing what they most want to do. It links this approach to confidence, a sense of achievement and independence.',
      ],
    ],
    strategies: [
      [
        '混龄编班与教师配置',
        'Mixed-age classes and staffing',
        '园方公布满3岁与3岁混合编班的班数和大致人数，也说明低年级采用两位担任教师、Smile班由3至4位教师负责。班级数会随年度人数调整；这是园方公开的配置说明，不是独立师幼比审计。',
        'The school publishes class counts and approximate group sizes for its mixed-age classes, and says younger classes have two homeroom teachers while Smile classes have three to four teachers. Class counts vary by year; this is a school-published staffing description, not an independent ratio audit.',
      ],
      [
        '有结构的日常节奏',
        'A structured daily rhythm',
        '公开日程把自主活动、班级活动、午餐、课题保育和延长保育安排在一天之中；周三的常规时段较短。',
        'The published day combines independent activity, class activities, lunch, guided learning and extended care. The regular Wednesday schedule is shorter.',
      ],
      [
        '餐食与家庭参与',
        'Meals and family participation',
        '园方公开的园所生活资料列出可选午餐、个别饮食安排及每学期轮流举行的家长共餐活动；这是园方发布的服务信息。',
        'The published daily-life information lists lunch options, individual dietary arrangements and rotating family lunches once or twice per term. These are provider-published service details.',
      ],
    ],
    operations: {
      staffing: [
        '公开资料列出混龄班级规模与教师配置；人数会按年度调整，未据此推算师幼比。',
        'Published class sizes and teacher assignments are available and vary by year; no child-to-staff ratio is inferred.',
      ],
      hours: [
        '常规时段：周一、二、四、五 8:40–14:40；周三 8:40–13:40。早间保育 7:00–8:40，延长保育至 18:30；周六另有 7:00–18:30 服务。',
        'Regular hours: 8:40–14:40 Monday, Tuesday, Thursday and Friday; 8:40–13:40 Wednesday. Early care runs 7:00–8:40 and extended care until 18:30; Saturday care is listed from 7:00–18:30.',
      ],
      family: [
        '园方生活资料列出每学期1至2次家庭共餐、个别饮食沟通及家园联系安排；完整招生沟通流程尚未收集。',
        'The school’s daily-life information lists one or two family lunches per term, individual dietary discussions and family communication. A full admissions communication workflow has not been collected.',
      ],
    },
    dailySchedule: [
      { time: ['8:40–9:30', '8:40–9:30'], activity: ['登园与自主活动', 'Arrival and independent activity'] },
      { time: ['10:15–11:15', '10:15–11:15'], activity: ['班级活动（自主学习、蒙台梭利等）', 'Class activity (independent work, Montessori and other activities)'] },
      { time: ['12:00', '12:00'], activity: ['午餐；餐后班级活动与自由游戏', 'Lunch, followed by class activity and free play'] },
      { time: ['13:20–14:00', '13:20–14:00'], activity: ['课题保育', 'Guided learning'] },
      { time: ['14:00–14:40', '14:00–14:40'], activity: ['分批降园', 'Staggered dismissal'] },
      { time: ['14:40–18:30', '14:40–18:30'], activity: ['延长与长时间保育', 'Extended care'] },
    ],
    sources: [
      {
        title: '教育方針 / Educational policy',
        url: 'https://fujikids.jp/guide/educational-policy/',
        language: '日本語 / Japanese',
      },
      {
        title: '園の生活 / Daily life: classes, hours, schedule and meals',
        url: 'https://fujikids.jp/guide/life/',
        language: '日本語 / Japanese',
      },
    ],
    checked: '2026-11-12',
    providerClassifications: [],
  },
  {
    id: 'ochanomizu-kindergarten',
    country: 'japan',
    code: 'JPS02',
    name: ['御茶水女子大学附属幼稚园', 'Ochanomizu University Kindergarten'],
    original: 'お茶の水女子大学附属幼稚園',
    aliases: ['御茶水女子大學附屬幼稚園', 'お茶の水女子大学附属幼稚園', 'Ochanomizu Kindergarten'],
    region: 'tokyo',
    location: ['东京都 · 文京区', 'Bunkyo · Tokyo'],
    approach: 'play',
    approachLabel: ['游戏与研究', 'Play & research'],
    ages: ['3–5岁', 'Ages 3–5'],
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
      [
        '以教师关系支持共同生活',
        'Teacher relationships support shared life',
        '园方强调以师生信赖为基础，让儿童安心表达、拓展同伴关系，并共同创造生活。',
        'The school describes trust with teachers as a basis for children to express themselves, build peer relationships and shape shared experiences.',
      ],
    ],
    operations: {
      staffing: [
        '园方概况（2025年4月更新）列出园长1名、副园长1名、教谕10名、养护教谕1名、学校心理咨询师1名、兼职事务职员1名及兼职校务员1名，另列校医、校牙医和学校药剂师。班级定员页面（2024年4月1日更新）列出3岁40名、4岁60名、5岁60名；两页日期不同，不据此推算师幼比。',
        'The overview, updated April 2025, lists one director, one deputy director, ten teachers, one school nurse teacher, one school counsellor, one part-time administrator and one part-time custodian, plus medical, dental and pharmacy staff. The class-capacity page, updated 1 April 2024, lists capacity for 40 three-year-olds, 60 four-year-olds and 60 five-year-olds. The pages have different reference dates, so no ratio is inferred.',
      ],
    },
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
      {
        title: 'クラス編成 / Class organization and published capacity',
        url: 'https://www.fz.ocha.ac.jp/fy/outline/class.html',
        language: '日本語 / Japanese',
      },
    ],
    checked: '2026-11-12',
    providerClassifications: [
      {
        typeId: 'kindergarten',
        status: 'verified',
        source: {
          title: '教育の目的と使命 / Educational mission',
          url: 'https://www.fz.ocha.ac.jp/fy/outline/education.html',
          checkedAt: '2026-11-12',
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
          checkedAt: '2026-11-12',
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
    aliases: ['和光幼稚園', 'Wako Yochien'],
    region: 'tokyo',
    location: ['东京都 · 世田谷区', 'Setagaya · Tokyo'],
    approach: 'play',
    approachLabel: ['游戏与共同生活', 'Play & shared life'],
    ages: ['3–5岁 · 3个年级', 'Ages 3–5 · three age groups'],
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
        '自然中的远足',
        'Outings in nature',
        '园方介绍3、4岁儿童每年约有7至8次、5岁儿童约有9至10次野外远足；次数为园方公布的年度安排。',
        'The school describes about 7–8 nature outings a year for ages 3–4 and 9–10 for age 5. These are the school’s published annual figures.',
      ],
      [
        '用身边材料进行创作',
        'Making with everyday materials',
        '教育方针介绍儿童使用木材、黏土、纸、纸箱、泥土和植物等材料创作、游戏并反复改造作品，也会在教师引导下接触真实工具。',
        'The school describes children making, playing with and revising creations from wood, clay, paper, boxes, soil and plants. It also describes guided use of real tools.',
      ],
      [
        '通过对话建立关系',
        'Building relationships through dialogue',
        '园方把倾听儿童表达、接纳其感受和同伴共同游戏列为教育实践；这是园方描述的做法，不是独立观察结果。',
        'The school describes listening to children, acknowledging their feelings and supporting play with peers. This is its stated practice, not an independent observation.',
      ],
    ],
    operations: {
      staffing: [
        '园方基本信息列出园长1名（与小学兼任）、副园长1名、教谕8名、事务职员1名、校务与助手5名；3、4、5岁各有2个班，每班定员25名。页面未说明人员如何分配到班级，因此不推算师幼比。',
        'The school information page lists one head (shared with the primary school), one deputy head, eight teachers, one administrator, and five facilities/assistant staff. It lists two classes of 25 children for each age from 3 to 5. Staff deployment by class is not specified, so no ratio is inferred.',
      ],
      hours: [
        '园方列出的常规时间为周一9:00–11:30、周二至周五9:00–14:00；周末通常休息，特别活动除外。区私立幼稚园协会另列平日延时照护时间，当前档案未将其作为园方确认的常规安排。',
        'The school lists regular hours as 9:00–11:30 on Monday and 9:00–14:00 Tuesday through Friday. Weekends are usually closed except for special events. A local association directory separately lists weekday extended care; that is not treated here as a school-confirmed regular schedule.',
      ],
      family: [
        '园方入园说明会包括保育参观、园舍介绍、教育内容说明和现场提问；当前档案未汇总在园家庭的日常沟通流程。',
        'The school’s admission sessions include classroom observation, a campus tour, an explanation of its education and time for questions. The profile has not compiled a day-to-day communication process for enrolled families.',
      ],
    },
    sources: [
      {
        title: '教育方針 / Educational policy',
        url: 'https://wakok.wako.ed.jp/about/policy_1',
        language: '日本語 / Japanese',
      },
      {
        title: '幼稚園の生活 / Kindergarten life',
        url: 'https://wakok.wako.ed.jp/about/kidslife',
        language: '日本語 / Japanese',
      },
      {
        title: '基本情報 / School information, staffing and class capacity',
        url: 'https://wakok.wako.ed.jp/about/schoolinfo',
        language: '日本語 / Japanese',
      },
      {
        title: '入園説明会 / Admissions information sessions',
        url: 'https://wakok.wako.ed.jp/admission/meeting',
        language: '日本語 / Japanese',
      },
      {
        title: '自己評価・関係者評価 / School self and stakeholder evaluations',
        url: 'https://wakok.wako.ed.jp/about/%E8%87%AA%E5%B7%B1%E8%A9%95%E4%BE%A1%E9%96%A2%E4%BF%82%E8%80%85%E8%A9%95%E4%BE%A1',
        language: '日本語 / Japanese',
      },
      {
        title: '世田谷区私立幼稚園協会 · 2025年度会員名簿 / Setagaya private-kindergarten association · 2025 directory',
        url: 'https://www.sesiyou.jp/accession/',
        language: '日本語 / Japanese',
      },
    ],
    checked: '2026-11-12',
    providerClassifications: [
      {
        typeId: 'kindergarten',
        status: 'verified',
        source: {
          title: '和光幼稚園 · 基本情報 / School information',
          url: 'https://wakok.wako.ed.jp/about/schoolinfo',
          checkedAt: '2026-11-12',
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
          checkedAt: '2026-11-12',
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
    aliases: [
      'Bing Nursery',
      '宾幼稚园',
      '賓幼稚園',
      '宾幼儿学校',
      '賓幼兒學校',
      '宾托儿所',
      '賓托兒所',
    ],
    region: 'california',
    location: ['加利福尼亚州 · 斯坦福', 'Stanford · California'],
    approach: 'play',
    approachLabel: ['游戏本位', 'Play-based'],
    ages: ['3–5岁 · Nursery项目', 'Ages 3–5 · Nursery programme'],
    summary: [
      '以园方公布的Nursery项目资料为范围，梳理班级组织、半日安排、家庭费用与研究职责。',
      'A source-led profile of the school’s Nursery programme, covering class organisation, session schedules, family costs and its research role.',
    ],
    policy: [
      [
        '实验园的研究职责',
        'Laboratory-school research role',
        '招生FAQ说明，研究由教师团队规划，并经斯坦福人体受试者委员会及园内研究协调员审查；家长提供同意，儿童受邀后可以同意或拒绝参加。',
        'The enrollment FAQ says faculty teams plan studies and that the work is reviewed by Stanford’s Human Subjects Committee and Bing’s Research Coordinator. Parents provide consent, and children may agree to or decline an invitation to participate.',
      ],
      [
        '按班级需要安排入园时段',
        'Placement by classroom needs',
        '招生FAQ说明家庭可申请上午或下午时段，具体安排会考虑班级需要及研究样本多样性。',
        'The enrollment FAQ states that families may apply for an AM or PM session; placement considers classroom needs and the research goal of including a varied participant pool.',
      ],
    ],
    strategies: [
      [
        '混龄班与半日项目',
        'Mixed-age, part-time programme',
        'Nursery项目面向3至5岁儿童，采用混龄班；园方列出每班36名儿童，并设上午或下午时段。',
        'The Nursery programme serves ages 3–5 in mixed-age groups. The school lists 36 children per class and offers morning or afternoon sessions.',
      ],
      [
        '室内外自由选择活动',
        'Choice of indoor and outdoor activities',
        '园方日程包含持续的室内外活动选择、点心、音乐与集体故事时间。',
        'The published schedule includes extended indoor and outdoor activity choices, snack, music and a shared story time.',
      ],
      [
        '接送时简短交流',
        'Brief family communication at pick-up',
        '园方表示接送时教师会与家长或照护者简短交流儿童当天情况；这是园方公布的做法，未代表每次交流的记录。',
        'The school says teachers share a few words with parents or caregivers at pick-up. This is a published practice, not a record of every exchange.',
      ],
    ],
    operations: {
      staffing: [
        '官方FAQ称Nursery项目在三间教室共有36名儿童及至少6名受薪员工；学费页面另将班级规模写为每班36人。两种表述尚未由园方解释为同一口径，因此不推算师幼比。',
        'The official FAQ describes 36 children across three Nursery rooms and at least six paid staff; the tuition page separately lists 36 children per class. The school does not reconcile these figures, so no child-to-staff ratio is inferred.',
      ],
      hours: [
        '上午 8:15–11:45；下午 12:45–16:15。另有收费延长照护：上午前段 7:45–8:15、午间 11:45–12:30，下午 16:15–17:00。',
        'AM 8:15–11:45; PM 12:45–16:15. Fee-based extended care is listed at 7:45–8:15 and 11:45–12:30 for the morning session, and 16:15–17:00 for the afternoon session.',
      ],
      fees: [
        '2026–27学年Nursery项目公布年学费：每周2天 $10,860、3天 $14,740、5天 $25,600；符合资格的斯坦福受薪员工家庭及全日制学生适用20%折扣。园方另提供按需助学金；申请费、保留费和延长照护费用另计。',
        'Published 2026–27 Nursery tuition: $10,860 for two days/week, $14,740 for three days, and $25,600 for five days. The 20% Stanford rate applies to eligible employee families and full-time students. Need-based aid is available; application, reservation and extended-care fees are additional.',
      ],
      family: [
        '项目资料列有接送时的简短家园交流；招生资料列有按需助学金。完整沟通流程和额外费用明细尚未汇总。',
        'Programme materials list brief family exchanges at pick-up, and enrollment materials list need-based aid. A full communication workflow and schedule of additional fees have not been compiled.',
      ],
    },
    dailySchedule: [
      { time: ['8:15–8:45 / 12:45–13:15', '8:15–8:45 / 12:45–1:15'], activity: ['分批入园', 'Gradual arrival'] },
      { time: ['8:15–10:15 / 12:45–14:45', '8:15–10:15 / 12:45–2:45'], activity: ['室内外活动选择', 'Indoor and outdoor activity choices'] },
      { time: ['10:15–10:45 / 14:45–15:15', '10:15–10:45 / 2:45–3:15'], activity: ['洗手、点心与小组交流', 'Handwashing, snack and small-group conversation'] },
      { time: ['10:45–11:15 / 15:15–15:45', '10:45–11:15 / 3:15–3:45'], activity: ['音乐与室内外游戏', 'Music and indoor/outdoor play'] },
      { time: ['11:15–11:30 / 15:45–16:00', '11:15–11:30 / 3:45–4:00'], activity: ['歌曲、手指游戏与故事', 'Songs, finger plays and story'] },
      { time: ['11:30–11:45 / 16:00–16:15', '11:30–11:45 / 4:00–4:15'], activity: ['分批离园；教师与照护者简短交流', 'Gradual departure; brief teacher-caregiver exchange'] },
    ],
    sources: [
      {
        title: 'Program Overview',
        url: 'https://bingschool.stanford.edu/childrens-programs/program-overview',
        language: 'English / 英文',
      },
      {
        title: 'Enrollment FAQs · schedule, staffing and research',
        url: 'https://bingschool.stanford.edu/childrens-programs/program-overview/enrollment-faqs',
        language: 'English / 英文',
      },
      {
        title: 'Program Offerings & Tuition · 2026–2027',
        url: 'https://bingschool.stanford.edu/childrens-programs/program-offerings-tuition',
        language: 'English / 英文',
      },
    ],
    checked: '2026-11-12',
    providerClassifications: [
      {
        typeId: 'university-affiliated',
        status: 'verified',
        source: {
          title: 'Bing Nursery School · Program Overview',
          url: 'https://bingschool.stanford.edu/childrens-programs/program-overview',
          checkedAt: '2026-11-12',
          evidence: [
            '斯坦福大学官方园所页面列明大学关系，并解释大学研究培训职责。',
            'Stanford’s official school page identifies its university connection and describes its research and training role.',
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
    aliases: ['Boulder Journey', '博爾德旅程學校'],
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
      [
        '教师延伸儿童发起的探究',
        'Educators extend child-initiated investigations',
        '园方说明儿童的好奇心会推动其发起探究，教师再延伸和深化每个儿童的学习经历。',
        'The school says children’s curiosity drives their investigations and educators extend and deepen each child’s learning experiences.',
      ],
    ],
    operations: {
      staffing: [
        '园方介绍学校有14间教室、艺术与材料工作室及剧场，并接收200多名儿童；该页面未列员工总数或班级配置，因此不推算师幼比。',
        'The school describes 14 classrooms, art and materials studios, a theatre and more than 200 children. It does not publish a total staff count or classroom staffing plan on this page, so no ratio is inferred.',
      ],
      hours: [
        '学校主页列出全年每周开放5天、每日8小时；这是园方公布的总体开放时间，具体班级时段未在该页列明。',
        'The school homepage lists an eight-hour day, five days a week, year round. This is the provider’s general schedule; specific classroom hours are not stated there.',
      ],
    },
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
    checked: '2026-11-12',
    providerClassifications: [
      {
        typeId: 'private-provider',
        status: 'verified',
        source: {
          title: 'Boulder Journey School · School overview',
          url: 'https://www.boulderjourneyschool.com/',
          checkedAt: '2026-11-12',
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
    aliases: ['Greenspring Montessori', '格林斯普林蒙台梭利學校', '绿泉蒙台梭利学校', '綠泉蒙台梭利學校'],
    region: 'maryland',
    location: [
      '马里兰州 · Lutherville-Timonium',
      'Lutherville-Timonium · Maryland',
    ],
    approach: 'montessori',
    approachLabel: ['蒙台梭利', 'Montessori'],
    ages: [
      '儿童之家：项目页列3–6岁，招生页列3–5岁',
      'Children’s House: programme page says ages 3–6; admissions page says 3–5',
    ],
    summary: [
      '仅介绍儿童之家项目，关注感官学习、教师观察与户外环境。',
      'A Children’s House profile focused on hands-on learning, observation and outdoor environments.',
    ],
    policy: [
      [
        '无屏幕环境',
        'Screen-free environment',
        '儿童之家项目资料将Toddler与儿童之家教室列为无屏幕环境。',
        'The Children’s House programme information identifies the Toddler and Children’s House classrooms as screen-free.',
      ],
    ],
    strategies: [
      [
        '观察后引入新内容',
        'Observation before new presentations',
        '项目资料说明教师先观察儿童，再根据其准备情况引入新概念。',
        'The programme information describes guides observing children and introducing concepts in response to readiness.',
      ],
      [
        '室内外连接',
        'Indoor–outdoor connection',
        '儿童之家项目资料列出各教室与户外学习环境直接连通。',
        'The Children’s House programme information lists direct access from each classroom to an outdoor learning environment.',
      ],
      [
        '感官材料与持续工作',
        'Sensory materials and sustained work',
        '园方介绍儿童通过动手感官体验探索，并可持续、深入地使用材料；活动依据教师观察和儿童准备度引入。',
        'The school describes hands-on sensory experiences and opportunities for prolonged, in-depth work. Guides introduce activities in response to observation and readiness.',
      ],
    ],
    operations: {
      hours: [
        '园方公布Children’s House全日班约8:10–14:40、半日班约8:10–12:10；早间照护从7:30开始，延时照护可至16:15、17:00或17:30。具体安排取决于所选项目。',
        'The school lists approximate Children’s House hours of 8:10–14:40 for full day and 8:10–12:10 for half day. Before-school care starts at 7:30, and after-school care is available until 4:15, 5:00 or 5:30. Exact schedules depend on the selected programme.',
      ],
    },
    sources: [
      {
        title: 'Children’s House Program',
        url: 'https://greenspringmontessori.org/programs/primary-program/',
        language: 'English / 英文',
      },
      {
        title: 'Admissions and school information',
        url: 'https://greenspringmontessori.org/visit/',
        language: 'English / 英文',
      },
    ],
    checked: '2026-11-12',
    providerClassifications: [
      {
        typeId: 'private-provider',
        status: 'verified',
        source: {
          title: 'Visit Greenspring Montessori School',
          url: 'https://greenspringmontessori.org/visit/',
          checkedAt: '2026-11-12',
          evidence: [
            '官方访问指南明确称学校为私立组织，未据此判断营利或非营利性质。',
            'The official visit page explicitly identifies the school as a private organisation. No for-profit or nonprofit classification is inferred.',
          ],
        },
      },
    ],
  },
]

function normalizeSearchText(value) {
  return value.normalize('NFKC').toLocaleLowerCase().trim()
}

export function filterSchools(
  records,
  { query = '', region = 'all', approach = 'all' } = {},
) {
  const term = normalizeSearchText(query)
  return records.filter(
    (school) =>
      (region === 'all' || school.region === region) &&
      (approach === 'all' || school.approach === approach) &&
      [
        school.original,
        ...school.name,
        ...(school.aliases || []),
        ...school.location,
        ...school.approachLabel,
      ]
        .filter(Boolean)
        .map(normalizeSearchText)
        .some((candidate) => candidate.includes(term)),
  )
}
