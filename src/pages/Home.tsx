import { Link } from 'react-router-dom'
import Card from '../components/Card'

const SECTIONS = [
  {
    title: 'Shop',
    icon: '🛍️',
    to: '/shop',
    description: '精選咖啡豆與專業器材，打造屬於你的完美咖啡體驗',
  },
  {
    title: 'Bean',
    icon: '🫘',
    to: '/bean',
    description: '深入了解咖啡豆的產地、品種、處理法與烘焙工藝',
  },
  {
    title: 'Brew',
    icon: '☕',
    to: '/brew',
    description: '掌握各種萃取技巧，探索手沖、義式、冷萃等沖煮奧秘',
  },
  {
    title: 'Blog',
    icon: '📖',
    to: '/blog',
    description: '分享咖啡文化、知識與生活風格的精選文章與故事',
  },
]

const FEATURES = [
  {
    icon: '🌱',
    title: '嚴選產地',
    desc: '直接與農場合作，確保每粒咖啡豆的品質與永續來源，從產地到杯中透明可溯。',
  },
  {
    icon: '🔬',
    title: '專業知識',
    desc: '由專業咖啡師提供完整的咖啡教育，從基礎概念到進階技術一應俱全。',
  },
  {
    icon: '🚀',
    title: '快速配送',
    desc: '採用冷鏈配送系統，確保咖啡豆在最佳賞味期內新鮮送達府上。',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">COFFEE WORLD</p>
          <h1 className="hero-title">探索咖啡的世界</h1>
          <p className="hero-desc">
            從產地到杯中，帶你深入了解每一杯咖啡背後的故事與工藝
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary">立即選購</Link>
            <Link to="/bean" className="btn btn-outline">認識咖啡豆</Link>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <div className="feature-strip">
        {FEATURES.map((f) => (
          <div key={f.title} className="feature-item">
            <div className="feature-item-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Main sections */}
      <div className="page-content">
        <div className="section-header">
          <h2>探索我們的世界</h2>
          <p>選擇一個主題，開始你的咖啡旅程</p>
        </div>
        <div className="card-grid card-grid-4">
          {SECTIONS.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="section-alt">
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 12 }}>準備好踏上咖啡之旅了嗎？</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: 32, fontSize: 16 }}>
            無論你是咖啡新手還是資深玩家，這裡都有你需要的一切
          </p>
          <Link to="/shop" className="btn btn-primary">開始探索</Link>
        </div>
      </div>
    </div>
  )
}
