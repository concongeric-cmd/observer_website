// Editorial summaries and translated navigation for the supplied English report.
// Company categories are the report's editorial roles, not legal provider classifications.
export const companyNames = {
  'jp-holdings': 'JP Holdings',
  'global-kids': 'Global Kids COMPANY',
  like: 'LIKE / LIKE Kids',
  poppins: 'Poppins',
  teno: 'Teno',
  'kids-corporation': 'Kids Corporation',
  nichii: 'Nichii / Nichii Kids',
  benesse: 'Benesse childcare',
  'yaruki-switch': 'Yaruki Switch',
  codmon: 'CoDMON',
  unifa: 'UniFa',
  sen: 'Sen Inc.',
  'baby-job': 'BABY JOB',
  'froebel-kan': 'Froebel-kan',
  bornelund: 'BorneLund',
}

export const companyRoles = [
  ['operators', '园所运营', 'Facility operators'],
  ['contract-care', '委托与居家服务', 'Contract & home care'],
  ['bilingual', '双语与加盟', 'Bilingual & franchises'],
  ['digital', '数字工具', 'Digital tools'],
  ['materials', '内容与教材', 'Content & materials'],
  ['spaces-supplies', '空间与日常用品', 'Spaces & supplies'],
]

export const companyPresentation = {
  'jp-holdings': {
    titleZh: 'JP Holdings：设施网络与公共资金',
    summary: [
      '运营保育园、认定儿童园及学龄儿童服务，并提供相关支持。',
      'Runs nursery centres, certified early education and care centres, and school-age services, with related support.',
    ],
    roleZh: '设施运营与相关支持',
    customersZh: '公共项目、家庭及其他签约方',
    noteZh: '345处服务设施中，仅209处属于报告所列的保育园和认定儿童园。',
    brands: ['JP Holdings', 'Operating subsidiaries'],
    finance: {
      period: ['截至2026年3月的全年', 'Year ended March 2026'],
      scope: ['集团全年实际结果', 'Group · full-year actual'],
      revenue: 43325,
      operatingProfit: 6533,
    },
  },
  'global-kids': {
    titleZh: 'Global Kids COMPANY：地方网络与多个运营主体',
    summary: [
      '通过多个运营实体和地方品牌提供托育服务。',
      'Provides childcare through several operating entities and established local brands.',
    ],
    roleZh: '由多个运营主体提供托育',
    customersZh: '公共项目与家庭',
    noteZh: '集团员工数包含兼职人员，不能用来推算班级师幼比。',
    brands: ['Global Kids', 'Ohayo Kids', 'Associe International'],
  },
  like: {
    titleZh: 'LIKE与LIKE Kids：托育、人力及养老服务',
    summary: [
      '集团同时经营儿童家庭支持、人力服务与养老业务。',
      'Combines child and family support with workforce services and elder care.',
    ],
    roleZh: '多元服务集团内的托育业务',
    customersZh: '公共机构、企业与家庭',
    noteZh: '集团营收包含托育以外的业务；设施数与服务儿童数的统计范围不同。',
    brands: ['LIKE', 'LIKE Kids'],
    finance: {
      period: ['截至2026年5月的全年', 'Year ended May 2026'],
      scope: ['集团全年实际结果', 'Group · full-year actual'],
      revenue: 67315,
      operatingProfit: 2981,
    },
  },
  poppins: {
    titleZh: 'Poppins：园所照护、居家服务与专业支持',
    summary: [
      '结合园所照护、居家照护和专业服务，回应不同家庭需求。',
      'Combines centre-based care, in-home services and professional support for families.',
    ],
    roleZh: '园所与居家照护',
    customersZh: '公共机构、企业与家庭',
    noteZh: 'Family Care包括学前教育以外的服务，集团利润不代表单个园所利润。',
    brands: ['Educare', 'Family Care', 'Professional'],
    finance: {
      period: ['截至2025年12月的全年', 'Year ended December 2025'],
      scope: ['集团全年实际结果', 'Group · full-year actual'],
      revenue: 34409,
      operatingProfit: 1840,
    },
  },
  teno: {
    titleZh: 'Teno Holdings：公共支持型托育与委托运营',
    summary: [
      '经营公共支持型与委托托育，并涉及养老和生活服务。',
      'Runs publicly supported and contract childcare alongside elder care and everyday living services.',
    ],
    roleZh: '公共支持型及委托托育',
    customersZh: '地方政府、医院、企业与家庭',
    noteZh:
      '财务结果为2026年上半年；报告保留了原披露中76.3%与76.6%的口径差异。',
    brands: ['Teno Holdings', 'Contract childcare'],
    finance: {
      period: ['截至2026年6月的半年', 'Six months ended June 2026'],
      scope: ['集团半年实际结果', 'Group · half-year actual'],
      revenue: 9550,
      operatingProfit: 362,
    },
  },
  'kids-corporation': {
    titleZh: 'Kids Corporation：医院与企业托育的管理',
    summary: [
      '为医院和工作场所提供委托托育，也运营持牌及小规模服务。',
      'Manages hospital and workplace childcare, alongside licensed and small-scale provision.',
    ],
    roleZh: '医院及职场委托托育与持牌服务',
    customersZh: '医院、企业、公共机构与家庭',
    noteZh: '官网约347处与350处的网络描述不可直接解释为增长趋势。',
    brands: ['Kids Corporation', 'Kids Approach'],
  },
  nichii: {
    titleZh: 'Nichii与Nichii Kids：综合照护集团中的儿童服务',
    summary: [
      '托育是集团照护业务的一部分，并延伸到家庭支持。',
      'Places childcare within a broader care group and extends support to families.',
    ],
    roleZh: '综合照护集团内的托育',
    customersZh: '公共机构、企业与家庭',
    noteZh: '某项家长支持计划约7000名儿童的统计，不等于集团总入园人数。',
    brands: ['Nichii Kids', 'MOM UP PARK'],
  },
  benesse: {
    titleZh: 'Benesse：学习内容与园所照护',
    summary: [
      '同时涉及学习内容、托育、课后服务与养老照护。',
      'Connects learning content with childcare, after-school services and elder care.',
    ],
    roleZh: '园所及学龄儿童服务',
    customersZh: '公共项目与家庭',
    noteZh: '购买学习材料的顾客与在园儿童属于不同统计；集团营收范围更广。',
    brands: ['Benesse', 'Benesse Style Care'],
  },
  'yaruki-switch': {
    titleZh: 'Yaruki Switch：双语幼教与加盟',
    summary: [
      '通过不同品牌提供英语环境、双语幼教和加盟项目。',
      'Offers English-language environments, bilingual early childhood services and franchise formats.',
    ],
    roleZh: '双语与加盟品牌',
    customersZh: '家庭与加盟运营方',
    noteZh: 'Kids Duo、KDI与i Kids Star的服务不同；教室总数并非幼儿园总数。',
    brands: ['Kids Duo', 'Kids Duo International', 'i Kids Star'],
  },
  codmon: {
    titleZh: 'CoDMON：园所及地方政府的软件服务',
    summary: [
      '提供出勤、家园沟通、记录、收费和园务管理工具。',
      'Provides tools for attendance, family messaging, records, billing and administration.',
    ],
    roleZh: '管理软件',
    customersZh: '机构与公共部门客户',
    noteZh: '采用设施数涵盖多种机构，不能全部视作日本学前园所。',
    brands: ['CoDMON'],
  },
  unifa: {
    titleZh: 'UniFa与Lookmee：数字工具、传感器及观察记录',
    summary: [
      '结合软件、摄影、午睡监测辅助工具与专业学习支持。',
      'Combines software, photography, nap-monitoring aids and professional learning.',
    ],
    roleZh: '软件、连接设备与相关支持',
    customersZh: '机构与公共部门客户',
    noteZh: '累计安装数不等于独立客户数；融资额不等于营收、估值或利润。',
    brands: ['UniFa', 'Lookmee'],
  },
  sen: {
    titleZh: 'Sen与Hai Cheese!：通过照片连接家庭',
    summary: [
      '围绕摄影与照片销售，延伸至相册和园务软件。',
      'Connects photography and photo sales with albums and management software.',
    ],
    roleZh: '摄影与管理软件',
    customersZh: '家庭与机构',
    noteZh: '照片销售总额与软件订阅营收不同，公司与产品品牌需区分。',
    brands: ['Sen Inc.', 'Hai Cheese!'],
  },
  'baby-job': {
    titleZh: 'BABY JOB：尿布订阅与托育日常',
    summary: [
      '通过尿布等消耗品订阅及相关服务，支持家庭和园所日常。',
      'Supplies diaper subscriptions and related services for childcare routines.',
    ],
    roleZh: '消耗品订阅与相关服务',
    customersZh: '家庭、机构或其他签约方',
    noteZh: '合作园所不是公司自营园所；订阅人数不能直接推算营收。',
    brands: ['BABY JOB', 'Tebura Toen'],
  },
  'froebel-kan': {
    titleZh: 'Froebel-kan：绘本、教材与教师资源',
    summary: [
      '提供儿童出版物、月刊绘本、幼教用品和教师支持。',
      'Publishes children’s books and periodicals, supplies materials and supports educators.',
    ],
    roleZh: '出版、用品与教师支持',
    customersZh: '园所、家庭及其他客户',
    noteZh: '产品覆盖范围不代表所有园所采用统一课程，也不能证明教育成效。',
    brands: ['Froebel-kan', 'Kinderbook'],
  },
  bornelund: {
    titleZh: 'BorneLund：游戏材料、空间与体验',
    summary: [
      '结合游戏器材、空间设计、配套活动与体验服务。',
      'Connects play equipment, space design, activities and visitor experiences.',
    ],
    roleZh: '器材与游戏环境',
    customersZh: '机构、公共部门、商业客户与家庭',
    noteZh: '项目涵盖多种场景，项目数不能用来估算学前教育市场份额。',
    brands: ['BorneLund', 'PLAYSCAPE'],
  },
}

export const reportContextTitles = {
  1: ['如何阅读公司资料', 'How to read the profiles'],
  17: ['其他值得关注的机构', 'Other organisations to explore'],
  18: ['公司角色比较', 'Compare company roles'],
  19: [
    '投资、扩张与教育成效',
    'Investment, expansion and educational outcomes',
  ],
  20: ['如何阅读财务比较', 'How to read financial comparisons'],
}
