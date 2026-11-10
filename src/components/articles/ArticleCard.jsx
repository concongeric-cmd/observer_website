import { Link } from 'react-router'
import useLanguage from '../../hooks/useLanguage'

export default function ArticleCard({ article: a, index }) {
  const { pair } = useLanguage()

  return (
    <Link className="article-card" to={'/japan/operations/' + a.id}>
      <div className={'article-visual ' + a.color}>
        <span className="visual-no">0{index + 1}</span>
        {index === 0 ? (
          <div className="mini-bars">
            {[80, 110, 145, 125, 103, 87].map((v, i) => (
              <i style={{ height: v }} key={i} />
            ))}
          </div>
        ) : index === 1 ? (
          <div className="orbit">
            <i />
            <i />
            <i />
            <i />
            <span>↔</span>
          </div>
        ) : (
          <div className="journey-art">
            <i>01</i>
            <b>↗</b>
            <i>02</i>
            <b>↘</b>
            <i>03</i>
          </div>
        )}
        <span className="visual-caption">
          {pair(
            '编辑示意 · 非统计数据',
            'EDITORIAL DIAGRAM · NOT STATISTICAL DATA',
          )}
        </span>
      </div>
      <div className="card-meta">
        {pair(...a.category)}
        <span>0{index + 1}</span>
      </div>
      <h3>{pair(...a.title)}</h3>
      <p>{pair(...a.intro)}</p>
      <div className="card-bottom">
        {pair(...a.kind)}
        <span>{a.time} MIN ↗</span>
      </div>
    </Link>
  )
}
