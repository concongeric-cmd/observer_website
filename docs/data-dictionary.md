# Data dictionary / 数据字典

Date / 日期: 12 November 2026

| File / 文件 | Record and fields / 记录与字段 | Rules / 规则 |
|---|---|---|
| src/data/countries.js | slug, code, name, title, description / 路由标识、代码、名称、标题、介绍 | Text pairs use [Chinese, English] / 双语字段顺序为中文、英文。 |
| src/data/content.js | sections, articles, shared sources / 专题、文章、共用来源 | Articles use id, bilingual title/intro, blocks, steps and optional source ID. Null source means editorial-only content / 文章可用 source 指向共用来源；空值表示仅为编辑内容。 |
| src/data/schools.js | School id, country, name, original, aliases, location, approach, policy, strategies, sources, checked date; optional operations and dailySchedule / 园所标识、国家、名称、原名、变体、地区、理念、政策、实践、来源、核对日期；可选运营与日程 | aliases holds deliberate search variants, including Simplified/Traditional Chinese or Japanese spellings / aliases 用于明确维护简繁体、日文等名称变体。 Do not infer unreported facts / 不推断未公开事实。 |
| src/data/monthlyUpdates.js | id, country, month, topic, bilingual title/change/affected/implications, event/publication/effective dates, sources, related links and reviewedAt / 月份、主题、变化、影响对象、管理意义、日期、来源、关联页面及审核日期 | month uses YYYY-MM. effectiveDate may be null / 月份为 YYYY-MM；生效日期可为空。 |
| src/data/policyResources.js | Country-indexed source gateways with bilingual title/note, publisher and URL / 按国家组织的政策入口，含双语标题、说明、发布机构和链接 | Gateways are not a complete policy library / 资料入口不等于完整政策库。 |
| src/data/pedagogyCurriculum.js | Country-specific bilingual framework summaries, numbered sections, domain lists and primary source links / 各国双语框架摘要、编号说明、领域清单与原始来源链接 | National guidance and program-specific frameworks are labeled by scope; do not generalize them to every provider / 国家指导与特定项目框架按范围标注，不推广为所有机构通用规则。 |
| src/data/countryResearch.js | Country-level sector summaries, company and technology cases, practical operations guidance, source links and update triggers / 国家专题摘要、企业与科技案例、经营管理清单、来源链接及更新时点 | Government rules and official statistics are separated from company disclosures and vendor feature descriptions. Figures keep their period and population scope / 政府规则和官方统计与公司披露、供应商功能介绍分开；数字保留期间及对象范围。 |
| src/data/providerTypeGuides.js | Country-specific provider categories and direct source links / 各国机构类型及原始来源链接 | System categories describe the national landscape and do not automatically classify sample schools / 制度类别用于说明全国体系，不自动分类样本园。 |
| src/pages/SchoolPage.jsx | Profile views and pending-field labels / 档案展示与待研究字段提示 | “Not researched or collected” does not mean a provider lacks a service / 尚未研究或收集不表示园所没有相关服务。 |

Search applies Unicode NFKC and lowercase matching, then checks stored names, original name, declared aliases, location and approach. It does not automatically convert all Chinese text; maintain verified aliases in each record / 搜索执行 Unicode NFKC 与小写处理，并匹配名称、原名、明确变体、地区和理念。不会自动转换所有中文，已核验变体需逐条添加。


Uniform-schema note / 统一字段说明：The current prototype shares a common identity/profile core, but operational fields, schedules and provider classifications are optional or uneven across schools. Do not treat the current JavaScript shape as the final admin form contract. The required country and school field lists, repeatable records, and explicit value statuses for the future admin form are defined in [school-admin-intake.txt](school-admin-intake.txt). / 当前原型的身份与档案核心字段大体一致，但运营字段、日程和机构分类在不同园所中为可选或覆盖不均。不要把当前JavaScript数据结构直接当作最终后台表单规范。未来后台的国家与园所统一字段、可重复记录及明确状态已列于[school-admin-intake.txt](school-admin-intake.txt)。