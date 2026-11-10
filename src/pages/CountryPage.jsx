import useCountry from '../hooks/useCountry'
import useLanguage from '../hooks/useLanguage'
import SchoolDirectory from '../components/directory/SchoolDirectory'
export default function CountryPage() {
  const country = useCountry()
  const { pair } = useLanguage()
  return (
    <>
      <header className={'country-intro country-' + country.code.toLowerCase()}>
        <span className="eyebrow">{country.code} / COUNTRY EXPLORER</span>
        <h1>{pair(...country.title)}</h1>
        <p>{pair(...country.description)}</p>
        <div className="country-intro-note">
          {pair(
            '先选择园所，再阅读其教育方针、实践与资料来源。',
            'Choose a school to explore its educational policy, practices and sources.',
          )}
        </div>
      </header>
      <SchoolDirectory country={country} />
    </>
  )
}
