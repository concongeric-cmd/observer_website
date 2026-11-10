import { getVerifiedProviderTypes } from '../../data/providerTypes'
import useLanguage from '../../hooks/useLanguage'
export default function ProviderTypeBadges({ school }) {
  const { pair } = useLanguage()
  const types = getVerifiedProviderTypes(school)
  return types.length ? (
    types.map((type) => <span key={type.id}>{pair(...type.label)}</span>)
  ) : (
    <span>{pair('机构类型待核实', 'Provider type pending verification')}</span>
  )
}
