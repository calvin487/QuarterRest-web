import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../components/Card'
import { getProducts } from '../lib/store'
import type { Product } from '../types'

const CATEGORY_META = {
  'coffee-beans': { title: '咖啡豆', icon: '🫘' },
  'equipment':    { title: '器材',   icon: '⚙️' },
}

const OVERVIEW = [
  { title: '咖啡豆', icon: '🫘', to: '/shop/coffee-beans', description: '精選世界各地優質單品咖啡豆，提供多種處理法與烘焙程度，每週新鮮到貨' },
  { title: '器材',   icon: '⚙️', to: '/shop/equipment',    description: '專業手沖器材、磨豆機、電熱壺等完整配備，從入門到專業一站到位' },
]

export default function Shop() {
  const { category } = useParams()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(getProducts())
  }, [])

  if (category && CATEGORY_META[category as keyof typeof CATEGORY_META]) {
    const meta = CATEGORY_META[category as keyof typeof CATEGORY_META]
    const items = products.filter(p => p.category === category)

    return (
      <div>
        <div className="page-hero">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/shop">Shop</Link>
              <span>/</span>
              <span>{meta.title}</span>
            </div>
            <span className="page-hero-icon">{meta.icon}</span>
            <h1>{meta.title}</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="card-grid card-grid-3">
            {items.map(item => (
              <div className="product-card" key={item.id}>
                <div className="product-icon">{item.icon}</div>
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="product-footer">
                  <span className="product-price">{item.price}</span>
                  <button className="btn btn-primary btn-sm">加入購物車</button>
                </div>
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
          <span className="page-hero-icon">🛍️</span>
          <h1>Shop</h1>
          <p>選擇你需要的咖啡商品</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-header">
          <h2>商品分類</h2>
          <p>從精選咖啡豆到專業沖煮器材，滿足你所有咖啡需求</p>
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
