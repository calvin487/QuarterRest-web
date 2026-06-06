const POSTS = [
  {
    emoji: '🌍',
    bg: '#f5e6d3',
    tag: '產地報導',
    date: '2025年5月20日',
    title: '衣索比亞咖啡農場直擊：從果實到生豆的旅程',
    excerpt: '跟著我們的採購團隊走訪衣索比亞耶加雪菲產區，親眼見證傳統日曬處理法如何將咖啡果實轉化為風味獨特的生豆...',
  },
  {
    emoji: '☕',
    bg: '#e8f5e9',
    tag: '沖煮技術',
    date: '2025年5月10日',
    title: '手沖咖啡的5個常見錯誤，你中了幾個？',
    excerpt: '許多剛入門手沖咖啡的愛好者，常在不知不覺中犯下影響風味的錯誤。本文整理了5個最常見的手沖失誤，逐一分析原因與解決方法...',
  },
  {
    emoji: '🫘',
    bg: '#fce4ec',
    tag: '品種研究',
    date: '2025年4月28日',
    title: 'Geisha 品種為何如此昂貴？一文看懂稀有品種的秘密',
    excerpt: '巴拿馬翡翠莊園的 Geisha 咖啡豆屢屢在國際拍賣中創下天價，究竟是什麼讓這個品種如此特別？本文帶你深入了解...',
  },
  {
    emoji: '🧊',
    bg: '#e3f2fd',
    tag: '咖啡飲品',
    date: '2025年4月15日',
    title: '冷萃咖啡完全指南：12小時的低溫魔法',
    excerpt: '冷萃咖啡因其滑順口感與天然甜感，近年大受歡迎。本文詳細介紹冷萃的科學原理、最佳豆種選擇，以及在家輕鬆製作的完整步驟...',
  },
  {
    emoji: '🔥',
    bg: '#fff3e0',
    tag: '烘焙知識',
    date: '2025年4月2日',
    title: '淺烘焙 vs 深烘焙：風味差異完整解析',
    excerpt: '烘焙程度對咖啡風味的影響遠比你想像中更深遠。從化學反應的角度出發，本文解析梅納反應、焦糖化與烘焙程度如何決定一杯咖啡的個性...',
  },
  {
    emoji: '🌱',
    bg: '#f3e5f5',
    tag: '永續議題',
    date: '2025年3月18日',
    title: '公平貿易咖啡：選擇一杯咖啡，改變一個農村',
    excerpt: '當你選擇一包標有公平貿易認證的咖啡豆，你的選擇如何影響遠在千里之外的咖啡農家庭？本文深入探討永續咖啡供應鏈的意義...',
  },
]

export default function Blog() {
  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-hero-icon">📖</span>
          <h1>Blog</h1>
          <p>咖啡文化、知識與生活風格的精選文章</p>
        </div>
      </div>

      <div className="page-content">
        <div className="section-header">
          <h2>最新文章</h2>
          <p>從產地故事到沖煮技術，探索咖啡的無限可能</p>
        </div>

        <div className="card-grid card-grid-3">
          {POSTS.map((post) => (
            <article className="blog-card" key={post.title}>
              <div
                className="blog-card-image"
                style={{ background: post.bg }}
              >
                {post.emoji}
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="card-tag">{post.tag}</span>
                  <span className="blog-card-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-card-link">閱讀更多 →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
