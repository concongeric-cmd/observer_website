// Add records only after their sources and bilingual copy have been reviewed.
// Each record needs: id, country, month (YYYY-MM), topic, title [zh, en],
// change [zh, en], eventDate, publicationDate, effectiveDate (nullable),
// affected [zh, en], implications [zh, en], sources [{ title, url }],
// related [{ title: [zh, en], to }], and reviewedAt.
export const monthlyUpdates = []

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
