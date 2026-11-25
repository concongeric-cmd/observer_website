export function researchPath(topic) {
  if (topic.companyId) return '/japan/companies/' + topic.companyId
  if (topic.regionId) return '/japan/regions/' + topic.regionId
  if (topic.volume === 6)
    return topic.number === 18
      ? '/japan/companies?view=compare'
      : '/japan/companies#report-context-' + topic.number
  return '/japan/research/' + topic.id
}
