export const providerTypeGuides = {
  japan: [
    {
      title: ['幼稚園', 'Kindergarten'],
      body: [
        '依据学校教育相关框架提供幼儿教育，课程基于幼稚园教育要领。入园年龄、教育时间和课后照护安排需查具体园所。',
        'Provides early education under the school-education framework, using the Kindergarten Course of Study. Check each provider for age eligibility, education hours, and after-hours care.',
      ],
      source: ['文部科学省 / MEXT', 'https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/you/index.htm'],
    },
    {
      title: ['保育所', 'Nursery school'],
      body: [
        '属于儿童福祉设施，面向需要保育的家庭，按照保育所保育指针开展养护与教育。申请和利用认定由地方制度执行。',
        'A child-welfare facility providing care and education under the Nursery School Care Guidelines for families requiring care. Applications and eligibility are administered locally.',
      ],
      source: ['こども家庭庁 / Children and Families Agency', 'https://www.cfa.go.jp/policies/hoiku'],
    },
    {
      title: ['认定こども园', 'Certified kodomoen'],
      body: [
        '把幼儿教育和保育结合在一处，并分为幼保连携型、幼稚园型、保育所型和地方裁量型四种。具体认定与适用要领按类型和地方核对。',
        'Combines early education and childcare, with integrated, kindergarten-type, nursery-type, and locally determined types. Check recognition and applicable guidance by type and locality.',
      ],
      source: ['こども家庭庁 / Children and Families Agency', 'https://www.cfa.go.jp/policies/kokoseido/kodomoen/gaiyou/'],
    },
    {
      title: ['地域型保育', 'Community-based childcare'],
      body: [
        '小规模保育、家庭式保育、居宅访视型保育和事业所内保育等项目，服务设计及适用条件各异。该类项目不应与幼稚园或保育所的规模、统计口径直接混同。',
        'Includes small-scale, family, home-visit, and workplace childcare services, with different service designs and eligibility. Do not merge these providers with kindergarten or nursery-school figures without checking statistical scope.',
      ],
      source: ['こども家庭庁 / Children and Families Agency', 'https://www.cfa.go.jp/policies/kokoseido/'],
    },
  ],
  'united-states': [
    {
      title: ['托育中心', 'Child-care centre'],
      body: [
        '通常在非住宅场所为多个家庭提供照护。监管和许可豁免因州与服务安排不同；核对具体机构的监管状态和检查报告。',
        'Usually provides care for children from multiple families in a non-residential setting. Regulation and exemptions vary by state and arrangement; check each provider’s status and inspection reports.',
      ],
      source: ['ChildCare.gov', 'https://www.childcare.gov/consumer-education/what-are-my-child-care-options/child-care-centers'],
    },
    {
      title: ['家庭托育', 'Family child-care home'],
      body: [
        '在照护者住所中提供服务，各州对何时必须许可的儿童人数门槛不同。应核实许可要求、年龄组合及可接收人数。',
        'Provides care in the provider’s residence. States set different child-count thresholds for licensing, so verify local rules, age mix, and approved capacity.',
      ],
      source: ['ChildCare.gov', 'https://www.childcare.gov/consumer-education/what-are-my-child-care-options/family-child-care-homes'],
    },
    {
      title: ['Head Start / Early Head Start', 'Head Start / Early Head Start'],
      body: [
        '联邦资助项目为符合资格的婴幼儿和学前儿童提供综合服务，有项目标准、绩效要求及家庭参与规则。不是所有托育机构都属于该项目。',
        'Federally funded programmes provide comprehensive services for eligible infants, toddlers, and preschoolers, under programme standards and family-engagement requirements. They are not a category for all child-care providers.',
      ],
      source: ['Office of Head Start', 'https://headstart.gov/policy/45-cfr-chap-xiii'],
    },
    {
      title: ['州与地方学前项目', 'State and local pre-K'],
      body: [
        '由州、学区或地方机构按本地政策设立，资格、课程、日历和服务方式并不统一。比较时应记录具体项目和年度。',
        'Established under state, school-district, or local policy. Eligibility, curriculum, calendar, and delivery vary; record the specific programme and year when comparing.',
      ],
      source: ['NCES', 'https://nces.ed.gov/programs/coe/indicator/cfa/enrollment-of-young-children?tid=4'],
    },
  ],
}
