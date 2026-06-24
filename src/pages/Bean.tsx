import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../components/Card'
import { getBeanItems } from '../lib/store'
import type { BeanItem } from '../types'

const CATEGORY_META = {
  origin:     { title: '產地',  icon: '🌍' },
  processing: { title: '處理法', icon: '⚗️' },
  variety:    { title: '品種',  icon: '🌿' },
  roasting:   { title: '烘焙',  icon: '🔥' },
}

const OVERVIEW = [
  { title: '產地',  icon: '🌍', to: '/bean/origin',     description: '探索世界各地咖啡產區，了解地形、氣候、海拔如何塑造獨特風味' },
  { title: '處理法', icon: '⚗️', to: '/bean/processing', description: '深入了解水洗、日曬、蜜處理等方式對咖啡風味的根本影響' },
  { title: '品種',  icon: '🌿', to: '/bean/variety',    description: '認識阿拉比卡、藝妓等不同咖啡品種的遺傳特性與風味差異' },
  { title: '烘焙',  icon: '🔥', to: '/bean/roasting',   description: '了解淺中深烘焙的化學變化，找到最符合你口味偏好的烘焙程度' },
]

export default function Bean() {
  const { category } = useParams()
  const [items, setItems] = useState<BeanItem[]>([])

  useEffect(() => {
    setItems(getBeanItems())
  }, [])

  if (category && CATEGORY_META[category as keyof typeof CATEGORY_META]) {
    const meta = CATEGORY_META[category as keyof typeof CATEGORY_META]
    const filtered = items.filter(i => i.category === category)

    return (
      <div>
        <div className="page-hero">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/bean">咖啡豆</Link>
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
          <span className="page-hero-icon">🫘</span>
          <h1>咖啡豆</h1>
          <p>深入了解咖啡豆的一切知識</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-header">
          <h2>咖啡豆知識庫</h2>
          <p>從產地到烘焙，全面了解咖啡豆的世界</p>
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
