import { Link } from 'react-router-dom'

interface CardProps {
  title: string
  description: string
  icon?: string
  to?: string
  tag?: string
  date?: string
}

export default function Card({ title, description, icon, to, tag, date }: CardProps) {
  const inner = (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <div className="card-body">
        {tag && <span className="card-tag">{tag}</span>}
        {date && <p className="card-date">{date}</p>}
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
      {to && <div className="card-arrow">→</div>}
    </div>
  )

  if (to) {
    return <Link to={to} className="card-link">{inner}</Link>
  }
  return inner
}
