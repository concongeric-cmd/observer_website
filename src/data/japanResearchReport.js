import englishTopics from './japanResearchEnglish.json' with { type: 'json' }
import moreEnglishTopics from './japanResearchEnglishMore.json' with { type: 'json' }
import englishRegions from './japanResearchRegionalEnglish.json' with { type: 'json' }
import englishSources from './japanResearchSourcesEnglish.json' with { type: 'json' }
import { japanCompanyReport } from './japanCompanyReport.js'

// Structured transcription of the supplied report. Both languages retain the original dates, definitions and provisional status.
export const japanResearchReport = {
  schemaVersion: 1,
  country: 'japan',
  sourceFile: '日本幼教行业研究报告.html',
  cutoff: '2026-10-21',
  topics: [
    {
      id: 'volume-1-s1',
      recordType: 'industry_topic',
      volume: 1,
      number: 1,
      section: 'sector',
      title: ['日本幼教行业到底包括什么', 'What the sector includes'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '日本学前教育与照护不是一个由同类机构组成的市场。幼稚园主要属于学校教育体系，保育所主要承担具有保育需要家庭的日常照护与教育，认定儿童园连接两套功能。除此之外，还有小规模保育、家庭式保育、企业相关设施、临时照护、病儿照护及认可外服务。它们可能服务相近年龄儿童，却适用不同准入、公共资金、利用资格和人员要求。',
          textEn: null,
          sources: ['J05', 'J08'],
        },
        {
          type: 'paragraph',
          textZh:
            '理解行业需要同时看到四个主体：制定框架与补助规则的中央政府；进行需求认定、利用协调和地方供给规划的市区町村；依法设立与经营设施的法人；实际参与服务的家庭。地方政府不是只发一张许可证后退出，经营者也不是单纯通过自由学费定价决定所有收入。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本报告将幼教理解为出生至入小学前的教育与照护主体，并把学龄课后服务作为关联业务单列。课外英语、教具、出版、软件、餐食和家庭支援属于相关服务链，不能与正式园所直接相加。特别是企业同时经营小学课后、老年照护和人才服务时，集团收入不等于幼教收入。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '报告由八卷组成，分别研究历史制度、市场资金、监管师资、课程质量、家庭需求、典型企业、产业链与都道府县。正文是中文解释，保留关键日文名，便于读者继续核查原文。图表和结构化内容均附来源与统计期，估计、暂定、计划和实际明确区分。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J05', 'J08'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-1-s2',
      recordType: 'industry_topic',
      volume: 1,
      number: 2,
      section: 'types',
      title: ['三类主体设施的区别', 'Three main facility types'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'table',
          columns: [
            '设施',
            '日文名称',
            '主要功能',
            '典型资格线索',
            '不能从名称直接推断的事项',
          ],
          rows: [
            [
              '幼稚园',
              '幼稚園',
              '学前学校教育',
              '三岁以上；具体招生依设施与制度',
              '是否提供足够长的托管时间、全部费用是否免费',
            ],
            [
              '保育所',
              '保育所',
              '保育与教育一体的日常生活支持',
              '需按地方规则确认保育需要',
              '只有照料、没有教育',
            ],
            [
              '认定儿童园',
              '認定こども園',
              '教育、保育与家庭支援相结合',
              '按年龄和需要分认定类别',
              '所有园都是同一种法律类型',
            ],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '认定儿童园又分幼保连携型、幼稚园型、保育所型和地方裁量型。四类在原有设施、设立要求和组织形式上不同。“认定儿童园”是制度类别，不是一个品牌，也不是所有园自动归同一家主管企业。幼保连携型具有学校与儿童福利设施的双重性质，需要同时理解教育与保育要求。',
          textEn: null,
          sources: ['J04', 'J13'],
        },
        {
          type: 'paragraph',
          textZh:
            '认可外保育设施并不等于非法机构。它没有被纳入认可以及相关给付体系的方式，不代表没有申报、安全或指导监督要求。某些双语幼儿机构或企业设施可能属于认可外类别，但应以具体地点的申报、确认和监管资料为准，而不是用“国际”“幼儿园”或英文kindergarten判断身份。',
          textEn: null,
          sources: ['J08'],
        },
      ],
      sourceIds: ['J04', 'J13', 'J08'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-1-s3',
      recordType: 'industry_topic',
      volume: 1,
      number: 3,
      section: 'sector',
      title: ['幼稚园起源与早期发展', 'Origins of kindergarten'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '1876年，东京女子师范学校附属幼稚园开园，是日本近代幼稚园发展的重要节点。现今御茶水女子大学附属幼稚园的官方沿革保留这一历史。早期制度与教师培养紧密关联，幼稚园既是儿童教育场所，也是形成方法、材料与专业知识的实践空间。',
          textEn: null,
          sources: ['J10'],
        },
        {
          type: 'paragraph',
          textZh:
            '这段历史不能简单写成现代保育所从幼稚园自然扩展而来。学校教育和面向家庭生活、劳动需要的照护存在不同制度来源，之后长期形成并行发展。早期某一附属园的做法也不能代表当时所有地区的儿童教育机会，更不能直接拿来说明当代所有园所的教学风格。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '历史研究需要区分理念与实际覆盖。把游戏、环境和儿童活动写入教育思想，不意味着每个孩子都有机会进入机构。机构布局、家庭经济与地方行政资源，决定理念能够进入多少人的日常生活。这也是理解后来公共资金和地方规划重要性的背景。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J10'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-1-s4',
      recordType: 'industry_topic',
      volume: 1,
      number: 4,
      section: 'sector',
      title: [
        '战后教育与福利两条制度线',
        'Education and welfare after the war',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '战后日本在学校教育与儿童福利框架下发展幼稚园和保育所。两者的入园目的、主管行政、教师资格与服务时间形成差异。这种差异并不意味着儿童在一类机构学习、在另一类机构只被照料；现代保育指针明确教育与养护的一体性。',
          textEn: null,
          sources: ['J05', 'J12'],
        },
        {
          type: 'paragraph',
          textZh:
            '随着女性就业、家庭结构和人口分布变化，原有分类与家庭需求之间出现衔接压力。一个家庭可能需要较长照护时间，同时希望获得适龄教育；另一个家庭没有全日制工作需要，但仍需要同伴交往与育儿支持。制度整合正是在这种多样需求背景下展开，不能理解为单纯把两块招牌挂在一起。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '报告分析历史时，不用今天的使用量反推过去制度的全部效果。某个改革的启动时间、地方实际实施和机构转换之间可能有滞后；如果缺少连续统计，就不使用少数节点插值制造完整增长曲线。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J05', 'J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-1-s5',
      recordType: 'public_program',
      volume: 1,
      number: 5,
      section: 'sector',
      title: [
        '认定儿童园与2015年新制度',
        'Certified centres and the 2015 system',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '认定儿童园制度的发展，为教育与保育衔接提供了组织路径。2015年实施的儿童与育儿支援新制度，将设施型给付和地域型保育等纳入新的资金与服务框架。已有幼稚园或保育所可以在满足条件后转换，因此儿童园数量增长不完全等于新建了同等数量的设施。',
          textEn: null,
          sources: ['J04', 'J05'],
        },
        {
          type: 'paragraph',
          textZh:
            '2025年4月，认定儿童园为11,212所，较2024年10,483所增加729所。增长包含设施转换、类别调整与新设等因素。若直接将儿童园增量加到保育所和幼稚园原有总量上，会重复计算部分机构。',
          textEn: null,
          sources: ['J04'],
        },
        {
          type: 'figure',
          id: 'chart-J03',
          file: 'chart-J03.png',
          title: '认定儿童园数量变化',
          caption: '认定儿童园数量变化 来源 类型转换与新设需区分。',
          sources: ['J04'],
        },
        {
          type: 'paragraph',
          textZh:
            '制度整合还改变家长接触行政的方式。年龄、教育或保育需要、利用时长与费用减免可能分别对应不同认定。企业研究也必须跟随这一分类：一个集团旗下不同地点，可以同时经营不同类型设施，不能仅用母公司行业代码决定所有地点的制度身份。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J04', 'J05'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-1-s6',
      recordType: 'public_program',
      volume: 1,
      number: 6,
      section: 'types',
      title: ['1号、2号、3号认定', 'Eligibility categories 1, 2 and 3'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'table',
          columns: [
            '教育与保育给付认定',
            '主要年龄与需要',
            '典型利用场景',
            '解释边界',
          ],
          rows: [
            [
              '1号',
              '三岁以上，以教育利用为主',
              '幼稚园、儿童园教育部分',
              '不等于所有延长照护均自动纳入',
            ],
            [
              '2号',
              '三岁以上，具有保育需要',
              '保育所、儿童园保育部分',
              '具体时长与利用协调需看地方认定',
            ],
            [
              '3号',
              '未满三岁，具有保育需要',
              '保育所、儿童园、地域型保育等',
              '费用与减免还涉及家庭及地方条件',
            ],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '上述为教育与保育给付认定的概念说明，不应同无偿化相关的新认定编号混为一套。家长可能在文件中看到名称相似的“新2号”等字样，必须回到该手续针对哪种给付和哪种服务。',
          textEn: null,
          sources: ['J05', 'J06'],
        },
        {
          type: 'paragraph',
          textZh:
            '同一儿童园里不同认定儿童可能共享教育活动，却具有不同利用时间和家庭安排。园所需要处理午休、接送、餐食与教师连续性。认定类别是行政与资金的重要线索，不是儿童能力、家庭教育水平或教育质量等级。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J05', 'J06'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-1-s7',
      recordType: 'public_program',
      volume: 1,
      number: 7,
      section: 'sector',
      title: ['2019年无偿化及其后续变化', 'Fee relief and subsequent changes'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '2019年10月实施的幼儿教育与保育无偿化，改变了符合条件家庭的核心利用费负担，但没有使所有服务成本归零。餐食、接送、活动和额外服务等可能继续由家庭承担。新制度内外的幼稚园、认可外设施及延长托管，适用条件与限额也不同。',
          textEn: null,
          sources: ['J06'],
        },
        {
          type: 'paragraph',
          textZh:
            '2023年4月儿童家庭厅成立，儿童政策协调和部分原有行政职能重新组织。文部科学省仍在学校教育等领域承担职责，地方政府仍负责大量执行工作。成立新机构不能被理解为幼教所有业务完全归入同一套许可或同一个统计表。',
          textEn: null,
          sources: ['J09'],
        },
        {
          type: 'paragraph',
          textZh:
            '2026年度，儿童谁都可通园制度作为新的给付在全国自治体实施。它扩展了对未进入日常机构儿童的支持路径，不能等同于取消长期保育的全部资格要求，也不能当成每个家庭获得一个无限时长的全日制学位。',
          textEn: null,
          sources: ['J07'],
        },
      ],
      sourceIds: ['J06', 'J09', 'J07'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-1-s8',
      recordType: 'industry_topic',
      volume: 1,
      number: 8,
      section: 'sector',
      title: ['制度发展时间线', 'A timeline of the system'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'timeline',
          columns: ['时期', '节点', '行业含义'],
          rows: [
            [
              '1876年',
              '东京女子师范学校附属幼稚园开园',
              '近代幼稚园与专业培养的重要起点',
            ],
            [
              '战后',
              '学校教育与儿童福利框架分别发展',
              '形成理解幼稚园与保育所差异的基础',
            ],
            [
              '2015年4月',
              '儿童与育儿支援新制度实施',
              '给付与地域型服务纳入新框架',
            ],
            [
              '2018年度',
              '2017年告示的教育与保育框架实施',
              '三类主要设施在儿童发展表述上衔接',
            ],
            [
              '2019年10月',
              '幼儿教育与保育无偿化实施',
              '降低符合条件的利用费，而非全部费用归零',
            ],
            [
              '2023年4月',
              '儿童家庭厅成立',
              '加强儿童政策协调，未取消全部行政分工',
            ],
            [
              '2024年度',
              '三岁与四五岁配置标准改善',
              '人员与财政支持成为质量改革重点',
            ],
            ['2025年度', '谁都可通园制度制度化', '从试行走向制度安排'],
            [
              '2026年度',
              '谁都可通园新给付全国实施',
              '未入园儿童获得新的有限时数服务路径',
            ],
          ],
          sources: [
            'J10',
            'J05',
            'J12',
            'J01',
            'J11',
            'J13',
            'J06',
            'J09',
            'J14',
            'J07',
          ],
        },
      ],
      sourceIds: [
        'J10',
        'J05',
        'J12',
        'J01',
        'J11',
        'J13',
        'J06',
        'J09',
        'J14',
        'J07',
      ],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-1-s9',
      recordType: 'industry_topic',
      volume: 1,
      number: 9,
      section: 'types',
      title: ['所有制与行业主体', 'Ownership and providers'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '日本幼教供给包含公立设施、学校法人、社会福祉法人、营利法人及其他主体。不能把“私立”直接翻译成“营利连锁”。在2025年认定儿童园统计中，社会福祉法人5,668所、学校法人3,545所；营利法人182所，仅是这一特定设施类别内的数字，不代表全保育市场的企业数量或份额。',
          textEn: null,
          sources: ['J04'],
        },
        {
          type: 'figure',
          id: 'chart-J05',
          file: 'chart-J05.png',
          title: '2025认定儿童园设立者结构',
          caption:
            '2025认定儿童园设立者结构 来源 私立不等于营利连锁；不能扩展为全部保育市场份额。',
          sources: ['J04'],
        },
        {
          type: 'paragraph',
          textZh:
            '组织性质影响资金、治理和资产安排，但不能代替质量评价。公立不自动意味着每项服务都更充足，营利也不自动意味着现场教育质量较低。需要将设立主体、许可类别、人员配置、检查与实际互动分别观察。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J04'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-1-s10',
      recordType: 'industry_topic',
      volume: 1,
      number: 10,
      section: 'sector',
      title: ['全景研究的统计原则', 'Reading statistics consistently'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '教育统计常以5月1日为调查时点，保育供给统计常用4月1日；公司财年可能在三月、五月、九月或十二月结束。报告保留这些差别，不把全部数字统一标成“2026年”。儿童园的教育认定与保育认定人数还可能进入不同统计系统，跨表相加前必须检查是否重复。',
          textEn: null,
          sources: ['J01', 'J03', 'J04'],
        },
        {
          type: 'paragraph',
          textZh:
            '每个数字同时标明数量对象、时间、范围和性质。容量不是使用人数，等待人数不是所有未满足需求，集团收入不是家庭支出，平台导入件数不是独立园所数。只有这些边界明确，行业全景才不会变成互相矛盾的数字集合。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J01', 'J03', 'J04'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s1',
      recordType: 'industry_topic',
      volume: 2,
      number: 1,
      section: 'sector',
      title: ['人口下降如何进入幼教需求', 'Population change and demand'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '厚生劳动省2025年人口动态统计年计概要列出生671,236人，2024年为686,173人；报告所列合计特殊出生率分别为1.14和1.15。这里沿用该发布序列，不与包含不同国籍或发生地范围的速報总数混合。出生数是未来年龄队列的重要背景，不是当年在园儿童总量。',
          textEn: null,
          sources: ['J02'],
        },
        {
          type: 'figure',
          id: 'chart-J01',
          file: 'chart-J01.png',
          title: '日本2024与2025年出生数',
          caption: '日本2024与2025年出生数 来源 出生数不是当年在园人数。',
          sources: ['J02'],
        },
        {
          type: 'paragraph',
          textZh:
            '出生减少会逐年进入零岁、一岁、两岁和学前班级。机构并不会在出生数字公布后立即同比例缩小，因为不同年龄利用概率、家长就业、育儿假、地区迁入以及已有孩子的连续就读都会影响实际人数。人口变化还会与师资供给和设施租约产生不同速度的调整。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '因此，市场预测至少需要区分儿童人口、服务利用比例与单位服务资源。儿童减少不一定意味着企业收入立即下降；更多家庭利用服务、公共价格调整或业务组合变化，都可能部分抵消人数压力。反之，收入增长也不必然说明儿童覆盖提高。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J02'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s2',
      recordType: 'industry_topic',
      volume: 2,
      number: 2,
      section: 'sector',
      title: ['2026年全国保育供给快照', 'National childcare snapshot, 2026'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'table',
          columns: ['指标', '2026年4月1日', '与上年变化', '口径'],
          rows: [
            [
              '保育所等机构数',
              '40,046所',
              '增加71所',
              '官方保育所等集合，不是全部幼教设施',
            ],
            ['利用定员', '3,016,417人', '减少12,865人', '容量，不是实际在园'],
            ['利用儿童', '2,646,756人', '减少31,661人', '同一集合的实际利用'],
            ['官方等待儿童', '2,435人', '增加181人', '按官方定义'],
            [
              '定员充足率',
              '官方公布87.7%',
              '下降0.7个百分点',
              '全国比率，不代表每园情况',
            ],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以上来自儿童家庭厅2026年汇总及附表。发布文件注明数据为暂定、可能修订，本报告保留该状态；四项绝对数已与附表资料3的地区合计核对一致。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'figure',
          id: 'chart-J02',
          file: 'chart-J02.png',
          title: '保育所等定员与利用2025—2026',
          caption:
            '保育所等定员与利用2025—2026 来源 不同于全部幼稚园；差额不是可预约空位。',
          sources: ['J01'],
        },
        {
          type: 'paragraph',
          textZh:
            '定员减去利用儿童为369,661，表示这一统计集合中全国容量与使用的算术差额。它不是当天可供预约的空位清单。不同地区、年龄、开放时间和人员条件之间不能自由调剂，部分设施还可能因师资等原因无法接收新的儿童。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s3',
      recordType: 'industry_topic',
      volume: 2,
      number: 3,
      section: 'sector',
      title: ['等待人数下降后的再上升', 'Changes in official waiting lists'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '官方序列中，2017年4月等待儿童26,081人，2025年降至2,254人，2026年为2,435人。长期下降体现受入规模、人口和利用安排共同变化，但2026年反向变动说明问题并未以全国容量扩大而永久消失。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'figure',
          id: 'chart-J04',
          file: 'chart-J04.png',
          title: '官方等待儿童长期序列',
          caption: '官方等待儿童长期序列 来源 行政定义，不代表全部未满足需求。',
          sources: ['J01'],
        },
        {
          type: 'paragraph',
          textZh:
            '等待儿童有行政定义。未获得首选园、只希望某些特定园、仍在育儿假或其他情形，可能在分类上与正式等待不同。不能将官方等待直接称为全部需求缺口，也不能将所有其他分类都无条件加为“隐藏等待”，因为类别可能涉及选择、利用替代服务或不同统计处理。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '企业披露引用等待数字时，还可能采用更宽的定义。研究者应回到原始表，写清包含什么、排除什么、是否重复。一个面向投资者的“潜在需求”数字，不应在省略定义后直接取代官方等待序列。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s4',
      recordType: 'industry_topic',
      volume: 2,
      number: 4,
      section: 'sector',
      title: ['全国富余与地方短缺并存', 'Surplus capacity and local shortages'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '2026年资料表明东京等待儿童1,113人，约占全国45.7%；兵库200人、奈良147人、埼玉140人。它们是绝对人数，不能直接用来评定地方治理优劣。大型地区的申请规模、就业结构、设施布局和年龄组合均不同。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'figure',
          id: 'chart-J06',
          file: 'chart-J06.png',
          title: '官方等待儿童较多的15地区',
          caption:
            '官方等待儿童较多的15地区 来源 ，本报告重建都道府县 绝对人数不等于等待率或治理评分。',
          sources: ['J01'],
        },
        {
          type: 'paragraph',
          textZh:
            '等待率与绝对等待人数回答不同问题。报告地区档案同时保留容量、使用、充足率及等待变化，避免用一个指标代表全部供给。某地零等待，可能是供给充分，也可能伴随人口下降或家庭利用意愿较低；必须结合其他数据解释，不能直接写作“没有任何家庭困难”。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s5',
      recordType: 'industry_topic',
      volume: 2,
      number: 5,
      section: 'sector',
      title: ['市场规模为什么不能只用一个金额', 'Defining the market'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '日本学前服务涉及公共运行给付、地方补助、家庭费用、企业合同、认可外服务和供应链采购。不同商业市场研究可能只计算园所收入，也可能加入课外教育、玩具、出版或家庭支援。报告不把定义不同的市场规模拼成一个总额，更不以某个商业机构的增速作为全行业确定预测。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '公共资金与企业收入也可能指向同一次交易的不同层面。政府支付的保育运行资源，进入经营者收入后若再次相加，就会重复计量。教具和软件作为园所支出，又是供应商收入，计算整个服务链产值时必须说明采用最终支出还是各环节营业额。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s6',
      recordType: 'public_program',
      volume: 2,
      number: 6,
      section: 'sector',
      title: ['设施型给付与地域型给付', 'Facility and community-based funding'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '新制度通过设施型给付支持符合条件的教育与保育设施，通过地域型给付支持小规模保育等服务。家长利用资格、设施确认与公共支付安排相互连接。保育经营不是完全由家长愿付价格决定，而是嵌入地方计划与公共资源框架。',
          textEn: null,
          sources: ['J05'],
        },
        {
          type: 'paragraph',
          textZh:
            '公立、私立保育所与其他设施的具体支付形式和会计安排可能不同。不能把所有公共款项都统称为同一种“每名儿童补贴”，更不能假定同年龄儿童进入不同机构时经营者收到完全相同金额。应核对设施种类、地域、定员规模、儿童年龄和加算条件。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J05'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s7',
      recordType: 'public_program',
      volume: 2,
      number: 7,
      section: 'sector',
      title: ['公定价格如何影响经营', 'Public payment rates'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '公定价格是理解制度内机构收入的重要入口。它根据设施与服务类别、地区、规模、年龄和人员等条件计算，包含基础及相应加算。它不是全国统一的家长学费表，也不是一家园的全部利润。',
          textEn: null,
          sources: ['J05', 'J15'],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为经营机制分析：当规则增加配置或改善人员待遇时，运行资源与支出可能同步增加。企业收入上涨可能部分对应必须支付的人力成本；若只看收入增幅而不看人员、支付期和适用条件，就会误读盈利变化。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '2026年公定价格改革资料涉及限定三岁以上的小规模保育、人口稀少地区体制支持加算，以及三岁配置过渡安排等。这些是有具体适用范围的制度变化，不能写成所有园所获得同一比例涨价。个别公司的“平均价格上升”也不是全国每家机构的实际增幅。',
          textEn: null,
          sources: ['J15'],
        },
      ],
      sourceIds: ['J05', 'J15'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s8',
      recordType: 'public_program',
      volume: 2,
      number: 8,
      section: 'sector',
      title: ['无偿化的具体边界', 'What fee relief covers'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'table',
          columns: ['服务情景', '国家概要所列核心条件或限额', '需要继续核对'],
          rows: [
            [
              '制度内三至五岁核心利用费',
              '符合制度条件时无偿化',
              '班龄、设施、餐食与其他实费',
            ],
            [
              '新制度外幼稚园相关利用费',
              '月上限25,700日元',
              '设施类别与认定手续',
            ],
            [
              '幼稚园延长托管',
              '按日数乘450日元等条件，月上限11,300日元',
              '保育需要认定与实际费用',
            ],
            [
              '认可外等三至五岁',
              '月上限37,000日元',
              '保育需要、设施资格与申报',
            ],
            [
              '认可外等零至两岁非课税家庭',
              '月上限42,000日元',
              '家庭资格及设施条件',
            ],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '表格根据国家制度概要整理；额度是特定情景上限，不是家庭自动领取的统一现金，也不是园所统一定价。新制度外幼稚园的25,700日元不应推广为所有幼稚园的同一收费标准。',
          textEn: null,
          sources: ['J06'],
        },
        {
          type: 'figure',
          id: 'chart-J07',
          file: 'chart-J07.png',
          title: '特定无偿化情景月度上限',
          caption:
            '特定无偿化情景月度上限 来源 均需满足资格；延长托管另有日数×450日元等条件。',
          sources: ['J06'],
        },
        {
          type: 'paragraph',
          textZh:
            '地方可以追加支持。东京自2025年9月起支持市区町村开展第一子保育费等无偿化，但不能把东京政策写成全国统一规则，也不能忽略具体区市町村、设施和申请要求。',
          textEn: null,
          sources: ['J16'],
        },
      ],
      sourceIds: ['J06', 'J16'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s9',
      recordType: 'industry_topic',
      volume: 2,
      number: 9,
      section: 'sector',
      title: ['家庭真正承担的费用', 'What families actually pay'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '家庭预算应把核心利用费、餐食、校车、延长时间、活动、用品和自选课分开。国家无偿化降低特定费用，不代表英语课程、接送或全部实费都被覆盖。家庭还面对接送时间、孩子生病无法入园和工作安排等非账单成本。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '不同地区使用同一个“免费”词语，实际家庭支出仍可能不同。比较费用时要固定年龄、每周天数、每日时长、可获得减免及选择项目。用一个家庭账单推断全国典型费用，会掩盖家庭资格与地区补助差异。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s10',
      recordType: 'industry_topic',
      volume: 2,
      number: 10,
      section: 'sector',
      title: ['园所成本与人员配置', 'Costs and staffing'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '园所成本包括人员、租金或建筑、餐食、设施维护、保险、培训、行政和数字系统等。人工通常是核心项目，但本报告没有用未经核验的统一百分比替代实际账目。机构年龄结构、利用率与营业时间都会改变人工占收入比例。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '配置标准按儿童年龄产生不同约束，人员不是随着儿童减少就完全线性减少。一个班少几名儿童，仍可能需要保持基本开园、交接与安全岗位；若跨过班级或配置门槛，边际成本变化才可能明显。因此，收入下降对小规模园的影响可能大于全国平均利用率所暗示的程度。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s11',
      recordType: 'industry_topic',
      volume: 2,
      number: 11,
      section: 'sector',
      title: ['委托运营与直接经营', 'Contract and direct operation'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '医院、企业或自治体可以设置照护服务并委托专业经营者运营。委托合同涉及空间、设备、人员、费用、服务时间、质量与责任分配。经营者的合同收入不能理解为全部来自家庭学费；设施设立者也不一定与现场用人法人相同。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '竞争通常围绕持续运营能力、人员供应、合同报价和服务设计展开。最低报价并不必然是最低总成本，因为人员流失、临时替代和合同更换也会带来成本。实际合同是否允许价格调整、空置补偿或额外照护，需要个案文件确认。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s12',
      recordType: 'industry_topic',
      volume: 2,
      number: 12,
      section: 'sector',
      title: [
        '退出、合并与人口减少地区',
        'Closures, consolidation and population decline',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '人口减少地区可能通过缩小规模、设施合并和多功能化维护服务。关闭数量本身不能解释好坏：若儿童减少而继续维持巨大设施，运行可能难以持续；若关闭导致家庭无法合理接送，也可能损害可及性。需要同时观察替代服务、交通与儿童关系连续性。',
          textEn: null,
          sources: ['J17'],
        },
        {
          type: 'paragraph',
          textZh:
            '对经营者而言，退出还涉及租约、员工安排、公共补助资产处理和儿童转园。盈利机构的整合与非营利法人之间的合并也具有不同法律安排，不能把所有交易统称为“连锁并购”。企业公告里的管理设施增长，未必表示新增全国净供给。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J17'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s13',
      recordType: 'industry_topic',
      volume: 2,
      number: 13,
      section: 'sector',
      title: ['会计指标与跨企业比较', 'Comparing financial measures'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '日本公司资料常并列营业利益、经常利益、归母净利润和EBITDA。设施补助可能在不同科目或时期确认；不看说明直接比较利润率，可能把会计归类差异误当成经营能力差异。企业财年也不一致，本报告采用分面图呈现各自期间，而非构造一张统一年度盈利排名。',
          textEn: null,
          sources: [],
        },
        {
          type: 'figure',
          id: 'chart-J08',
          file: 'chart-J08.png',
          title: '四家企业不同财期集团财务',
          caption:
            '四家企业不同财期集团财务 来源 各面板独立坐标；Teno为半年，均含相应非幼教业务。',
          sources: ['J27', 'J29', 'J30', 'J31'],
        },
        {
          type: 'paragraph',
          textZh:
            '经营信息公开有助于观察资源使用，但必须理解匿名化、覆盖范围与报送时点。“这里de搜索”等设施信息公示与企业财报属于不同层级，前者帮助理解地点，后者说明集团。两者互补，不能互相替代。',
          textEn: null,
          sources: ['J20'],
        },
      ],
      sourceIds: ['J27', 'J29', 'J30', 'J31', 'J20'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-2-s14',
      recordType: 'industry_topic',
      volume: 2,
      number: 14,
      section: 'sector',
      title: ['2026年学校教育统计的补充视角', 'School statistics, 2026'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '文部科学省2026年度学校基本调查速報以5月1日为时点，列幼稚园7,922所、在园儿童627,450人；幼保连携型认定儿童园7,956所、儿童881,892人。2025年度确认资料对应为8,225所、689,609人，以及7,673所、875,976人。幼稚园儿童减少与儿童园增加并存，但不代表所有减少儿童都转入儿童园。',
          textEn: null,
          sources: ['J03', 'J45'],
        },
        {
          type: 'figure',
          id: 'chart-J25',
          file: 'chart-J25.png',
          title: '学校基本调查在园儿童2025—2026',
          caption:
            '学校基本调查在园儿童2025—2026 来源 类别转换不等于全国新增；2026为速報。',
          sources: ['J03', 'J45'],
        },
        {
          type: 'paragraph',
          textZh:
            '学校统计和儿童家庭厅4月统计在日期、类别与调查框架上不同。2025年5月幼保连携型7,673所，不与4月同类型7,470所混为一个期末总数；两者差值不能直接当作一个月新建园数。本报告将学校统计单列，不与保育利用人数相加，避免儿童园教育与保育部分重复计数。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '2026学校数据仍标记速報，之后的确认或修订应替换对应记录，而不是保留数字只更新标题。儿童园的增长既涉及组织类别变化，也可能涉及新增供给，判断实际受益仍需要儿童与地点层面的资料。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J03', 'J45'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s1',
      recordType: 'industry_topic',
      volume: 3,
      number: 1,
      section: 'operations',
      title: ['监管不是一张全国牌照', 'How oversight is organised'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '日本幼教监管同时涉及设施资格、教育保育内容、人员、安全、公共资金与信息公开。机构类型决定适用框架，地方条例、确认和具体检查又影响执行。某个品牌在一个城市获得许可，不意味着同一品牌所有地点自动具有相同资格。',
          textEn: null,
          sources: ['J05', 'J08'],
        },
        {
          type: 'paragraph',
          textZh:
            '研究一所机构需要确认至少四层：正式设施名称与地址、设立运营主体、许可或认定类别、实际参与的给付或补助项目。中文名或英文名称只能帮助识别品牌，不能替代法律与行政身份。一个宣传为“国际幼儿园”的地点，可能并非学校教育法体系内的幼稚园。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J05', 'J08'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s2',
      recordType: 'industry_topic',
      volume: 3,
      number: 2,
      section: 'operations',
      title: [
        '许可、认定、确认与补助资格',
        'Licences, recognition and funding eligibility',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '许可主要回答设施能否以某种法律类别开展业务，认定可能对应儿童园或家庭利用资格，确认涉及给付体系参与，补助资格则针对具体资金项目。这些手续彼此关联却不完全相同。报告中不把“已申报”“获得补助”和“获认可”作为同义词。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '认可外设施也有申报与指导监督框架。是否达到相关监督标准、是否取得证明、是否被确认纳入特定无偿化范围，需要分别检查。没有进入认可保育体系不等于完全没有监管；符合某项补助条件也不保证每一次现场服务都不存在问题。',
          textEn: null,
          sources: ['J08', 'J06'],
        },
      ],
      sourceIds: ['J08', 'J06'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s3',
      recordType: 'industry_topic',
      volume: 3,
      number: 3,
      section: 'operations',
      title: ['人员配置标准的变化', 'Changes to staffing standards'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'table',
          columns: [
            '年龄',
            '改善前示意',
            '改善后的国家标准或支持方向',
            '使用限制',
          ],
          rows: [
            [
              '零岁',
              '约3名儿童对应1名保育人员',
              '维持相应基本框架',
              '园内最低人数与实际排班另看',
            ],
            [
              '一至两岁',
              '约6比1',
              '一岁5比1的配置改善加算支持',
              '加算不等于所有机构法定基础已统一改成5比1',
            ],
            ['三岁', '约20比1', '2024年度改善为约15比1', '存在过渡规定'],
            [
              '四五岁',
              '约30比1',
              '2024年度改善为约25比1',
              '需核对过渡安排及地方执行',
            ],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '表格用于解释改革方向，不代替某个机构类型适用的完整法规。2026年官方资料明确三岁旧配置过渡期终点设至2027年度末；不能把改革目标、财政加算与每一所园实际执行混成一个数字。',
          textEn: null,
          sources: ['J14', 'J15'],
        },
        {
          type: 'figure',
          id: 'chart-J09',
          file: 'chart-J09.png',
          title: '三岁与四五岁配置标准改善',
          caption:
            '三岁与四五岁配置标准改善 来源 不是每班全部排班情况；一岁改善加算不画作统一法定标准。',
          sources: ['J14', 'J15'],
        },
        {
          type: 'paragraph',
          textZh:
            '对读者而言，最容易误读的是把“降低儿童对应人数”写成已经解决教师工作负担。配置取决于全天排班、休息、替班、记录时间及特殊需要支持。平均比率达标，也不表示早晚、户外和交接时段拥有相同人员余量。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J14', 'J15'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s4',
      recordType: 'industry_topic',
      volume: 3,
      number: 4,
      section: 'operations',
      title: [
        '最低标准、加配与真实体验',
        'Minimum standards and daily experience',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '最低标准是底线，不能作为优质服务的完整定义。园所可能增加人员、配置辅助岗位或改善团队安排；这些投入是否稳定，需要看用人合同、工作时间和实际运行。单独宣传“超过标准”如果没有统计时段和人员定义，也难以比较。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为经营分析：更多人员可以改善照护余量，但同时需要可持续经费。若加算收入、教师工资与费用确认不同期，财报利润会受到时点影响。不能根据季度利润上升就推断园所减少人员，也不能根据人员总数上升就推断每班压力下降。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s5',
      recordType: 'industry_topic',
      volume: 3,
      number: 5,
      section: 'operations',
      title: ['三类专业身份', 'Three professional qualifications'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '保育士、幼稚园教谕和保育教谕不是同一资格的三个叫法。保育士资格及注册、幼稚园教师免许与幼保连携型儿童园的保育教谕要求，分别来自不同制度。保育教谕原则上关联两类资格，同时存在法定特例和过渡安排。',
          textEn: null,
          sources: ['J18'],
        },
        {
          type: 'paragraph',
          textZh:
            '官方资料说明，仅持其中一类资格可按特例任职等安排的期限延长至2029年度末。这个期限属于特定过渡制度，不能被写成从此取消双资格要求，也不意味着其他设施所有岗位都适用。',
          textEn: null,
          sources: ['J18'],
        },
      ],
      sourceIds: ['J18'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s6',
      recordType: 'industry_topic',
      volume: 3,
      number: 6,
      section: 'operations',
      title: ['保育士进入行业的路径', 'Routes into childcare work'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '官方介绍列出两类主要路径：完成指定保育士养成设施的相应培养；或符合条件后通过保育士考试。取得资格后还需要在都道府县的注册簿登记，才能以保育士身份工作。培训班结业、民间证书和国家资格不能混用。',
          textEn: null,
          sources: ['J19'],
        },
        {
          type: 'paragraph',
          textZh:
            '培养路径涉及大学、短期大学、专业学校等，不应把“保育士”简单对应成某一个学历层次。跨资格特例也有具体课程、经历与手续条件。报告不提供个人资格判断，制度说明用于理解行业劳动力结构，具体申请应核对当期官方规则。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J19'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s7',
      recordType: 'industry_topic',
      volume: 3,
      number: 7,
      section: 'operations',
      title: ['教师与辅助人员的角色', 'Teachers and supporting staff'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '保育现场还包括辅助人员、营养与烹饪人员、护理专业人员、园长、行政和保洁等岗位。岗位存在不意味着能够互相替代。清扫或数字记录减负可以释放时间，但不能据此减少必要的专业观察和儿童照护责任。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '一家企业披露员工总数时，可能包含兼职、管理、其他业务人员。若不区分工时，人数不能直接解释为全职等值用工。也不能以集团总员工数除以所有儿童得出实际班级师幼比，因为人员和儿童可能分属不同业务或时点。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s8',
      recordType: 'industry_topic',
      volume: 3,
      number: 8,
      section: 'operations',
      title: ['待遇、流失与招聘', 'Pay, retention and recruitment'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '工资必须同时说明地区、资格、年资、工时、津贴、奖金和雇佣性质。招聘广告中的最高月薪、全国平均工资与实际新入职工资属于不同指标。本报告没有将未经统一的广告样本绘制成企业薪资排名。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为机制分析：较长开放时间使轮班与替班重要，通勤和照护责任又影响员工可工作时段。留任取决于报酬、管理、休息、专业支持与工作可预测性。只增加招聘投放可能补足短期空缺，却未必解决反复离职。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '处遇改善资源进入机构后，需要按照适用条件分配和记录。经营者收到的相关款项，不应不加区分地当成可以自由支配的利润。具体是否、怎样反映到个人收入，必须核对规定、园所安排与支付记录。',
          textEn: null,
          sources: ['J15'],
        },
      ],
      sourceIds: ['J15'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s9',
      recordType: 'industry_topic',
      volume: 3,
      number: 9,
      section: 'operations',
      title: ['职业学习与园内改进', 'Professional learning'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '保育指针的专业发展要求不仅是参加外部讲座，还涉及组织内反思、计划、观察与反馈。园长需要为学习安排时间和支持，教师需要把知识转化成具体互动，而非仅累积证明材料。',
          textEn: null,
          sources: ['J12'],
        },
        {
          type: 'paragraph',
          textZh:
            '观察记录可支持团队了解儿童，但如果记录脱离实际、过度重复或只为检查而写，也会增加负担。培训效果应看后续实践和儿童参与，不能用“每年举办多少场培训”替代质量改进证据。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s10',
      recordType: 'industry_topic',
      volume: 3,
      number: 10,
      section: 'operations',
      title: ['安全治理的层次', 'Layers of safety management'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '安全包括睡眠、饮食、户外、接送、卫生、设备、灾害和不当对待防范。不同风险需要不同管理，不能由一种传感器或一套电子系统包办。设备报警、人工检查、交接和紧急响应应构成相互衔接的流程。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '官方重大事故报告汇总和事故数据库，为理解事件类型及再发防止提供入口。其数量受报告对象、定义和完整性影响，不代表所有轻微伤害，也不宜直接与其他范围的事故率比较。没有服务时长与年龄分母时，事故绝对数不能用作园所危险程度的简单排行。',
          textEn: null,
          sources: ['J21'],
        },
      ],
      sourceIds: ['J21'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s11',
      recordType: 'industry_topic',
      volume: 3,
      number: 11,
      section: 'operations',
      title: ['午睡观察与数字辅助', 'Sleep observation and digital aids'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '午睡监测工具可以辅助记录或提示异常，但不能保证消除风险，也不能替代按要求进行的人工观察。设备适用范围、佩戴、通信、电源、警报处理及异常后的责任安排，都影响实际作用。采购时需要看产品说明和适用标准，不把“AI”作为安全效果证明。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '软件还可能记录巡查和交接。记录存在不等于检查真实完成，因此数据审阅需要结合现场流程。企业宣传的减负效果若来自用户问卷，应与独立实验或事故结果研究区分；两类证据回答的问题不同。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s12',
      recordType: 'industry_topic',
      volume: 3,
      number: 12,
      section: 'operations',
      title: ['食物与健康管理', 'Food and health'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '餐食兼具营养、生活与教育意义，同时涉及过敏、误食、窒息、交叉接触和卫生管理。园所需要根据儿童情况、家庭信息与专业指导进行个别安排。一个集团采用统一菜单，也不能假定所有儿童都适合相同食物处理。',
          textEn: null,
          sources: ['J12'],
        },
        {
          type: 'paragraph',
          textZh:
            '供应商、烹饪人员和班级教师之间的信息传递是风险节点。采购安全食材不等于完成全过程管理；菜单、替代食、分装、发放和实际进食观察都需要衔接。报告讨论的是治理流程，不提供个体医疗或饮食处方。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s13',
      recordType: 'industry_topic',
      volume: 3,
      number: 13,
      section: 'operations',
      title: ['防灾、疏散与服务连续性', 'Disaster planning and continuity'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '园所防灾涉及地震、台风、洪水、酷暑及其他所在地风险。建筑、户外空间、疏散路线、联络方式和家长接回安排，需要结合儿童年龄。低龄儿童无法像成年人自行行动，人员配备与运输工具会影响执行。',
          textEn: null,
          sources: ['J12'],
        },
        {
          type: 'paragraph',
          textZh:
            '灾后恢复不只是重新开门，还涉及饮水餐食、心理安定、交通和员工家庭状况。若设施临时无法使用，地方与经营者需要协调替代安排。地区档案中的全国统计不能代替具体园址风险评估。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s14',
      recordType: 'industry_topic',
      volume: 3,
      number: 14,
      section: 'operations',
      title: ['家庭投诉与不当保育', 'Family concerns and inappropriate care'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '家庭需要能够反映担忧的渠道，机构需要记录、回应、调查和必要的外部报告。不当保育、虐待、重大事故与一般服务投诉应按事实和规则区分，不能因为尚未构成某一法律类别就忽略问题，也不能在缺少调查时根据社交媒体给全集团定性。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '质量治理既需要个案责任，也需要发现组织原因，包括人力不足、指导缺失、信息封闭或不合理工作流程。道歉公告不是全部调查结论；整改措施是否执行、是否被核查以及儿童如何获得支持，才构成后续研究重点。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-3-s15',
      recordType: 'industry_topic',
      volume: 3,
      number: 15,
      section: 'operations',
      title: ['信息公开与监管证据', 'Disclosure and inspection evidence'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '“ここdeサーチ”提供设施查询入口，经营信息持续公开制度则扩展对资源与经营情况的观察。资料可能存在报送时差和字段缺失，不能把空白当零，不能用集团财务覆盖单园缺失。',
          textEn: null,
          sources: ['J20'],
        },
        {
          type: 'paragraph',
          textZh:
            '规范的机构档案应分开记录许可、最近检查、整改、人员、服务项目与费用。任何单一证据都不应被包装成终身有效的“安全认证”。本报告在企业卷介绍商业模式，在地区卷解释供给结构，均不对未调查的具体园所作教育或安全评级。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J20'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s1',
      recordType: 'industry_topic',
      volume: 4,
      number: 1,
      section: 'curriculum',
      title: ['三份国家框架的关系', 'Three national frameworks'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '理解日本幼教内容，需要阅读幼稚园教育要领、保育所保育指针，以及幼保连携型认定儿童园教育与保育要领。它们适用机构不同，但在儿童发展、环境与生活经验方面相互衔接，不能因为行政分类不同就假设教育目标完全割裂。',
          textEn: null,
          sources: ['J11', 'J12', 'J13'],
        },
        {
          type: 'paragraph',
          textZh:
            '这些框架不是全国统一的每日教案，也不要求所有机构购买同一家课程。园所需要结合儿童、家庭和地域制定计划。品牌课程、月刊绘本、体育、音乐或英语项目属于具体内容资源，必须放回园所整体活动中理解。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J11', 'J12', 'J13'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s2',
      recordType: 'industry_topic',
      volume: 4,
      number: 2,
      section: 'curriculum',
      title: ['通过环境进行教育', 'Learning through the environment'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '幼稚园教育要领强调通过环境开展教育，以及儿童主动活动与游戏的重要性。环境包括人际关系、材料、空间、时间和可获得经验，不只是建筑装饰。教师需要观察儿童、预想活动并有意识地组织条件，而非把“儿童主体”理解为成人完全不参与。',
          textEn: null,
          sources: ['J11'],
        },
        {
          type: 'paragraph',
          textZh:
            '例如儿童反复尝试让积木站立，教师可以提供不同形状、协助表达发现、连接同伴经验。这里的学习不必先分成数学、物理和语言课，再分别给出练习。该例是对理念的解释，并非来自某个指定园的观察结果。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J11'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s3',
      recordType: 'industry_topic',
      volume: 4,
      number: 3,
      section: 'curriculum',
      title: ['五领域如何理解', 'Five areas of learning'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'table',
          columns: [
            '领域',
            '中文理解',
            '在日常生活中的观察线索',
            '不宜作出的简化',
          ],
          rows: [
            [
              '健康',
              '身体、生活与安全',
              '活动、休息、习惯与自我照顾',
              '只有体育训练',
            ],
            [
              '人际关系',
              '与人交往和共同生活',
              '交往、协商、归属与冲突处理',
              '只看是否听话',
            ],
            [
              '环境',
              '与周围事物互动',
              '探索、比较、自然及社会经验',
              '只有自然知识问答',
            ],
            [
              '语言',
              '理解、表达与交流',
              '对话、叙述、绘本和倾听',
              '提前识字数量',
            ],
            [
              '表现',
              '感受、创造和表达',
              '声音、动作、绘画、材料与想象',
              '临摹作品完成度',
            ],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '五领域是理解经验的框架，并非五张彼此隔离的课程表。同一活动可能同时涉及身体动作、语言协商和材料探索。把它们转换成每天五个固定训练科目，会丢失综合性。',
          textEn: null,
          sources: ['J11', 'J12'],
        },
      ],
      sourceIds: ['J11', 'J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s4',
      recordType: 'industry_topic',
      volume: 4,
      number: 4,
      section: 'curriculum',
      title: [
        '三种能力与“十种姿态”',
        'Capabilities and developmental expectations',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '国家框架将知识技能基础、思考判断表达基础、学习意愿与人性等作为相互联系的能力。幼儿期末期希望出现的姿态，为教师观察与小学衔接提供共同语言。它们不应被改造成每个孩子入学前必须逐项通过的统一考试。',
          textEn: null,
          sources: ['J11', 'J13'],
        },
        {
          type: 'paragraph',
          textZh:
            '儿童发展存在个体差异和不同表现情境。一个孩子在陌生成人面前较少说话，并不说明其语言与思考能力低；需要结合熟悉活动、家庭语言和长期观察。十种姿态的使用重点是理解过程、改进环境与协作，不是制作儿童排名。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J11', 'J13'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s5',
      recordType: 'industry_topic',
      volume: 4,
      number: 5,
      section: 'curriculum',
      title: ['乳儿保育的三种视角', 'Three perspectives on infant care'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '保育指针对乳儿保育提出身体、关系与探索感受相联系的视角，中文可理解为健康舒展地成长、与亲近的人相互理解、接触周围事物并发展感受。这反映乳儿发展尚未按成人学科清晰分化的特点。',
          textEn: null,
          sources: ['J12'],
        },
        {
          type: 'paragraph',
          textZh:
            '照护不是学习开始之前的空档。喂养、换洗、安抚、入睡和交流，都构成儿童对关系、身体与环境的经验。评价乳儿班不能只看展示了多少活动照片，更应观察响应、连续性、节奏和儿童状态。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s6',
      recordType: 'industry_topic',
      volume: 4,
      number: 6,
      section: 'curriculum',
      title: [
        '一至两岁：自主性与安全感',
        'Ages one to two: agency and security',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '这一阶段儿童行动与表达迅速扩展，仍需要稳定成人与日常节奏。等待、轮流、探索材料和与同伴发生冲突，可能同时包含情绪与认知经验。教师既要保护安全，也需要给儿童可尝试的空间。',
          textEn: null,
          sources: ['J12'],
        },
        {
          type: 'paragraph',
          textZh:
            '把自主性理解为所有事情都必须独立完成，会忽略儿童差异。适当帮助可以支持继续参与，过度代替则可能减少探索。研究日常质量应关注成人何时回应、怎样引导和是否理解儿童意图，而非只比较完成任务的速度。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s7',
      recordType: 'industry_topic',
      volume: 4,
      number: 7,
      section: 'curriculum',
      title: [
        '三至五岁：游戏、协作与探究',
        'Ages three to five: play and inquiry',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '随着共同游戏发展，儿童可能协商角色、制定规则、尝试计划和反思结果。这些过程与语言、数量、社会理解和自我调节交叉。课程可以有清晰意图，同时允许活动根据儿童发现而变化。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '所谓游戏中心不等于排除一切成人提议。关键在于提议是否与儿童经验相连、是否留有行动和表达空间、教师是否根据反馈调整。相反，活动看起来热闹也不自动证明儿童主动参与，仍需观察谁在决定、谁被忽略以及儿童是否理解活动。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s8',
      recordType: 'industry_topic',
      volume: 4,
      number: 8,
      section: 'curriculum',
      title: ['计划、记录与评价', 'Planning, observation and evaluation'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '整体计划、阶段性计划和个别支持需要形成联系。记录服务于理解儿童和改进实践，不应只为制作漂亮展示。选择一个事件详细分析，有时比机械填满大量栏目更能说明儿童如何改变行动和认识。',
          textEn: null,
          sources: ['J12'],
        },
        {
          type: 'paragraph',
          textZh:
            '教师记录不可避免带有选择，需要区分观察事实、解释和下一步设想。例如“孩子三次更换积木底座”是可观察描述，“孩子缺少耐心”则是解释，可能存在其他原因。数字工具可以帮助整理，但不能自动消除解释偏差。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s9',
      recordType: 'industry_topic',
      volume: 4,
      number: 9,
      section: 'curriculum',
      title: ['家园沟通的教育意义', 'Learning through family communication'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '家庭看到的是儿童在家的生活，园所看到的是群体环境中的活动，两种经验互补。联络本、面谈和照片可以帮助理解节奏、兴趣和变化，但沟通不应只剩吃了多少、睡了多久，也不能用大量消息增加家庭负担。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '存在不同家庭语言与信息使用能力时，机构需要考虑沟通可理解性。软件翻译可以辅助，重要的健康、同意和支持安排仍需要确认是否真正被理解。收到通知、点击确认和形成共同理解属于不同层次。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s10',
      recordType: 'industry_topic',
      volume: 4,
      number: 10,
      section: 'curriculum',
      title: ['食育与生活课程', 'Food and everyday learning'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '食育涉及与食物、身体、他人及生活的关系，而不只是营养知识。种植、准备、分享和谈论口感都可能构成经验，但应结合卫生、安全和个体需要。不能为了完成活动，让儿童接触不适宜的食材或强迫进食。',
          textEn: null,
          sources: ['J12'],
        },
        {
          type: 'paragraph',
          textZh:
            '餐食供应商可以提供菜单、营养与物流支持，班级教师则更接近儿童实际体验。采购“食育课程”不意味着园所已经形成完整实践，需要观察儿童是否参与、成人如何回应和食物过敏等支持是否落实。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s11',
      recordType: 'industry_topic',
      volume: 4,
      number: 11,
      section: 'curriculum',
      title: ['户外、自然与身体活动', 'Outdoor play, nature and movement'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '户外提供不同空间、材料和感官经验，但效果取决于时间、场地、安全与教师支持。拥有大园庭不是唯一条件；城市园所也可能借助周边空间。没有实际观察时，不能因建筑面积或自然材料多少给教育质量打分。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '身体活动既包括有组织运动，也包括攀爬、搬运、追逐和日常行动。统一动作训练的可见成果，不能覆盖儿童对风险、协调、合作和兴趣的全部发展。课程研究应分辨参加率、活动强度、乐趣与长期变化。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s12',
      recordType: 'industry_topic',
      volume: 4,
      number: 12,
      section: 'curriculum',
      title: [
        '英语、双语与国际课程',
        'English, bilingual and international programmes',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '日本部分认可外或私费机构以双语、英语环境、国际课程或入学准备为卖点。它们属于行业中的特定细分，不能据此描述日本全部幼稚园。英文名称更不等于获得国际认证或具有学校法身份。',
          textEn: null,
          sources: ['J08', 'J33'],
        },
        {
          type: 'paragraph',
          textZh:
            '评价双语项目需要年龄、输入时长、教师语言能力、互动方式及家庭语言背景。品牌展示的个别儿童流利发言，只能说明个案，不证明所有儿童都达到相同水平。英语发展也应与儿童情绪、母语关系和参与机会共同观察。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '机构可以采用结构化活动，但“国际”本身不是独立效果证据。正式课程认证、考试结果、家长满意度和研究评价应分别记录。即使教育效果较好，也不能据此推断所有费用均有公共补助。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J08', 'J33'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s13',
      recordType: 'industry_topic',
      volume: 4,
      number: 13,
      section: 'curriculum',
      title: ['蒙台梭利等教育标签', 'Understanding educational labels'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '采用某种教育理念，可能体现在教师培训、材料、环境和日常活动，也可能只是部分活动借鉴该方法。研究者必须确认使用范围、人员资格及是否存在正式认证，不能依据宣传中的一个词将园所归为统一标准。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '同样的理念可能在不同年龄、营业时间和家庭构成下形成不同实施。比较效果时，需要相近群体和明确结果指标，而非根据材料照片或品牌知名度排序。日本存在多样实践，不能把个别知名园的风格概括为全国文化。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s14',
      recordType: 'industry_topic',
      volume: 4,
      number: 14,
      section: 'curriculum',
      title: ['幼保小衔接', 'Transition to primary school'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '文部科学省的幼保小衔接相关项目，强调在学前末期与小学初期连接儿童经验和教育安排。衔接并不等于幼儿园提前教授全部小学内容，也不等于小学只等待儿童适应。',
          textEn: null,
          sources: ['J22'],
        },
        {
          type: 'paragraph',
          textZh:
            '关键问题包括教师如何交流儿童的兴趣与支持需要、如何安排入学初期活动，以及家庭如何理解变化。对有不同语言、残障或特殊需要儿童，应避免把适应困难简单解释为学前训练不足。衔接需要跨机构责任，而不是只把准备任务交给孩子。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J22'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s15',
      recordType: 'industry_topic',
      volume: 4,
      number: 15,
      section: 'curriculum',
      title: ['质量研究的证据层级', 'What quality evidence can show'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '框架文件说明应该如何教育，实施研究说明实际怎样做，效果研究则考察是否带来变化。三者不能替代。公司宣布采用儿童主体理念，只能支持其定位；若要判断儿童结果，还需要样本、测量、比较和实施条件。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '横断观察可以描述关联，长期追踪能够呈现变化，但若无合适设计，仍不能排除家庭选择、地区与教师差异。国外工具在日本使用时，还应检查语言、文化与测量适配。报告不将单个研究或企业客户案例升级为全国因果结论。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-4-s16',
      recordType: 'industry_topic',
      volume: 4,
      number: 16,
      section: 'curriculum',
      title: ['数字化记录与AI辅助', 'Digital records and AI assistance'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'AI可以整理教师输入、生成文字草稿或帮助寻找记录，但儿童观察的真实性必须保留。系统生成一句自然语言，不意味着该事件真的发生。照片识别或自动摘要尤其需要核对，避免把缺席儿童、不同日期和成人解释混入记录。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '教育者对记录负责，家长和儿童资料还涉及访问权限、保留与二次使用。效率改进应与教师工时、现场互动及信息质量一同评价。文书更漂亮、数量更多，不能单独证明教育质量提升。企业卷将分别解释CoDMON、UniFa与千株式会社的不同产品路径。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s1',
      recordType: 'industry_topic',
      volume: 5,
      number: 1,
      section: 'operations',
      title: ['从家庭一天的时间表理解需求', 'Understanding a family day'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '家庭的实际需求包含通勤、工作时段、休息日、儿童年龄和照护支持。一个名额在数量上存在，不代表家长可以在工作开始前送达，也不代表孩子生病时仍能使用。行业研究需要把可及性理解为地点、时间、费用、资格与服务适配的组合。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '母亲就业或双职工比例可以解释部分需求变化，却不能涵盖求职、疾病、照护亲属、学习或家庭压力等情形。是否具有保育需要由适用地方规则认定，不能以研究者对“有无工作”的简单判断替代行政程序。',
          textEn: null,
          sources: ['J05'],
        },
      ],
      sourceIds: ['J05'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s2',
      recordType: 'industry_topic',
      volume: 5,
      number: 2,
      section: 'operations',
      title: ['保活与入园协调', 'Applications and placement'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '“保活”指家庭围绕保育利用进行的信息搜集、咨询、申请与安排。家庭可能研究园所开放时间、距离、接收年龄、特色和申请条件，再按市区町村程序提交。可选择园数量与真正可接受的园数量不同。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '利用协调可能采用就劳、家庭情况等因素，但具体分值、优先顺序和证明资料由地方规定。报告不提供全国统一入园分数表。把某个区的经验推广到其他地区，会误导家庭判断。零等待也不意味着每个申请者都获得首选园。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s3',
      recordType: 'industry_topic',
      volume: 5,
      number: 3,
      section: 'operations',
      title: ['育儿假与零岁、一岁入园', 'Parental leave and infant entry'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '育儿假结束时间、四月年度招生与儿童生日之间可能产生衔接压力。家庭在不同时间恢复工作，会影响零岁或一岁申请的选择。低龄班还需要较高人员配置，某年龄有空位不表示其他年龄可以直接使用。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '政策与企业制度的连接应具体分析。雇主延长育儿假可能改变家庭申请时间，地方服务短缺也可能影响返岗。出生减少并不能自动消除这些时间结构问题。相关劳动制度需看家庭所适用的具体条件，本报告主要解释其与服务需求的关系。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s4',
      recordType: 'public_program',
      volume: 5,
      number: 4,
      section: 'operations',
      title: ['谁都可通园制度', 'The universal attendance programme'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '2026年度全国实施的儿童谁都可通园制度，面向未进入保育所等日常机构的零岁六个月至未满三岁儿童，允许在月度一定时数内使用服务，不以家长就业为前提。官方门户介绍月十小时利用框架，但仍有认定、预约、面谈和地方实施安排。',
          textEn: null,
          sources: ['J07'],
        },
        {
          type: 'paragraph',
          textZh:
            '它拓展了儿童接触同伴、专业人员及家庭获得支持的机会，不等于全日制保育的替代，也不是家长随时到任何园即可使用。首次面谈、适应、健康信息与安全交接，对短时服务同样重要。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地方安排可以不同。例如枚方市2026年介绍采用固定曜日和时间的定期利用，以数月为一期；这说明全国给付框架下仍存在具体运行设计。个案用于说明差异，不能当作所有市町村通用流程。',
          textEn: null,
          sources: ['J23'],
        },
      ],
      sourceIds: ['J07', 'J23'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s5',
      recordType: 'public_program',
      volume: 5,
      number: 5,
      section: 'operations',
      title: ['临时托管与家庭喘息', 'Temporary and respite care'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '临时托管可以应对家长疾病、短期事务和育儿负担等需要。它与谁都可通园制度在政策目的、资格及运行上有交叉但不完全相同。家长需看当地服务是否要求提前登记、是否接受初次使用和特定年龄。',
          textEn: null,
          sources: ['J24'],
        },
        {
          type: 'paragraph',
          textZh:
            '服务可用性还取决于人员余量。临时名额可能不能提前很久确定，或需要进行适应面谈。行业统计中的年度服务人次，也不能直接当成独立受益儿童总数；同一家庭重复利用会形成多次记录。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J24'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s6',
      recordType: 'public_program',
      volume: 5,
      number: 6,
      section: 'operations',
      title: ['病儿与病后照护', 'Care during and after illness'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '儿童生病后，普通集体照护可能无法接收，家庭需要病儿、病后照护或其他安排。此类服务对人员、空间、健康判断和家庭信息有特殊要求，不能简单把普通园的空教室改名后视为可用供给。',
          textEn: null,
          sources: ['J24'],
        },
        {
          type: 'paragraph',
          textZh:
            '名额数量与真实可得性取决于疾病状态、预约规则和当地配套。服务的存在并不意味着家长不需承担工作中断。研究企业病儿照护时，应区分机构型、派遣到家或其他方式，确认其实际服务和责任范围，不根据产品名称推断医疗能力。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J24'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s7',
      recordType: 'industry_topic',
      volume: 5,
      number: 7,
      section: 'operations',
      title: ['企业与医院照护', 'Employer and hospital childcare'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '院内保育、企业内保育和企业主导型保育不是完全相同的概念。前两者主要描述设施服务对象或地点，企业主导型是特定政策项目；地域型保育中的事業所内保育又有自身制度位置。若只看到“企业保育”便归入同一市场，会丢失资金与监管差异。',
          textEn: null,
          sources: ['J08', 'J25'],
        },
        {
          type: 'paragraph',
          textZh:
            '医院等机构的工作时间可能不固定，委托运营者需要安排较长或特殊时段服务。这里的竞争力可能来自排班、人员与持续运营，而不是规模化招收周边所有家庭。是否开放社区名额，应以项目和具体设施规则确认。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J08', 'J25'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s8',
      recordType: 'industry_topic',
      volume: 5,
      number: 8,
      section: 'operations',
      title: [
        '残障、发展与医疗照护需要',
        'Disability, development and medical needs',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '儿童支持需要涉及沟通、身体、感官、发展、健康与家庭环境等不同方面。应把普遍的包容性环境、个别加配、医疗照护支持及专门发展服务区分，不能用一个“特殊儿童”标签概括全部。',
          textEn: null,
          sources: ['J05', 'J12'],
        },
        {
          type: 'paragraph',
          textZh:
            '儿童发展支援、保育所等访问支援与一般保育可能相互合作。接受发展服务不意味着必须离开普通园，也不能凭一个行政服务类别判断儿童能力。行业分析更应关注协调、可及性、人员支持与儿童参与，而非仅比较机构挂牌数量。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J05', 'J12'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s9',
      recordType: 'industry_topic',
      volume: 5,
      number: 9,
      section: 'operations',
      title: ['外国籍、多语言与沟通', 'Multilingual families'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '家庭可能面对行政语言、书面通知、健康说明和教育文化差异。儿童日语学习需要与家庭语言及身份认同共同考虑。外语家庭不等于都需要英语服务，使用英语品牌也不等于能够支持所有多语言需求。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '软件翻译和多语通知可以降低部分门槛，但重要信息仍需核实理解。调查多语言服务时，应记录覆盖语言、谁翻译、何种信息以及是否有面对面支持，不能仅因应用含翻译按钮就认定机构具备完整语言支援。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s10',
      recordType: 'industry_topic',
      volume: 5,
      number: 10,
      section: 'operations',
      title: [
        '单亲、低收入与不稳定就业',
        'Single parents and unstable employment',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '免费核心费用可以减轻家庭支出，却不能自动解决接送、用品、非标准工作时段和临时失去收入等问题。低收入家庭的需求与公共资格可能随就业状态变化，需要避免手续断档。',
          textEn: null,
          sources: ['J06'],
        },
        {
          type: 'paragraph',
          textZh:
            '就业不稳定与机构需要固定排班之间可能存在矛盾。服务设计若只适合规则的周一至周五工作，可能难以覆盖其他家庭。判断公平性应看谁没有使用以及原因，而不仅看已经入园家庭的满意度。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J06'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s11',
      recordType: 'public_program',
      volume: 5,
      number: 11,
      section: 'operations',
      title: ['家庭支援据点', 'Family support hubs'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '地域育儿支援据点提供亲子交流、咨询、信息和与相关服务连接的空间。它们不等同于全日托育，也不能把每次到访计为一个全日制学位。其价值涉及关系与早期支持，不能只用上课时数评价。',
          textEn: null,
          sources: ['J24'],
        },
        {
          type: 'paragraph',
          textZh:
            '家庭支援还可能包含访问、短期照护与亲子关系支持等项目。不同服务需要不同专业能力和转介渠道，不能因一所园开展开放日，就推定其承担全部家庭福利职能。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J24'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s12',
      recordType: 'public_program',
      volume: 5,
      number: 12,
      section: 'operations',
      title: ['从学前进入学龄', 'Moving into school-age care'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '小学放学时间、长假与家长工作时间不完全一致，由此形成课后服务需要。放课后儿童俱乐部服务对象是小学生，应与学前机构分开统计。集团同时经营两类业务有其连续性，但不表示两者适用同一课程、人员或资金规则。',
          textEn: null,
          sources: ['J26'],
        },
        {
          type: 'paragraph',
          textZh:
            '私费英语课后和法定公共课后项目也不能直接混合。品牌名称可能都包含“学童”，服务性质、时间和成本却不同。企业档案中将实际运营地点、委托项目和加盟教室分别识别，避免把同一集团的全部地点都写为幼儿园。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J26'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-5-s13',
      recordType: 'industry_topic',
      volume: 5,
      number: 13,
      section: 'operations',
      title: ['地方差异与家庭选择', 'Local differences and family choice'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '东京的地方费用支持、农村的长距离接送、城市迁入地区的低龄短缺，分别体现不同约束。它们不能被一个全国平均数覆盖。地区卷提供同口径量化背景，但具体家庭仍需要下沉到市区町村和园所。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '报告不以某类理念或经营性质替家庭作统一选择。质量、时间、可负担性、语言和支持需要可能具有不同优先级。建立完整档案的意义，是让读者知道应辨认哪些差异，而不是让品牌排名取代实际了解。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s1',
      recordType: 'industry_topic',
      volume: 6,
      number: 1,
      section: 'companies',
      title: ['企业研究的共同坐标', 'Reading company profiles'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本卷选择十五家典型企业，覆盖运营、委托、双语与加盟、数字平台、出版材料、空间和消耗品服务。入选不是教育质量榜单，也不是市场规模前十五名。许多重要园所由社会福祉法人、学校法人及地方政府运营，不能只看上市公司就概括日本幼教。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '每家公司分开识别集团、经营法人、品牌、产品与设施。量化资料优先取企业财报与一手产品资料；没有取得同口径财务时保留空白。融资和估值不替代收入，导入次数不替代独立客户，集团其他业务不计为纯幼教。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s2',
      recordType: 'company',
      volume: 6,
      number: 2,
      section: 'companies',
      title: [
        'JP Holdings：运营规模与政策资源的结合',
        'JP Holdings — the scale of its network and the role of public funding',
      ],
      companyId: 'jp-holdings',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'JP Holdings是观察日本规模化子育支援经营的重要上市案例，旗下通过相应经营主体提供保育及学龄服务，并扩展相关内容与支援。研究时需把集团控股平台、具体经营公司和设施品牌分开，不能将母子公司设施再次累加。',
          textEn: null,
          sources: ['J27'],
        },
        {
          type: 'paragraph',
          textZh:
            '截至2026年3月底，披露保育园203所、认定儿童园6所、学童俱乐部118处、儿童馆16处、交流馆2处，共345处。这里保育园与儿童园合计209所，其余136处是其他子育支援设施。把345全部写作幼儿园，将夸大其学前机构数量。',
          textEn: null,
          sources: ['J27'],
        },
        {
          type: 'figure',
          id: 'chart-J16',
          file: 'chart-J16.png',
          title: 'JP Holdings设施组合2026年3月',
          caption: 'JP Holdings设施组合2026年3月 来源 各类功能和服务年龄不同。',
          sources: ['J27'],
        },
        {
          type: 'paragraph',
          textZh:
            '2026年3月期，即2025年4月至2026年3月，集团收入43,325百万日元、营业利益6,533百万日元；上期分别41,147和5,809百万日元。按披露整数计算的营业利润率约15.08%，是集团层级，不是单园平均利润率，更不能直接与其他企业教育分部相比。',
          textEn: null,
          sources: ['J27'],
        },
        {
          type: 'figure',
          id: 'chart-J17',
          file: 'chart-J17.png',
          title: 'JP Holdings两财年经营数据',
          caption:
            'JP Holdings两财年经营数据 来源 集团实际，非单园；左右坐标不同。',
          sources: ['J27'],
        },
        {
          type: 'paragraph',
          textZh:
            '财报说明增长涉及新受托设施、儿童结构和补助等因素。阅读时应将运行资源与对应支出一起看，不能把公定价格提高全部解释为企业自由涨价。公司还披露EBITDA定义为营业利益加折旧及商誉摊销，日本公司该口径与其他国家企业调整后EBITDA未必可比。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为商业分析：较大网络可以支持采购、培训和系统投入，同时也需要持续招生、人才与地方合同。人口下降环境中的竞争重点可能从单纯开园转向现有园吸引力、低龄需求和关联服务。财报中的增长并不直接证明每个园所教育效果提高。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '其档案最有价值的是将设施组合和财务同时展开。若要进一步评价公共资金使用或家庭体验，应继续取得单园经营信息、人员与检查，而不是用15%左右集团利润率推断每所园的资源分配。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J27'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s3',
      recordType: 'company',
      volume: 6,
      number: 3,
      section: 'companies',
      title: [
        'Global Kids COMPANY：多经营主体与区域网络',
        'Global Kids COMPANY — local networks and multiple operators',
      ],
      companyId: 'global-kids',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'Global Kids COMPANY与其经营公司需要区分。官方集团入口列出Global Kids、Ohayo Kids以及Associe International等相关主体，说明读者看到的地方品牌可能属于更广的企业网络。品牌变化或集团整合不一定产生全国新增园所。',
          textEn: null,
          sources: ['J28'],
        },
        {
          type: 'paragraph',
          textZh:
            '公司概要列出的员工数字包含连结范围和兼职，因此不能直接用于计算班级师幼比。集团九月结算，在2026年10月21日观察时，刚结束财年不意味着全年结果已经完成披露；本卷不把财年结束当作已经取得最新审计业绩。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '其商业模式主要与设施运营和相关支持连接。运营网络的价值可能体现在持续的地方关系、人员安排和管理系统，但这些是需要验证的经营机制。品牌声称重视儿童主体或环境，并不能独立证明所有地点具有相同互动质量。',
          textEn: null,
          sources: ['J28'],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为分析：多经营主体结构能够保留已有品牌与区域经验，也增加制度、人员和信息协调需要。若新加入的设施在课程、系统或人员管理上迁移，家庭体验与财务影响的时点可能不同。研究者应分别跟踪收购或整合公告、实际运营地点和后续结果。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本卷未取得足以统一核验的完整最新财年数据，因而不复制第三方数据库中的收入排名，也不使用集团规模估算单园收入。其价值是展示地方设施与集团资本之间的层次，提醒读者不要把一个全国品牌当成完全统一的单一园所。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J28'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s4',
      recordType: 'company',
      volume: 6,
      number: 4,
      section: 'companies',
      title: [
        'LIKE及LIKE Kids：保育、人力与老年照护的组合',
        'LIKE and LIKE Kids — childcare, staffing and elder care',
      ],
      companyId: 'like',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'LIKE同时经营子育支援、综合人力与老年照护等业务；LIKE Kids是理解保育业务的相关经营主体。集团总收入不能直接称作保育收入。2026年5月期结束后公布的资料显示，集团收入67,315百万日元，其中子育支援35,814百万日元，占53.2%。',
          textEn: null,
          sources: ['J29'],
        },
        {
          type: 'paragraph',
          textZh:
            '同一资料列保育设施415处、接收儿童超过12,000人，并在脚注说明相关设施和儿童口径包含特定子公司运营分；儿童人数不包括学童俱乐部等。设施数与儿童数的包含范围必须分别保留，不能将两者简单相除得出“典型园规模”。',
          textEn: null,
          sources: ['J29'],
        },
        {
          type: 'figure',
          id: 'chart-J18',
          file: 'chart-J18.png',
          title: 'LIKE 2026年5月期分部收入',
          caption:
            'LIKE 2026年5月期分部收入 来源 披露取整分部合计与总收入相差1百万日元。',
          sources: ['J29'],
        },
        {
          type: 'paragraph',
          textZh:
            '2026年5月期集团营业利益2,981百万日元，仅较上期增长约1.0%；收入增幅约8.0%。资料说明保育业务受到人工和食材成本影响，其他业务利润变化对集团形成作用。这是商业组合如何影响总结果的具体例子，不能据集团增益推断保育分部同幅度改善。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '财报还区分营业利益与包含设备补助等影响的经常利益。2026年5月期资料列设备补助收入782百万日元，上期606百万日元。补助归类和确认时间影响比较，不能把所有经常利益变化当成日常学费经营的变化。',
          textEn: null,
          sources: ['J29'],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为机制分析：人力业务与保育运营在招聘、专业供给上存在关联机会，但也可能涉及不同客户、资质和劳动安排。集团拥有派遣业务，不意味着可以无条件用任何人员替代法定保育岗位。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            'LIKE案例说明人口结构变化可以同时进入儿童与老人服务，以及劳动供给市场。研究其幼教部分应优先采用子育分部，另将集团整体用于理解资金和管理环境；未来财年计划与实际业绩分别记录。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J29'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s5',
      recordType: 'company',
      volume: 6,
      number: 5,
      section: 'companies',
      title: [
        'Poppins：园所、到家服务与专业支持',
        'Poppins — center-based care, home care and professional support',
      ],
      companyId: 'poppins',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'Poppins集团业务包括Educare、Family Care、Professional及其他项目。Educare连接保育设施等服务，Family Care包含到家照护等更广家庭业务，不能将集团全部收入称为幼儿园学费。教育品牌“Educare”体现定位，不等于独立认证名称。',
          textEn: null,
          sources: ['J30'],
        },
        {
          type: 'paragraph',
          textZh:
            '2025年12月期集团收入34,409百万日元、营业利益1,840百万日元；2024年为31,690和1,574百万日元。2025年集团营业利润率约5.35%，同样不代表加盟园或单园水平。该公司年度截至十二月，与JP Holdings的三月财年、LIKE五月财年不能无条件排在同一个年度排名。',
          textEn: null,
          sources: ['J30'],
        },
        {
          type: 'paragraph',
          textZh:
            '公开分部图列Educare收入25,303百万日元、Family Care 8,202百万日元，另有其他分部与抵销。分部营业利益和集团管理调整不同，不能只相加较高利润分部便视为集团结果。Family Care还涉及非学前业务，因此不能全部计入本报告幼教市场。',
          textEn: null,
          sources: ['J30'],
        },
        {
          type: 'figure',
          id: 'chart-J19',
          file: 'chart-J19.png',
          title: 'Poppins 2025分部收入与抵销',
          caption:
            'Poppins 2025分部收入与抵销 来源 披露取整后合计与集团收入存在1百万日元差；不据此填补精确值。',
          sources: ['J30'],
        },
        {
          type: 'paragraph',
          textZh:
            '公司说明中，人员不足、招聘投入、处遇改善费用确认和新设施初年度表现，均会影响利润。这些因素能解释为什么开设更多设施未必立刻增加利润，也说明人员供给与会计时点必须同时阅读。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为商业分析：园所与到家服务提供不同的家庭支持入口，客户可能既来自个人家庭，也来自企业或机构合同。两种模式具有不同人员调度、服务时数和成本结构，不能用同一每名儿童价格进行比较。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            'Poppins的代表性在于展示日本家庭支援可以超出单一设施，形成长期照护、临时支持和专业服务的组合。其企业材料可确认产品、收入与策略，但不直接证明不同服务的教育效果或家庭减负结果；个案体验仍需独立调查。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J30'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s6',
      recordType: 'company',
      volume: 6,
      number: 6,
      section: 'companies',
      title: [
        'Teno Holdings：公的保育与受托运营的分层',
        'Teno Holdings — publicly supported childcare and contract operations',
      ],
      companyId: 'teno',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'Teno的服务组合涉及公的保育、受托保育、其他保育，以及老年照护和生活相关业务。把集团所有设施计作幼儿园，会混入学龄、老年和其他场所。受托保育收入也不等于家庭直接支付的收费，因为客户可能是医院、企业或公共部门。',
          textEn: null,
          sources: ['J31'],
        },
        {
          type: 'paragraph',
          textZh:
            '本次取得的官网PDF文件名仍带有202512，但打开后的封面明确为2026年12月期第二季度。报告采用文件实际内容期间，而不依据文件名推断年份。这也是持续更新资料中需要防范的版本风险。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '该中期披露集团收入9,550百万日元、营业利益362百万日元，比较期收入9,116百万日元、营业利益288百万日元。它是2026年上半年的集团实际披露，不是全年结果，不能直接与其他公司全年收入比较。',
          textEn: null,
          sources: ['J31'],
        },
        {
          type: 'paragraph',
          textZh:
            '同一资料给出的收入构成为公的保育49.5%、受托保育23.3%、其他保育3.5%，三项合计约76.3%；其他部分来自老年、残障、生活与其他业务。同页文字还出现保育业务76.6%的表述，与上述三项相加76.3%不同；本报告不擅自判断原因。图中只保留各项公开比例，其合计为99.8%，不强制归一化，也不据此反算精确分部金额。',
          textEn: null,
          sources: ['J31'],
        },
        {
          type: 'figure',
          id: 'chart-J20',
          file: 'chart-J20.png',
          title: 'Teno 2026中期收入构成',
          caption:
            'Teno 2026中期收入构成 来源 原图所列比例合计99.8%，未强制归一化；非全年。',
          sources: ['J31'],
        },
        {
          type: 'paragraph',
          textZh:
            '受托模式需要持续管理合同、人员和质量责任。客户更换运营方可能使设施仍在原址服务，但企业管理数量变化；反之，新合同也可能只是既有设施运营主体改变。因此“增加受托点”不等同于全国增加相同数量的新学位。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            'Teno个案适合观察地方合同和多业务发展。对历史不当保育等事件，必须依正式公告、调查与后续监督单独核查，不能只凭新闻标题给整个集团定性。本卷依据已读文件说明商业与数据结构，未对单园安全或教育质量评分。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J31'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s7',
      recordType: 'company',
      volume: 6,
      number: 7,
      section: 'companies',
      title: [
        'Kids Corporation：医院与企业委托的专业运营',
        'Kids Corporation — managing childcare for hospitals and employers',
      ],
      companyId: 'kids-corporation',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'Kids Corporation官方沿革记录1993年在栃木县以保姆服务起步，2016年开设首家认可保育园。如今业务包括医院内、企业内受托运营及认可与小规模保育。这个发展路径说明，从家庭服务、委托照护到制度内设施，可以形成不同于纯粹家庭学费连锁的商业组合。',
          textEn: null,
          sources: ['J32'],
        },
        {
          type: 'paragraph',
          textZh:
            '官网不同页面出现约347所或350所等规模描述，可能与更新时间或范围有关。报告不把两者组成短期增长曲线，也不据此估算收入。运营设施、合同项目与集团关联机构的边界需要以有日期的名册确认。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '其“Kids Approach”等理念属于企业教育表达，可用于了解自我定位。是否在每个受托设施落实，要结合教师培训、园长管理、人员连续性和现场活动。医院客户的满意度，也不能代替儿童发展或互动质量研究。',
          textEn: null,
          sources: ['J32'],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为运营分析：医院需要支持员工的工作时间，可能存在非标准时段与临时需求；受托方需要在预算和人员可得性之间组织服务。规模化后台可以提供招募、培训和替班支持，但具体职责取决于合同。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '选择受托模式时，设立者、空间提供者、实际雇主和牌照主体可能不同。发生质量或服务争议时，需要辨认各方职责，而不是只追问品牌名称。研究行业规模也应以地点为单位去重。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '该企业为理解日本院内与企业内照护提供典型案例。本卷没有取得可用于统一比较的完整审计收入、利润及合同续约数据，保持缺失，不以品牌自报规模填补财务空白。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J32'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s8',
      recordType: 'company',
      volume: 6,
      number: 8,
      section: 'companies',
      title: [
        'Nichii及Nichii Kids：照护集团内的儿童服务',
        'Nichii and Nichii Kids — children’s services within a broader care group',
      ],
      companyId: 'nichii',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'Nichii官方将保育服务作为其多领域业务之一，Nichii Kids是主要识别品牌。集团还涉及医疗相关、老年照护与家庭服务等，不能用母公司全部业务量推算幼教规模。具体园所的类别与资金项目仍需逐点确认。',
          textEn: null,
          sources: ['J33'],
        },
        {
          type: 'paragraph',
          textZh:
            '2026年4月官方公告提出新的服务愿景，并向约7,000名儿童的家长提供MOM UP PARK育儿支持项目。这个儿童数字来自特定公告语境，不应自动当成集团全部在园儿童或所有服务的去重人数，更不能与其他集团不同期末口径排名。',
          textEn: null,
          sources: ['J33'],
        },
        {
          type: 'paragraph',
          textZh:
            '项目内容涉及线上支持、交流与专业合作，显示部分运营者希望将服务对象从儿童延伸至家庭。企业宣布免费向家长提供某个项目，也不等于园所全部服务免费，或者项目已取得独立效果验证。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为模式分析：长期运营经验可以支持流程与培训，但跨医疗、老年和儿童业务仍需适龄专业能力。集团共享资源可能产生协同，也可能增加治理复杂性，不能仅以“综合照护集团”推断教育质量。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '儿童服务的观察应包括实际设施、人员、家长沟通和地方监督。对于公共支持资格，应核对具体园所是否属于认可、企业主导型或其他类别；同一品牌下可能存在不同制度安排。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本卷没有用未核验的当前股权信息解释企业行为，也没有将旧上市资料视为现行完整财务。其核心研究价值是展示综合服务集团如何把保育与家庭支持连接，同时保持对集团其他业务边界的清晰识别。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J33'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s9',
      recordType: 'company',
      volume: 6,
      number: 9,
      section: 'companies',
      title: [
        'Benesse的保育业务：集团内容与现场服务要分开',
        'Benesse — learning materials and care delivered on site',
      ],
      companyId: 'benesse',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'Benesse在公众认知中同时与教育内容、家庭学习和照护服务相关。其保育服务应定位到Benesse Style Care等相应经营体系，不能把家庭教材订阅业务与保育园视为同一收入单位，也不能依据集团名称将全部关联公司合并计算。',
          textEn: null,
          sources: ['J34'],
        },
        {
          type: 'paragraph',
          textZh:
            '官方照护业务介绍同时包含老年与儿童领域。研究者必须将保育园、学童及老年设施分列，母公司整体收入不能称为幼教收入。同一集团拥有儿童内容资源，也不证明园所每天使用同一套家庭产品。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为商业分析：品牌认知可以降低家庭寻找信息的成本，但稳定服务仍取决于地方地点、教师和管理。集团教育理念需要转换为真实时间、材料和互动，才能形成儿童经验。品牌在家庭学习市场的口碑，不能直接替代对保育场景的评价。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '该案例的关键不是“教材公司开幼儿园”的简化叙事，而是区分内容产品、现场服务、学龄支持及老年照护。一个家庭购买绘本或订阅课程，是产品客户；儿童进入机构，是现场服务使用者。双方即使同属集团，也具有不同合同、责任与质量证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本卷不根据已结束上市期间的旧数据推断当前保育收入，也不以整个Benesse业务估值代替儿童服务价值。有关股权和重组，需使用对应日期正式文件。现有一手资料足以确认业务位置，但不支持本卷给出单独保育利润率。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J34'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s10',
      recordType: 'company',
      volume: 6,
      number: 10,
      section: 'companies',
      title: [
        'Yaruki Switch：双语幼儿品牌与加盟体系',
        'Yaruki Switch — bilingual early education and franchising',
      ],
      companyId: 'yaruki-switch',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'Yaruki Switch官方业务体系中，Kids Duo、Kids Duo International和i Kids Star是不同服务品牌。Kids Duo包含英语环境的学童与学前服务，KDI和i Kids Star定位双语幼儿服务。它们不能因名称相近便当作同一种设施，也不能把集团全部教室数当成幼儿园数。',
          textEn: null,
          sources: ['J35'],
        },
        {
          type: 'paragraph',
          textZh:
            '官方加盟资料说明i Kids Star采用较紧凑的空间模式，并将英语、知育与运动作为其产品表达。品牌之间共享部分教育资源，不意味着每个地点具有同样定员、建筑、成本或许可身份。特许经营总部与当地加盟运营方的责任应分别识别。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '“幼儿园功能结合保育”的宣传描述，不能替代日本法律类别。是否为学校法幼稚园、认可外设施或其他安排，需查具体园址。补助资格与金额同样需要核对，不能将单个品牌页面列示的地方支持写成全国统一额度。',
          textEn: null,
          sources: ['J35', 'J06'],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为模式分析：双语和较长时段服务连接家庭教育偏好与工作安排，可以形成私费差异化市场。与此同时，外语教师供给、保育人员、空间与家庭购买能力共同影响经营。品牌公布儿童表现或家长反馈，不构成所有儿童相同效果的保证。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '日本加盟幼儿服务可以与美国加盟品牌放在同一商业类型中观察，但不能直接搬用美国FDD投资结构或成熟园利润。没有取得日本具体加盟合同与完整投资披露时，报告不填入回本期和盈利预测。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '该企业案例用于解释品牌、加盟、双语和机构资格四层关系。它代表特定细分，不代表日本主流制度内设施都以英语或学业训练为中心。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J35', 'J06'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s11',
      recordType: 'company',
      volume: 6,
      number: 11,
      section: 'companies',
      title: [
        'CoDMON：从园内事务到公共部门连接',
        'CoDMON — software for centers and local authorities',
      ],
      companyId: 'codmon',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'CoDMON为保育与教育设施提供ICT服务，涵盖出勤、联络、记录、收费或相应运营功能。公司不是因为软件被使用就成为这些机构的现场经营者。客户设施数量与自营园所数属于不同量纲。',
          textEn: null,
          sources: ['J36'],
        },
        {
          type: 'paragraph',
          textZh:
            '官方2026年10月1日页面显示导入25,696个设施，范围包含保育、教育等多类使用场景，不能直接称为日本幼儿园25,696所。此前九月页面列25,548，也需要保留日期，不能随手选择较大数字后省略统计范围。',
          textEn: null,
          sources: ['J36'],
        },
        {
          type: 'paragraph',
          textZh:
            '企业使用的“份额第一”表述关联特定调查、年份与SaaS园所导入范围。报告不将其扩展为全部幼教技术、全部软件或全部儿童数据的市场份额。机构可能同时使用其他工具，名单重叠也使供应商之间不能简单相加。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为商业分析：家园通知、出勤与收费形成持续工作流程，客户转换系统涉及历史记录、人员培训、家长账号和接口。采购价格之外的实施与迁移成本，是理解平台关系的重要部分。公立设施还需要与公共采购、访问权限和数据治理衔接。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '软件可以降低部分重复事务，但企业客户案例中的工时节省，不能自动推广到所有园所。效果取决于原有流程、使用模块和员工熟悉程度。数字化也可能在迁移初期增加工作，需要用实际记录观察净变化。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本卷不披露未取得的审计收入、利润或估值，亦不按客户设施数估算经营收入。其代表性在于把幼教管理与地方行政连接起来，而不是表明一家软件公司承担全部园所教育责任。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J36'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s12',
      recordType: 'company',
      volume: 6,
      number: 12,
      section: 'companies',
      title: [
        'UniFa与Lookmee：ICT、IoT和观察记录',
        'UniFa and Lookmee — digital tools, sensors and observation records',
      ],
      companyId: 'unifa',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'UniFa的Lookmee产品体系连接保育ICT、照片、午睡辅助及专业学习等功能。研究时必须区分公司UniFa、系列品牌Lookmee以及具体模块。使用多个模块的一所园，可能形成多次导入记录，不能直接转换为多家独立客户。',
          textEn: null,
          sources: ['J37'],
        },
        {
          type: 'paragraph',
          textZh:
            '2026年10月1日企业公告自报系列累计导入超过25,000件，涉及约80个自治体。这里使用“件”而非去重“园”，不能与CoDMON的设施数直接排行，也不能视为全部园所均完整使用每项功能。',
          textEn: null,
          sources: ['J37'],
        },
        {
          type: 'paragraph',
          textZh:
            '公司2024年资本公告称新增股权融资5亿日元，累计股权融资93亿日元。融资反映资金进入，不是年度收入、估值或利润。即使资本用于研发或市场扩展，也要区分公告用途与后续实际支出。',
          textEn: null,
          sources: ['J37'],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为产品分析：将传感、照片和记录连接，可能减少重复录入并支持教师讨论，但自动生成的解释需要人工核实。午睡设备只是辅助，不能替代必要观察与响应。记录更容易汇总，也不意味着儿童发展评价更准确。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '2026年企业发布AI政策调整等材料，说明其正在回应生成式技术与儿童资料问题。政策文本表达治理原则，是否在全部产品实施、外部供应商怎样参与，还需要具体条款与证据。报告不因出现AI政策就推定所有风险被消除。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            'UniFa体现保育技术从行政效率向记录、专业反思与家庭沟通延伸。商业观察应同时记录产品、客户、合同、资料使用与现场责任，不将企业口号视作儿童结果研究。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J37'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s13',
      recordType: 'company',
      volume: 6,
      number: 13,
      section: 'companies',
      title: [
        '千株式会社与“はいチーズ！”：照片入口的扩展',
        'Sen Inc. and Hai Cheese! — connecting with families through photos',
      ],
      companyId: 'sen',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '千株式会社的“はいチーズ！”从照片拍摄与网络销售等服务连接园所和家庭，并扩展ICT、相册等相关产品。公司和产品品牌不能作为两家企业重复统计。摄影师、园所与家庭还可能在一次服务中承担不同角色。',
          textEn: null,
          sources: ['J38'],
        },
        {
          type: 'paragraph',
          textZh:
            '照片服务的付款方可能是家庭，管理系统的购买方可能是机构；二者不必采用相同收费方式。因此，不能以“系统免费”推定企业没有商业收入，也不能将照片销售总金额等同于软件订阅收入。实际费用需要按产品与合同拆分。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为商业分析：照片是高频家园接触入口，企业可以在已有关系上提供相册和事务工具。但照片拍得更多，可能增加筛选、授权和家长支出，也可能减少园所自行制作材料的工作，实际净影响取决于流程。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '儿童影像处理涉及谁可以拍、谁可以看、是否分享及保留多久。人脸搜索和AI筛选并不改变家长同意、访问控制和信息安全的重要性。识别功能便利与儿童隐私保护必须同时研究，不能只呈现营销演示。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '官方案例和用户反馈可用于确认功能与体验，不足以证明教育结果或全行业减负。照片观看频率也不是家长理解儿童发展的直接指标。机构沟通仍需要对事件背景和儿童过程作解释。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本卷保留其产品关系与收入路径的分析，没有将未取得的一手客户去重数、收入或估值补为精确值。它代表以家庭影像为入口的幼教服务链，与直接运营中心和纯课程商存在明显区别。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J38'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s14',
      recordType: 'company',
      volume: 6,
      number: 14,
      section: 'companies',
      title: [
        'BABY JOB：纸尿裤订阅如何进入园所流程',
        'BABY JOB — how a diaper subscription fits into the childcare day',
      ],
      companyId: 'baby-job',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'BABY JOB的“手ぶら登園”提供园所场景的纸尿裤、湿巾等订阅服务，并有寻找设施和其他相关服务。产品名称表达家庭不必按传统方式携带部分用品的便利，不意味着孩子上园无需准备任何物品。',
          textEn: null,
          sources: ['J39'],
        },
        {
          type: 'paragraph',
          textZh:
            '订阅模式连接家庭、园所、耗材供应和配送。园所需要处理库存、尺寸、使用与补货，家庭关注费用、适用品牌和使用条件。合同付款、配送责任和退出条件应按实际产品核对，不能因为是订阅就认定长期总费用更低。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为经营分析：标准化采购可能减少家长标记、教师收纳和用品交接工作，也可能带来库存、浪费或个体适配问题。效率判断应记录节省哪些步骤、增加哪些步骤，而不是只比较送到园门的箱数。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '公司业务还涉及现金收款减负或设施信息入口。不同产品与纸尿裤订阅具有不同交易流程，不能把它们全部概括为“托育软件”。企业触达家庭，不代表承担保育牌照或日常儿童照护责任。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '该案例解释了幼教产业链中看似细小的消耗品如何成为持续服务。它的价值既可能体现在家庭便利，也可能体现在教师时间，但需要场景调查支持。本卷不使用企业“首创”等宣传称号作为竞争优势已被证明的证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '没有取得完整公开财务时，订阅用户、合作园和累计使用量也不能用于推导收入。报告保持该字段缺失，把研究重点放在流程、付费主体与服务边界。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J39'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s15',
      recordType: 'company',
      volume: 6,
      number: 15,
      section: 'companies',
      title: [
        'Froebel-kan：出版、保育材料与现场资源',
        'Froebel-kan — picture books, materials and resources for educators',
      ],
      companyId: 'froebel-kan',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'Froebel-kan的业务包括儿童出版、保育支持、材料与相关空间服务。其Kinderbook月刊绘本创刊于1927年，是理解日本机构月刊资源的重要案例。绘本的出版历史不等于所有园所采用相同课程，更不能解释为国家指定统一教材。',
          textEn: null,
          sources: ['J40'],
        },
        {
          type: 'paragraph',
          textZh:
            '企业也提供面向教育者的信息、培训和材料。月刊可以支持季节、生活、自然与故事经验，教师如何选择、共读和连接儿童问题，决定具体使用方式。一个月刊主题进入活动，不意味着五领域被完整或均等覆盖。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为商业分析：机构渠道、定期订阅与材料采购形成持续关系，出版商可以通过编辑、销售和专业支持与园所连接。相较单次零售，客户关系可能更稳定，但实际收入仍受儿童人数、订阅选择和产品组合影响。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            'Froebel-kan官方材料还提及园运营与室内游戏等业务，因此本卷按主要研究角色将其放在供应链，不宣称其绝不直接提供儿童服务。企业分类是研究主线，而非完整业务排他清单。',
          textEn: null,
          sources: ['J40'],
        },
        {
          type: 'paragraph',
          textZh:
            '材料安全、年龄适宜、教育用途和版权是不同问题。符合某项产品安全标准，不等于教育效果经过验证；知名角色或漂亮绘本，也不等于所有儿童都以同样方式参与。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '其案例显示日本幼教用品并非只销售玩具，而是将内容、专业信息与机构采购结合。本卷未取得可统一拆分幼教业务的完整财务，不用整个出版业务估算园所市场份额。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J40'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s16',
      recordType: 'company',
      volume: 6,
      number: 16,
      section: 'companies',
      title: [
        'BorneLund：游戏材料、空间与活动经验',
        'BorneLund — play materials, spaces and experiences',
      ],
      companyId: 'bornelund',
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'BorneLund提供游戏工具、空间设计和相关活动服务。官方环境页面覆盖保育园、幼稚园、学校、公共、商业、医疗等多种场景，业务不能全部计入学前园所采购。项目数也不等于其自营托育地点数。',
          textEn: null,
          sources: ['J41'],
        },
        {
          type: 'paragraph',
          textZh:
            '其PLAYSCAPE等教育保育客户入口，将空间用途、材料与儿童活动联系起来。空间方案涉及年龄、动作、收纳、动线和维护，不能只依据建筑照片判断实际体验。材料到位之后，成人组织与儿童使用仍决定教育过程。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '以下为商业分析：从产品销售延伸到整体环境，可以帮助客户减少分别采购和设计的协调，也可以扩大供应商在项目中的作用。实际价值需要看预算、安装、长期维护、使用频率和培训，而不只是开业时的视觉效果。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '公司还经营或参与游戏场等体验业务，游戏场到访人数不能作为幼儿园在园儿童。家庭购买、机构采购、公共空间项目具有不同付款者与交付条件，应分别记录。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '儿童主动游戏是企业重要表达，但这属于理念与产品定位。若要证明某种环境改善儿童结果，需要相应研究设计、比较和实施记录，不能由供应商案例直接推出普遍结论。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            'BorneLund的代表性在于说明空间与实物工具可以形成完整服务链。报告不将其列为保育运营规模排名，也不以全场景项目数量估算日本幼教市场份额。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J41'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s17',
      recordType: 'industry_topic',
      volume: 6,
      number: 17,
      section: 'companies',
      title: ['其他重要观察对象', 'Other organisations'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            'SERIO相关体系在2024年纳入Senko集团，当前官网说明SERIO Holdings自2026年4月更名为S-Life Partners，经营公司Serio等名称不因此自动改变。历史上市主体、当前控股公司和现场经营品牌需要区分，不能仍把旧主体当成独立上市公司描述。',
          textEn: null,
          sources: ['J43'],
        },
        {
          type: 'paragraph',
          textZh:
            'Child Honsya即チャイルド本社提供月刊绘本、保育者信息和用品，月刊与教具属于产品，不是自营连锁园。它与名称相近的チャイルド社也不能仅凭中文译名合并；法律实体、目录和业务需要分别核对。',
          textEn: null,
          sources: ['J42'],
        },
        {
          type: 'paragraph',
          textZh:
            'Gakken集团同时涉及出版学习及医疗福利等业务。若研究其保育服务，应定位相应经营主体和设施类别，不使用集团总收入代表幼教。企业名称、园所名册与财务分部之间的映射，是后续扩展研究的必要工作。',
          textEn: null,
          sources: ['J44'],
        },
        {
          type: 'paragraph',
          textZh:
            '这些对象作为延伸图谱，不列入十五家核心财务或经营比较，也不意味着其行业作用较小。入选深度取决于本次取得材料与研究主线，不应将“有公开财报”误作“质量更好”。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J43', 'J42', 'J44'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s18',
      recordType: 'industry_topic',
      volume: 6,
      number: 18,
      section: 'companies',
      title: ['十五家企业的服务链比较', 'Company comparisons'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'table',
          columns: [
            '企业',
            '主要研究角色',
            '主要付款或合同主体',
            '最易误读的数字',
          ],
          rows: [
            [
              'JP Holdings',
              '设施运营与关联支援',
              '公共体系、家庭及相关合同',
              '把345处全部写成幼儿园',
            ],
            [
              'Global Kids COMPANY',
              '多经营主体保育运营',
              '公共体系与家庭',
              '集团员工当作班级配置',
            ],
            [
              'LIKE / LIKE Kids',
              '保育及综合服务集团',
              '公共、企业、家庭',
              '集团收入等于保育收入',
            ],
            [
              'Poppins',
              '园所与家庭照护组合',
              '公共、企业、家庭',
              'Family Care全部等于幼教',
            ],
            [
              'Teno',
              '公的与受托运营',
              '地方、医院、企业、家庭',
              '半年数字当全年',
            ],
            [
              'Kids Corporation',
              '医院企业委托与认可保育',
              '医院、企业、公共及家庭',
              '页面规模差异当连续增长',
            ],
            [
              'Nichii / Nichii Kids',
              '综合服务中的保育',
              '公共、企业与家庭',
              '特定项目儿童数当全集团人数',
            ],
            [
              'Benesse保育业务',
              '园所与学龄服务',
              '公共与家庭',
              '教材客户等于园所儿童',
            ],
            [
              'Yaruki Switch',
              '双语及加盟品牌',
              '家庭与加盟经营者',
              '全教室数等于幼儿园数',
            ],
            ['CoDMON', 'ICT软件', '机构与公共客户', '多类型客户数等于学前园数'],
            [
              'UniFa',
              'ICT、IoT及相关支持',
              '机构与公共客户',
              '累计导入件数等于去重客户',
            ],
            ['千株式会社', '照片与ICT', '家庭与机构', '照片交易额等于订阅收入'],
            [
              'BABY JOB',
              '消耗品订阅及服务',
              '家庭、机构或相关合同',
              '合作园等于自营园',
            ],
            [
              'Froebel-kan',
              '出版、用品与保育支持',
              '园所、家庭及其他客户',
              '产品覆盖等于课程独占',
            ],
            [
              'BorneLund',
              '工具与游戏环境',
              '机构、公共、商业与家庭',
              '全场景项目数等于幼教份额',
            ],
          ],
          sources: [],
        },
        {
          type: 'figure',
          id: 'chart-J21',
          file: 'chart-J21.png',
          title: '十五家企业主要角色矩阵',
          caption:
            '十五家企业主要角色矩阵 来源 至 及本报告分类 不是市场份额或质量评分。',
          sources: ['J27', 'J41'],
        },
      ],
      sourceIds: ['J27', 'J41'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s19',
      recordType: 'industry_topic',
      volume: 6,
      number: 19,
      section: 'companies',
      title: ['资本、扩张与教育效果', 'Investment and educational outcomes'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '企业扩张可能通过新建、委托切换、并购、加盟、产品销售或客户导入实现，每种方式的“增长”都不同。新增合同未必增加全国净容量，软件新增模块也未必新增独立园所。评价扩张，应先确认真实经营单位。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '资本交易可以改变资源与治理，但交易金额不是教育质量指标。品牌教育理念、培训人数和客户覆盖也不能代替儿童结果。研究经营、公共责任与教育过程需要不同证据，本卷将它们放在同一个档案内，却不将其简单换算成统一分数。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-6-s20',
      recordType: 'industry_topic',
      volume: 6,
      number: 20,
      section: 'companies',
      title: ['财务比较的阅读说明', 'Reading financial comparisons'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本卷财务图按企业分别呈现实际期间：JP Holdings截至2026年三月的年度，LIKE截至2026年五月的年度，Poppins截至2025年十二月的年度，Teno截至2026年六月的中期。所有金额以百万日元保留，不另用会波动的汇率制造跨国可比性。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '没有取得的财务数据保持为空，零值只用于来源明确报告为零的指标。企业官网声称领先、满意或高质量时，报告将其视为企业表述；只有取得独立研究并核对方法，才作为效果证据使用。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s1',
      recordType: 'industry_topic',
      volume: 7,
      number: 1,
      section: 'technology',
      title: [
        '产业链与园所市场的区别',
        'The supply chain and centre operations',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '园所向儿童提供教育保育，供应商向园所、家庭或公共部门提供材料、系统和服务。两者可能发生在同一交易链中，供应商收入是园所成本的一部分，不能在未说明统计方法时直接相加成最终市场规模。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '日本产业链可以分为内容与专业资源、材料与空间、餐食与健康、人员与培训、经营软件、家庭便利及资本地产等部分。大型企业可能跨越多个环节，分类应按主要活动及具体产品，而不是以集团名称决定全部业务。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s2',
      recordType: 'industry_topic',
      volume: 7,
      number: 2,
      section: 'technology',
      title: ['月刊绘本与机构内容渠道', 'Monthly picture books'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '月刊绘本通过园所连接儿童与家庭，内容可能围绕生活、季节、故事和科学探索。Froebel-kan与Child Honsya等企业说明了这种渠道。产品既有儿童阅读属性，也进入教师活动资源与家园关系。',
          textEn: null,
          sources: ['J40', 'J42'],
        },
        {
          type: 'paragraph',
          textZh:
            '订阅数量下降可能来自儿童减少，也可能来自产品选择或渠道变化；单一出版销售不能直接说明全部幼教需求萎缩。研究应区分读者年龄、机构订阅、家庭购买和数字产品，不用出版物销售量估算在园人数。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J40', 'J42'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s3',
      recordType: 'industry_topic',
      volume: 7,
      number: 3,
      section: 'technology',
      title: ['教具、玩具与专业材料', 'Materials and professional resources'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '材料采购需要考虑安全、清洁、耐用、年龄、无障碍和教育用途。昂贵或进口并不自动意味着适合所有儿童。集团集中采购可以降低某些交易成本，却也需要保留教师根据儿童调整的空间。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '知识产权与供应关系同样重要。经销某个品牌不等于拥有研发与全部版权，销售某种评估工具不等于负责其认证。研究企业产品组合时，应记录生产、授权、代理与服务角色，避免将目录全部视作自有技术。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s4',
      recordType: 'industry_topic',
      volume: 7,
      number: 4,
      section: 'technology',
      title: ['空间设计与交付', 'Space design and delivery'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '新设和改造涉及建筑、消防、卫生、户外、动线、家具与材料。BorneLund等企业提供的环境方案，说明空间服务可以超出单件商品销售。供应商方案符合某些标准，不代表自动完成地方许可。',
          textEn: null,
          sources: ['J41'],
        },
        {
          type: 'paragraph',
          textZh:
            '空间项目还需要长期维护。能够在开园照片中呈现的效果，不一定等于长期使用质量；收纳、损耗、清洁和人员培训都会影响结果。研究预算应包含实施和维护，而非只记录初始设计费。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J41'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s5',
      recordType: 'industry_topic',
      volume: 7,
      number: 5,
      section: 'technology',
      title: ['餐食、配送与消耗品', 'Meals, deliveries and consumables'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '餐食供应连接菜单、采购、烹饪、配送和个别支持。外包部分流程不会消除园所对儿童信息、发放与进食观察的责任。过敏和其他健康需要必须经过相应专业安排，不能只以统一菜单管理全部儿童。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '纸尿裤、湿巾、寝具与清洗等服务体现生活流程的商业化。BABY JOB案例显示，便利的价值来自减少交接和准备，也取决于库存和持续使用。订阅费不能与一次购买价直接比较，需要相同期间和实际用量。',
          textEn: null,
          sources: ['J39'],
        },
      ],
      sourceIds: ['J39'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s6',
      recordType: 'industry_topic',
      volume: 7,
      number: 6,
      section: 'technology',
      title: ['人才、派遣与培训', 'Recruitment, staffing and training'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '人员供给链包含养成教育、考试注册、招聘、派遣、辅助人员和职业学习。招聘平台促成就业不等于成为园所质量管理方，培训机构发放学习证明也不等于授予国家资格。',
          textEn: null,
          sources: ['J18', 'J19'],
        },
        {
          type: 'paragraph',
          textZh:
            '经营者使用第三方人员，需要看适用岗位、资格、工作时间和责任。只降低招聘费用未必改善留任，稳定团队和管理支持仍是现场质量的重要条件。培训市场的规模不能按参加人次直接理解为独立教师数。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J18', 'J19'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s7',
      recordType: 'industry_topic',
      volume: 7,
      number: 7,
      section: 'technology',
      title: ['保育ICT的核心工作流', 'Core childcare software workflows'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '出勤、健康联络、计划记录、家庭通知、员工排班、费用和行政报送是常见工作流。CoDMON、Lookmee和“はいチーズ！”具有不同起点和产品组合。功能相近不代表数据结构、合同或全部服务相同。',
          textEn: null,
          sources: ['J36', 'J37', 'J38'],
        },
        {
          type: 'paragraph',
          textZh:
            '采购者需要理解实施成本：导入初期的资料清理、家长账号、教师培训和系统并行，可能先增加工作。后续是否减负要看重复录入是否真正减少，而不只看有多少功能上线。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J36', 'J37', 'J38'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s8',
      recordType: 'industry_topic',
      volume: 7,
      number: 8,
      section: 'technology',
      title: [
        'SaaS客户、模块与市场份额',
        'Customers, modules and market share',
      ],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '一所园可以同时订阅管理系统、照片、传感器和支付工具，也可以由同一家供应商提供多个模块。因此，导入件数、合同数量、客户机构和去重地点是不同单位。企业相加会发生重复，软件“份额”必须保留调查定义。',
          textEn: null,
          sources: ['J36', 'J37'],
        },
        {
          type: 'paragraph',
          textZh:
            '图J21只表示主要研究角色，不用导入数字制造软件与园所集团总榜。若后续取得统一市场调查，也应核对调查是否覆盖同一类设施、是否排除免费客户以及统计时间。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J36', 'J37'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s9',
      recordType: 'industry_topic',
      volume: 7,
      number: 9,
      section: 'technology',
      title: ['家庭照片与沟通服务', 'Family photography and communication'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '照片销售可以产生家庭收入入口，园所系统则可能面向机构收费。免费工具可能通过其他服务获得收入，但不能未读合同就推定具体商业机制。照片交易、佣金与软件收入需分别记录。',
          textEn: null,
          sources: ['J38'],
        },
        {
          type: 'paragraph',
          textZh:
            '儿童影像与发展记录具有不同目的。教育记录需要背景和解释，照片集主要提供可见片段，不能将照片数量当作教育质量。照片不应未经适当授权用于训练、推广或其他用途，实际使用以适用规则与合同为准。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J38'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s10',
      recordType: 'industry_topic',
      volume: 7,
      number: 10,
      section: 'technology',
      title: ['IoT与安全辅助', 'Sensors and safety assistance'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '午睡、门禁、接送和环境传感等工具可能辅助管理，任何一项都不是完整安全体系。设备故障、网络中断、阈值和人员响应需要预案。园所购买设备后，还需要明确如何使用、谁维护、如何记录与何时升级处理。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '技术企业可以提供工具和培训，现场责任仍需要结合设施与合同。不能因为某产品被公共项目采用，就推断它能保证每名儿童安全或替代所有人工检查。',
          textEn: null,
          sources: ['J21', 'J37'],
        },
      ],
      sourceIds: ['J21', 'J37'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s11',
      recordType: 'industry_topic',
      volume: 7,
      number: 11,
      section: 'technology',
      title: ['AI进入保育工作的实际边界', 'Practical limits of AI'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '生成式AI可能用于草拟通知、整理记录和辅助检索，也可能被用于照片分析或个别化建议。必须区分行政文字处理、教育解释和涉及健康安全的判断。模型流畅输出并不能证明内容事实正确。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '若要评价成效，可观察教师实际工时、纠错负担、数据准确、沟通可理解性和现场参与，而不只是生成字数。AI工具越容易生成详细记录，越需要防止出现没有发生的事件与过度推断的儿童标签。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s12',
      recordType: 'industry_topic',
      volume: 7,
      number: 12,
      section: 'technology',
      title: ['数据、接口与迁移', 'Data, interfaces and migration'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '机构采购不只比较价格，还要看资料可导出、接口、访问权限、备份、保留、删除和服务终止后的处理。父母、员工、园长和集团管理员并不需要相同权限，角色设计应服务实际责任。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '平台与行政系统连接可以减少报送重复，但接口支持不代表所有字段自动正确。若原始考勤或儿童资料有误，自动传输可能扩大错误。数据治理需要从输入到使用形成核对，而非只在系统末端备份。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s13',
      recordType: 'industry_topic',
      volume: 7,
      number: 13,
      section: 'technology',
      title: ['公共采购与供应商关系', 'Public procurement'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '公立机构或获得公共支持的项目，采购可能涉及预算、招标和记录要求。供应商介绍中的“补助可用”只说明某些情景可能符合，不等于每个客户自动获得补助。政策年度、项目和支出种类需要对应。',
          textEn: null,
          sources: ['J05', 'J15'],
        },
        {
          type: 'paragraph',
          textZh:
            '公共客户案例能够确认某次导入，不能推断全地区所有机构使用同一产品。合同续约、产品更换和模块变化还可能使旧案例失去现时性。持续研究需要保留历史与当前状态，而不把企业案例库当成永久名册。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J05', 'J15'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s14',
      recordType: 'industry_topic',
      volume: 7,
      number: 14,
      section: 'technology',
      title: ['供应链的三种竞争方式', 'Three ways suppliers compete'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '第一类通过专业内容和长期关系竞争，例如出版与培训；第二类通过交付和运营流程竞争，例如空间、耗材与餐食；第三类通过数据与连续工作流竞争，例如经营系统。企业可能跨越三类，产品组合会改变客户关系。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '这些是本报告基于案例提出的分析分类，不是政府行业分类。竞争方式不能直接换算为教育质量。供应商的商业增长可能帮助园所，也可能增加合同与系统复杂性，需要分别观察。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-7-s15',
      recordType: 'industry_topic',
      volume: 7,
      number: 15,
      section: 'technology',
      title: ['扩展企业图谱的原则', 'Extending the company map'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '后续增加企业时，应同时记录正式名称、主要产品、客户、付款者、服务年龄、经营范围和来源日期。缺失不应填零，未知资本关系不应凭品牌相似推断。营利与非营利、企业与产品、集团与子公司分别识别。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '产业链并不是附属装饰，它决定园所日常运行使用什么、教师怎样工作、家庭怎样沟通与支付。但完整行业理解仍需回到儿童服务和公共制度，不能只根据科技热度或融资新闻选择观察对象。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s1',
      recordType: 'industry_topic',
      volume: 8,
      number: 1,
      section: 'sector',
      title: ['地区档案的范围与重建方法', 'Regional methodology'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本卷采用儿童家庭厅资料3的机构、定员、利用与等待儿童四项统计。该表左侧都道府县栏不包含另列的指定都市和中核市；本报告将右侧82个城市归回各自都道府县，重建完整47地区数据。机构40,046所、容量3,016,417人、利用2,646,756人和等待2,435人，四项全国合计均核对一致。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'paragraph',
          textZh:
            '若直接使用左表，可能低估包含大城市的都道府县规模。资料2的市町村积上表范围与摘要并非完全相同，本卷没有混用其人数与资料3定员计算比率。它仅用于确认另列城市所属都道府县。资料质量说明另附数据文件，避免后续误把不同范围合并。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '定员充足率为本报告按利用儿童除以定员计算。容量差额是算术差，不表示可预约名额。等待的上年变化来自同一发布资料4，只用于该指标比较，不凭此补出上年全部机构或费用。官方注明发布数据暂定并可能修订，本卷全部档案保留这一状态。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'paragraph',
          textZh:
            '地区分组用于阅读和图表，采用北海道、东北、关东、中部、近畿、中国地方、四国、九州与冲绳八组。三重归近畿；分组不是公共资金或法律管辖分类。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s2',
      recordType: 'industry_topic',
      volume: 8,
      number: 2,
      section: 'sector',
      title: ['地区总览', 'Regional comparisons'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'figure',
          id: 'chart-J10',
          file: 'chart-J10.png',
          title: '定员充足率较高的15地区',
          caption:
            '定员充足率较高的15地区 来源 ，本报告重建都道府县 利用人数÷定员；不是教育质量或安全评分。',
          sources: ['J01'],
        },
        {
          type: 'figure',
          id: 'chart-J11',
          file: 'chart-J11.png',
          title: '保育利用定员较多的15地区',
          caption:
            '保育利用定员较多的15地区 来源 ，本报告重建都道府县 已归回指定都市中核市；不代表全部幼教容量。',
          sources: ['J01'],
        },
        {
          type: 'figure',
          id: 'chart-J12',
          file: 'chart-J12.png',
          title: '47地区容量与使用散点',
          caption:
            '47地区容量与使用散点 来源 ，本报告计算 点面积随等待人数变化；相关图不是因果。',
          sources: ['J01'],
        },
        {
          type: 'figure',
          id: 'chart-J22',
          file: 'chart-J22.png',
          title: '等待儿童年度变化的两端地区',
          caption:
            '等待儿童年度变化的两端地区 来源 资料4 仅等待指标可比；变化原因不能由本图单独确定。',
          sources: ['J01'],
        },
        {
          type: 'figure',
          id: 'chart-J23',
          file: 'chart-J23.png',
          title: '八地区容量与使用',
          caption:
            '八地区容量与使用 来源 ，本报告分组 三重归近畿；中国地方为日本地理分组名称。',
          sources: ['J01'],
        },
        {
          type: 'figure',
          id: 'chart-J24',
          file: 'chart-J24.png',
          title: '47都道府县充足率总览',
          caption:
            '47都道府县充足率总览 来源 ，本报告重建计算 已将指定都市、中核市归回；数据暂定。',
          sources: ['J01'],
        },
        {
          type: 'paragraph',
          textZh:
            '横向图只描述同一统计集合的数量与比例。等待较多不等于所有服务差，零等待不等于没有资格、费用、语言或时间障碍。充足率也不是课堂质量评分，不能用来直接推荐某地园所。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s3',
      recordType: 'regional_statistic',
      volume: 8,
      number: 3,
      section: 'sector',
      title: ['北海道', 'Hokkaido'],
      companyId: null,
      regionId: 'hokkaido',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的北海道分组。2026年4月1日保育所等1,495所，利用定员93,489人，利用儿童80,845人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '1,495所'],
            ['利用定员', '93,489人'],
            ['实际利用儿童', '80,845人'],
            ['充足率 本报告计算', '86.48%'],
            ['定员减利用人数', '12,644人'],
            ['官方等待儿童', '38人'],
            ['上年等待儿童', '34人'],
            ['等待年度变化', '+4人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国3.10%，利用儿童约占3.05%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为38人，较上年增加4人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s4',
      recordType: 'regional_statistic',
      volume: 8,
      number: 4,
      section: 'sector',
      title: ['青森県', 'Aomori'],
      companyId: null,
      regionId: 'aomori',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的东北分组。2026年4月1日保育所等499所，利用定员29,320人，利用儿童24,373人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '499所'],
            ['利用定员', '29,320人'],
            ['实际利用儿童', '24,373人'],
            ['充足率 本报告计算', '83.13%'],
            ['定员减利用人数', '4,947人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.97%，利用儿童约占0.92%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s5',
      recordType: 'regional_statistic',
      volume: 8,
      number: 5,
      section: 'sector',
      title: ['岩手県', 'Iwate'],
      companyId: null,
      regionId: 'iwate',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的东北分组。2026年4月1日保育所等489所，利用定员29,724人，利用儿童24,195人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '489所'],
            ['利用定员', '29,724人'],
            ['实际利用儿童', '24,195人'],
            ['充足率 本报告计算', '81.40%'],
            ['定员减利用人数', '5,529人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '5人'],
            ['等待年度变化', '-5人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.99%，利用儿童约占0.91%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为零，较上年减少5人。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s6',
      recordType: 'regional_statistic',
      volume: 8,
      number: 6,
      section: 'sector',
      title: ['宮城県', 'Miyagi'],
      companyId: null,
      regionId: 'miyagi',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的东北分组。2026年4月1日保育所等832所，利用定员46,791人，利用儿童42,577人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '832所'],
            ['利用定员', '46,791人'],
            ['实际利用儿童', '42,577人'],
            ['充足率 本报告计算', '90.99%'],
            ['定员减利用人数', '4,214人'],
            ['官方等待儿童', '26人'],
            ['上年等待儿童', '17人'],
            ['等待年度变化', '+9人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.55%，利用儿童约占1.61%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为26人，较上年增加9人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s7',
      recordType: 'regional_statistic',
      volume: 8,
      number: 7,
      section: 'sector',
      title: ['秋田県', 'Akita'],
      companyId: null,
      regionId: 'akita',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的东北分组。2026年4月1日保育所等299所，利用定员21,817人，利用儿童17,316人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '299所'],
            ['利用定员', '21,817人'],
            ['实际利用儿童', '17,316人'],
            ['充足率 本报告计算', '79.37%'],
            ['定员减利用人数', '4,501人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '5人'],
            ['等待年度变化', '-5人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.72%，利用儿童约占0.65%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为零，较上年减少5人。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s8',
      recordType: 'regional_statistic',
      volume: 8,
      number: 8,
      section: 'sector',
      title: ['山形県', 'Yamagata'],
      companyId: null,
      regionId: 'yamagata',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的东北分组。2026年4月1日保育所等382所，利用定员27,254人，利用儿童22,438人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '382所'],
            ['利用定员', '27,254人'],
            ['实际利用儿童', '22,438人'],
            ['充足率 本报告计算', '82.33%'],
            ['定员减利用人数', '4,816人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.90%，利用儿童约占0.85%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s9',
      recordType: 'regional_statistic',
      volume: 8,
      number: 9,
      section: 'sector',
      title: ['福島県', 'Fukushima'],
      companyId: null,
      regionId: 'fukushima',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的东北分组。2026年4月1日保育所等527所，利用定员38,538人，利用儿童32,178人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '527所'],
            ['利用定员', '38,538人'],
            ['实际利用儿童', '32,178人'],
            ['充足率 本报告计算', '83.50%'],
            ['定员减利用人数', '6,360人'],
            ['官方等待儿童', '3人'],
            ['上年等待儿童', '5人'],
            ['等待年度变化', '-2人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.28%，利用儿童约占1.22%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为3人，较上年减少2人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s10',
      recordType: 'regional_statistic',
      volume: 8,
      number: 10,
      section: 'sector',
      title: ['茨城県', 'Ibaraki'],
      companyId: null,
      regionId: 'ibaraki',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的关东分组。2026年4月1日保育所等859所，利用定员66,777人，利用儿童57,920人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '859所'],
            ['利用定员', '66,777人'],
            ['实际利用儿童', '57,920人'],
            ['充足率 本报告计算', '86.74%'],
            ['定员减利用人数', '8,857人'],
            ['官方等待儿童', '1人'],
            ['上年等待儿童', '1人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国2.21%，利用儿童约占2.19%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为1人，与上年相同。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s11',
      recordType: 'regional_statistic',
      volume: 8,
      number: 11,
      section: 'sector',
      title: ['栃木県', 'Tochigi'],
      companyId: null,
      regionId: 'tochigi',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的关东分组。2026年4月1日保育所等590所，利用定员45,060人，利用儿童38,247人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '590所'],
            ['利用定员', '45,060人'],
            ['实际利用儿童', '38,247人'],
            ['充足率 本报告计算', '84.88%'],
            ['定员减利用人数', '6,813人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '3人'],
            ['等待年度变化', '-3人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.49%，利用儿童约占1.45%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，较上年减少3人。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s12',
      recordType: 'regional_statistic',
      volume: 8,
      number: 12,
      section: 'sector',
      title: ['群馬県', 'Gunma'],
      companyId: null,
      regionId: 'gunma',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的关东分组。2026年4月1日保育所等526所，利用定员49,769人，利用儿童42,613人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '526所'],
            ['利用定员', '49,769人'],
            ['实际利用儿童', '42,613人'],
            ['充足率 本报告计算', '85.62%'],
            ['定员减利用人数', '7,156人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.65%，利用儿童约占1.61%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s13',
      recordType: 'regional_statistic',
      volume: 8,
      number: 13,
      section: 'sector',
      title: ['埼玉県', 'Saitama'],
      companyId: null,
      regionId: 'saitama',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的关东分组。2026年4月1日保育所等2,318所，利用定员148,630人，利用儿童138,004人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '2,318所'],
            ['利用定员', '148,630人'],
            ['实际利用儿童', '138,004人'],
            ['充足率 本报告计算', '92.85%'],
            ['定员减利用人数', '10,626人'],
            ['官方等待儿童', '140人'],
            ['上年等待儿童', '208人'],
            ['等待年度变化', '-68人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国4.93%，利用儿童约占5.21%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为140人，较上年减少68人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s14',
      recordType: 'regional_statistic',
      volume: 8,
      number: 14,
      section: 'sector',
      title: ['千葉県', 'Chiba'],
      companyId: null,
      regionId: 'chiba',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的关东分组。2026年4月1日保育所等2,038所，利用定员139,707人，利用儿童125,050人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '2,038所'],
            ['利用定员', '139,707人'],
            ['实际利用儿童', '125,050人'],
            ['充足率 本报告计算', '89.51%'],
            ['定员减利用人数', '14,657人'],
            ['官方等待儿童', '69人'],
            ['上年等待儿童', '91人'],
            ['等待年度变化', '-22人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国4.63%，利用儿童约占4.72%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为69人，较上年减少22人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s15',
      recordType: 'regional_statistic',
      volume: 8,
      number: 15,
      section: 'sector',
      title: ['東京都', 'Tokyo'],
      companyId: null,
      regionId: 'tokyo',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的关东分组。2026年4月1日保育所等4,635所，利用定员339,206人，利用儿童308,997人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '4,635所'],
            ['利用定员', '339,206人'],
            ['实际利用儿童', '308,997人'],
            ['充足率 本报告计算', '91.09%'],
            ['定员减利用人数', '30,209人'],
            ['官方等待儿童', '1,113人'],
            ['上年等待儿童', '339人'],
            ['等待年度变化', '+774人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国11.25%，利用儿童约占11.67%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为1,113人，较上年增加774人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'paragraph',
          textZh:
            '东京还存在地方费用支持变化：自2025年9月起支持市区町村开展第一子保育费等无偿化。其适用范围需看地方实施，不能用全国国家概要替代，也不能把等待变化完全归因于单项政策。',
          textEn: null,
          sources: ['J16'],
        },
      ],
      sourceIds: ['J01', 'J16'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s16',
      recordType: 'regional_statistic',
      volume: 8,
      number: 16,
      section: 'sector',
      title: ['神奈川県', 'Kanagawa'],
      companyId: null,
      regionId: 'kanagawa',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的关东分组。2026年4月1日保育所等2,861所，利用定员184,416人，利用儿童174,516人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '2,861所'],
            ['利用定员', '184,416人'],
            ['实际利用儿童', '174,516人'],
            ['充足率 本报告计算', '94.63%'],
            ['定员减利用人数', '9,900人'],
            ['官方等待儿童', '65人'],
            ['上年等待儿童', '138人'],
            ['等待年度变化', '-73人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国6.11%，利用儿童约占6.59%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率超过94%，说明地区总量使用较紧凑，但仍需下沉至市町村和年龄班。接近满额不等于每所园都满额，也不能证明全部地点有充足教师。官方等待为65人，较上年减少73人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s17',
      recordType: 'regional_statistic',
      volume: 8,
      number: 17,
      section: 'sector',
      title: ['新潟県', 'Niigata'],
      companyId: null,
      regionId: 'niigata',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中部分组。2026年4月1日保育所等762所，利用定员61,108人，利用儿童49,634人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '762所'],
            ['利用定员', '61,108人'],
            ['实际利用儿童', '49,634人'],
            ['充足率 本报告计算', '81.22%'],
            ['定员减利用人数', '11,474人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国2.03%，利用儿童约占1.88%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s18',
      recordType: 'regional_statistic',
      volume: 8,
      number: 18,
      section: 'sector',
      title: ['富山県', 'Toyama'],
      companyId: null,
      regionId: 'toyama',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中部分组。2026年4月1日保育所等308所，利用定员30,920人，利用儿童25,116人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '308所'],
            ['利用定员', '30,920人'],
            ['实际利用儿童', '25,116人'],
            ['充足率 本报告计算', '81.23%'],
            ['定员减利用人数', '5,804人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.03%，利用儿童约占0.95%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s19',
      recordType: 'regional_statistic',
      volume: 8,
      number: 19,
      section: 'sector',
      title: ['石川県', 'Ishikawa'],
      companyId: null,
      regionId: 'ishikawa',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中部分组。2026年4月1日保育所等367所，利用定员36,638人，利用儿童29,841人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '367所'],
            ['利用定员', '36,638人'],
            ['实际利用儿童', '29,841人'],
            ['充足率 本报告计算', '81.45%'],
            ['定员减利用人数', '6,797人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.21%，利用儿童约占1.13%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s20',
      recordType: 'regional_statistic',
      volume: 8,
      number: 20,
      section: 'sector',
      title: ['福井県', 'Fukui'],
      companyId: null,
      regionId: 'fukui',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中部分组。2026年4月1日保育所等290所，利用定员27,058人，利用儿童21,719人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '290所'],
            ['利用定员', '27,058人'],
            ['实际利用儿童', '21,719人'],
            ['充足率 本报告计算', '80.27%'],
            ['定员减利用人数', '5,339人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.90%，利用儿童约占0.82%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s21',
      recordType: 'regional_statistic',
      volume: 8,
      number: 21,
      section: 'sector',
      title: ['山梨県', 'Yamanashi'],
      companyId: null,
      regionId: 'yamanashi',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中部分组。2026年4月1日保育所等289所，利用定员23,829人，利用儿童17,779人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '289所'],
            ['利用定员', '23,829人'],
            ['实际利用儿童', '17,779人'],
            ['充足率 本报告计算', '74.61%'],
            ['定员减利用人数', '6,050人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.79%，利用儿童约占0.67%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s22',
      recordType: 'regional_statistic',
      volume: 8,
      number: 22,
      section: 'sector',
      title: ['長野県', 'Nagano'],
      companyId: null,
      regionId: 'nagano',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中部分组。2026年4月1日保育所等689所，利用定员61,268人，利用儿童45,329人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '689所'],
            ['利用定员', '61,268人'],
            ['实际利用儿童', '45,329人'],
            ['充足率 本报告计算', '73.98%'],
            ['定员减利用人数', '15,939人'],
            ['官方等待儿童', '20人'],
            ['上年等待儿童', '10人'],
            ['等待年度变化', '+10人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国2.03%，利用儿童约占1.71%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为20人，较上年增加10人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s23',
      recordType: 'regional_statistic',
      volume: 8,
      number: 23,
      section: 'sector',
      title: ['岐阜県', 'Gifu'],
      companyId: null,
      regionId: 'gifu',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中部分组。2026年4月1日保育所等521所，利用定员43,530人，利用儿童34,666人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '521所'],
            ['利用定员', '43,530人'],
            ['实际利用儿童', '34,666人'],
            ['充足率 本报告计算', '79.64%'],
            ['定员减利用人数', '8,864人'],
            ['官方等待儿童', '1人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+1人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.44%，利用儿童约占1.31%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为1人，较上年增加1人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s24',
      recordType: 'regional_statistic',
      volume: 8,
      number: 24,
      section: 'sector',
      title: ['静岡県', 'Shizuoka'],
      companyId: null,
      regionId: 'shizuoka',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中部分组。2026年4月1日保育所等1,034所，利用定员76,708人，利用儿童65,534人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '1,034所'],
            ['利用定员', '76,708人'],
            ['实际利用儿童', '65,534人'],
            ['充足率 本报告计算', '85.43%'],
            ['定员减利用人数', '11,174人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国2.54%，利用儿童约占2.48%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s25',
      recordType: 'regional_statistic',
      volume: 8,
      number: 25,
      section: 'sector',
      title: ['愛知県', 'Aichi'],
      companyId: null,
      regionId: 'aichi',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中部分组。2026年4月1日保育所等2,032所，利用定员189,663人，利用儿童157,281人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '2,032所'],
            ['利用定员', '189,663人'],
            ['实际利用儿童', '157,281人'],
            ['充足率 本报告计算', '82.93%'],
            ['定员减利用人数', '32,382人'],
            ['官方等待儿童', '47人'],
            ['上年等待儿童', '51人'],
            ['等待年度变化', '-4人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国6.29%，利用儿童约占5.94%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为47人，较上年减少4人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s26',
      recordType: 'regional_statistic',
      volume: 8,
      number: 26,
      section: 'sector',
      title: ['三重県', 'Mie'],
      companyId: null,
      regionId: 'mie',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的近畿分组。2026年4月1日保育所等476所，利用定员43,484人，利用儿童35,897人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '476所'],
            ['利用定员', '43,484人'],
            ['实际利用儿童', '35,897人'],
            ['充足率 本报告计算', '82.55%'],
            ['定员减利用人数', '7,587人'],
            ['官方等待儿童', '73人'],
            ['上年等待儿童', '84人'],
            ['等待年度变化', '-11人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.44%，利用儿童约占1.36%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为73人，较上年减少11人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s27',
      recordType: 'regional_statistic',
      volume: 8,
      number: 27,
      section: 'sector',
      title: ['滋賀県', 'Shiga'],
      companyId: null,
      regionId: 'shiga',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的近畿分组。2026年4月1日保育所等496所，利用定员39,725人，利用儿童36,036人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '496所'],
            ['利用定员', '39,725人'],
            ['实际利用儿童', '36,036人'],
            ['充足率 本报告计算', '90.71%'],
            ['定员减利用人数', '3,689人'],
            ['官方等待儿童', '102人'],
            ['上年等待儿童', '335人'],
            ['等待年度变化', '-233人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.32%，利用儿童约占1.36%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为102人，较上年减少233人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s28',
      recordType: 'regional_statistic',
      volume: 8,
      number: 28,
      section: 'sector',
      title: ['京都府', 'Kyoto'],
      companyId: null,
      regionId: 'kyoto',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的近畿分组。2026年4月1日保育所等717所，利用定员58,442人，利用儿童51,884人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '717所'],
            ['利用定员', '58,442人'],
            ['实际利用儿童', '51,884人'],
            ['充足率 本报告计算', '88.78%'],
            ['定员减利用人数', '6,558人'],
            ['官方等待儿童', '15人'],
            ['上年等待儿童', '15人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.94%，利用儿童约占1.96%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为15人，与上年相同。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s29',
      recordType: 'regional_statistic',
      volume: 8,
      number: 29,
      section: 'sector',
      title: ['大阪府', 'Osaka'],
      companyId: null,
      regionId: 'osaka',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的近畿分组。2026年4月1日保育所等2,449所，利用定员198,272人，利用儿童188,201人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '2,449所'],
            ['利用定员', '198,272人'],
            ['实际利用儿童', '188,201人'],
            ['充足率 本报告计算', '94.92%'],
            ['定员减利用人数', '10,071人'],
            ['官方等待儿童', '133人'],
            ['上年等待儿童', '194人'],
            ['等待年度变化', '-61人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国6.57%，利用儿童约占7.11%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率超过94%，说明地区总量使用较紧凑，但仍需下沉至市町村和年龄班。接近满额不等于每所园都满额，也不能证明全部地点有充足教师。官方等待为133人，较上年减少61人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'paragraph',
          textZh:
            '大阪府对谁都可通园制度的说明，将具体设施和使用方法引导至市町村；枚方等地有自身定期利用安排。地区总体名额与某个家庭可预约的时段仍需分开理解。',
          textEn: null,
          sources: ['J07', 'J23'],
        },
      ],
      sourceIds: ['J01', 'J07', 'J23'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s30',
      recordType: 'regional_statistic',
      volume: 8,
      number: 30,
      section: 'sector',
      title: ['兵庫県', 'Hyogo'],
      companyId: null,
      regionId: 'hyogo',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的近畿分组。2026年4月1日保育所等1,622所，利用定员118,912人，利用儿童111,590人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '1,622所'],
            ['利用定员', '118,912人'],
            ['实际利用儿童', '111,590人'],
            ['充足率 本报告计算', '93.84%'],
            ['定员减利用人数', '7,322人'],
            ['官方等待儿童', '200人'],
            ['上年等待儿童', '199人'],
            ['等待年度变化', '+1人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国3.94%，利用儿童约占4.22%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为200人，较上年增加1人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s31',
      recordType: 'regional_statistic',
      volume: 8,
      number: 31,
      section: 'sector',
      title: ['奈良県', 'Nara'],
      companyId: null,
      regionId: 'nara',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的近畿分组。2026年4月1日保育所等305所，利用定员29,005人，利用儿童25,072人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '305所'],
            ['利用定员', '29,005人'],
            ['实际利用儿童', '25,072人'],
            ['充足率 本报告计算', '86.44%'],
            ['定员减利用人数', '3,933人'],
            ['官方等待儿童', '147人'],
            ['上年等待儿童', '186人'],
            ['等待年度变化', '-39人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.96%，利用儿童约占0.95%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为147人，较上年减少39人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s32',
      recordType: 'regional_statistic',
      volume: 8,
      number: 32,
      section: 'sector',
      title: ['和歌山県', 'Wakayama'],
      companyId: null,
      regionId: 'wakayama',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的近畿分组。2026年4月1日保育所等204所，利用定员20,936人，利用儿童17,728人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '204所'],
            ['利用定员', '20,936人'],
            ['实际利用儿童', '17,728人'],
            ['充足率 本报告计算', '84.68%'],
            ['定员减利用人数', '3,208人'],
            ['官方等待儿童', '32人'],
            ['上年等待儿童', '53人'],
            ['等待年度变化', '-21人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.69%，利用儿童约占0.67%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为32人，较上年减少21人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s33',
      recordType: 'regional_statistic',
      volume: 8,
      number: 33,
      section: 'sector',
      title: ['鳥取県', 'Tottori'],
      companyId: null,
      regionId: 'tottori',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中国地方分组。2026年4月1日保育所等213所，利用定员18,626人，利用儿童14,405人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '213所'],
            ['利用定员', '18,626人'],
            ['实际利用儿童', '14,405人'],
            ['充足率 本报告计算', '77.34%'],
            ['定员减利用人数', '4,221人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.62%，利用儿童约占0.54%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s34',
      recordType: 'regional_statistic',
      volume: 8,
      number: 34,
      section: 'sector',
      title: ['島根県', 'Shimane'],
      companyId: null,
      regionId: 'shimane',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中国地方分组。2026年4月1日保育所等307所，利用定员21,279人，利用儿童18,433人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '307所'],
            ['利用定员', '21,279人'],
            ['实际利用儿童', '18,433人'],
            ['充足率 本报告计算', '86.63%'],
            ['定员减利用人数', '2,846人'],
            ['官方等待儿童', '3人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+3人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.71%，利用儿童约占0.70%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为3人，较上年增加3人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s35',
      recordType: 'regional_statistic',
      volume: 8,
      number: 35,
      section: 'sector',
      title: ['岡山県', 'Okayama'],
      companyId: null,
      regionId: 'okayama',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中国地方分组。2026年4月1日保育所等574所，利用定员50,473人，利用儿童44,246人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '574所'],
            ['利用定员', '50,473人'],
            ['实际利用儿童', '44,246人'],
            ['充足率 本报告计算', '87.66%'],
            ['定员减利用人数', '6,227人'],
            ['官方等待儿童', '20人'],
            ['上年等待儿童', '22人'],
            ['等待年度变化', '-2人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.67%，利用儿童约占1.67%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为20人，较上年减少2人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s36',
      recordType: 'regional_statistic',
      volume: 8,
      number: 36,
      section: 'sector',
      title: ['広島県', 'Hiroshima'],
      companyId: null,
      regionId: 'hiroshima',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中国地方分组。2026年4月1日保育所等868所，利用定员73,484人，利用儿童61,225人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '868所'],
            ['利用定员', '73,484人'],
            ['实际利用儿童', '61,225人'],
            ['充足率 本报告计算', '83.32%'],
            ['定员减利用人数', '12,259人'],
            ['官方等待儿童', '11人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+11人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国2.44%，利用儿童约占2.31%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为11人，较上年增加11人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s37',
      recordType: 'regional_statistic',
      volume: 8,
      number: 37,
      section: 'sector',
      title: ['山口県', 'Yamaguchi'],
      companyId: null,
      regionId: 'yamaguchi',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的中国地方分组。2026年4月1日保育所等385所，利用定员28,913人，利用儿童25,439人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '385所'],
            ['利用定员', '28,913人'],
            ['实际利用儿童', '25,439人'],
            ['充足率 本报告计算', '87.98%'],
            ['定员减利用人数', '3,474人'],
            ['官方等待儿童', '16人'],
            ['上年等待儿童', '9人'],
            ['等待年度变化', '+7人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.96%，利用儿童约占0.96%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为16人，较上年增加7人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s38',
      recordType: 'regional_statistic',
      volume: 8,
      number: 38,
      section: 'sector',
      title: ['徳島県', 'Tokushima'],
      companyId: null,
      regionId: 'tokushima',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的四国分组。2026年4月1日保育所等223所，利用定员17,604人，利用儿童14,825人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '223所'],
            ['利用定员', '17,604人'],
            ['实际利用儿童', '14,825人'],
            ['充足率 本报告计算', '84.21%'],
            ['定员减利用人数', '2,779人'],
            ['官方等待儿童', '2人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+2人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.58%，利用儿童约占0.56%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为2人，较上年增加2人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s39',
      recordType: 'regional_statistic',
      volume: 8,
      number: 39,
      section: 'sector',
      title: ['香川県', 'Kagawa'],
      companyId: null,
      regionId: 'kagawa',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的四国分组。2026年4月1日保育所等280所，利用定员26,191人，利用儿童21,039人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '280所'],
            ['利用定员', '26,191人'],
            ['实际利用儿童', '21,039人'],
            ['充足率 本报告计算', '80.33%'],
            ['定员减利用人数', '5,152人'],
            ['官方等待儿童', '1人'],
            ['上年等待儿童', '1人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.87%，利用儿童约占0.79%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为1人，与上年相同。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s40',
      recordType: 'regional_statistic',
      volume: 8,
      number: 40,
      section: 'sector',
      title: ['愛媛県', 'Ehime'],
      companyId: null,
      regionId: 'ehime',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的四国分组。2026年4月1日保育所等400所，利用定员29,394人，利用儿童24,284人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '400所'],
            ['利用定员', '29,394人'],
            ['实际利用儿童', '24,284人'],
            ['充足率 本报告计算', '82.62%'],
            ['定员减利用人数', '5,110人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '13人'],
            ['等待年度变化', '-13人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.97%，利用儿童约占0.92%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，较上年减少13人。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s41',
      recordType: 'regional_statistic',
      volume: 8,
      number: 41,
      section: 'sector',
      title: ['高知県', 'Kochi'],
      companyId: null,
      regionId: 'kochi',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的四国分组。2026年4月1日保育所等281所，利用定员21,929人，利用儿童16,626人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '281所'],
            ['利用定员', '21,929人'],
            ['实际利用儿童', '16,626人'],
            ['充足率 本报告计算', '75.82%'],
            ['定员减利用人数', '5,303人'],
            ['官方等待儿童', '6人'],
            ['上年等待儿童', '10人'],
            ['等待年度变化', '-4人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.73%，利用儿童约占0.63%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '按同口径计算，充足率低于82%，容量与使用之间的距离较明显。它提示需要研究规模调整和服务布局，但不能单凭该比率断定需求不足或经营失败；年龄、地点和人员限制可能同时影响实际使用。官方等待为6人，较上年减少4人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s42',
      recordType: 'regional_statistic',
      volume: 8,
      number: 42,
      section: 'sector',
      title: ['福岡県', 'Fukuoka'],
      companyId: null,
      regionId: 'fukuoka',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的九州与冲绳分组。2026年4月1日保育所等1,491所，利用定员130,263人，利用儿童118,351人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '1,491所'],
            ['利用定员', '130,263人'],
            ['实际利用儿童', '118,351人'],
            ['充足率 本报告计算', '90.86%'],
            ['定员减利用人数', '11,912人'],
            ['官方等待儿童', '53人'],
            ['上年等待儿童', '29人'],
            ['等待年度变化', '+24人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国4.32%，利用儿童约占4.47%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为53人，较上年增加24人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s43',
      recordType: 'regional_statistic',
      volume: 8,
      number: 43,
      section: 'sector',
      title: ['佐賀県', 'Saga'],
      companyId: null,
      regionId: 'saga',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的九州与冲绳分组。2026年4月1日保育所等358所，利用定员25,823人，利用儿童21,742人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '358所'],
            ['利用定员', '25,823人'],
            ['实际利用儿童', '21,742人'],
            ['充足率 本报告计算', '84.20%'],
            ['定员减利用人数', '4,081人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '8人'],
            ['等待年度变化', '-8人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.86%，利用儿童约占0.82%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，较上年减少8人。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s44',
      recordType: 'regional_statistic',
      volume: 8,
      number: 44,
      section: 'sector',
      title: ['長崎県', 'Nagasaki'],
      companyId: null,
      regionId: 'nagasaki',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的九州与冲绳分组。2026年4月1日保育所等555所，利用定员36,157人，利用儿童32,082人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '555所'],
            ['利用定员', '36,157人'],
            ['实际利用儿童', '32,082人'],
            ['充足率 本报告计算', '88.73%'],
            ['定员减利用人数', '4,075人'],
            ['官方等待儿童', '15人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+15人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.20%，利用儿童约占1.21%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为15人，较上年增加15人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s45',
      recordType: 'regional_statistic',
      volume: 8,
      number: 45,
      section: 'sector',
      title: ['熊本県', 'Kumamoto'],
      companyId: null,
      regionId: 'kumamoto',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的九州与冲绳分组。2026年4月1日保育所等767所，利用定员53,904人，利用儿童48,295人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '767所'],
            ['利用定员', '53,904人'],
            ['实际利用儿童', '48,295人'],
            ['充足率 本报告计算', '89.59%'],
            ['定员减利用人数', '5,609人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '4人'],
            ['等待年度变化', '-4人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.79%，利用儿童约占1.82%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，较上年减少4人。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s46',
      recordType: 'regional_statistic',
      volume: 8,
      number: 46,
      section: 'sector',
      title: ['大分県', 'Oita'],
      companyId: null,
      regionId: 'oita',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的九州与冲绳分组。2026年4月1日保育所等369所，利用定员28,023人，利用儿童24,346人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '369所'],
            ['利用定员', '28,023人'],
            ['实际利用儿童', '24,346人'],
            ['充足率 本报告计算', '86.88%'],
            ['定员减利用人数', '3,677人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国0.93%，利用儿童约占0.92%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s47',
      recordType: 'regional_statistic',
      volume: 8,
      number: 47,
      section: 'sector',
      title: ['宮崎県', 'Miyazaki'],
      companyId: null,
      regionId: 'miyazaki',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的九州与冲绳分组。2026年4月1日保育所等480所，利用定员31,785人，利用儿童27,805人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '480所'],
            ['利用定员', '31,785人'],
            ['实际利用儿童', '27,805人'],
            ['充足率 本报告计算', '87.48%'],
            ['定员减利用人数', '3,980人'],
            ['官方等待儿童', '0人'],
            ['上年等待儿童', '0人'],
            ['等待年度变化', '+0人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.05%，利用儿童约占1.05%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为零，与上年相同。零值只适用于该定义和调查日，不能据此推断所有家庭均获得首选园或不存在临时、病儿和非标准时段需求。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s48',
      recordType: 'regional_statistic',
      volume: 8,
      number: 48,
      section: 'sector',
      title: ['鹿児島県', 'Kagoshima'],
      companyId: null,
      regionId: 'kagoshima',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的九州与冲绳分组。2026年4月1日保育所等697所，利用定员40,292人，利用儿童34,775人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '697所'],
            ['利用定员', '40,292人'],
            ['实际利用儿童', '34,775人'],
            ['充足率 本报告计算', '86.31%'],
            ['定员减利用人数', '5,517人'],
            ['官方等待儿童', '5人'],
            ['上年等待儿童', '14人'],
            ['等待年度变化', '-9人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国1.34%，利用儿童约占1.31%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为5人，较上年减少9人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s49',
      recordType: 'regional_statistic',
      volume: 8,
      number: 49,
      section: 'sector',
      title: ['沖縄県', 'Okinawa'],
      companyId: null,
      regionId: 'okinawa',
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '本地区属于本卷的九州与冲绳分组。2026年4月1日保育所等887所，利用定员62,281人，利用儿童56,262人；范围包括已归回的指定都市与中核市，属于暂定统计，不包含所有幼稚园教育名额。',
          textEn: null,
          sources: ['J01'],
        },
        {
          type: 'table',
          columns: ['指标', '数值'],
          rows: [
            ['保育所等机构', '887所'],
            ['利用定员', '62,281人'],
            ['实际利用儿童', '56,262人'],
            ['充足率 本报告计算', '90.34%'],
            ['定员减利用人数', '6,019人'],
            ['官方等待儿童', '78人'],
            ['上年等待儿童', '171人'],
            ['等待年度变化', '-93人'],
          ],
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '本地区定员约占全国2.06%，利用儿童约占2.13%。两项占比的差异反映其相对使用与容量结构，不能解释为净迁入、出生变化或教育质量，相关因果需要其他证据。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '地区总量仍存在容量与使用差额，但它不是可自由调剂的空位。研究当地供给时，需要继续分解低龄班、通勤范围、开放时段和园所人员，不能把全地区平均值直接用于某一家设施。官方等待为78人，较上年减少93人。等待与容量差额可以并存，说明不能用总量差额抵消家庭实际缺口；两者在地点、年龄与资格上并非同一个集合。',
          textEn: null,
          sources: ['J01'],
        },
      ],
      sourceIds: ['J01'],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s50',
      recordType: 'industry_topic',
      volume: 8,
      number: 50,
      section: 'sector',
      title: ['从都道府县下沉到市区町村', 'From prefectures to municipalities'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '都道府县总量适合呈现结构，申请与日常生活却发生在更小范围。同一地区可以同时存在人口流入的新住宅片区与人口减少社区。补助规则、保活手续和开放时间需要具体地方资料，不能依据本卷总表替代。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '比较地方之前，应先固定指标。等待绝对人数用于理解数量，等待率需要申请分母，充足率使用定员分母，入园率还需要儿童人口。三个比率不能互称。本卷没有将等待除以容量改名为官方等待率，也没有利用不一致的年龄表补出出生或入园覆盖。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
    {
      id: 'volume-8-s51',
      recordType: 'industry_topic',
      volume: 8,
      number: 51,
      section: 'sector',
      title: ['地区更新的优先顺序', 'Updating regional records'],
      companyId: null,
      regionId: null,
      blocks: [
        {
          type: 'paragraph',
          textZh:
            '更新时先确认全国发布版本、修订说明及统计日，再替换原始数值、重建另列城市、核对全国合计，并重新生成派生比率和图表。不能只替换标题年份。零值、缺失和暂定分别保留，以避免页面看起来完整而统计意义改变。',
          textEn: null,
          sources: [],
        },
        {
          type: 'paragraph',
          textZh:
            '每个地区页还可以继续添加市町村计划、地方费用、设施名册和监督资料，但未经核验不填入推测。当前档案是47地区同口径的保育供给底座，不宣称已经穷尽每地所有幼稚园、认可外服务或地方政策。',
          textEn: null,
          sources: [],
        },
      ],
      sourceIds: [],
      cutoff: '2026-10-21',
      translationStatus: 'original-zh',
    },
  ],
  regions: [
    {
      id: 'hokkaido',
      recordType: 'regional_statistic',
      name: ['北海道', 'Hokkaido'],
      group: 0,
      topicId: 'volume-8-s3',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 1495,
        capacity: 93489,
        children: 80845,
        utilisation: 86.48,
        capacityDifference: 12644,
        waiting: 38,
        previousWaiting: 34,
        waitingChange: 4,
      },
    },
    {
      id: 'aomori',
      recordType: 'regional_statistic',
      name: ['青森県', 'Aomori'],
      group: 1,
      topicId: 'volume-8-s4',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 499,
        capacity: 29320,
        children: 24373,
        utilisation: 83.13,
        capacityDifference: 4947,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'iwate',
      recordType: 'regional_statistic',
      name: ['岩手県', 'Iwate'],
      group: 1,
      topicId: 'volume-8-s5',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 489,
        capacity: 29724,
        children: 24195,
        utilisation: 81.4,
        capacityDifference: 5529,
        waiting: 0,
        previousWaiting: 5,
        waitingChange: -5,
      },
    },
    {
      id: 'miyagi',
      recordType: 'regional_statistic',
      name: ['宮城県', 'Miyagi'],
      group: 1,
      topicId: 'volume-8-s6',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 832,
        capacity: 46791,
        children: 42577,
        utilisation: 90.99,
        capacityDifference: 4214,
        waiting: 26,
        previousWaiting: 17,
        waitingChange: 9,
      },
    },
    {
      id: 'akita',
      recordType: 'regional_statistic',
      name: ['秋田県', 'Akita'],
      group: 1,
      topicId: 'volume-8-s7',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 299,
        capacity: 21817,
        children: 17316,
        utilisation: 79.37,
        capacityDifference: 4501,
        waiting: 0,
        previousWaiting: 5,
        waitingChange: -5,
      },
    },
    {
      id: 'yamagata',
      recordType: 'regional_statistic',
      name: ['山形県', 'Yamagata'],
      group: 1,
      topicId: 'volume-8-s8',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 382,
        capacity: 27254,
        children: 22438,
        utilisation: 82.33,
        capacityDifference: 4816,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'fukushima',
      recordType: 'regional_statistic',
      name: ['福島県', 'Fukushima'],
      group: 1,
      topicId: 'volume-8-s9',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 527,
        capacity: 38538,
        children: 32178,
        utilisation: 83.5,
        capacityDifference: 6360,
        waiting: 3,
        previousWaiting: 5,
        waitingChange: -2,
      },
    },
    {
      id: 'ibaraki',
      recordType: 'regional_statistic',
      name: ['茨城県', 'Ibaraki'],
      group: 2,
      topicId: 'volume-8-s10',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 859,
        capacity: 66777,
        children: 57920,
        utilisation: 86.74,
        capacityDifference: 8857,
        waiting: 1,
        previousWaiting: 1,
        waitingChange: 0,
      },
    },
    {
      id: 'tochigi',
      recordType: 'regional_statistic',
      name: ['栃木県', 'Tochigi'],
      group: 2,
      topicId: 'volume-8-s11',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 590,
        capacity: 45060,
        children: 38247,
        utilisation: 84.88,
        capacityDifference: 6813,
        waiting: 0,
        previousWaiting: 3,
        waitingChange: -3,
      },
    },
    {
      id: 'gunma',
      recordType: 'regional_statistic',
      name: ['群馬県', 'Gunma'],
      group: 2,
      topicId: 'volume-8-s12',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 526,
        capacity: 49769,
        children: 42613,
        utilisation: 85.62,
        capacityDifference: 7156,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'saitama',
      recordType: 'regional_statistic',
      name: ['埼玉県', 'Saitama'],
      group: 2,
      topicId: 'volume-8-s13',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 2318,
        capacity: 148630,
        children: 138004,
        utilisation: 92.85,
        capacityDifference: 10626,
        waiting: 140,
        previousWaiting: 208,
        waitingChange: -68,
      },
    },
    {
      id: 'chiba',
      recordType: 'regional_statistic',
      name: ['千葉県', 'Chiba'],
      group: 2,
      topicId: 'volume-8-s14',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 2038,
        capacity: 139707,
        children: 125050,
        utilisation: 89.51,
        capacityDifference: 14657,
        waiting: 69,
        previousWaiting: 91,
        waitingChange: -22,
      },
    },
    {
      id: 'tokyo',
      recordType: 'regional_statistic',
      name: ['東京都', 'Tokyo'],
      group: 2,
      topicId: 'volume-8-s15',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 4635,
        capacity: 339206,
        children: 308997,
        utilisation: 91.09,
        capacityDifference: 30209,
        waiting: 1113,
        previousWaiting: 339,
        waitingChange: 774,
      },
    },
    {
      id: 'kanagawa',
      recordType: 'regional_statistic',
      name: ['神奈川県', 'Kanagawa'],
      group: 2,
      topicId: 'volume-8-s16',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 2861,
        capacity: 184416,
        children: 174516,
        utilisation: 94.63,
        capacityDifference: 9900,
        waiting: 65,
        previousWaiting: 138,
        waitingChange: -73,
      },
    },
    {
      id: 'niigata',
      recordType: 'regional_statistic',
      name: ['新潟県', 'Niigata'],
      group: 3,
      topicId: 'volume-8-s17',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 762,
        capacity: 61108,
        children: 49634,
        utilisation: 81.22,
        capacityDifference: 11474,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'toyama',
      recordType: 'regional_statistic',
      name: ['富山県', 'Toyama'],
      group: 3,
      topicId: 'volume-8-s18',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 308,
        capacity: 30920,
        children: 25116,
        utilisation: 81.23,
        capacityDifference: 5804,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'ishikawa',
      recordType: 'regional_statistic',
      name: ['石川県', 'Ishikawa'],
      group: 3,
      topicId: 'volume-8-s19',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 367,
        capacity: 36638,
        children: 29841,
        utilisation: 81.45,
        capacityDifference: 6797,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'fukui',
      recordType: 'regional_statistic',
      name: ['福井県', 'Fukui'],
      group: 3,
      topicId: 'volume-8-s20',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 290,
        capacity: 27058,
        children: 21719,
        utilisation: 80.27,
        capacityDifference: 5339,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'yamanashi',
      recordType: 'regional_statistic',
      name: ['山梨県', 'Yamanashi'],
      group: 3,
      topicId: 'volume-8-s21',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 289,
        capacity: 23829,
        children: 17779,
        utilisation: 74.61,
        capacityDifference: 6050,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'nagano',
      recordType: 'regional_statistic',
      name: ['長野県', 'Nagano'],
      group: 3,
      topicId: 'volume-8-s22',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 689,
        capacity: 61268,
        children: 45329,
        utilisation: 73.98,
        capacityDifference: 15939,
        waiting: 20,
        previousWaiting: 10,
        waitingChange: 10,
      },
    },
    {
      id: 'gifu',
      recordType: 'regional_statistic',
      name: ['岐阜県', 'Gifu'],
      group: 3,
      topicId: 'volume-8-s23',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 521,
        capacity: 43530,
        children: 34666,
        utilisation: 79.64,
        capacityDifference: 8864,
        waiting: 1,
        previousWaiting: 0,
        waitingChange: 1,
      },
    },
    {
      id: 'shizuoka',
      recordType: 'regional_statistic',
      name: ['静岡県', 'Shizuoka'],
      group: 3,
      topicId: 'volume-8-s24',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 1034,
        capacity: 76708,
        children: 65534,
        utilisation: 85.43,
        capacityDifference: 11174,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'aichi',
      recordType: 'regional_statistic',
      name: ['愛知県', 'Aichi'],
      group: 3,
      topicId: 'volume-8-s25',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 2032,
        capacity: 189663,
        children: 157281,
        utilisation: 82.93,
        capacityDifference: 32382,
        waiting: 47,
        previousWaiting: 51,
        waitingChange: -4,
      },
    },
    {
      id: 'mie',
      recordType: 'regional_statistic',
      name: ['三重県', 'Mie'],
      group: 4,
      topicId: 'volume-8-s26',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 476,
        capacity: 43484,
        children: 35897,
        utilisation: 82.55,
        capacityDifference: 7587,
        waiting: 73,
        previousWaiting: 84,
        waitingChange: -11,
      },
    },
    {
      id: 'shiga',
      recordType: 'regional_statistic',
      name: ['滋賀県', 'Shiga'],
      group: 4,
      topicId: 'volume-8-s27',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 496,
        capacity: 39725,
        children: 36036,
        utilisation: 90.71,
        capacityDifference: 3689,
        waiting: 102,
        previousWaiting: 335,
        waitingChange: -233,
      },
    },
    {
      id: 'kyoto',
      recordType: 'regional_statistic',
      name: ['京都府', 'Kyoto'],
      group: 4,
      topicId: 'volume-8-s28',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 717,
        capacity: 58442,
        children: 51884,
        utilisation: 88.78,
        capacityDifference: 6558,
        waiting: 15,
        previousWaiting: 15,
        waitingChange: 0,
      },
    },
    {
      id: 'osaka',
      recordType: 'regional_statistic',
      name: ['大阪府', 'Osaka'],
      group: 4,
      topicId: 'volume-8-s29',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 2449,
        capacity: 198272,
        children: 188201,
        utilisation: 94.92,
        capacityDifference: 10071,
        waiting: 133,
        previousWaiting: 194,
        waitingChange: -61,
      },
    },
    {
      id: 'hyogo',
      recordType: 'regional_statistic',
      name: ['兵庫県', 'Hyogo'],
      group: 4,
      topicId: 'volume-8-s30',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 1622,
        capacity: 118912,
        children: 111590,
        utilisation: 93.84,
        capacityDifference: 7322,
        waiting: 200,
        previousWaiting: 199,
        waitingChange: 1,
      },
    },
    {
      id: 'nara',
      recordType: 'regional_statistic',
      name: ['奈良県', 'Nara'],
      group: 4,
      topicId: 'volume-8-s31',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 305,
        capacity: 29005,
        children: 25072,
        utilisation: 86.44,
        capacityDifference: 3933,
        waiting: 147,
        previousWaiting: 186,
        waitingChange: -39,
      },
    },
    {
      id: 'wakayama',
      recordType: 'regional_statistic',
      name: ['和歌山県', 'Wakayama'],
      group: 4,
      topicId: 'volume-8-s32',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 204,
        capacity: 20936,
        children: 17728,
        utilisation: 84.68,
        capacityDifference: 3208,
        waiting: 32,
        previousWaiting: 53,
        waitingChange: -21,
      },
    },
    {
      id: 'tottori',
      recordType: 'regional_statistic',
      name: ['鳥取県', 'Tottori'],
      group: 5,
      topicId: 'volume-8-s33',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 213,
        capacity: 18626,
        children: 14405,
        utilisation: 77.34,
        capacityDifference: 4221,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'shimane',
      recordType: 'regional_statistic',
      name: ['島根県', 'Shimane'],
      group: 5,
      topicId: 'volume-8-s34',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 307,
        capacity: 21279,
        children: 18433,
        utilisation: 86.63,
        capacityDifference: 2846,
        waiting: 3,
        previousWaiting: 0,
        waitingChange: 3,
      },
    },
    {
      id: 'okayama',
      recordType: 'regional_statistic',
      name: ['岡山県', 'Okayama'],
      group: 5,
      topicId: 'volume-8-s35',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 574,
        capacity: 50473,
        children: 44246,
        utilisation: 87.66,
        capacityDifference: 6227,
        waiting: 20,
        previousWaiting: 22,
        waitingChange: -2,
      },
    },
    {
      id: 'hiroshima',
      recordType: 'regional_statistic',
      name: ['広島県', 'Hiroshima'],
      group: 5,
      topicId: 'volume-8-s36',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 868,
        capacity: 73484,
        children: 61225,
        utilisation: 83.32,
        capacityDifference: 12259,
        waiting: 11,
        previousWaiting: 0,
        waitingChange: 11,
      },
    },
    {
      id: 'yamaguchi',
      recordType: 'regional_statistic',
      name: ['山口県', 'Yamaguchi'],
      group: 5,
      topicId: 'volume-8-s37',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 385,
        capacity: 28913,
        children: 25439,
        utilisation: 87.98,
        capacityDifference: 3474,
        waiting: 16,
        previousWaiting: 9,
        waitingChange: 7,
      },
    },
    {
      id: 'tokushima',
      recordType: 'regional_statistic',
      name: ['徳島県', 'Tokushima'],
      group: 6,
      topicId: 'volume-8-s38',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 223,
        capacity: 17604,
        children: 14825,
        utilisation: 84.21,
        capacityDifference: 2779,
        waiting: 2,
        previousWaiting: 0,
        waitingChange: 2,
      },
    },
    {
      id: 'kagawa',
      recordType: 'regional_statistic',
      name: ['香川県', 'Kagawa'],
      group: 6,
      topicId: 'volume-8-s39',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 280,
        capacity: 26191,
        children: 21039,
        utilisation: 80.33,
        capacityDifference: 5152,
        waiting: 1,
        previousWaiting: 1,
        waitingChange: 0,
      },
    },
    {
      id: 'ehime',
      recordType: 'regional_statistic',
      name: ['愛媛県', 'Ehime'],
      group: 6,
      topicId: 'volume-8-s40',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 400,
        capacity: 29394,
        children: 24284,
        utilisation: 82.62,
        capacityDifference: 5110,
        waiting: 0,
        previousWaiting: 13,
        waitingChange: -13,
      },
    },
    {
      id: 'kochi',
      recordType: 'regional_statistic',
      name: ['高知県', 'Kochi'],
      group: 6,
      topicId: 'volume-8-s41',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 281,
        capacity: 21929,
        children: 16626,
        utilisation: 75.82,
        capacityDifference: 5303,
        waiting: 6,
        previousWaiting: 10,
        waitingChange: -4,
      },
    },
    {
      id: 'fukuoka',
      recordType: 'regional_statistic',
      name: ['福岡県', 'Fukuoka'],
      group: 7,
      topicId: 'volume-8-s42',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 1491,
        capacity: 130263,
        children: 118351,
        utilisation: 90.86,
        capacityDifference: 11912,
        waiting: 53,
        previousWaiting: 29,
        waitingChange: 24,
      },
    },
    {
      id: 'saga',
      recordType: 'regional_statistic',
      name: ['佐賀県', 'Saga'],
      group: 7,
      topicId: 'volume-8-s43',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 358,
        capacity: 25823,
        children: 21742,
        utilisation: 84.2,
        capacityDifference: 4081,
        waiting: 0,
        previousWaiting: 8,
        waitingChange: -8,
      },
    },
    {
      id: 'nagasaki',
      recordType: 'regional_statistic',
      name: ['長崎県', 'Nagasaki'],
      group: 7,
      topicId: 'volume-8-s44',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 555,
        capacity: 36157,
        children: 32082,
        utilisation: 88.73,
        capacityDifference: 4075,
        waiting: 15,
        previousWaiting: 0,
        waitingChange: 15,
      },
    },
    {
      id: 'kumamoto',
      recordType: 'regional_statistic',
      name: ['熊本県', 'Kumamoto'],
      group: 7,
      topicId: 'volume-8-s45',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 767,
        capacity: 53904,
        children: 48295,
        utilisation: 89.59,
        capacityDifference: 5609,
        waiting: 0,
        previousWaiting: 4,
        waitingChange: -4,
      },
    },
    {
      id: 'oita',
      recordType: 'regional_statistic',
      name: ['大分県', 'Oita'],
      group: 7,
      topicId: 'volume-8-s46',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 369,
        capacity: 28023,
        children: 24346,
        utilisation: 86.88,
        capacityDifference: 3677,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'miyazaki',
      recordType: 'regional_statistic',
      name: ['宮崎県', 'Miyazaki'],
      group: 7,
      topicId: 'volume-8-s47',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 480,
        capacity: 31785,
        children: 27805,
        utilisation: 87.48,
        capacityDifference: 3980,
        waiting: 0,
        previousWaiting: 0,
        waitingChange: 0,
      },
    },
    {
      id: 'kagoshima',
      recordType: 'regional_statistic',
      name: ['鹿児島県', 'Kagoshima'],
      group: 7,
      topicId: 'volume-8-s48',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 697,
        capacity: 40292,
        children: 34775,
        utilisation: 86.31,
        capacityDifference: 5517,
        waiting: 5,
        previousWaiting: 14,
        waitingChange: -9,
      },
    },
    {
      id: 'okinawa',
      recordType: 'regional_statistic',
      name: ['沖縄県', 'Okinawa'],
      group: 7,
      topicId: 'volume-8-s49',
      asOf: '2026-04-01',
      status: 'provisional',
      sources: ['J01'],
      metrics: {
        facilities: 887,
        capacity: 62281,
        children: 56262,
        utilisation: 90.34,
        capacityDifference: 6019,
        waiting: 78,
        previousWaiting: 171,
        waitingChange: -93,
      },
    },
  ],
  sources: {
    J01: {
      id: 'J01',
      titleZh: '儿童家庭厅 · 2026年4月1日保育所等相关状况及资料1—6',
      noteZh: '官方暂定；地区合计已核验；年龄页存在不一致，未使用',
      urls: [
        'https://www.cfa.go.jp/policies/hoiku/torimatome/r8',
        'https://www.cfa.go.jp/policies/hoiku/torimatome/r7/',
      ],
      checkedAt: '2026-10-21',
    },
    J02: {
      id: 'J02',
      titleZh: '厚生劳动省 · 2025年人口动态统计年计概要',
      noteZh: '官方发布序列；不与其他国籍范围的速報混用',
      urls: [
        'https://www.mhlw.go.jp/toukei/saikin/hw/jinkou/geppo/nengai25/dl/kekka.pdf',
      ],
      checkedAt: '2026-10-21',
    },
    J03: {
      id: 'J03',
      titleZh: '文部科学省 · 2025年度学校基本调查',
      noteZh: '2025年5月1日；与4月保育数据不相加',
      urls: [
        'https://www.mext.go.jp/b_menu/toukei/chousa01/kihon/kekka/k_detail/2025.htm',
        'https://www.mext.go.jp/content/20251226-mxt_chousa01-000044291_01.pdf',
      ],
      checkedAt: '2026-10-21',
    },
    J04: {
      id: 'J04',
      titleZh: '儿童家庭厅 · 2025年4月认定儿童园状况',
      noteZh: '四类型、所有制、认定类别；确认定员与旧统计定义有变化',
      urls: [
        'https://www.cfa.go.jp/policies/kokoseido/kodomoen/jouhou/',
        'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/0f3ffc2a-7126-4f96-9497-dd3dbfb5438f/6e155b89/20251105_policies_kokoseido_kodomoen_jouhou_13.pdf',
      ],
      checkedAt: '2026-10-21',
    },
    J05: {
      id: 'J05',
      titleZh: '儿童家庭厅 · 儿童与育儿支援制度、保育政策及给付',
      noteZh: '现行制度入口与官方概要',
      urls: [
        'https://www.cfa.go.jp/policies/kokoseido/',
        'https://www.cfa.go.jp/policies/hoiku/',
      ],
      checkedAt: '2026-10-21',
    },
    J06: {
      id: 'J06',
      titleZh: '儿童家庭厅 · 幼儿教育保育无偿化概要',
      noteZh: '国家条件与特定额度；地方可追加',
      urls: [
        'https://www.cfa.go.jp/policies/kokoseido/mushouka/gaiyou/',
        'https://www.cfa.go.jp/policies/kokoseido/mushouka/',
      ],
      checkedAt: '2026-10-21',
    },
    J07: {
      id: 'J07',
      titleZh: '儿童家庭厅 · 谁都可通园制度及官方门户',
      noteZh: '2026年度全国给付；资格与有限时数',
      urls: [
        'https://www.cfa.go.jp/policies/hoiku/daredemo-tsuen',
        'https://www.daretsu.cfa.go.jp/',
        'https://www.pref.osaka.lg.jp/o090120/kosodateshien/daretu/20260917daretu.html',
      ],
      checkedAt: '2026-10-21',
    },
    J08: {
      id: 'J08',
      titleZh: '儿童家庭厅 · 认可外保育设施相关制度',
      noteZh: '申报、指导监督与企业主导型入口',
      urls: ['https://www.cfa.go.jp/policies/hoiku/ninkagai'],
      checkedAt: '2026-10-21',
    },
    J09: {
      id: 'J09',
      titleZh: '内阁官房 / e-Gov · 儿童家庭厅成立与设置法',
      noteZh: '2023年4月1日发足',
      urls: [
        'https://www.cas.go.jp/jp/seisaku/kodomo_seisaku_suishin/kodomo_katei_hossoku.html',
        'https://laws.e-gov.go.jp/law/504AC0000000075',
      ],
      checkedAt: '2026-10-21',
    },
    J10: {
      id: 'J10',
      titleZh:
        '御茶水女子大学附属幼稚园 / 文部科学省 · 附属幼稚园沿革与幼稚园创设史',
      noteZh: '官方历史；近代制度节点',
      urls: [
        'https://www.fz.ocha.ac.jp/fy/outline/history.html',
        'https://www.mext.go.jp/b_menu/hakusho/html/others/detail/1317591.htm',
      ],
      checkedAt: '2026-10-21',
    },
    J11: {
      id: 'J11',
      titleZh: '文部科学省 · 幼稚园教育要领 2017年告示',
      noteZh: '国家教育框架；不是统一商品课程',
      urls: ['https://www.mext.go.jp/content/1384661_3_2.pdf'],
      checkedAt: '2026-10-21',
    },
    J12: {
      id: 'J12',
      titleZh: '厚生劳动省 / 儿童家庭厅 · 保育所保育指针解说 2018年2月',
      noteZh: '官方专业框架；原文件章节与解释',
      urls: [
        'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/eb316dce-fa78-48b4-90cc-da85228387c2/f4758db1/20231013-policies-hoiku-shishin-h30-bunkatsu-1_24.pdf',
      ],
      checkedAt: '2026-10-21',
    },
    J13: {
      id: 'J13',
      titleZh: '儿童家庭厅 / 厚生劳动省 · 幼保连携型认定儿童园教育保育要领',
      noteZh: '2017年告示及官方说明入口',
      urls: [
        'https://www.mhlw.go.jp/web/t_doc?dataId=00010420',
        'https://www.cfa.go.jp/policies/kokoseido/kodomoen/kokuji',
      ],
      checkedAt: '2026-10-21',
    },
    J14: {
      id: 'J14',
      titleZh: '儿童家庭厅 · 2026年3月配置改善基础资料',
      noteZh: '标准、加算与过渡分别解释',
      urls: [
        'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/e4b817c9-5282-4ccc-b0d5-ce15d7b5018c/4514ac13/20260401_policies_hoiku_206.pdf',
      ],
      checkedAt: '2026-10-21',
    },
    J15: {
      id: 'J15',
      titleZh: '儿童家庭厅 · 2026年度公定价格改正概要',
      noteZh: '2026年4月改正及过渡期',
      urls: [
        'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/3a1576c7-071d-4325-8be8-edced6d12ee1/330bfaef/20260409_policies_kokoseido_178.pdf',
        'https://www.cfa.go.jp/policies/kokoseido/',
      ],
      checkedAt: '2026-10-21',
    },
    J16: {
      id: 'J16',
      titleZh: '东京都福祉局 · 保育费等无偿化与Q&A',
      noteZh: '地方政策，不适用于全国',
      urls: [
        'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/mushouka',
        'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/hoikuriyoujyoukyou/qa2',
      ],
      checkedAt: '2026-10-21',
    },
    J17: {
      id: 'J17',
      titleZh: '儿童家庭厅 · 保育政策新的方向性',
      noteZh: '2024年12月20日；人口减少、质量与功能',
      urls: ['https://www.cfa.go.jp/policies/hoiku/new_direction'],
      checkedAt: '2026-10-21',
    },
    J18: {
      id: 'J18',
      titleZh: '儿童家庭厅 · 幼稚园教谕免许持有者保育士资格取得特例',
      noteZh: '双资格与2029年度末过渡等条件',
      urls: ['https://www.cfa.go.jp/policies/hoiku/hoikushi-shikaku-tokurei/'],
      checkedAt: '2026-10-21',
    },
    J19: {
      id: 'J19',
      titleZh: '儿童家庭厅 · 如何成为保育士',
      noteZh: '培养、考试与注册',
      urls: ['https://www.cfa.go.jp/policies/hoiku/hello_mirai/naruniha'],
      checkedAt: '2026-10-21',
    },
    J20: {
      id: 'J20',
      titleZh: '福祉医疗机构 / 儿童家庭厅 · 这里de搜索与经营信息可见化',
      noteZh: '设施公开与经营信息入口，资料有报送时差',
      urls: [
        'https://www.wam.go.jp/kokodesearch/ANN010100E00.do',
        'https://www.cfa.go.jp/councils/kokoseido-keizokutekimieruka/',
        'https://www.wam.go.jp/content/wamnet/pcpub/top/kdmsys/kdmsysinfor/kdmsys_mail015.html',
      ],
      checkedAt: '2026-10-21',
    },
    J21: {
      id: 'J21',
      titleZh: '儿童家庭厅 · 教育保育设施事故汇总与数据库',
      noteZh: '重大事故报告范围；非全部伤害普查',
      urls: [
        'https://www.cfa.go.jp/policies/child-safety/effort/shukei/',
        'https://www.cfa.go.jp/policies/child-safety/effort/database',
      ],
      checkedAt: '2026-10-21',
    },
    J22: {
      id: 'J22',
      titleZh: '文部科学省 · 幼保小架桥项目与成果',
      noteZh: '幼小衔接，不等于提前小学化',
      urls: [
        'https://www.mext.go.jp/a_menu/shotou/youchien/1258019_00002.htm',
        'https://www.mext.go.jp/a_menu/shotou/youchien/1258019_00028.htm',
      ],
      checkedAt: '2026-10-21',
    },
    J23: {
      id: 'J23',
      titleZh: '枚方市 / 高槻市 · 2026年度谁都可通园实施说明',
      noteZh: '地方个案：定期利用、年龄、月度时限',
      urls: [
        'https://www.city.hirakata.osaka.jp/kosodate/0000053348.html',
        'https://www.city.takatsuki.osaka.jp/site/waiwai/152480.html',
      ],
      checkedAt: '2026-10-21',
    },
    J24: {
      id: 'J24',
      titleZh: '儿童家庭厅 · 家庭支援、地域育儿据点及补助入口',
      noteZh: '临时、病儿与家庭支援分别列示',
      urls: [
        'https://www.cfa.go.jp/policies/katei_shien',
        'https://www.cfa.go.jp/policies/kosodateshien/shien-kyoten/',
        'https://www.cfa.go.jp/for-local-government/subsidy',
      ],
      checkedAt: '2026-10-21',
    },
    J25: {
      id: 'J25',
      titleZh: '儿童家庭厅 · 企业主导型保育的官方说明',
      noteZh: '与事业务内地点及地域型保育区分',
      urls: [
        'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/9e449dd6-28c2-4066-af0e-8b203ea43ca6/e0cee34d/20230401_policies_hoiku_ninkagai_tsuuchi_genkyou_07.pdf',
      ],
      checkedAt: '2026-10-21',
    },
    J26: {
      id: 'J26',
      titleZh: '儿童家庭厅 · 放课后儿童俱乐部',
      noteZh: '小学生服务，不计为学前园所',
      urls: ['https://www.cfa.go.jp/policies/kosodateshien/houkago-jidou/'],
      checkedAt: '2026-10-21',
    },
    J27: {
      id: 'J27',
      titleZh: 'JP Holdings · 2026年3月期决算短信及公司概要',
      noteZh: '2025年4月至2026年3月实际；集团与设施组合',
      urls: [
        'https://www.jp-holdings.co.jp/ir/library_data/20260513_1.pdf',
        'https://www.jp-holdings.co.jp/ir/library_data/20260518.pdf',
        'https://www.jp-holdings.co.jp/company/company.html',
      ],
      checkedAt: '2026-10-21',
    },
    J28: {
      id: 'J28',
      titleZh: 'Global Kids COMPANY · 公司概要、集团与财务入口',
      noteZh: '官网确认集团关系及9月财年；本卷未统一提取最新完整财务',
      urls: [
        'https://www.gkids.jp/company/outline/',
        'https://www.gkids.jp/',
        'https://www.gkids.jp/ir/highlight/',
      ],
      checkedAt: '2026-10-21',
    },
    J29: {
      id: 'J29',
      titleZh: 'LIKE · 2026年5月期决算说明',
      noteZh: '全年实际；集团、分部与设施脚注保留',
      urls: [
        'https://ssl4.eir-parts.net/doc/2462/ir_material_for_fiscal_ym2/208533/00.pdf',
        'https://www.like-gr.co.jp/ir/top_message.html',
      ],
      checkedAt: '2026-10-21',
    },
    J30: {
      id: 'J30',
      titleZh: 'Poppins · 2025年12月期决算说明 2026-02-13',
      noteZh: '全年实际；分部与调整不混用',
      urls: [
        'https://www2.jpx.co.jp/disc/73580/140120260212557983.pdf',
        'https://www.poppins.co.jp/hldgs/ir/faq.html',
      ],
      checkedAt: '2026-10-21',
    },
    J31: {
      id: 'J31',
      titleZh: 'Teno Holdings · 官网当前PDF：2026年12月期中期决算说明',
      noteZh: '实际封面为2026中期，文件名含202512；使用内容期间',
      urls: [
        'https://www.teno.co.jp/ja/ir/main/0/teaserItems2/0/linkList/00/link/202512setsumei_2.pdf',
        'https://www.teno.co.jp/ja/ir/library/presentation.html',
      ],
      checkedAt: '2026-10-21',
    },
    J32: {
      id: 'J32',
      titleZh: 'Kids Corporation · 沿革、集团与服务',
      noteZh: '官方页面规模存在更新差异，不作为同口径时间序列',
      urls: [
        'https://www.kids-21.co.jp/company/history/',
        'https://kids-21.co.jp/company/group/',
        'https://kids-21.co.jp/service/',
      ],
      checkedAt: '2026-10-21',
    },
    J33: {
      id: 'J33',
      titleZh: 'Nichii Gakkan · 保育服务与2026年家庭支持公告',
      noteZh: '集团服务与特定项目人数不混用',
      urls: [
        'https://www.nichiigakkan.co.jp/service/nursery/',
        'https://www.nichiigakkan.co.jp/topics/assets/0e9759aa49a869643aebc01d2b53e6f114f1456c.pdf',
      ],
      checkedAt: '2026-10-21',
    },
    J34: {
      id: 'J34',
      titleZh: 'Benesse Style Care · 公司与保育、学童业务',
      noteZh: '不把教材与老年业务合并为幼教',
      urls: [
        'https://www.benesse-style-care.co.jp/company/',
        'https://hoiku.benesse-style-care.co.jp/',
        'https://benesse-scg.co.jp/',
      ],
      checkedAt: '2026-10-21',
    },
    J35: {
      id: 'J35',
      titleZh: 'Yaruki Switch · 品牌体系与双语幼儿加盟',
      noteZh: 'KDI、i Kids Star与Kids Duo分别识别',
      urls: [
        'https://www.yarukiswitch.jp/school/',
        'https://www.yarukiswitch.jp/fc/iks/about/',
        'https://www.yarukiswitch.jp/fc/iks/newbusiness/',
        'https://www.yarukiswitch.jp/fc/kdi/about/',
      ],
      checkedAt: '2026-10-21',
    },
    J36: {
      id: 'J36',
      titleZh: 'CoDMON · ICT功能、导入及2026-10-01规模',
      noteZh: '企业自报多类型设施数；调查排名范围保留',
      urls: [
        'https://www.codmon.com/',
        'https://campaign.codmon.com/proposal/school/',
        'https://www.codmon.com/proposal/daycare/',
      ],
      checkedAt: '2026-10-21',
    },
    J37: {
      id: 'J37',
      titleZh: 'UniFa · Lookmee产品、2026组织公告和资本资料',
      noteZh: '企业自报累计导入件数，不是去重园数；融资非收入',
      urls: [
        'https://unifa-e.com/service/',
        'https://unifa-e.com/news/release/20261001-new_director_appointments',
        'https://unifa-e.com/news/release/20240827-%E3%83%A6%E3%83%8B%E3%83%95%E3%82%A1%E3%80%81%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BAe%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E5%8F%8A%E3%81%B3mixi%E3%81%A8%E3%81%AE%E8%B3%87%E6%9C%AC%E6%A5%AD%E5%8B%99',
        'https://unifa-e.com/news/release',
      ],
      checkedAt: '2026-10-21',
    },
    J38: {
      id: 'J38',
      titleZh: '千株式会社 · 照片、相册及ICT产品',
      noteZh: '公司与はいチーズ产品分别记录',
      urls: [
        'https://sencorp.co.jp/recruit-career/business/',
        'https://8122.jp/lp/ict/',
        'https://8122.jp/lp/ict/howto/',
      ],
      checkedAt: '2026-10-21',
    },
    J39: {
      id: 'J39',
      titleZh: 'BABY JOB · 纸尿裤订阅、保活与支付服务',
      noteZh: '企业产品说明；未据客户数推算收入',
      urls: [
        'https://baby-job.co.jp/',
        'https://baby-job.co.jp/2025/01/14/news-20250114/',
      ],
      checkedAt: '2026-10-21',
    },
    J40: {
      id: 'J40',
      titleZh: 'Froebel-kan · 业务、保育支持与Kinderbook',
      noteZh: '官方出版和用品资料；1927月刊起点',
      urls: [
        'https://www.froebel-kan.co.jp/service',
        'https://www.froebel-kan.co.jp/service/childcare_support',
        'https://www.froebel-kan.co.jp/recruit/job/editor_kinderbook',
        'https://www.froebel-kan.co.jp/images/info/20240624_%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3_%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9.pdf',
      ],
      checkedAt: '2026-10-21',
    },
    J41: {
      id: 'J41',
      titleZh: 'BorneLund · 游戏环境与PLAYSCAPE',
      noteZh: '多场景项目，不等于自营托育数量',
      urls: [
        'https://www.bornelund.co.jp/environment',
        'https://playscape.bornelund.co.jp/shop/pages/mind-environment.aspx',
        'https://www.bornelund.co.jp/',
      ],
      checkedAt: '2026-10-21',
    },
    J42: {
      id: 'J42',
      titleZh: 'Child Honsya · 公司、月刊绘本与保育用品',
      noteZh: '与名称相近实体不合并',
      urls: [
        'https://www.childbook.co.jp/profile/info/',
        'https://childbook.co.jp/monthly/',
        'https://childbook.co.jp/childcare/',
      ],
      checkedAt: '2026-10-21',
    },
    J43: {
      id: 'J43',
      titleZh: 'SERIO / Senko · 集团归属与2026更名说明',
      noteZh: '当前控股与历史上市主体分开',
      urls: [
        'https://www.serio-holdings.co.jp/',
        'https://www.serio-corp.com/',
        'https://www.serio-holdings.co.jp/me/upload/files/1710992259phpalHBc1/20240322SERIO%E3%83%9B%E3%83%BC%E3%83%AB%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%B9%E3%82%92%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E5%8C%96%EF%BD%9E%E9%96%A2%E8%A5%BF%E3%82%A8%E3%83%AA%E3%82%A2%E3%81%A7%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E4%BA%8B%E6%A5%AD%E6%8B%A1%E5%A4%A7%E3%81%B8%EF%BD%9E.pdf',
      ],
      checkedAt: '2026-10-21',
    },
    J44: {
      id: 'J44',
      titleZh: 'Gakken · 集团IR及业务入口',
      noteZh: '延伸企业，未纳入十五家核心财务比较',
      urls: [
        'https://www.gakken.co.jp/ja/ir/library/result.html',
        'https://www.gakken.co.jp/en/ir.html',
      ],
      checkedAt: '2026-10-21',
    },
    J45: {
      id: 'J45',
      titleZh: '文部科学省 · 2026年度学校基本调查速報',
      noteZh: '2026年5月1日；速報与2025确认资料分别保留',
      urls: [
        'https://www.mext.go.jp/b_menu/toukei/chousa01/kihon/kekka/k_detail/2026_00001.htm',
        'https://www.mext.go.jp/content/20260826-mxt_chousa01-000050842_01.pdf',
      ],
      checkedAt: '2026-10-21',
    },
  },
  figures: {
    'chart-J03': {
      type: 'figure',
      id: 'chart-J03',
      file: 'chart-J03.png',
      title: '认定儿童园数量变化',
      caption: '认定儿童园数量变化 来源 类型转换与新设需区分。',
      sources: ['J04'],
    },
    'chart-J05': {
      type: 'figure',
      id: 'chart-J05',
      file: 'chart-J05.png',
      title: '2025认定儿童园设立者结构',
      caption:
        '2025认定儿童园设立者结构 来源 私立不等于营利连锁；不能扩展为全部保育市场份额。',
      sources: ['J04'],
    },
    'chart-J01': {
      type: 'figure',
      id: 'chart-J01',
      file: 'chart-J01.png',
      title: '日本2024与2025年出生数',
      caption: '日本2024与2025年出生数 来源 出生数不是当年在园人数。',
      sources: ['J02'],
    },
    'chart-J02': {
      type: 'figure',
      id: 'chart-J02',
      file: 'chart-J02.png',
      title: '保育所等定员与利用2025—2026',
      caption:
        '保育所等定员与利用2025—2026 来源 不同于全部幼稚园；差额不是可预约空位。',
      sources: ['J01'],
    },
    'chart-J04': {
      type: 'figure',
      id: 'chart-J04',
      file: 'chart-J04.png',
      title: '官方等待儿童长期序列',
      caption: '官方等待儿童长期序列 来源 行政定义，不代表全部未满足需求。',
      sources: ['J01'],
    },
    'chart-J06': {
      type: 'figure',
      id: 'chart-J06',
      file: 'chart-J06.png',
      title: '官方等待儿童较多的15地区',
      caption:
        '官方等待儿童较多的15地区 来源 ，本报告重建都道府县 绝对人数不等于等待率或治理评分。',
      sources: ['J01'],
    },
    'chart-J07': {
      type: 'figure',
      id: 'chart-J07',
      file: 'chart-J07.png',
      title: '特定无偿化情景月度上限',
      caption:
        '特定无偿化情景月度上限 来源 均需满足资格；延长托管另有日数×450日元等条件。',
      sources: ['J06'],
    },
    'chart-J08': {
      type: 'figure',
      id: 'chart-J08',
      file: 'chart-J08.png',
      title: '四家企业不同财期集团财务',
      caption:
        '四家企业不同财期集团财务 来源 各面板独立坐标；Teno为半年，均含相应非幼教业务。',
      sources: ['J27', 'J29', 'J30', 'J31'],
    },
    'chart-J25': {
      type: 'figure',
      id: 'chart-J25',
      file: 'chart-J25.png',
      title: '学校基本调查在园儿童2025—2026',
      caption:
        '学校基本调查在园儿童2025—2026 来源 类别转换不等于全国新增；2026为速報。',
      sources: ['J03', 'J45'],
    },
    'chart-J09': {
      type: 'figure',
      id: 'chart-J09',
      file: 'chart-J09.png',
      title: '三岁与四五岁配置标准改善',
      caption:
        '三岁与四五岁配置标准改善 来源 不是每班全部排班情况；一岁改善加算不画作统一法定标准。',
      sources: ['J14', 'J15'],
    },
    'chart-J16': {
      type: 'figure',
      id: 'chart-J16',
      file: 'chart-J16.png',
      title: 'JP Holdings设施组合2026年3月',
      caption: 'JP Holdings设施组合2026年3月 来源 各类功能和服务年龄不同。',
      sources: ['J27'],
    },
    'chart-J17': {
      type: 'figure',
      id: 'chart-J17',
      file: 'chart-J17.png',
      title: 'JP Holdings两财年经营数据',
      caption:
        'JP Holdings两财年经营数据 来源 集团实际，非单园；左右坐标不同。',
      sources: ['J27'],
    },
    'chart-J18': {
      type: 'figure',
      id: 'chart-J18',
      file: 'chart-J18.png',
      title: 'LIKE 2026年5月期分部收入',
      caption:
        'LIKE 2026年5月期分部收入 来源 披露取整分部合计与总收入相差1百万日元。',
      sources: ['J29'],
    },
    'chart-J19': {
      type: 'figure',
      id: 'chart-J19',
      file: 'chart-J19.png',
      title: 'Poppins 2025分部收入与抵销',
      caption:
        'Poppins 2025分部收入与抵销 来源 披露取整后合计与集团收入存在1百万日元差；不据此填补精确值。',
      sources: ['J30'],
    },
    'chart-J20': {
      type: 'figure',
      id: 'chart-J20',
      file: 'chart-J20.png',
      title: 'Teno 2026中期收入构成',
      caption:
        'Teno 2026中期收入构成 来源 原图所列比例合计99.8%，未强制归一化；非全年。',
      sources: ['J31'],
    },
    'chart-J21': {
      type: 'figure',
      id: 'chart-J21',
      file: 'chart-J21.png',
      title: '十五家企业主要角色矩阵',
      caption:
        '十五家企业主要角色矩阵 来源 至 及本报告分类 不是市场份额或质量评分。',
      sources: ['J27', 'J41'],
    },
    'chart-J10': {
      type: 'figure',
      id: 'chart-J10',
      file: 'chart-J10.png',
      title: '定员充足率较高的15地区',
      caption:
        '定员充足率较高的15地区 来源 ，本报告重建都道府县 利用人数÷定员；不是教育质量或安全评分。',
      sources: ['J01'],
    },
    'chart-J11': {
      type: 'figure',
      id: 'chart-J11',
      file: 'chart-J11.png',
      title: '保育利用定员较多的15地区',
      caption:
        '保育利用定员较多的15地区 来源 ，本报告重建都道府县 已归回指定都市中核市；不代表全部幼教容量。',
      sources: ['J01'],
    },
    'chart-J12': {
      type: 'figure',
      id: 'chart-J12',
      file: 'chart-J12.png',
      title: '47地区容量与使用散点',
      caption:
        '47地区容量与使用散点 来源 ，本报告计算 点面积随等待人数变化；相关图不是因果。',
      sources: ['J01'],
    },
    'chart-J22': {
      type: 'figure',
      id: 'chart-J22',
      file: 'chart-J22.png',
      title: '等待儿童年度变化的两端地区',
      caption:
        '等待儿童年度变化的两端地区 来源 资料4 仅等待指标可比；变化原因不能由本图单独确定。',
      sources: ['J01'],
    },
    'chart-J23': {
      type: 'figure',
      id: 'chart-J23',
      file: 'chart-J23.png',
      title: '八地区容量与使用',
      caption:
        '八地区容量与使用 来源 ，本报告分组 三重归近畿；中国地方为日本地理分组名称。',
      sources: ['J01'],
    },
    'chart-J24': {
      type: 'figure',
      id: 'chart-J24',
      file: 'chart-J24.png',
      title: '47都道府县充足率总览',
      caption:
        '47都道府县充足率总览 来源 ，本报告重建计算 已将指定都市、中核市归回；数据暂定。',
      sources: ['J01'],
    },
    'chart-J13': {
      type: 'figure',
      id: 'chart-J13',
      file: 'chart-J13.png',
      title: '认定儿童园四类型：机构数',
      caption: '认定儿童园四类型：机构数 来源 类型间规模不同不代表质量优劣。',
      sources: ['J04'],
    },
    'chart-J14': {
      type: 'figure',
      id: 'chart-J14',
      file: 'chart-J14.png',
      title: '认定儿童园四类型：在籍儿童',
      caption: '认定儿童园四类型：在籍儿童 来源 类型间规模不同不代表质量优劣。',
      sources: ['J04'],
    },
    'chart-J15': {
      type: 'figure',
      id: 'chart-J15',
      file: 'chart-J15.png',
      title: '认定类别的在籍与确认定员',
      caption:
        '认定类别的在籍与确认定员 来源 该容量定义与往年发布有变化；差额不是可自由转给其他类别的空位。',
      sources: ['J04'],
    },
  },
  national: {
    asOf: '2026-04-01',
    status: 'provisional',
    facilities: 40046,
    capacity: 3016417,
    children: 2646756,
    waiting: 2435,
    publishedUtilisation: 87.7,
    sources: ['J01'],
  },
}

const topicTranslations = {
  ...englishTopics,
  ...moreEnglishTopics,
  ...englishRegions,
}
for (const topic of japanResearchReport.topics) {
  const translations = topicTranslations[topic.id]
  let companyParagraph = 0
  const companySection =
    topic.volume === 6
      ? topic.companyId
        ? japanCompanyReport.companies.find(
            (company) => company.id === topic.companyId,
          )
        : japanCompanyReport.context.find(
            (section) => section.number === topic.number,
          )
      : null
  const companyParagraphs = companySection?.blocks.filter(
    (block) => block.type === 'paragraph',
  )
  topic.blocks.forEach((block, index) => {
    const translation = translations?.[index]
    if (block.type === 'paragraph') {
      block.textEn =
        translation ||
        companyParagraphs?.[companyParagraph++]?.text ||
        block.textEn
    } else if (block.type === 'table' || block.type === 'timeline') {
      const companyTable = companySection?.blocks.find(
        (item) => item.type === 'table',
      )
      Object.assign(
        block,
        translation ||
          (companyTable
            ? { columnsEn: companyTable.columns, rowsEn: companyTable.rows }
            : {}),
      )
    } else if (block.type === 'figure' && translation) {
      block.captionEn = translation
      japanResearchReport.figures[block.id].captionEn = translation
    }
  })
  topic.translationStatus = 'bilingual'
}
for (const [id, source] of Object.entries(japanResearchReport.sources)) {
  ;[source.titleEn, source.noteEn] = englishSources[id]
}
