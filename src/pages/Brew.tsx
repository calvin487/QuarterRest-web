import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const CATEGORIES = {
  extraction: {
    title: '萃取方法',
    icon: '💧',
    items: [
      { icon: '🔺', tag: '手沖', title: '濾滴式 Pour Over', desc: '以穩定細水流手動沖煮，能精準控制水溫、水量與時間，呈現豆子細膩風味' },
      { icon: '☁️', tag: '濃縮', title: '義式濃縮 Espresso', desc: '9 bar 高壓在短時間萃取，濃縮豆子精華，風味強烈，是多種咖啡飲品的基底' },
      { icon: '🪣', tag: '浸泡', title: '法式壓壺 French Press', desc: '全浸泡式萃取，金屬濾網保留豐富油脂，口感飽滿醇厚，操作簡單' },
      { icon: '🎯', tag: '浸泡+壓力', title: 'AeroPress 愛樂壓', desc: '結合浸泡與壓力萃取，快速靈活，風味可調幅度大，旅行愛好者首選' },
      { icon: '🧊', tag: '冷萃', title: '冷萃 Cold Brew', desc: '以冷水長時間（12-24 小時）緩慢萃取，低酸順口，天然甜感，夏季最愛' },
      { icon: '🌊', tag: '手沖', title: 'Siphon 虹吸壺', desc: '利用蒸氣壓力與真空原理萃取，儀式感十足，風味乾淨清晰，視覺享受' },
    ],
  },
  principles: {
    title: '沖煮原理',
    icon: '🔬',
    items: [
      { icon: '🌡️', tag: '水溫', title: '水溫控制', desc: '建議 90-96°C，淺焙偏高、深焙偏低。水溫影響溶解速率與風味物質萃取量' },
      { icon: '⚖️', tag: '比例', title: '咖啡粉水比', desc: '標準比例 1:15（手沖）到 1:2（義式），比例決定濃度，影響整體風味平衡' },
      { icon: '⏱️', tag: '時間', title: '萃取時間', desc: '手沖約 3-4 分鐘，義式 25-30 秒。過短萃取不足偏酸，過長過度萃取偏苦澀' },
      { icon: '🔩', tag: '研磨', title: '研磨粗細', desc: '細研磨增加接觸面積，粗研磨減少，需配合沖煮方式調整，影響萃取速率' },
    ],
  },
  products: {
    title: '品項介紹',
    icon: '☕',
    items: [
      { icon: '☕', tag: '義式基底', title: 'Espresso 義式濃縮', desc: '30ml 的咖啡精華，風味濃縮強烈，作為 Latte、Cappuccino 等飲品基底' },
      { icon: '🥛', tag: '奶咖', title: 'Latte 拿鐵', desc: '雙份 Espresso + 大量蒸奶（約 180-220ml），口感綿滑溫和，奶味為主' },
      { icon: '💨', tag: '奶咖', title: 'Cappuccino 卡布奇諾', desc: '1:1:1 的 Espresso / 蒸奶 / 奶泡，口感均衡，奶泡細緻綿密，風味層次分明' },
      { icon: '🍵', tag: '手沖', title: 'Filter Coffee 濾滴咖啡', desc: '手沖或自動濾滴，清澈明亮，適合感受單品產地風味，酸甜層次豐富' },
      { icon: '🧊', tag: '冷飲', title: 'Cold Brew 冷萃', desc: '12-24 小時冷水萃取，低酸甜順，風味圓潤，可直飲或加奶、糖漿變化' },
      { icon: '✨', tag: '特調', title: 'Flat White 澳白', desc: '雙份 Ristretto + 少量細緻微泡蒸奶，咖啡風味突出，口感絲滑，澳洲起源' },
    ],
  },
  sensory: {
    title: '感官品數',
    icon: '👃',
    items: [
      { icon: '🍊', tag: '酸質', title: 'Acidity 酸質', desc: '優質的酸感明亮清晰，如柑橘、蘋果、莓果般的果酸，是精品咖啡重要指標' },
      { icon: '🍫', tag: '甜感', title: 'Sweetness 甜感', desc: '天然糖分產生的甜味，如焦糖、蜂蜜、水果糖，與酸質配合形成良好平衡' },
      { icon: '☕', tag: '苦味', title: 'Bitterness 苦味', desc: '深烘焙或過度萃取產生，適度苦感帶來平衡感，品質佳時呈現黑巧克力感' },
      { icon: '💪', tag: '醇厚度', title: 'Body 醇厚感', desc: '咖啡在口中的重量感與質地，油脂豐富的豆子醇厚度高，手沖通常較輕盈' },
    ],
  },
}

const OVERVIEW = [
  { title: '萃取方法', icon: '💧', to: '/brew/extraction', description: '認識手沖、義式、法壓、冷萃等各種咖啡萃取技術與適用情境' },
  { title: '沖煮原理', icon: '🔬', to: '/brew/principles', description: '理解水溫、研磨度、比例與時間對咖啡萃取的科學影響' },
  { title: '品項介紹', icon: '☕', to: '/brew/products', description: '認識 Espresso、Latte、Cappuccino 等各種咖啡飲品的製作與特色' },
  { title: '感官品數', icon: '👃', to: '/brew/sensory', description: '培養咖啡品鑑能力，學習評估酸質、甜感、醇厚度與餘韻' },
]

export default function Brew() {
  const { category } = useParams()
  const data = category ? CATEGORIES[category as keyof typeof CATEGORIES] : null

  if (data) {
    return (
      <div>
        <div className="page-hero">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/brew">Brew</Link>
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
          <span className="page-hero-icon">☕</span>
          <h1>Brew</h1>
          <p>掌握咖啡沖煮的藝術與科學</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-header">
          <h2>沖煮知識庫</h2>
          <p>從萃取原理到感官品鑑，全面提升你的咖啡技術</p>
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
