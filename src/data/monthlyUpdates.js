// Add records only after their sources and bilingual copy have been reviewed.
// Each record needs: id, country, month (YYYY-MM), topic, title [zh, en],
// change [zh, en], eventDate, publicationDate, effectiveDate (nullable),
// affected [zh, en], implications [zh, en], sources [{ title, url }],
// related [{ title: [zh, en], to }], and reviewedAt.
export const monthlyUpdates = [
  {
    id: 'japan-childcare-capacity-2026',
    country: 'japan',
    month: '2026-08',
    topic: 'statistics',
    title: [
      '日本：保育所等定员与利用儿童数继续下降',
      'Japan: childcare capacity and use continue to decline',
    ],
    change: [
      'こども家庭庁于2026年8月公布截至2026年4月1日的数据：利用定员为3,016,417人，利用儿童为2,646,756人，待机儿童为2,435人。定员与利用儿童分别较上年减少0.4%和1.2%，待机儿童增加181人。该年度数据为暂定值，熊本县数据仍待确定。',
      'In August 2026, Japan’s Children and Families Agency reported 3,016,417 available places, 2,646,756 children using provision, and 2,435 children on waiting lists as of 1 April 2026. Capacity and use fell 0.4% and 1.2% year over year; waiting lists rose by 181. The figures are provisional while Kumamoto Prefecture data are finalized.',
    ],
    eventDate: '2026-04-01',
    publicationDate: '2026-08-25',
    effectiveDate: null,
    affected: [
      '全国统计，涉及保育设施与相关地方政府；数据并非所有幼儿教育机构的总量。',
      'National statistics concerning childcare providers and local governments; the scope is not every early education institution.',
    ],
    implications: [
      '编辑提示：经营者可将全国趋势作为背景，再核对所在地区、年龄结构、招生与实际使用情况；全国数字不能代替本地需求分析。',
      'Editorial implication: use national trends as context, then review local demographics, age mix, enquiries and actual enrolment. National figures cannot replace local demand analysis.',
    ],
    sources: [
      {
        title: 'こども家庭庁 / Children and Families Agency — 保育所等関連状況取りまとめ（令和8年4月1日）',
        url: 'https://www.cfa.go.jp/policies/hoiku/torimatome/r8/',
      },
    ],
    related: [
      { title: ['日本国家概览', 'Japan country overview'], to: '/japan' },
    ],
    reviewedAt: '2026-11-12',
  },
]

export const updateTopics = [
  ['policy', '政策与资助', 'Policy & funding'],
  ['statistics', '行业数据', 'Sector statistics'],
  ['centres', '园所与服务', 'Schools & services'],
  ['technology', '企业与工具', 'Companies & tools'],
]

export function filterMonthlyUpdates(
  records,
  { month = '', country = 'all', topic = 'all' } = {},
) {
  return records.filter(
    (update) =>
      (!month || update.month === month) &&
      (country === 'all' || update.country === country) &&
      (topic === 'all' || update.topic === topic),
  )
}
