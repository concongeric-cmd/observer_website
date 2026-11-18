import useCountry from '../hooks/useCountry'
import SchoolDirectory from '../components/directory/SchoolDirectory'

export default function CountryPage() {
  const country = useCountry()
  return (
    <SchoolDirectory country={country} />
  )
}
