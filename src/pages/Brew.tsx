import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../components/Card'
import { getBrewItems } from '../lib/store'
import type { BrewItem } from '../types'

const CATEGORY_META = {
  extraction: { title: '萃取方法', icon: '💧' },
  principles: { title: '沖煮原理', icon: '🔬' },
  products:   { title: '品項介紹', icon: '☕' },
  sensory:    { title: '感官品數', icon: '👃' },
}

const OVERVIEW = [
  { title: '萃取方法', icon: '💧', to: '/brew/extraction', description: '認識手沖、義式、法壓、冷萃等各種咖啡萃取技術與適用情境' },
  { title: '沖煮原理', icon: '🔬', to: '/brew/principles', description: '理解水溫、研磨度、比例與時間對咖啡萃取的科學影響' },
  { title: '品項介紹', icon: '☕', to: '/brew/products',   description: '認識 Espresso、Latte、Cappuccino 等各種咖啡飲品的製作與特色' },
  { title: '感官品數', icon: '👃', to: '/brew/sensory',    description: '培養咖啡品鑑能力，學習評估酸質、甜感、醇厚度與餘韻' },
]

export default function Brew() {
  const { category } = useParams()
  const [items, setItems] = useState<BrewItem[]>([])

  useEffect(() => {
    setItems(getBrewItems())
  }, [])

  if (category && CATEGORY_META[category as keyof typeof CATEGORY_META]) {
    const meta = CATEGORY_META[category as keyof typeof CATEGORY_META]
    const filtered = items.filter(i => i.category === category)

    return (
      <div>
        <div className="page-hero">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/brew">萃取</Link>
              <span>/</span>
              <span>{meta.title}</span>
            </div>
            <span className="page-hero-icon">{meta.icon}</span>
            <h1>{meta.title}</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="card-grid card-grid-3">
            {filtered.map(item => (
              <div className="info-card" key={item.id}>
                <div className="info-card-icon">{item.icon}</div>
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-hero-icon">☕</span>
          <h1>萃取</h1>
          <p>掌握咖啡沖煮的藝術與科學</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-header">
          <h2>沖煮知識庫</h2>
          <p>從萃取原理到感官品鑑，全面提升你的咖啡技術</p>
        </div>
        <div className="card-grid card-grid-2">
          {OVERVIEW.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
