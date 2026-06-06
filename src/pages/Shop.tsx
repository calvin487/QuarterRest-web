import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const CATEGORIES = {
  'coffee-beans': {
    title: '咖啡豆',
    icon: '🫘',
    items: [
      { title: '衣索比亞 耶加雪菲', icon: '🌸', tag: '日曬', price: 'NT$ 580', desc: '花香、柑橘調性，日曬處理法，中淺烘焙，適合手沖' },
      { title: '哥倫比亞 花神', icon: '🍫', tag: '水洗', price: 'NT$ 520', desc: '焦糖、堅果、黑巧克力風味，水洗處理，中烘焙' },
      { title: '巴拿馬 翡翠莊園 Geisha', icon: '🌺', tag: '蜜處理', price: 'NT$ 1,200', desc: '茉莉花香，蜂蜜甜感，Geisha 稀有品種，淺烘焙' },
      { title: '瓜地馬拉 安提瓜', icon: '🌋', tag: '水洗', price: 'NT$ 480', desc: '煙燻、黑糖、奶油，火山土壤種植，中深烘焙' },
      { title: '肯亞 AA Top', icon: '🍇', tag: '水洗', price: 'NT$ 620', desc: '黑醋栗、蕃茄、葡萄酒感，SL28 品種，中淺烘焙' },
      { title: '耶門 摩卡 Mattari', icon: '🫐', tag: '日曬', price: 'NT$ 980', desc: '野性、藍莓、可可風味，古老傳統日曬處理法' },
    ],
  },
  'equipment': {
    title: '器材',
    icon: '⚙️',
    items: [
      { title: 'Hario V60 濾杯 01', icon: '🔺', tag: '手沖', price: 'NT$ 350', desc: '日本製陶瓷手沖濾杯，01 號，1-2 人用，散熱快' },
      { title: 'Kalita Wave 155', icon: '🌊', tag: '手沖', price: 'NT$ 680', desc: '平底三孔設計，穩定萃取流速，新手友善' },
      { title: 'AeroPress 愛樂壓', icon: '🎯', tag: '浸泡', price: 'NT$ 1,280', desc: '便攜式全能咖啡器，快速沖煮，風味多變' },
      { title: 'Fellow Stagg EKG+ 電熱壺', icon: '🫖', tag: '熱水壺', price: 'NT$ 4,500', desc: '鵝頸壺，±1°C 精準控溫，藍牙控制' },
      { title: 'Timemore C3 Pro 手搖磨豆機', icon: '⚙️', tag: '磨豆機', price: 'NT$ 1,880', desc: '不鏽鋼錐刀，研磨均勻，60 段調節，輕量攜帶' },
      { title: 'Acaia Pearl 電子秤', icon: '⚖️', tag: '電子秤', price: 'NT$ 5,200', desc: '高精度 0.1g 計量，藍牙連接，內建計時功能' },
    ],
  },
}

const OVERVIEW = [
  {
    title: '咖啡豆',
    icon: '🫘',
    to: '/shop/coffee-beans',
    description: '精選世界各地優質單品咖啡豆，提供多種處理法與烘焙程度，每週新鮮到貨',
  },
  {
    title: '器材',
    icon: '⚙️',
    to: '/shop/equipment',
    description: '專業手沖器材、磨豆機、電熱壺等完整配備，從入門到專業一站到位',
  },
]

export default function Shop() {
  const { category } = useParams()
  const data = category ? CATEGORIES[category as keyof typeof CATEGORIES] : null

  if (data) {
    return (
      <div>
        <div className="page-hero">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/shop">Shop</Link>
              <span>/</span>
              <span>{data.title}</span>
            </div>
            <span className="page-hero-icon">{data.icon}</span>
            <h1>{data.title}</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="card-grid card-grid-3">
            {data.items.map((item) => (
              <div className="product-card" key={item.title}>
                <div className="product-icon">{item.icon}</div>
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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
          {OVERVIEW.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
