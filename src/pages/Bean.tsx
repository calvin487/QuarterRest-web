import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const CATEGORIES = {
  origin: {
    title: '產地',
    icon: '🌍',
    items: [
      { icon: '🌍', tag: '非洲', title: '衣索比亞', desc: '咖啡的發源地，耶加雪菲、西達摩、哈拉等產區聞名，花香果香豐富多樣' },
      { icon: '🌎', tag: '中南美洲', title: '哥倫比亞', desc: '全球第三大生產國，安地斯山脈海拔賦予均衡豐富風味，口感溫和甜美' },
      { icon: '🌎', tag: '中南美洲', title: '巴西', desc: '世界最大咖啡生產國，以堅果、牛奶巧克力等低酸圓潤調性著稱' },
      { icon: '🌍', tag: '非洲', title: '肯亞', desc: 'SL28、SL34 品種獨特，黑醋栗、莓果、番茄風味，口感豐富層次高' },
      { icon: '🌎', tag: '中南美洲', title: '瓜地馬拉', desc: '多個火山產區，土壤賦予咖啡豆獨特的煙燻與焦糖風味，酸甜平衡' },
      { icon: '🌎', tag: '中南美洲', title: '巴拿馬', desc: '翡翠莊園 Geisha 享譽國際，花香茶感，以拍賣高價聞名全球' },
    ],
  },
  processing: {
    title: '處理法',
    icon: '⚗️',
    items: [
      { icon: '💧', tag: 'Washed', title: '水洗處理', desc: '去除果肉後在水中發酵去除果膠，風味乾淨清晰，強調豆子本質與產地特色' },
      { icon: '☀️', tag: 'Natural', title: '日曬處理', desc: '整顆果實直接日曬乾燥，果膠糖分滲入豆中，風味濃郁甜美，帶發酵果香' },
      { icon: '🍯', tag: 'Honey', title: '蜜處理', desc: '保留部分果膠後乾燥，依留存量分黃蜜、紅蜜、黑蜜，介於水洗與日曬之間' },
      { icon: '🧪', tag: 'Anaerobic', title: '厭氧發酵', desc: '密閉容器中無氧發酵，產生獨特的發酵果味與高複雜度，近年精品市場新寵' },
    ],
  },
  variety: {
    title: '品種',
    icon: '🌿',
    items: [
      { icon: '🌱', tag: '主流品種', title: 'Arabica 阿拉比卡', desc: '占全球產量約60%，風味豐富層次多，咖啡因低，廣泛應用於精品咖啡市場' },
      { icon: '🌿', tag: '主流品種', title: 'Robusta 羅布斯塔', desc: '苦味強烈，咖啡因含量高，抗病蟲害強，常用於義式濃縮配方與即溶咖啡' },
      { icon: '🌺', tag: '稀有品種', title: 'Geisha 藝妓', desc: '起源衣索比亞，獨特花香茉莉調性，近年巴拿馬種植後聲名大噪，價格不菲' },
      { icon: '🍃', tag: '肯亞特有', title: 'SL28 / SL34', desc: '肯亞農業研究站培育，以黑醋栗、莓果、葡萄酒般複雜果酸著稱' },
    ],
  },
  roasting: {
    title: '烘焙',
    icon: '🔥',
    items: [
      { icon: '🟡', tag: 'Light Roast', title: '淺烘焙', desc: '保留最多原產地風味，高亮酸，花香果香明顯，豆體密實，手沖最佳選擇' },
      { icon: '🟠', tag: 'Medium Roast', title: '中烘焙', desc: '酸甜達到平衡，焦糖化程度適中，風味層次豐富，為大眾最喜愛的烘焙程度' },
      { icon: '🟤', tag: 'Medium-Dark', title: '中深烘焙', desc: '油脂開始析出表面，巧克力、堅果風味突出，苦甜均衡，適合牛奶咖啡飲品' },
      { icon: '⚫', tag: 'Dark Roast', title: '深烘焙', desc: '苦味為主調，油脂豐富顯著，煙燻炭香明顯，適合義式濃縮及加奶飲品' },
    ],
  },
}

const OVERVIEW = [
  { title: '產地', icon: '🌍', to: '/bean/origin', description: '探索世界各地咖啡產區，了解地形、氣候、海拔如何塑造獨特風味' },
  { title: '處理法', icon: '⚗️', to: '/bean/processing', description: '深入了解水洗、日曬、蜜處理等方式對咖啡風味的根本影響' },
  { title: '品種', icon: '🌿', to: '/bean/variety', description: '認識阿拉比卡、藝妓等不同咖啡品種的遺傳特性與風味差異' },
  { title: '烘焙', icon: '🔥', to: '/bean/roasting', description: '了解淺中深烘焙的化學變化，找到最符合你口味偏好的烘焙程度' },
]

export default function Bean() {
  const { category } = useParams()
  const data = category ? CATEGORIES[category as keyof typeof CATEGORIES] : null

  if (data) {
    return (
      <div>
        <div className="page-hero">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/bean">Bean</Link>
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
              <div className="info-card" key={item.title}>
                <div className="info-card-icon">{item.icon}</div>
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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
          <h1>Bean</h1>
          <p>深入了解咖啡豆的一切知識</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-header">
          <h2>咖啡豆知識庫</h2>
          <p>從產地到烘焙，全面了解咖啡豆的世界</p>
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
