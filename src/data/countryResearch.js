export const countryResearch = {
  japan: {
    sector: {
      summary: [
        '日本的幼儿教育与保育由幼稚园、保育所、认定こども园和地域型保育等不同制度构成。它们在法律地位、主管机关、适用指针与利用条件上各有范围，阅读全国数据时应先核对其统计对象。',
        'Japan’s early education and care system includes kindergartens, nursery schools, certified kodomoen, and community-based services. Their legal status, responsible agencies, guidance, and access conditions differ. Check the population covered before interpreting national figures.',
      ],
      blocks: [
        { title: ['制度与主管机关', 'Provider types and oversight'], text: [
          '幼稚园属于学校教育体系，保育所属于儿童福祉设施。认定こども园有四种类型；幼保连携型同时具有学校和儿童福祉设施的法律定位。幼儿园教育由文部科学省负责，儿童家庭厅负责保育与认定こども园相关制度。',
          'Kindergartens sit within the school-education system, while nursery schools are child-welfare facilities. Certified kodomoen have four types; the integrated type is legally both a school and a child-welfare facility. MEXT oversees kindergarten education, and the Children and Families Agency oversees childcare and kodomoen policy.',
        ], sources: ['jp-kodomoen', 'jp-system'] },
        { title: ['2026年保育供给快照', 'Childcare provision snapshot, 2026'], text: [
          '截至2026年4月1日，保育所等报告的利用定员为3,016,417人，利用儿童为2,646,756人，待机儿童为2,435人。统计范围是文件所定义的保育服务，不包括全部幼儿教育机构；2026年数据为暂定值，熊本县数据待确定。',
          'As of 1 April 2026, the national childcare report recorded capacity of 3,016,417 places, 2,646,756 children using provision, and 2,435 children on waiting lists. The figures cover the childcare services defined in the report, not every early-education setting. The 2026 release is provisional while Kumamoto Prefecture data are finalized.',
        ], sources: ['jp-capacity'] },
        { title: ['幼稚园统计是另一口径', 'Kindergarten counts use a separate series'], text: [
          '2025年度学校基本统计列出8,225所幼稚园。该统计与保育所等供给统计覆盖的机构类别和调查方法不同，因此不把两者直接相加作为全国市场总量。',
          'The 2025 School Basic Statistics counted 8,225 kindergartens. This series covers different provider categories and uses a different method from the childcare-capacity report, so the two counts should not be added as one national market total.',
        ], sources: ['jp-school-stats'] },
        { title: ['经营者应按所在地核对', 'Verify requirements for each locality'], text: [
          '利用认定、市町村确认、费用与给付、人力和设施标准及检查要求，需按机构类型和所在地逐项核对。全国政策入口不能替代最新法令、通知或地方主管机关的确认。',
          'Eligibility, municipal authorization, fees and subsidies, staffing and facility standards, and inspection requirements must be checked by provider type and location. National policy gateways do not replace current laws, notices, or confirmation from the local authority.',
        ], sources: ['jp-system', 'jp-cfa'] },
      ],
      reviewed: '2026-11-12',
    },
    operations: null,
    companies: {
      summary: [
        '本案例根据公司年报和设施清单记录集团业务范围。运营点数量说明组织规模，不是服务质量排名，也不等同于实际入园人数。',
        'This case uses company filings and facility lists to document the group’s scope. Operating-location counts describe organisational scale; they are not quality rankings or actual enrollment.',
      ],
      profiles: [{
        name: ['JPホールディングス', 'JP Holdings'],
        label: ['上市托育与儿童服务集团', 'Publicly listed care and child-services group'],
        body: [
          'JP Holdings的2026年3月期披露包括保育园203所、认定こども园6所、学童俱乐部118处、儿童馆16处和交流馆2处，共345处。集团还经营餐食、幼儿学习项目、人力资源与家庭支持相关业务。不同设施类别分别计数。',
          'JP Holdings’ FY2026 disclosures list 203 nursery schools, 6 certified kodomoen, 118 after-school clubs, 16 children’s centres, and 2 community exchange centres, 345 locations in total. Related operations include meal services, early-learning programmes, staffing, and family support. Facility categories are counted separately.',
        ],
        sources: ['https://www.jp-holdings.co.jp/ir/library_data.html', 'https://www.jp-holdings.co.jp/company/facilities.html'],
        sourceTitles: ['Investor materials and annual filings', 'Operating facilities, 1 April 2026'],
        checked: '2026-11-12',
        update: ['每年按最新年报复核设施数量、业务范围、合并口径和财年截止日。', 'Recheck facility counts, business scope, consolidation basis, and fiscal year-end against each annual filing.'],
      }],
      note: ['公司披露为组织自报数据。若用于运营基准比较，还需要同口径的成本、人数、人员配置、服务年龄和地区资料。', 'Company disclosures are organisation-reported. Operational benchmarking also needs comparable costs, enrollment, staffing, age ranges, and geographic coverage.'],
    },
    technology: {
      summary: [
        '日本政府的保育ICT项目支持案例展示、现场咨询与培训，以及机构间交流。技术采用涉及工作流程、数据和员工培训；参与示范项目不等于产品认证或独立效果证明。',
        'Japan’s childcare ICT programme supports model demonstrations, implementation advice and staff development, and exchange between providers. Adoption affects workflows, data, and staff training; participation in a demonstration is not product certification or independent proof of outcomes.',
      ],
      profiles: [{
        name: 'CoDMON / コドモン',
        label: ['园务管理平台案例', 'Provider-management platform example'],
        body: [
          '儿童家庭厅发布的保育ICT案例资料列出CoDMON参与的地方实践。该记录可核实其参与的项目和地点，但不能证明每项产品功能的成效。采购核对表应覆盖权限、数据导出与删除、保存期限、系统中断、接口、费用和支持响应。',
          'Children and Families Agency ICT case materials document local projects involving CoDMON. This verifies participation in those projects, not the effectiveness of each product feature. A procurement checklist should cover permissions, data export and deletion, retention, outages, integrations, cost, and support response.',
        ],
        sources: ['https://www.cfa.go.jp/policies/hoiku/hoiku-ictlabo', 'https://www.cfa.go.jp/policies/hoiku/hoiku-ictlabo/joho_07'],
        sourceTitles: ['FY2026 government programme', 'Government-published model-project examples'],
        checked: '2026-11-12',
        update: ['按采购周期复核补助范围、项目结果、合同及数据处理条款。供应商功能页只支持其公开产品范围。', 'Before procurement, recheck grant scope, project results, contract, and data-processing terms. Vendor feature pages establish published product scope only.'],
      }],
      note: ['本页不对产品作排名或效果承诺。涉及儿童照片、健康信息、出勤或家庭联系方式时，应核实法律依据、访问权限、保存删除及事故响应。', 'This page does not rank products or promise outcomes. For children’s photos, health information, attendance, or family contact details, verify the legal basis, access controls, retention and deletion, and incident response.'],
    },
  },
  'united-states': {
    sector: {
      summary: [
        '美国幼儿照护与教育由州和地方监管机构、学区、联邦资助项目及私人或非营利服务共同组成。许可、课程、资助资格和人员要求因州、地方及项目类型而异，不能用一个全国数字或规则代表所有服务。',
        'U.S. early care and education spans state- and locally regulated providers, school districts, federally funded programmes, and private or nonprofit services. Licensing, curriculum, funding eligibility, and staffing requirements vary by state, locality, and programme; no single national figure or rule represents them all.',
      ],
      blocks: [
        { title: ['许可与检查', 'Licensing and inspections'], text: [
          '州和领地制定持牌托育的最低健康安全要求，并进行定期现场检查；检查报告须公开。具体许可类别、豁免和执行规则因地而异，需使用所在地监管机构的许可与检查记录。',
          'States and territories set minimum health and safety requirements for licensed care and conduct regular onsite inspections; inspection reports must be public. Licence categories, exemptions, and enforcement details vary, so use the local regulator’s records.',
        ], sources: ['us-licensing', 'us-inspections'] },
        { title: ['三类公共支持路径', 'Three public support pathways'], text: [
          'Child Care and Development Fund由州和领地管理，为符合条件的家庭提供托育费用援助。Head Start / Early Head Start是有联邦项目标准的资助项目。州和地方也设有各自的pre-K项目。三者资格、支付与服务规则不同。',
          'The Child Care and Development Fund is administered by states and territories to help eligible families pay for care. Head Start and Early Head Start are federally funded programmes with programme standards. States and localities also operate their own pre-K initiatives. Eligibility, payment, and service rules differ.',
        ], sources: ['us-assistance', 'us-headstart'] },
        { title: ['入学率的范围', 'Scope of enrollment figures'], text: [
          '现有NCES/ACS快照采用2022年数据，衡量3至5岁儿童进入正式学校项目的比例：总体59%，3至4岁47%，5岁84%。这不是所有托育服务的使用率，也不是最新年度行政统计。',
          'The current NCES/ACS snapshot uses 2022 data and measures enrollment in formal school programmes: 59% among ages 3–5, 47% among ages 3–4, and 84% at age 5. It is not a rate of all child-care use or a current administrative count.',
        ], sources: ['us-nces'] },
        { title: ['比较前先统一定义', 'Align definitions before comparing'], text: [
          '比较名额、学费、人员或补贴时，标明州、年龄、服务类型、统计期、单位和数据来源。许可容量、学校入学率、补贴家庭数分别回答不同问题，不能相互代替。',
          'When comparing capacity, tuition, staffing, or subsidies, specify the state, age group, service type, period, unit, and source. Licensed capacity, school enrollment, and families receiving subsidies answer different questions and are not substitutes.',
        ], sources: ['us-licensing', 'us-nces'] },
      ],
      reviewed: '2026-11-12',
    },
    operations: {
      summary: [
        '以下运营清单从联邦消费者与项目指引中提炼，帮助建立核验流程。美国没有统一的全国许可规则；当地主管机构和项目合同决定具体要求。',
        'These operating checklists draw on federal consumer and programme guidance to structure verification. The United States has no single national licensing rule; local regulators and programme agreements define the details.',
      ],
      profiles: [
        {
          name: ['许可、豁免与检查', 'Licensing, exemptions, and inspections'],
          label: ['开业与持续合规', 'Opening and ongoing compliance'],
          body: [
            '按服务类别确认是否需要许可，再向州或领地主管部门核对状态、条件和检查报告。若某项服务属于豁免，记录具体法律依据及其范围；豁免不等于免除所有健康、安全或资助要求。',
            'Determine whether the service category requires a licence, then verify status, conditions, and inspection reports with the state or territory. If an exemption applies, record its legal basis and scope. An exemption does not remove every health, safety, or funding requirement.',
          ],
          sources: ['https://www.childcare.gov/consumer-education/regulated-child-care/child-care-licensing', 'https://www.childcare.gov/consumer-education/regulated-child-care/monitoring-and-inspections'],
          sourceTitles: ['ChildCare.gov: licensing', 'ChildCare.gov: monitoring and inspections'],
          checked: '2026-11-12',
          update: ['开业、续牌、扩容、服务年龄变动或检查后复核；留存监管记录和整改责任人。', 'Recheck at opening, renewal, expansion, age-range changes, and after inspections. Keep regulator records and correction owners.'],
        },
        {
          name: ['排班与实际容量', 'Staffing and usable capacity'],
          label: ['每日人员控制', 'Daily staffing control'],
          body: [
            '依所在地规定按年龄组整理比例、最大组规模、资格、培训和背景审查。每日将出勤儿童与实际到岗且符合要求的员工对照；发生缺员时按当地规则调整接收人数或服务安排，不以平均比例替代法规。',
            'Record local ratios, maximum group sizes, qualifications, training, and background-check requirements by age group. Each day compare attendance with qualified staff actually present. When staffing falls short, adjust attendance or service under local rules rather than using an average ratio as the legal standard.',
          ],
          sources: ['https://www.childcare.gov/consumer-education/regulated-child-care/staff-qualifications-and-required-training', 'https://www.childcare.gov/consumer-education/regulated-child-care/staff-background-checks'],
          sourceTitles: ['ChildCare.gov: qualifications and training', 'ChildCare.gov: background checks'],
          checked: '2026-11-12',
          update: ['法规、年龄组、员工资格或培训状态变化时复核；每班保存排班与缺员应对记录。', 'Recheck after changes to rules, age groups, qualifications, or training. Keep each shift’s roster and response to staffing gaps.'],
        },
        {
          name: ['学费、补贴与资助', 'Tuition, subsidies, and grants'],
          label: ['收入与名额管理', 'Revenue and enrollment management'],
          body: [
            '将家庭缴费、州托育补贴、Head Start资助和其他公共收入分开记录。分别跟踪资格、核准名额、付款方、结算周期及可报销服务。申请中的补贴不能当作已确认收入；合同和地方规则决定付款条件。',
            'Track family tuition, state child-care subsidies, Head Start awards, and other public revenue separately. For each, record eligibility, approved slots, payer, payment cycle, and covered services. A pending subsidy application is not confirmed revenue; contracts and local rules govern payment.',
          ],
          sources: ['https://www.childcare.gov/consumer-education/get-help-paying-for-child-care/child-care-financial-assistance-options', 'https://headstart.gov/policy/45-cfr-chap-xiii'],
          sourceTitles: ['ChildCare.gov: financial assistance', 'Head Start Program Performance Standards'],
          checked: '2026-11-12',
          update: ['每个资助年度、合同或资格规则变化时更新，保留政策版本与地方机构确认。', 'Update each funding year and after contract or eligibility changes. Retain the policy version and local-agency confirmation.'],
        },
      ],
      note: ['这些步骤是资料核验工具，不替代法律意见或监管解释。比例、费率和资格都必须根据当地官方规定确认。', 'These steps organise source checks and do not replace legal advice or regulator interpretation. Confirm ratios, rates, and eligibility against local official rules.'],
    },
    companies: {
      summary: [
        '本案例使用公司年报中可追溯的运营数量和业务板块。披露容量不是实际入园人数，企业规模也不代表教育质量或行业平均状况。',
        'This case uses traceable operating counts and business segments from a company filing. Reported capacity is not enrollment, and company scale does not establish educational quality or an industry average.',
      ],
      profiles: [{
        name: 'Bright Horizons Family Solutions',
        label: ['托育与工作场所服务集团', 'Child-care and workplace-services group'],
        body: [
          '截至2025年12月31日，Bright Horizons披露运营1,010个早期教育与托育中心，名义服务容量约115,000名儿童。业务还包括备用托育和教育咨询。公司年报将教师招聘与留任、人工成本、需求波动和数据安全列为风险；中心容量不等于当前在园人数。',
          'As of 31 December 2025, Bright Horizons reported 1,010 early-education and child-care centres with stated capacity for approximately 115,000 children. Other business segments include back-up care and educational advisory services. Its annual filing identifies teacher recruitment and retention, labour costs, demand changes, and data security as risks. Capacity is not current enrollment.',
        ],
        sources: ['https://investors.brighthorizons.com/financial-information/annual-reports-and-proxy'],
        sourceTitles: ['Annual reports and SEC filings'],
        checked: '2026-11-12',
        update: ['逐年从最新10-K复核中心数量、容量、业务板块、并购与风险，注明财年截止日。', 'Recheck centre count, capacity, segments, acquisitions, and risks from each Form 10-K, with the fiscal year-end.'],
      }],
      note: ['单一上市公司的模式不能代表独立园、家庭托育或非营利项目。跨公司比较前统一设施定义、财年及业务板块。', 'One listed company does not represent independent centres, family child care, or nonprofit programmes. Align facility definitions, fiscal years, and segments before comparing companies.'],
    },
    technology: {
      summary: [
        '托育管理软件可覆盖签到、家庭沟通、排班、收费和记录管理等工作流。供应商资料只能确认其公开描述的功能；它们不证明节省工时、改善质量或符合某州的全部法规。',
        'Child-care management platforms can cover workflows such as attendance, family communication, scheduling, billing, and records. Vendor materials establish only the functions they describe; they do not prove time savings, quality improvements, or full compliance with any state’s rules.',
      ],
      profiles: [{
        name: 'Procare Solutions',
        label: ['托育管理软件案例', 'Child-care management software example'],
        body: [
          'Procare产品资料列出线上登记、出勤、排班、家庭沟通与支付处理。评估时可用试点核验数据导出与删除、家长授权、角色权限、第三方集成、停机方案、收费和支持响应。美国教育部提醒，第三方教育工具可能带来隐私和安全责任；FERPA适用范围取决于机构和记录。',
          'Procare’s product materials list online registration, attendance, scheduling, family communication, and payment processing. A pilot can check data export and deletion, family consent, role permissions, integrations, outage plans, pricing, and support response. The U.S. Department of Education notes privacy and security responsibilities for third-party educational services; FERPA applicability depends on the institution and records involved.',
        ],
        sources: ['https://www.procaresoftware.com/capabilities/child-care-management-software/', 'https://studentprivacy.ed.gov/resources/protecting-student-privacy-while-using-online-educational-services-requirements-and-best', 'https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions'],
        sourceTitles: ['Procare product capabilities', 'U.S. Department of Education: online services and student privacy', 'Federal Trade Commission: COPPA guidance'],
        checked: '2026-11-12',
        update: ['采购前检查当前合同、隐私政策、数据处理条款、报价与集成；更新产品功能时重新核对供应商文档。', 'Before procurement, review current contracts, privacy policy, data-processing terms, pricing, and integrations. Recheck vendor documentation when features change.'],
      }],
      note: ['COPPA适用于特定面向儿童的线上服务；FERPA适用需按教育机构和记录判断。确认适用法律、供应商合同、访问范围与事件响应流程。', 'COPPA applies to certain child-directed online services; FERPA must be assessed against the institution and records. Confirm applicable law, vendor terms, access scope, and incident response.'],
    },
  },
}

export const researchSources = {
  'jp-kodomoen': {
    title: 'Children and Families Agency: Certified kodomoen system',
    url: 'https://www.cfa.go.jp/policies/kokoseido/kodomoen/gaiyou/',
  },
  'jp-system': {
    title: 'Children and Families Agency: Child and child-rearing support system',
    url: 'https://www.cfa.go.jp/policies/kokoseido/',
  },
  'jp-capacity': {
    title: 'Children and Families Agency: Childcare provision, 1 April 2026',
    url: 'https://www.cfa.go.jp/policies/hoiku/torimatome/r8/',
  },
  'jp-school-stats': {
    title: 'MEXT: 2025 School Basic Statistics, final results',
    url: 'https://www.mext.go.jp/content/20251226-mxt_chousa01-000044291_01.pdf',
  },
  'jp-cfa': {
    title: 'Children and Families Agency: Childcare policy and resources',
    url: 'https://www.cfa.go.jp/policies/hoiku',
  },
  'us-licensing': {
    title: 'ChildCare.gov: Child-care licensing',
    url: 'https://www.childcare.gov/consumer-education/regulated-child-care/child-care-licensing',
  },
  'us-inspections': {
    title: 'ChildCare.gov: Monitoring and inspections',
    url: 'https://www.childcare.gov/consumer-education/regulated-child-care/monitoring-and-inspections',
  },
  'us-assistance': {
    title: 'ChildCare.gov: Financial assistance options',
    url: 'https://www.childcare.gov/consumer-education/get-help-paying-for-child-care/child-care-financial-assistance-options',
  },
  'us-headstart': {
    title: 'Head Start Program Performance Standards',
    url: 'https://headstart.gov/policy/45-cfr-chap-xiii',
  },
  'us-nces': {
    title: 'NCES: School enrollment rates of young children',
    url: 'https://nces.ed.gov/programs/coe/indicator/cfa/enrollment-of-young-children?tid=4',
  },
}
