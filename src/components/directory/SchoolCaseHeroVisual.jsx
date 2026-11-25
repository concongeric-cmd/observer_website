import useLanguage from '../../hooks/useLanguage'

export default function SchoolCaseHeroVisual({ school }) {
  const { pair, english } = useLanguage()
  if (school.id === 'fuji-kindergarten') {
    return (
      <figure className="case-hero-figure">
        <div
          className="case-diagram"
          role="img"
          aria-label={
            english
              ? 'Editorial schematic of a rooftop loop around a central courtyard; not to scale'
              : '环形屋顶围绕中央园庭的编辑示意图，未按比例'
          }
        >
          <i className="case-tree case-tree-one" />
          <i className="case-tree case-tree-two" />
          <i className="case-tree case-tree-three" />
          <span className="case-roof-label">
            {pair('环形屋顶', 'Rooftop loop')}
          </span>
          <span className="case-yard-label">
            {pair('中央园庭', 'Courtyard')}
          </span>
        </div>
        <figcaption>
          {pair(
            '编辑示意图，非实景照片，未按比例',
            'Editorial schematic, not a photograph; not to scale',
          )}
        </figcaption>
      </figure>
    )
  }
  return (
    <figure className="case-hero-figure">
      <img
        className="case-hero-image"
        src={
          import.meta.env.BASE_URL +
          'images/' +
          (school.country === 'japan'
            ? 'observer-japan-courtyard.jpg'
            : 'observer-us-studio.jpg')
        }
        alt={
          english
            ? 'Illustrative early childhood learning environment, not the profiled school'
            : '幼儿学习环境示意图，并非本校实景'
        }
      />
      <figcaption>
        {pair(
          '学习环境示意图，并非本校实景',
          'Illustrative learning environment · not this school',
        )}
      </figcaption>
    </figure>
  )
}
