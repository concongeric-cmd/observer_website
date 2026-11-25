// Transcription of the supplied English report, with its original reporting periods and evidence limits.
export const japanCompanyReport = {
  title: 'Japan’s Early Childhood Education and Care Companies',
  cutoff: '2026-10-21',
  sourceFile: 'Japan Early Childhood Companies - English.html',
  sourceNote:
    'The original report reviewed these materials on October 21, 2026. Government figures retain their reference dates and any preliminary status. Company statements, actual financial results and the authors’ analysis are identified separately. The reference numbers connect the text to the sources and underlying tables.',
  context: [
    {
      number: 1,
      title: 'A common framework for reading the profiles',
      blocks: [
        {
          type: 'paragraph',
          text: 'This volume examines 15 companies. Their work spans running childcare centers, managing them under contract, franchising bilingual programs, providing software, publishing books, designing play spaces and supplying everyday items. The selection illustrates different roles. It ranks neither educational quality nor market size. Social welfare corporations, school corporations and local governments also run many important centers in Japan. Listed companies alone give an incomplete picture.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Each profile distinguishes the corporate group, the legal entity that operates a service, the brand, the product and the physical site. Figures come first from company financial statements and first-party product materials. Where comparable financial figures were unavailable, the report leaves them blank. Funds raised and company valuations measure different things from revenue. One customer can install several products, and a group can earn money outside early education.',
          sources: [],
        },
      ],
    },
    {
      number: 17,
      title: 'Other organizations worth following',
      blocks: [
        {
          type: 'paragraph',
          text: 'The SERIO group became part of the Senko group in 2024. According to the official website, SERIO Holdings changed its name to S-Life Partners in April 2026. The change did not automatically rename operating companies such as Serio. Distinguish the formerly listed entity, the current holding company and the brands used on site. Describing the former entity as an independent listed company would be out of date.',
          sources: ['J43'],
        },
        {
          type: 'paragraph',
          text: 'Child Honsya (also romanized as Child Honsha) provides monthly picture books, information for educators and supplies. Periodicals and teaching materials are products, so their distribution does not count as a chain of company-run centers. Child Honsya and the similarly named Child Sha are separate entities to investigate. Check their legal identities, catalogs and businesses even if their translated names look alike.',
          sources: ['J42'],
        },
        {
          type: 'paragraph',
          text: 'The Gakken group has businesses in publishing, learning, healthcare and welfare. To examine its childcare services, identify the operating entity and facility type. Group revenue covers a much wider business. Further research needs to map company names to facility lists and financial segments.',
          sources: ['J44'],
        },
        {
          type: 'paragraph',
          text: 'These organizations extend the map beyond the 15 core companies and are outside the core comparisons of finances and operations. Inclusion reflects the available materials and focus of this study. It implies no judgment about relative importance or quality. The availability of public financial statements is a matter of disclosure.',
          sources: [],
        },
      ],
    },
    {
      number: 18,
      title: 'Comparing the roles of the 15 companies',
      blocks: [
        {
          type: 'table',
          columns: [
            'Company',
            'Main role in this study',
            'Who pays or holds the contract',
            'A figure that can be misread',
          ],
          rows: [
            [
              'JP Holdings',
              'Operating facilities and related support',
              'Public programs, families and other contracting parties',
              'All 345 sites counted as preschools',
            ],
            [
              'Global Kids COMPANY',
              'Childcare through several operators',
              'Public programs and families',
              'Group headcount used to estimate classroom staffing',
            ],
            [
              'LIKE / LIKE Kids',
              'Childcare within a diversified service group',
              'Public bodies, companies and families',
              'Group revenue treated as childcare revenue',
            ],
            [
              'Poppins',
              'Center-based and in-home care',
              'Public bodies, companies and families',
              'All Family Care revenue attributed to early education',
            ],
            [
              'Teno',
              'Publicly supported and contract childcare',
              'Local authorities, hospitals, companies and families',
              'Half-year results treated as a full year',
            ],
            [
              'Kids Corporation',
              'Hospital and workplace contracts, plus licensed childcare',
              'Hospitals, companies, public bodies and families',
              'Different website counts read as a growth trend',
            ],
            [
              'Nichii / Nichii Kids',
              'Childcare within a diversified care group',
              'Public bodies, companies and families',
              'Children in one program counted as total group enrollment',
            ],
            [
              'Benesse childcare',
              'Centers and school-age services',
              'Public programs and families',
              'Learning-material customers counted as children attending centers',
            ],
            [
              'Yaruki Switch',
              'Bilingual and franchised brands',
              'Families and franchise operators',
              'All classrooms counted as preschools',
            ],
            [
              'CoDMON',
              'Management software',
              'Institutions and public-sector clients',
              'Facilities across all customer types counted as preschools',
            ],
            [
              'UniFa',
              'Software, connected devices and related support',
              'Institutions and public-sector clients',
              'Cumulative installations counted as unique customers',
            ],
            [
              'Sen Inc.',
              'Photography and management software',
              'Families and institutions',
              'Gross photo sales treated as subscription revenue',
            ],
            [
              'BABY JOB',
              'Consumables subscriptions and related services',
              'Families, institutions or other contracting parties',
              'Partner centers counted as company-run centers',
            ],
            [
              'Froebel-kan',
              'Publishing, supplies and support for educators',
              'Centers, families and other customers',
              'Product reach taken as evidence of exclusive curriculum use',
            ],
            [
              'BorneLund',
              'Equipment and play environments',
              'Institutions, public bodies, commercial clients and families',
              'Projects across all settings used to estimate early education market share',
            ],
          ],
        },
        {
          type: 'matrix',
          id: 'chart-J21',
          title: 'Main roles of the 15 companies',
          caption:
            'A dot marks a main role assigned by the report. A blank allows for other related business. These categories measure neither market share nor quality. The authors classified the companies using references J27 through J41. Source:',
          sources: [
            'J27',
            'J28',
            'J29',
            'J30',
            'J31',
            'J32',
            'J33',
            'J34',
            'J35',
            'J36',
            'J37',
            'J38',
            'J39',
            'J40',
            'J41',
          ],
          columns: [
            'Company',
            'Facility operations',
            'Contract or home services',
            'Franchising or bilingual services',
            'Digital tools',
            'Content and materials',
            'Spaces and consumables',
          ],
          rows: [
            ['JP Holdings', '●', '', '', '', '', ''],
            ['Global Kids COMPANY', '●', '', '', '', '', ''],
            ['LIKE / LIKE Kids', '●', '●', '', '', '', ''],
            ['Poppins', '●', '●', '', '', '', ''],
            ['Teno', '●', '●', '', '', '', ''],
            ['Kids Corporation', '●', '●', '', '', '', ''],
            ['Nichii / Nichii Kids', '●', '●', '', '', '', ''],
            ['Benesse childcare', '●', '', '', '', '', ''],
            ['Yaruki Switch', '', '', '●', '', '', ''],
            ['CoDMON', '', '', '', '●', '', ''],
            ['UniFa', '', '', '', '●', '', ''],
            ['Sen Inc.', '', '', '', '●', '', ''],
            ['BABY JOB', '', '', '', '●', '', '●'],
            ['Froebel-kan', '', '', '', '', '●', '●'],
            ['BorneLund', '', '', '', '', '●', '●'],
          ],
        },
      ],
    },
    {
      number: 19,
      title: 'Investment, expansion and educational outcomes',
      blocks: [
        {
          type: 'paragraph',
          text: 'A company can grow by opening a site, taking over a contract, acquiring another business, signing franchisees, selling products or installing software for customers. Each changes a different measure. A new contract may leave national childcare capacity unchanged. A new software module may go to an existing customer. Before judging expansion, identify exactly what was added.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Investment and ownership transactions can change resources and governance. Their monetary value does not measure educational quality. A brand philosophy, training attendance and customer reach also cannot establish outcomes for children. Business performance, public accountability and educational practice require different evidence. The report considers them together without converting them into a single score.',
          sources: [],
        },
      ],
    },
    {
      number: 20,
      title: 'How to read the financial comparisons',
      blocks: [
        {
          type: 'paragraph',
          text: 'The charts use the period each company actually reported. JP Holdings covers the year ended March 2026, LIKE the year ended May 2026, Poppins the year ended December 2025 and Teno the interim period ended June 2026. All monetary figures in the financial charts are in millions of yen. No exchange-rate conversion is applied to suggest comparability across countries.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Unavailable financial data are left blank. A zero is used only where the source explicitly reports zero. Claims of leadership, satisfaction or quality on a company’s website are identified as company statements. The report treats a claim as evidence of an effect only when independent research is available and its methods have been examined.',
          sources: [],
        },
      ],
    },
  ],
  companies: [
    {
      id: 'jp-holdings',
      name: 'JP Holdings',
      title:
        'JP Holdings — the scale of its network and the role of public funding',
      roles: ['operators'],
      businessRole: 'Operating facilities and related support',
      customers: 'Public programs, families and other contracting parties',
      readingNote: 'All 345 sites counted as preschools',
      blocks: [
        {
          type: 'paragraph',
          text: 'JP Holdings is a publicly listed example of large-scale child and family services in Japan. Its operating companies provide childcare and services for school-age children, alongside related content and support. When counting sites, distinguish the holding company, its operating subsidiaries and their facility brands. The same site can appear at more than one level.',
          sources: ['J27'],
        },
        {
          type: 'paragraph',
          text: 'At the end of March 2026, the group reported 203 nursery centers, six certified centers combining early education and childcare, 118 after-school clubs, 16 children’s centers and two community exchange centers. Of its 345 sites, 209 were in the first two categories. The other 136 provided different services. Counting all 345 as preschools would overstate its preschool network.',
          sources: ['J27'],
        },
        {
          type: 'chart',
          id: 'chart-J16',
          title: 'JP Holdings operated 345 sites in March 2026',
          groups: [
            {
              title: '',
              rows: [
                {
                  label: 'Nursery centers',
                  value: 203.0,
                  display: '203',
                },
                {
                  label: 'Certified early education and care centers',
                  value: 6.0,
                  display: '6',
                },
                {
                  label: 'After-school clubs',
                  value: 118.0,
                  display: '118',
                },
                {
                  label: 'Children’s centers',
                  value: 16.0,
                  display: '16',
                },
                {
                  label: 'Community exchange centers',
                  value: 2.0,
                  display: '2',
                },
              ],
            },
          ],
          caption:
            '209 sites were early education and care facilities. The other 136 served different purposes or ages. Source:',
          sources: ['J27'],
        },
        {
          type: 'paragraph',
          text: 'For April 2025 through March 2026, group revenue was ¥43,325 million and operating profit was ¥6,533 million. The previous year’s figures were ¥41,147 million and ¥5,809 million. The rounded published figures give an operating margin of about 15.08%. That is a group-wide result. It cannot establish the average margin of a center or serve as a direct comparison with another company’s education division.',
          sources: ['J27'],
        },
        {
          type: 'chart',
          id: 'chart-J17',
          title: 'JP Holdings across two financial years',
          groups: [
            {
              title: 'Group revenue · ¥ million',
              rows: [
                {
                  label: 'Year ended March 2025',
                  value: 41147.0,
                  display: '41,147',
                },
                {
                  label: 'Year ended March 2026',
                  value: 43325.0,
                  display: '43,325',
                },
              ],
            },
            {
              title: 'Group operating profit · ¥ million',
              rows: [
                {
                  label: 'Year ended March 2025',
                  value: 5809.0,
                  display: '5,809',
                },
                {
                  label: 'Year ended March 2026',
                  value: 6533.0,
                  display: '6,533',
                },
              ],
            },
          ],
          caption:
            'Actual group results. Each pair of bars has its own scale. Source:',
          sources: ['J27'],
        },
        {
          type: 'paragraph',
          text: 'The company attributed growth partly to newly contracted facilities, changes in the mix of children served and subsidies. Funding needs to be read alongside the costs it covers. An increase in the publicly set payment rate differs from a fee increase the company chooses itself. JP Holdings defines EBITDA as operating profit plus depreciation and goodwill amortization. Companies in other countries may calculate adjusted EBITDA differently.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The report’s business analysis suggests that a larger network can support shared purchasing, training and technology investment. It also depends on enrollment, staffing and local contracts. As the population declines, operators may focus more on attracting families to existing centers, serving younger children and offering related services. Financial growth alone cannot establish that education improved at every site.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'This example brings the mix of facilities into the same picture as the financial results. To assess how public money is used or what families experience, examine each site’s finances, staffing and inspections. A group margin of roughly 15% tells us little about how resources are distributed among centers.',
          sources: [],
        },
      ],
      sourceIds: ['J27'],
    },
    {
      id: 'global-kids',
      name: 'Global Kids COMPANY',
      title: 'Global Kids COMPANY — local networks and multiple operators',
      roles: ['operators'],
      businessRole: 'Childcare through several operators',
      customers: 'Public programs and families',
      readingNote: 'Group headcount used to estimate classroom staffing',
      blocks: [
        {
          type: 'paragraph',
          text: 'Global Kids COMPANY is the group. Its official site lists operating entities including Global Kids, Ohayo Kids and Associe International. A local brand may therefore belong to a wider network. A rebranding or group consolidation can change the company’s footprint on paper without adding a new center in Japan.',
          sources: ['J28'],
        },
        {
          type: 'paragraph',
          text: 'The company profile’s employee count covers the consolidated group and includes part-time staff. It cannot establish a classroom’s staff-to-child ratio. The group closes its financial year in September. At the report’s October 21, 2026 cutoff, the year had just ended. That alone did not establish that audited full-year results were available.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The business centers on running facilities and providing related support. Long-standing local relationships, staff deployment and shared management systems may make the network valuable, but those mechanisms need evidence. A brand’s commitment to child-led learning or the learning environment cannot establish that adult–child interactions are equally good at every site.',
          sources: ['J28'],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, retaining several operators can preserve established brands and regional expertise while increasing the work of coordinating policies, people and information. When a newly acquired center changes its curriculum, systems or staffing practices, families and the accounts may register those changes at different times. Track acquisition announcements, actual operating sites and subsequent results separately.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The authors could not verify a complete, comparable set of figures for the latest financial year. They therefore omit third-party revenue rankings and estimates of revenue per site. The case shows how locally run centers relate to group ownership and how much variation a national brand can encompass.',
          sources: [],
        },
      ],
      sourceIds: ['J28'],
    },
    {
      id: 'like',
      name: 'LIKE / LIKE Kids',
      title: 'LIKE and LIKE Kids — childcare, staffing and elder care',
      roles: ['operators', 'contract-care'],
      businessRole: 'Childcare within a diversified service group',
      customers: 'Public bodies, companies and families',
      readingNote: 'Group revenue treated as childcare revenue',
      blocks: [
        {
          type: 'paragraph',
          text: 'LIKE’s businesses include child and family support, workforce services and care for older adults. LIKE Kids is an operating company relevant to childcare. For the year ended May 2026, the group reported revenue of ¥67,315 million. Child and family support contributed ¥35,814 million, or 53.2%.',
          sources: ['J29'],
        },
        {
          type: 'paragraph',
          text: 'The same disclosure lists 415 childcare facilities and more than 12,000 children served. Its footnotes include relevant operations of specified subsidiaries and exclude after-school clubs and similar services from the child count. The two totals cover different populations. Dividing one by the other would give a misleading picture of a typical center.',
          sources: ['J29'],
        },
        {
          type: 'chart',
          id: 'chart-J18',
          title: 'LIKE revenue by business segment',
          groups: [
            {
              title: '',
              rows: [
                {
                  label: 'Child and family support',
                  value: 35814.0,
                  display: '35,814',
                },
                {
                  label: 'Workforce services',
                  value: 21982.0,
                  display: '21,982',
                },
                {
                  label: 'Elder care',
                  value: 9382.0,
                  display: '9,382',
                },
                {
                  label: 'Other',
                  value: 136.0,
                  display: '136',
                },
              ],
            },
          ],
          caption:
            'Year ended May 2026, in millions of yen. The rounded segments differ from group revenue by ¥1 million. Source:',
          sources: ['J29'],
        },
        {
          type: 'paragraph',
          text: 'Group operating profit for the year ended May 2026 was ¥2,981 million, up about 1.0% year on year, while revenue rose about 8.0%. Labor and food costs affected childcare. Changes in profit in other businesses also contributed to the group result. Group profit growth therefore tells us little about the size of any change in childcare profits.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The accounts distinguish operating profit from ordinary profit, which includes items such as equipment subsidies. Equipment subsidy income was ¥782 million in the year ended May 2026, compared with ¥606 million a year earlier. How and when subsidies are recognized can change ordinary profit independently of routine fee income.',
          sources: ['J29'],
        },
        {
          type: 'paragraph',
          text: 'The report sees potential links between the staffing and childcare businesses in recruitment and the supply of specialists. Their customers, qualifications and employment arrangements may differ. Owning a staffing business does not allow a group to fill regulated childcare positions with any available worker.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'LIKE shows how population changes can affect children’s services, elder care and the supply of workers at the same time. Use its child and family support segment to study childcare, and the group accounts to understand funding and management. Keep forecasts for future years separate from actual results.',
          sources: [],
        },
      ],
      sourceIds: ['J29'],
    },
    {
      id: 'poppins',
      name: 'Poppins',
      title: 'Poppins — center-based care, home care and professional support',
      roles: ['operators', 'contract-care'],
      businessRole: 'Center-based and in-home care',
      customers: 'Public bodies, companies and families',
      readingNote: 'All Family Care revenue attributed to early education',
      blocks: [
        {
          type: 'paragraph',
          text: 'The Poppins group includes Educare, Family Care, Professional and other activities. Educare covers services such as childcare facilities. Family Care includes a wider range of in-home services. Group revenue therefore extends beyond preschool fees. Educare is the company’s educational brand and conveys its positioning. It is not an independent accreditation.',
          sources: ['J30'],
        },
        {
          type: 'paragraph',
          text: 'For the year ended December 2025, group revenue was ¥34,409 million and operating profit was ¥1,840 million. The 2024 figures were ¥31,690 million and ¥1,574 million. The 2025 operating margin was about 5.35% at group level. It does not describe an individual or franchised center. Poppins closes in December, JP Holdings in March and LIKE in May, so a single annual ranking can conceal differences in the reporting periods.',
          sources: ['J30'],
        },
        {
          type: 'paragraph',
          text: 'The segment chart reports ¥25,303 million in Educare revenue and ¥8,202 million in Family Care revenue, plus other segments and consolidation adjustments. Group profit also includes management-level adjustments. Adding selected high-profit segments will not reproduce the group result. Family Care includes services outside preschool education.',
          sources: ['J30'],
        },
        {
          type: 'chart',
          id: 'chart-J19',
          title: 'Poppins revenue by segment and consolidation adjustment',
          groups: [
            {
              title: '',
              rows: [
                {
                  label: 'Educare',
                  value: 25303.0,
                  display: '25,303',
                },
                {
                  label: 'Family Care',
                  value: 8202.0,
                  display: '8,202',
                },
                {
                  label: 'Professional',
                  value: 717.0,
                  display: '717',
                },
                {
                  label: 'Other',
                  value: 392.0,
                  display: '392',
                },
                {
                  label: 'Revenue eliminations',
                  value: -206.0,
                  display: '-206',
                },
              ],
            },
          ],
          caption:
            'Year ended December 2025, in millions of yen. Family Care includes services outside early childhood. Rounded segment figures differ from the group total by ¥1 million. Source:',
          sources: ['J30'],
        },
        {
          type: 'paragraph',
          text: 'The company identifies staff shortages, recruitment spending, the timing of expenses for improvements in staff compensation, and first-year performance at new facilities as factors affecting profit. Opening more centers may bring costs before profits increase. Both workforce availability and accounting timing matter.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, centers and home care offer families different ways to obtain support. Customers can be individual households, companies or institutions under contract. Staffing schedules, service hours and costs differ enough that a single price per child would make a poor comparison.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Poppins illustrates how family support in Japan can combine ongoing care, occasional help and professional services beyond a single facility. Company materials document products, revenue and strategy. Independent investigation is still needed to understand educational effects or whether families experience a lighter workload.',
          sources: [],
        },
      ],
      sourceIds: ['J30'],
    },
    {
      id: 'teno',
      name: 'Teno',
      title:
        'Teno Holdings — publicly supported childcare and contract operations',
      roles: ['operators', 'contract-care'],
      businessRole: 'Publicly supported and contract childcare',
      customers: 'Local authorities, hospitals, companies and families',
      readingNote: 'Half-year results treated as a full year',
      blocks: [
        {
          type: 'paragraph',
          text: 'Teno provides publicly supported childcare, childcare under contract and other childcare services. It also operates in elder care and everyday living services. A group-wide facility count would include school-age services, sites for older adults and other locations. Hospitals, companies or public authorities can commission childcare, so contract revenue can include more than the fees families pay directly.',
          sources: ['J31'],
        },
        {
          type: 'paragraph',
          text: 'The PDF obtained from the company’s website has “202512” in its filename, but its cover identifies it as the second-quarter report for the year ending December 2026. This report uses the period on the cover. The mismatch illustrates the need to check the contents of files that companies update.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'For the first half of 2026, Teno reported group revenue of ¥9,550 million and operating profit of ¥362 million. For the comparison period, the figures were ¥9,116 million and ¥288 million. These are actual half-year results. Comparing them directly with a competitor’s full year would be misleading.',
          sources: ['J31'],
        },
        {
          type: 'paragraph',
          text: 'The disclosure gives revenue shares of 49.5% for publicly supported childcare, 23.3% for contract childcare and 3.5% for other childcare, totaling about 76.3%. The balance comes from elder care, disability services, everyday living services and other activities. Text on the same page gives the childcare share as 76.6%. The authors could not determine the reason for the difference. The chart retains the individual published percentages, which total 99.8%, without rescaling them or deriving precise segment amounts.',
          sources: ['J31'],
        },
        {
          type: 'chart',
          id: 'chart-J20',
          title: 'Teno revenue mix for the first half of 2026',
          groups: [
            {
              title: '',
              rows: [
                {
                  label: 'Publicly supported childcare',
                  value: 49.5,
                  display: '49.5%',
                },
                {
                  label: 'Contract childcare',
                  value: 23.3,
                  display: '23.3%',
                },
                {
                  label: 'Other childcare',
                  value: 3.5,
                  display: '3.5%',
                },
                {
                  label: 'Elder care',
                  value: 8.2,
                  display: '8.2%',
                },
                {
                  label: 'Disability services',
                  value: 2.2,
                  display: '2.2%',
                },
                {
                  label: 'Everyday living services',
                  value: 12.3,
                  display: '12.3%',
                },
                {
                  label: 'Other',
                  value: 0.8,
                  display: '0.8%',
                },
              ],
            },
          ],
          caption:
            'Six months ended June 2026. Published percentages total 99.8% and are shown as reported. Source:',
          sources: ['J31'],
        },
        {
          type: 'paragraph',
          text: 'Contract operators must continually manage agreements, staffing and responsibility for quality. When a client changes operators, a center may keep serving families at the same address even though each company’s site count changes. Winning a contract for an existing site does not create new places for children nationwide.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Teno illustrates local contracting and the development of several businesses within a group. Historical incidents involving inappropriate care require separate examination of official notices, investigations and subsequent oversight. A headline alone cannot characterize an entire group. The authors use the documents to describe the business and its data and assign no site-level safety or education scores.',
          sources: [],
        },
      ],
      sourceIds: ['J31'],
    },
    {
      id: 'kids-corporation',
      name: 'Kids Corporation',
      title:
        'Kids Corporation — managing childcare for hospitals and employers',
      roles: ['operators', 'contract-care'],
      businessRole: 'Hospital and workplace contracts, plus licensed childcare',
      customers: 'Hospitals, companies, public bodies and families',
      readingNote: 'Different website counts read as a growth trend',
      blocks: [
        {
          type: 'paragraph',
          text: 'The company’s official history traces its beginnings to a babysitting service in Tochigi Prefecture in 1993. It opened its first licensed nursery center in 2016. Its work now includes running childcare in hospitals and workplaces under contract, alongside licensed and small-scale childcare. Its path from home services to contract care and regulated facilities illustrates a business funded through several channels beyond household fees.',
          sources: ['J32'],
        },
        {
          type: 'paragraph',
          text: 'Different official pages describe a network of roughly 347 or 350 facilities. Their dates or scope may differ. The report treats these as separate descriptions and uses neither to infer growth or revenue. A dated directory is needed to distinguish operated sites, contract projects and group affiliates.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The “Kids Approach” describes the company’s educational philosophy. To see how each contracted site puts it into practice, examine teacher training, center leadership, staff continuity and children’s activities. A hospital client’s satisfaction answers a different question from a study of child development or staff–child interactions.',
          sources: ['J32'],
        },
        {
          type: 'paragraph',
          text: 'The report observes that hospitals may need childcare outside standard hours or at short notice to accommodate shifts. The operator has to meet those needs within its budget and available staffing. A shared back office can support hiring, training and cover for absences. The contract defines the responsibilities at each site.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The organization that establishes the center, the provider of the space, the staff’s employer and the license holder may be different entities. In a dispute about quality or service, identify what each party is responsible for. When measuring the sector, count each physical location only once.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The company illustrates hospital and workplace childcare in Japan. The authors lacked comparable, complete data on audited revenue, profit and contract renewals. They leave these figures open rather than estimating them from the company’s reported network size.',
          sources: [],
        },
      ],
      sourceIds: ['J32'],
    },
    {
      id: 'nichii',
      name: 'Nichii / Nichii Kids',
      title:
        'Nichii and Nichii Kids — children’s services within a broader care group',
      roles: ['operators', 'contract-care'],
      businessRole: 'Childcare within a diversified care group',
      customers: 'Public bodies, companies and families',
      readingNote: 'Children in one program counted as total group enrollment',
      blocks: [
        {
          type: 'paragraph',
          text: 'Nichii lists childcare as one of several businesses, with Nichii Kids as its main childcare brand. The group also provides medical support, elder care and household services. Total group activity cannot establish the size of its early education business. Each center’s classification and funding arrangements need to be checked individually.',
          sources: ['J33'],
        },
        {
          type: 'paragraph',
          text: 'In April 2026, Nichii announced a new service vision and offered its MOM UP PARK parenting support program to the parents of about 7,000 children. That figure belongs to this particular announcement. It cannot establish group-wide enrollment, a count of distinct users across services or a ranking against operators reporting at other dates.',
          sources: ['J33'],
        },
        {
          type: 'paragraph',
          text: 'The program includes online support, opportunities to connect and collaboration with professionals. It shows how some operators aim to support the whole family. Making this program free to parents does not establish that all center services are free or that independent research has demonstrated the program’s effects.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, years of operating experience can support procedures and training. Medical support, elder care and childcare nevertheless require expertise suited to the people served. Shared resources may help teams work together, but they can also complicate oversight. The group’s range of services tells us little on its own about educational quality.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Look at the actual center, its staff, communication with parents and local oversight. To determine eligibility for public support, check whether the individual site is licensed, employer-led or in another category. The same brand can operate under several arrangements.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The authors do not use unverified information about current ownership to explain company behavior or treat historical stock-market filings as complete current accounts. Nichii’s value as a case lies in how a diversified group connects childcare with family support while maintaining distinct lines of business.',
          sources: [],
        },
      ],
      sourceIds: ['J33'],
    },
    {
      id: 'benesse',
      name: 'Benesse childcare',
      title: 'Benesse — learning materials and care delivered on site',
      roles: ['operators'],
      businessRole: 'Centers and school-age services',
      customers: 'Public programs and families',
      readingNote:
        'Learning-material customers counted as children attending centers',
      blocks: [
        {
          type: 'paragraph',
          text: 'Benesse is known for educational content, home learning and care. Its childcare work needs to be traced to operating businesses such as Benesse Style Care. A subscription to home-learning materials and enrollment at a nursery center are different sources of revenue. A shared group name alone is insufficient reason to aggregate affiliates.',
          sources: ['J34'],
        },
        {
          type: 'paragraph',
          text: 'The official care business description covers both older adults and children. Count nursery centers, after-school services and elder-care facilities separately. Group revenue includes all of these activities. Owning children’s content also tells us little about whether a center uses a particular home-learning product each day.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, a familiar brand can make it easier for families to find information. Reliable service still depends on the location, teachers and management. Children experience an educational philosophy through the time, materials and interactions staff provide. The brand’s reputation in home learning cannot establish the quality of that experience.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The case encompasses content products, on-site care, school-age support and elder care. A family that buys a picture book or subscribes to a course is a product customer. A child attending a center uses an on-site service. The contracts, responsibilities and evidence needed to judge quality differ even when the providers share a parent company.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The authors do not extrapolate current childcare revenue from earlier years when the company was listed, or use a valuation of the whole group to value children’s services. Ownership and restructuring questions require official documents dated to the period under study. Available first-party materials establish where childcare sits in the business but do not establish a separate childcare profit margin.',
          sources: [],
        },
      ],
      sourceIds: ['J34'],
    },
    {
      id: 'yaruki-switch',
      name: 'Yaruki Switch',
      title: 'Yaruki Switch — bilingual early education and franchising',
      roles: ['bilingual'],
      businessRole: 'Bilingual and franchised brands',
      customers: 'Families and franchise operators',
      readingNote: 'All classrooms counted as preschools',
      blocks: [
        {
          type: 'paragraph',
          text: 'Kids Duo, Kids Duo International (KDI) and i Kids Star are distinct brands. Kids Duo offers an English-language environment for school-age and preschool children. KDI and i Kids Star focus on bilingual early childhood services. Similar names conceal different types of provision, and the group’s total number of classrooms cannot be used as a count of preschools.',
          sources: ['J35'],
        },
        {
          type: 'paragraph',
          text: 'Official franchise materials describe i Kids Star as a more compact format combining English, cognitive development and physical activity. The brands share some educational resources. Capacity, buildings, costs and licensing can still vary by location. The franchise headquarters and the local operator each have their own responsibilities.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'A promotional description combining kindergarten functions with childcare does not determine legal status. Check each site to establish whether it is a kindergarten under Japan’s School Education Act, an unlicensed childcare facility or another arrangement. Subsidy eligibility and amounts must also be checked locally. A benefit on one brand page cannot establish a national entitlement.',
          sources: ['J35', 'J06'],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, bilingual programs and longer hours can serve families seeking a particular education while accommodating work schedules. This creates a distinct privately paid market. Operations depend on the availability of language teachers and childcare staff, suitable premises, and what families can afford. Published examples of children’s performance and parent feedback cannot guarantee the same outcome for everyone.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Japanese and US franchises can be studied as a common business model. US franchise disclosure documents, investment structures and profit figures for mature sites cannot simply be transferred to Japan. Without Japanese contracts and full investment disclosures, the authors give no payback period or earnings forecast.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The case illustrates the relationship between brand, franchise operator, bilingual offering and legal status. It represents a particular market segment. It should not be taken to mean that mainstream Japanese early education generally emphasizes English or academic training.',
          sources: [],
        },
      ],
      sourceIds: ['J35', 'J06'],
    },
    {
      id: 'codmon',
      name: 'CoDMON',
      title: 'CoDMON — software for centers and local authorities',
      roles: ['digital'],
      businessRole: 'Management software',
      customers: 'Institutions and public-sector clients',
      readingNote: 'Facilities across all customer types counted as preschools',
      blocks: [
        {
          type: 'paragraph',
          text: 'CoDMON provides information and communication technology (ICT) for childcare and education facilities. Its functions include attendance, messaging, records, billing and related administration. Supplying software to a facility does not make CoDMON its operator. Customer sites and company-run centers are different measures.',
          sources: ['J36'],
        },
        {
          type: 'paragraph',
          text: 'On October 1, 2026, its website reported adoption at 25,696 facilities across childcare, education and other settings. An earlier September page reported 25,548. Retain the date and range of users with each figure. Neither figure is a count of Japanese preschools alone.',
          sources: ['J36'],
        },
        {
          type: 'paragraph',
          text: 'The company’s “number one” market-share claim refers to a particular survey, year and measure of adoption of hosted software by facilities. It cannot establish share across all early education technology, all software or all children’s data. A site may use several tools, so adding suppliers’ customer totals can count some facilities more than once.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, messaging families, taking attendance and collecting fees create recurring workflows. Switching systems involves historical records, staff training, parent accounts and connections to other tools. Implementation and migration costs matter alongside purchase price. Public facilities must also consider procurement rules, access permissions and data governance.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Software can reduce repetitive tasks. Time saved in a company’s customer case study may not carry over to other sites with different starting procedures, modules or staff experience. Migration can initially increase the workload. Actual work records are needed to measure the net change.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The authors lacked audited revenue, profit and valuation figures and did not estimate revenue from customer counts. CoDMON illustrates how early education administration connects with local government. Responsibility for delivering education remains with the relevant institutions.',
          sources: [],
        },
      ],
      sourceIds: ['J36'],
    },
    {
      id: 'unifa',
      name: 'UniFa',
      title:
        'UniFa and Lookmee — digital tools, sensors and observation records',
      roles: ['digital'],
      businessRole: 'Software, connected devices and related support',
      customers: 'Institutions and public-sector clients',
      readingNote: 'Cumulative installations counted as unique customers',
      blocks: [
        {
          type: 'paragraph',
          text: 'UniFa’s Lookmee range combines childcare software, photography, nap-monitoring aids and professional learning. Distinguish the company (UniFa), the product family (Lookmee) and the individual modules. A single center using several modules can account for several installations.',
          sources: ['J37'],
        },
        {
          type: 'paragraph',
          text: 'On October 1, 2026, the company reported more than 25,000 cumulative installations across the product family, involving about 80 municipalities. The unit is installations. It does not count unique centers or establish that every site uses the full range. It therefore cannot be ranked directly alongside CoDMON’s facility count.',
          sources: ['J37'],
        },
        {
          type: 'paragraph',
          text: 'In 2024 the company announced ¥500 million in new equity financing, bringing cumulative equity financing to ¥9.3 billion. Financing measures money raised. It tells us neither annual revenue nor valuation nor profit. Even when the stated purpose is research or expansion, subsequent spending must be tracked separately.',
          sources: ['J37'],
        },
        {
          type: 'paragraph',
          text: 'In the report’s product analysis, linking sensors, photographs and records could reduce duplicate entry and help teachers discuss observations. Automatically generated interpretations still need human review. Nap devices assist staff, who must continue observing children and responding as necessary. Easier aggregation of records alone cannot make developmental assessments more accurate.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'In 2026 the company published materials including changes to its AI policy, addressing generative technology and children’s data. The policy states governance principles. Evidence about individual products, contract terms and outside suppliers is needed to see how those principles are applied and what risks remain.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'UniFa illustrates how technology can serve observation, professional reflection and communication with families alongside administrative efficiency. To understand the business, examine products, customers, contracts, data use and responsibilities at each site. Marketing language cannot establish outcomes for children.',
          sources: [],
        },
      ],
      sourceIds: ['J37'],
    },
    {
      id: 'sen',
      name: 'Sen Inc.',
      title:
        'Sen Inc. and Hai Cheese! — connecting with families through photos',
      roles: ['digital'],
      businessRole: 'Photography and management software',
      customers: 'Families and institutions',
      readingNote: 'Gross photo sales treated as subscription revenue',
      blocks: [
        {
          type: 'paragraph',
          text: 'Sen Inc.’s Hai Cheese! brand connects centers and families through photography and online photo sales. Its range has expanded to include management software and albums. The company and its product brand count as one company. Photographers, centers and families can each play a different role in the same transaction.',
          sources: ['J38'],
        },
        {
          type: 'paragraph',
          text: 'A family might pay for photos while an institution buys the management system. The pricing models may differ. Offering a system free of charge can coexist with revenue from other products. Gross photo sales and software subscription revenue are separate measures. Check actual fees by product and contract.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, photos create frequent contact between families and centers, allowing the supplier to offer albums and administrative tools through existing relationships. Taking more photos may increase selection and consent work or family spending. It may also reduce the time staff spend making materials themselves. The net effect depends on the workflow.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'For children’s images, establish who can take, view and share them, and how long they are kept. Facial search and AI-assisted selection still require attention to parental consent, access controls and security. Assess convenience and children’s privacy together.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Official case studies and user feedback can illustrate functions and experiences. They cannot establish educational outcomes or workload reductions across the sector. How often parents view photos also tells us little about how well they understand a child’s development. Staff still need to explain what was happening and how the child took part.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The report traces how these products relate and where revenue might arise. It gives no precise figures for distinct customers, revenue or valuation where first-party evidence was unavailable. Sen illustrates a family photography service that reaches into early education, a different role from running centers or supplying a curriculum.',
          sources: [],
        },
      ],
      sourceIds: ['J38'],
    },
    {
      id: 'baby-job',
      name: 'BABY JOB',
      title: 'BABY JOB — how a diaper subscription fits into the childcare day',
      roles: ['digital', 'spaces-supplies'],
      businessRole: 'Consumables subscriptions and related services',
      customers: 'Families, institutions or other contracting parties',
      readingNote: 'Partner centers counted as company-run centers',
      blocks: [
        {
          type: 'paragraph',
          text: 'BABY JOB’s Tebura Toen service supplies diapers, wipes and similar items by subscription for use at childcare centers. The company also helps families find facilities and offers related services. The product name evokes arriving “empty-handed” because families no longer carry certain supplies. Children may still need to bring other items.',
          sources: ['J39'],
        },
        {
          type: 'paragraph',
          text: 'The subscription connects families, centers, suppliers and delivery services. Centers handle stock, sizes, use and replenishment. Families need to know the price, available brands and terms of use. Check who pays, who delivers and how to cancel for each product. A subscription alone does not guarantee a lower total cost over time.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, standardized purchasing may save parents from labeling items and teachers from storing and handing over individual supplies. It may also create stock, waste or fit problems. To judge efficiency, record which steps disappear and which new ones are added. The number of boxes delivered cannot answer that question.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The company also offers services that ease cash collection or provide access to facility information. These use different transaction processes from the diaper subscription. Grouping them all under childcare software would hide those differences. Selling to families does not give the supplier a childcare license or responsibility for daily care.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'BABY JOB shows how a small consumable item can become an ongoing service. Its value may lie in convenience for families or time saved for teachers. Both need investigation in actual settings. Promotional claims about being first to market do not establish a competitive advantage.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Without complete public financial data, subscriber numbers, partner centers and cumulative usage cannot establish revenue. The report leaves revenue blank and focuses on the workflow, who pays and what the service covers.',
          sources: [],
        },
      ],
      sourceIds: ['J39'],
    },
    {
      id: 'froebel-kan',
      name: 'Froebel-kan',
      title:
        'Froebel-kan — picture books, materials and resources for educators',
      roles: ['materials', 'spaces-supplies'],
      businessRole: 'Publishing, supplies and support for educators',
      customers: 'Centers, families and other customers',
      readingNote:
        'Product reach taken as evidence of exclusive curriculum use',
      blocks: [
        {
          type: 'paragraph',
          text: 'Froebel-kan publishes for children and supplies childcare support, materials and services related to learning spaces. Its monthly Kinderbook picture book began in 1927 and illustrates the long history of periodicals supplied to Japanese centers. That history implies neither a common curriculum in every center nor a nationally mandated textbook.',
          sources: ['J40'],
        },
        {
          type: 'paragraph',
          text: 'The company also provides information, training and materials for educators. A monthly issue can open up experiences with seasons, everyday life, nature or stories. Its use depends on what teachers select, how they read with children and how they follow up on children’s questions. Using one theme does not establish full or equal coverage of all five areas of early learning.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, institutional sales, regular subscriptions and materials purchasing can sustain relationships between a publisher and centers through editorial work, sales and professional support. These ties may be steadier than one-off retail sales. Actual revenue still depends on child numbers, subscription choices and the mix of products sold.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'Froebel-kan’s materials also mention center operation and indoor play. The report groups the company with suppliers because that is its main role in this study. The category leaves room for activities that deliver services directly to children.',
          sources: ['J40'],
        },
        {
          type: 'paragraph',
          text: 'Product safety, age suitability, educational purpose and copyright are separate questions. Compliance with a safety standard does not establish educational effectiveness. Children may engage very differently with the same familiar character or attractive picture book.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The case shows how early education supplies in Japan bring together content, professional information and institutional purchasing as well as toys. The authors lacked a complete financial breakdown for early education. Total publishing sales cannot establish share of the market for childcare centers.',
          sources: [],
        },
      ],
      sourceIds: ['J40'],
    },
    {
      id: 'bornelund',
      name: 'BorneLund',
      title: 'BorneLund — play materials, spaces and experiences',
      roles: ['materials', 'spaces-supplies'],
      businessRole: 'Equipment and play environments',
      customers: 'Institutions, public bodies, commercial clients and families',
      readingNote:
        'Projects across all settings used to estimate early education market share',
      blocks: [
        {
          type: 'paragraph',
          text: 'BorneLund supplies play equipment, designs spaces and provides related activities. Its official materials cover nursery centers, kindergartens, schools, public spaces, commercial venues and healthcare settings. Only part of that work concerns preschool purchasing. The number of projects cannot establish how many childcare sites it operates.',
          sources: ['J41'],
        },
        {
          type: 'paragraph',
          text: 'Through PLAYSCAPE and other offerings for education and care providers, the company connects the purpose of a space with materials and children’s activities. A design must account for age, movement, storage, circulation and maintenance. Photographs of a building reveal little about daily experience. Once equipment arrives, how adults organize activities and how children use it shape the learning that takes place.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'In the report’s analysis, moving from individual product sales to whole-space design can reduce the customer’s need to coordinate separate purchases and designs. It can also expand the supplier’s role. Assess value through the budget, installation, ongoing maintenance, frequency of use and training, alongside the appearance of the space at opening.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The company also operates or participates in playground and other visitor experiences. Playground visits are a different measure from children enrolled in kindergarten. Household purchases, institutional orders and public-space projects have different payers and delivery arrangements and should be recorded separately.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'The company emphasizes children taking the initiative in play. This expresses its philosophy and product positioning. To establish that a particular environment improves outcomes, researchers need an appropriate study design, comparisons and records of implementation. A supplier case study alone cannot support a general conclusion.',
          sources: [],
        },
        {
          type: 'paragraph',
          text: 'BorneLund illustrates how spaces and physical play equipment can form a connected service. The report excludes it from rankings of childcare operators and gives no estimate of its share of Japanese early education based on project counts across all settings.',
          sources: [],
        },
      ],
      sourceIds: ['J41'],
    },
  ],
  sources: {
    J06: {
      id: 'J06',
      title:
        'Children and Families Agency — overview of free early education and childcare',
      note: 'National eligibility conditions and specified amounts. Local governments may offer additional support.',
      urls: [
        'https://www.cfa.go.jp/policies/kokoseido/mushouka/gaiyou/',
        'https://www.cfa.go.jp/policies/kokoseido/mushouka/',
      ],
    },
    J16: {
      id: 'J16',
      title:
        'Tokyo Metropolitan Government Bureau of Social Welfare — childcare fee relief and questions from families',
      note: 'Local policy for Tokyo. Its provisions cannot be applied nationwide.',
      urls: [
        'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/mushouka',
        'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/hoikuriyoujyoukyou/qa2',
      ],
    },
    J17: {
      id: 'J17',
      title:
        'Children and Families Agency — new directions for childcare policy',
      note: 'December 20, 2024. Covers population decline, quality and the role of childcare services.',
      urls: ['https://www.cfa.go.jp/policies/hoiku/new_direction'],
    },
    J18: {
      id: 'J18',
      title:
        'Children and Families Agency — special route to childcare worker qualification for kindergarten teaching license holders',
      note: 'Covers dual qualifications and transitional conditions through the end of fiscal 2029.',
      urls: ['https://www.cfa.go.jp/policies/hoiku/hoikushi-shikaku-tokurei/'],
    },
    J19: {
      id: 'J19',
      title: 'Children and Families Agency — how to become a childcare worker',
      note: 'Training, examinations and registration.',
      urls: ['https://www.cfa.go.jp/policies/hoiku/hello_mirai/naruniha'],
    },
    J20: {
      id: 'J20',
      title:
        'Welfare and Medical Service Agency and Children and Families Agency — Koko de Search and disclosure of operating information',
      note: 'Public facility listings and operating information. Reporting delays can affect what is available.',
      urls: [
        'https://www.wam.go.jp/kokodesearch/ANN010100E00.do',
        'https://www.cfa.go.jp/councils/kokoseido-keizokutekimieruka/',
        'https://www.wam.go.jp/content/wamnet/pcpub/top/kdmsys/kdmsysinfor/kdmsys_mail015.html',
      ],
    },
    J21: {
      id: 'J21',
      title:
        'Children and Families Agency — incident statistics and database for education and childcare facilities',
      note: 'Covers reportable serious incidents. It is not a census of every injury.',
      urls: [
        'https://www.cfa.go.jp/policies/child-safety/effort/shukei/',
        'https://www.cfa.go.jp/policies/child-safety/effort/database',
      ],
    },
    J27: {
      id: 'J27',
      title:
        'JP Holdings — year-end financial results to March 2026 and company profile',
      note: 'Actual results for April 2025 to March 2026. Includes group figures and the breakdown by facility type.',
      urls: [
        'https://www.jp-holdings.co.jp/ir/library_data/20260513_1.pdf',
        'https://www.jp-holdings.co.jp/ir/library_data/20260518.pdf',
        'https://www.jp-holdings.co.jp/company/company.html',
      ],
    },
    J28: {
      id: 'J28',
      title:
        'Global Kids COMPANY — company profile, group information and financial disclosures',
      note: 'Confirms group relationships and the September year-end. The authors did not extract a complete comparable set of the latest financial results.',
      urls: [
        'https://www.gkids.jp/company/outline/',
        'https://www.gkids.jp/',
        'https://www.gkids.jp/ir/highlight/',
      ],
    },
    J29: {
      id: 'J29',
      title:
        'LIKE — financial results presentation for the year ended May 2026',
      note: 'Full-year actual results. Group figures, segment figures and the footnotes on facility counts have different scopes.',
      urls: [
        'https://ssl4.eir-parts.net/doc/2462/ir_material_for_fiscal_ym2/208533/00.pdf',
        'https://www.like-gr.co.jp/ir/top_message.html',
      ],
    },
    J30: {
      id: 'J30',
      title:
        'Poppins — financial results presentation for the year ended December 2025',
      note: 'Full-year actual results, published February 13, 2026. Segment results and group adjustments are distinct.',
      urls: [
        'https://www2.jpx.co.jp/disc/73580/140120260212557983.pdf',
        'https://www.poppins.co.jp/hldgs/ir/faq.html',
      ],
    },
    J31: {
      id: 'J31',
      title:
        'Teno Holdings — interim results presentation for the year ending December 2026',
      note: 'The cover identifies the interim period in 2026. The filename contains “202512.” The report follows the period on the cover.',
      urls: [
        'https://www.teno.co.jp/ja/ir/main/0/teaserItems2/0/linkList/00/link/202512setsumei_2.pdf',
        'https://www.teno.co.jp/ja/ir/library/presentation.html',
      ],
    },
    J32: {
      id: 'J32',
      title: 'Kids Corporation — history, group and services',
      note: 'Official pages show different network sizes and update schedules. They cannot establish a comparable time series.',
      urls: [
        'https://www.kids-21.co.jp/company/history/',
        'https://kids-21.co.jp/company/group/',
        'https://kids-21.co.jp/service/',
      ],
    },
    J33: {
      id: 'J33',
      title:
        'Nichii Gakkan — childcare services and 2026 family support announcement',
      note: 'The program-specific child count has a narrower scope than group-wide services.',
      urls: [
        'https://www.nichiigakkan.co.jp/service/nursery/',
        'https://www.nichiigakkan.co.jp/topics/assets/0e9759aa49a869643aebc01d2b53e6f114f1456c.pdf',
      ],
    },
    J34: {
      id: 'J34',
      title:
        'Benesse Style Care — company information, childcare and after-school operations',
      note: 'Teaching materials and elder-care activities must be accounted for separately from early education.',
      urls: [
        'https://www.benesse-style-care.co.jp/company/',
        'https://hoiku.benesse-style-care.co.jp/',
        'https://benesse-scg.co.jp/',
      ],
    },
    J35: {
      id: 'J35',
      title:
        'Yaruki Switch — brand portfolio and bilingual early childhood franchises',
      note: 'Distinguishes KDI, i Kids Star and Kids Duo.',
      urls: [
        'https://www.yarukiswitch.jp/school/',
        'https://www.yarukiswitch.jp/fc/iks/about/',
        'https://www.yarukiswitch.jp/fc/iks/newbusiness/',
        'https://www.yarukiswitch.jp/fc/kdi/about/',
      ],
    },
    J36: {
      id: 'J36',
      title:
        'CoDMON — software functions, adoption and figures as of October 1, 2026',
      note: 'The company’s count includes several types of facility. Any ranking depends on the scope of the survey.',
      urls: [
        'https://www.codmon.com/',
        'https://campaign.codmon.com/proposal/school/',
        'https://www.codmon.com/proposal/daycare/',
      ],
    },
    J37: {
      id: 'J37',
      title:
        'UniFa — Lookmee products, 2026 organizational announcement and financing materials',
      note: 'Cumulative installations are company-reported and may include the same center more than once. Financing is distinct from revenue.',
      urls: [
        'https://unifa-e.com/service/',
        'https://unifa-e.com/news/release/20261001-new_director_appointments',
        'https://unifa-e.com/news/release/20240827-%E3%83%A6%E3%83%8B%E3%83%95%E3%82%A1%E3%80%81%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BAe%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E5%8F%8A%E3%81%B3mixi%E3%81%A8%E3%81%AE%E8%B3%87%E6%9C%AC%E6%A5%AD%E5%8B%99',
        'https://unifa-e.com/news/release',
      ],
    },
    J38: {
      id: 'J38',
      title: 'Sen Inc. — photography, albums and digital products',
      note: 'Distinguishes Sen Inc. from its Hai Cheese! product brand.',
      urls: [
        'https://sencorp.co.jp/recruit-career/business/',
        'https://8122.jp/lp/ict/',
        'https://8122.jp/lp/ict/howto/',
      ],
    },
    J39: {
      id: 'J39',
      title:
        'BABY JOB — diaper subscriptions, childcare searches and payment services',
      note: 'Company product descriptions. The authors did not use customer counts to estimate revenue.',
      urls: [
        'https://baby-job.co.jp/',
        'https://baby-job.co.jp/2025/01/14/news-20250114/',
      ],
    },
    J40: {
      id: 'J40',
      title: 'Froebel-kan — operations, childcare support and Kinderbook',
      note: 'Official publishing and product information. The monthly picture book began in 1927.',
      urls: [
        'https://www.froebel-kan.co.jp/service',
        'https://www.froebel-kan.co.jp/service/childcare_support',
        'https://www.froebel-kan.co.jp/recruit/job/editor_kinderbook',
        'https://www.froebel-kan.co.jp/images/info/20240624_%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3_%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9.pdf',
      ],
    },
    J41: {
      id: 'J41',
      title: 'BorneLund — play environments and PLAYSCAPE',
      note: 'Projects span multiple settings and cannot establish the number of childcare centers the company operates.',
      urls: [
        'https://www.bornelund.co.jp/environment',
        'https://playscape.bornelund.co.jp/shop/pages/mind-environment.aspx',
        'https://www.bornelund.co.jp/',
      ],
    },
    J42: {
      id: 'J42',
      title:
        'Child Honsya — company, monthly picture books and childcare supplies',
      note: 'Distinguish the company from entities with similar names.',
      urls: [
        'https://www.childbook.co.jp/profile/info/',
        'https://childbook.co.jp/monthly/',
        'https://childbook.co.jp/childcare/',
      ],
    },
    J43: {
      id: 'J43',
      title: 'SERIO and Senko — group ownership and 2026 name change',
      note: 'Distinguishes the current holding company from the formerly listed entity.',
      urls: [
        'https://www.serio-holdings.co.jp/',
        'https://www.serio-corp.com/',
        'https://www.serio-holdings.co.jp/me/upload/files/1710992259phpalHBc1/20240322SERIO%E3%83%9B%E3%83%BC%E3%83%AB%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%B9%E3%82%92%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E5%8C%96%EF%BD%9E%E9%96%A2%E8%A5%BF%E3%82%A8%E3%83%AA%E3%82%A2%E3%81%A7%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E4%BA%8B%E6%A5%AD%E6%8B%A1%E5%A4%A7%E3%81%B8%EF%BD%9E.pdf',
      ],
    },
    J44: {
      id: 'J44',
      title: 'Gakken — group investor relations and business information',
      note: 'An additional company outside the core financial comparison of 15 businesses.',
      urls: [
        'https://www.gakken.co.jp/ja/ir/library/result.html',
        'https://www.gakken.co.jp/en/ir.html',
      ],
    },
  },
}
