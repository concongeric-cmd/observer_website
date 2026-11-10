export const providerTypes = [
  {
    id: 'kindergarten',
    countries: ['japan'],
    dimension: ['设施类别', 'Facility category'],
    label: ['幼稚园', 'Kindergarten'],
    description: [
      '日本的幼稚園设施类别。仅收录原始资料明确支持此类别的园所；不将所有学前服务统称为幼稚园。',
      'The Japanese yochien facility category. Includes only schools whose sources support this category, rather than treating all early childhood provision as kindergarten.',
    ],
  },
  {
    id: 'university-affiliated',
    countries: ['japan', 'united-states'],
    dimension: ['组织关系', 'Organisational relationship'],
    label: ['大学附属', 'University-affiliated'],
    description: [
      '由大学原始资料确认的附属或校内园所。大学关系不代表统一的许可类别或教育质量。',
      'A school whose university relationship is confirmed by original university material. This relationship is not a shared licensing category or a measure of quality.',
    ],
  },
  {
    id: 'private-provider',
    countries: ['japan', 'united-states'],
    dimension: ['运营主体', 'Provider status'],
    label: ['私立运营', 'Private provision'],
    description: [
      '原始资料明确标示为私立学校或私立组织的服务。私立不等于营利，也不自动表示独立园或连锁园。',
      'Provision explicitly identified as a private school or private organisation in its sources. Private does not establish for-profit status, independence or chain membership.',
    ],
  },
]

// Missing, pending, unknown, wrong-country or unsupported classifications never
// qualify a school for a group or a displayed verified type.
export function getVerifiedProviderTypes(school) {
  const seen = new Set()
  return (school.providerClassifications || []).flatMap((classification) => {
    const type = providerTypes.find(
      (type) =>
        type.id === classification.typeId &&
        type.countries.includes(school.country),
    )
    const source = classification.source
    if (
      !type ||
      seen.has(type.id) ||
      classification.status !== 'verified' ||
      !source?.url?.startsWith('https://') ||
      !source.title ||
      !source.checkedAt ||
      !source.evidence?.[0] ||
      !source.evidence?.[1]
    )
      return []
    seen.add(type.id)
    return [{ ...type, source }]
  })
}
export function getProviderTypeLabel(school) {
  const verified = getVerifiedProviderTypes(school)
  return verified.length
    ? [
        verified.map((type) => type.label[0]).join(' · '),
        verified.map((type) => type.label[1]).join(' · '),
      ]
    : ['机构类型待核实', 'Provider type pending verification']
}
export function getSchoolsByProviderType(records, country, typeId) {
  return records.filter(
    (school) =>
      school.country === country &&
      getVerifiedProviderTypes(school).some((type) => type.id === typeId),
  )
}
