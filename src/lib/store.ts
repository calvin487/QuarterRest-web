import type { Product, BlogPost, BeanItem, BrewItem } from '../types'

// ─── 初始假資料 ────────────────────────────────────────────────────

const DEFAULT_PRODUCTS: Product[] = [
  { id: '1', category: 'coffee-beans', icon: '🌸', tag: '日曬', title: '衣索比亞 耶加雪菲', description: '花香、柑橘調性，日曬處理法，中淺烘焙，適合手沖', price: 'NT$ 580' },
  { id: '2', category: 'coffee-beans', icon: '🍫', tag: '水洗', title: '哥倫比亞 花神', description: '焦糖、堅果、黑巧克力風味，水洗處理，中烘焙', price: 'NT$ 520' },
  { id: '3', category: 'coffee-beans', icon: '🌺', tag: '蜜處理', title: '巴拿馬 翡翠莊園 Geisha', description: '茉莉花香，蜂蜜甜感，Geisha 稀有品種，淺烘焙', price: 'NT$ 1,200' },
  { id: '4', category: 'coffee-beans', icon: '🌋', tag: '水洗', title: '瓜地馬拉 安提瓜', description: '煙燻、黑糖、奶油，火山土壤種植，中深烘焙', price: 'NT$ 480' },
  { id: '5', category: 'coffee-beans', icon: '🍇', tag: '水洗', title: '肯亞 AA Top', description: '黑醋栗、蕃茄、葡萄酒感，SL28 品種，中淺烘焙', price: 'NT$ 620' },
  { id: '6', category: 'coffee-beans', icon: '🫐', tag: '日曬', title: '耶門 摩卡 Mattari', description: '野性、藍莓、可可風味，古老傳統日曬處理法', price: 'NT$ 980' },
  { id: '7', category: 'equipment', icon: '🔺', tag: '手沖', title: 'Hario V60 濾杯 01', description: '日本製陶瓷手沖濾杯，01 號，1-2 人用，散熱快', price: 'NT$ 350' },
  { id: '8', category: 'equipment', icon: '🌊', tag: '手沖', title: 'Kalita Wave 155', description: '平底三孔設計，穩定萃取流速，新手友善', price: 'NT$ 680' },
  { id: '9', category: 'equipment', icon: '🎯', tag: '浸泡', title: 'AeroPress 愛樂壓', description: '便攜式全能咖啡器，快速沖煮，風味多變', price: 'NT$ 1,280' },
  { id: '10', category: 'equipment', icon: '🫖', tag: '熱水壺', title: 'Fellow Stagg EKG+ 電熱壺', description: '鵝頸壺，±1°C 精準控溫，藍牙控制', price: 'NT$ 4,500' },
  { id: '11', category: 'equipment', icon: '⚙️', tag: '磨豆機', title: 'Timemore C3 Pro 手搖磨豆機', description: '不鏽鋼錐刀，研磨均勻，60 段調節，輕量攜帶', price: 'NT$ 1,880' },
  { id: '12', category: 'equipment', icon: '⚖️', tag: '電子秤', title: 'Acaia Pearl 電子秤', description: '高精度 0.1g 計量，藍牙連接，內建計時功能', price: 'NT$ 5,200' },
]

const DEFAULT_BLOG: BlogPost[] = [
  { id: '1', emoji: '🌍', bgColor: '#f5e6d3', tag: '產地報導', date: '2025年5月20日', title: '衣索比亞咖啡農場直擊：從果實到生豆的旅程', excerpt: '跟著我們的採購團隊走訪衣索比亞耶加雪菲產區，親眼見證傳統日曬處理法如何將咖啡果實轉化為風味獨特的生豆...' },
  { id: '2', emoji: '☕', bgColor: '#e8f5e9', tag: '沖煮技術', date: '2025年5月10日', title: '手沖咖啡的5個常見錯誤，你中了幾個？', excerpt: '許多剛入門手沖咖啡的愛好者，常在不知不覺中犯下影響風味的錯誤。本文整理了5個最常見的手沖失誤，逐一分析原因與解決方法...' },
  { id: '3', emoji: '🫘', bgColor: '#fce4ec', tag: '品種研究', date: '2025年4月28日', title: 'Geisha 品種為何如此昂貴？一文看懂稀有品種的秘密', excerpt: '巴拿馬翡翠莊園的 Geisha 咖啡豆屢屢在國際拍賣中創下天價，究竟是什麼讓這個品種如此特別？本文帶你深入了解...' },
  { id: '4', emoji: '🧊', bgColor: '#e3f2fd', tag: '咖啡飲品', date: '2025年4月15日', title: '冷萃咖啡完全指南：12小時的低溫魔法', excerpt: '冷萃咖啡因其滑順口感與天然甜感，近年大受歡迎。本文詳細介紹冷萃的科學原理、最佳豆種選擇，以及在家輕鬆製作的完整步驟...' },
  { id: '5', emoji: '🔥', bgColor: '#fff3e0', tag: '烘焙知識', date: '2025年4月2日', title: '淺烘焙 vs 深烘焙：風味差異完整解析', excerpt: '烘焙程度對咖啡風味的影響遠比你想像中更深遠。從化學反應的角度出發，本文解析梅納反應、焦糖化與烘焙程度如何決定一杯咖啡的個性...' },
  { id: '6', emoji: '🌱', bgColor: '#f3e5f5', tag: '永續議題', date: '2025年3月18日', title: '公平貿易咖啡：選擇一杯咖啡，改變一個農村', excerpt: '當你選擇一包標有公平貿易認證的咖啡豆，你的選擇如何影響遠在千里之外的咖啡農家庭？本文深入探討永續咖啡供應鏈的意義...' },
]

const DEFAULT_BEAN: BeanItem[] = [
  { id: '1', category: 'origin', icon: '🌍', tag: '非洲', title: '衣索比亞', description: '咖啡的發源地，耶加雪菲、西達摩、哈拉等產區聞名，花香果香豐富多樣' },
  { id: '2', category: 'origin', icon: '🌎', tag: '中南美洲', title: '哥倫比亞', description: '全球第三大生產國，安地斯山脈海拔賦予均衡豐富風味，口感溫和甜美' },
  { id: '3', category: 'origin', icon: '🌎', tag: '中南美洲', title: '巴西', description: '世界最大咖啡生產國，以堅果、牛奶巧克力等低酸圓潤調性著稱' },
  { id: '4', category: 'origin', icon: '🌍', tag: '非洲', title: '肯亞', description: 'SL28、SL34 品種獨特，黑醋栗、莓果、番茄風味，口感豐富層次高' },
  { id: '5', category: 'processing', icon: '💧', tag: 'Washed', title: '水洗處理', description: '去除果肉後在水中發酵去除果膠，風味乾淨清晰，強調豆子本質與產地特色' },
  { id: '6', category: 'processing', icon: '☀️', tag: 'Natural', title: '日曬處理', description: '整顆果實直接日曬乾燥，果膠糖分滲入豆中，風味濃郁甜美，帶發酵果香' },
  { id: '7', category: 'processing', icon: '🍯', tag: 'Honey', title: '蜜處理', description: '保留部分果膠後乾燥，依留存量分黃蜜、紅蜜、黑蜜，介於水洗與日曬之間' },
  { id: '8', category: 'processing', icon: '🧪', tag: 'Anaerobic', title: '厭氧發酵', description: '密閉容器中無氧發酵，產生獨特的發酵果味與高複雜度，近年精品市場新寵' },
  { id: '9', category: 'variety', icon: '🌱', tag: '主流品種', title: 'Arabica 阿拉比卡', description: '占全球產量約60%，風味豐富層次多，咖啡因低，廣泛應用於精品咖啡市場' },
  { id: '10', category: 'variety', icon: '🌺', tag: '稀有品種', title: 'Geisha 藝妓', description: '起源衣索比亞，獨特花香茉莉調性，近年巴拿馬種植後聲名大噪，價格不菲' },
  { id: '11', category: 'roasting', icon: '🟡', tag: 'Light Roast', title: '淺烘焙', description: '保留最多原產地風味，高亮酸，花香果香明顯，豆體密實，手沖最佳選擇' },
  { id: '12', category: 'roasting', icon: '⚫', tag: 'Dark Roast', title: '深烘焙', description: '苦味為主調，油脂豐富顯著，煙燻炭香明顯，適合義式濃縮及加奶飲品' },
]

const DEFAULT_BREW: BrewItem[] = [
  { id: '1', category: 'extraction', icon: '🔺', tag: '手沖', title: '濾滴式 Pour Over', description: '以穩定細水流手動沖煮，能精準控制水溫、水量與時間，呈現豆子細膩風味' },
  { id: '2', category: 'extraction', icon: '☁️', tag: '濃縮', title: '義式濃縮 Espresso', description: '9 bar 高壓在短時間萃取，濃縮豆子精華，風味強烈，是多種咖啡飲品的基底' },
  { id: '3', category: 'extraction', icon: '🧊', tag: '冷萃', title: '冷萃 Cold Brew', description: '以冷水長時間緩慢萃取，低酸順口，天然甜感，夏季最愛' },
  { id: '4', category: 'principles', icon: '🌡️', tag: '水溫', title: '水溫控制', description: '建議 90-96°C，淺焙偏高、深焙偏低。水溫影響溶解速率與風味物質萃取量' },
  { id: '5', category: 'principles', icon: '⚖️', tag: '比例', title: '咖啡粉水比', description: '標準比例 1:15（手沖）到 1:2（義式），比例決定濃度，影響整體風味平衡' },
  { id: '6', category: 'products', icon: '☕', tag: '義式基底', title: 'Espresso 義式濃縮', description: '30ml 的咖啡精華，風味濃縮強烈，作為 Latte、Cappuccino 等飲品基底' },
  { id: '7', category: 'products', icon: '🥛', tag: '奶咖', title: 'Latte 拿鐵', description: '雙份 Espresso + 大量蒸奶（約 180-220ml），口感綿滑溫和，奶味為主' },
  { id: '8', category: 'sensory', icon: '🍊', tag: '酸質', title: 'Acidity 酸質', description: '優質的酸感明亮清晰，如柑橘、蘋果、莓果般的果酸，是精品咖啡重要指標' },
  { id: '9', category: 'sensory', icon: '💪', tag: '醇厚度', title: 'Body 醇厚感', description: '咖啡在口中的重量感與質地，油脂豐富的豆子醇厚度高，手沖通常較輕盈' },
]

// ─── 通用 localStorage 工具 ────────────────────────────────────────

function getStore<T>(key: string, defaults: T[]): T[] {
  try {
    const stored = localStorage.getItem(key)
    return stored ? (JSON.parse(stored) as T[]) : defaults
  } catch {
    return defaults
  }
}

function setStore<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data))
}

function newId(): string {
  return crypto.randomUUID()
}

// ─── Products ─────────────────────────────────────────────────────

const PRODUCTS_KEY = 'cw_products'

export function getProducts(): Product[] {
  return getStore(PRODUCTS_KEY, DEFAULT_PRODUCTS)
}
export function createProduct(data: Omit<Product, 'id'>): Product {
  const item: Product = { ...data, id: newId() }
  setStore(PRODUCTS_KEY, [...getProducts(), item])
  return item
}
export function updateProduct(id: string, data: Omit<Product, 'id'>): void {
  setStore(PRODUCTS_KEY, getProducts().map(p => (p.id === id ? { ...data, id } : p)))
}
export function deleteProduct(id: string): void {
  setStore(PRODUCTS_KEY, getProducts().filter(p => p.id !== id))
}

// ─── Blog ─────────────────────────────────────────────────────────

const BLOG_KEY = 'cw_blog'

export function getBlogPosts(): BlogPost[] {
  return getStore(BLOG_KEY, DEFAULT_BLOG)
}
export function createBlogPost(data: Omit<BlogPost, 'id'>): BlogPost {
  const item: BlogPost = { ...data, id: newId() }
  setStore(BLOG_KEY, [...getBlogPosts(), item])
  return item
}
export function updateBlogPost(id: string, data: Omit<BlogPost, 'id'>): void {
  setStore(BLOG_KEY, getBlogPosts().map(p => (p.id === id ? { ...data, id } : p)))
}
export function deleteBlogPost(id: string): void {
  setStore(BLOG_KEY, getBlogPosts().filter(p => p.id !== id))
}

// ─── Bean ─────────────────────────────────────────────────────────

const BEAN_KEY = 'cw_bean'

export function getBeanItems(): BeanItem[] {
  return getStore(BEAN_KEY, DEFAULT_BEAN)
}
export function createBeanItem(data: Omit<BeanItem, 'id'>): BeanItem {
  const item: BeanItem = { ...data, id: newId() }
  setStore(BEAN_KEY, [...getBeanItems(), item])
  return item
}
export function updateBeanItem(id: string, data: Omit<BeanItem, 'id'>): void {
  setStore(BEAN_KEY, getBeanItems().map(p => (p.id === id ? { ...data, id } : p)))
}
export function deleteBeanItem(id: string): void {
  setStore(BEAN_KEY, getBeanItems().filter(p => p.id !== id))
}

// ─── Brew ─────────────────────────────────────────────────────────

const BREW_KEY = 'cw_brew'

export function getBrewItems(): BrewItem[] {
  return getStore(BREW_KEY, DEFAULT_BREW)
}
export function createBrewItem(data: Omit<BrewItem, 'id'>): BrewItem {
  const item: BrewItem = { ...data, id: newId() }
  setStore(BREW_KEY, [...getBrewItems(), item])
  return item
}
export function updateBrewItem(id: string, data: Omit<BrewItem, 'id'>): void {
  setStore(BREW_KEY, getBrewItems().map(p => (p.id === id ? { ...data, id } : p)))
}
export function deleteBrewItem(id: string): void {
  setStore(BREW_KEY, getBrewItems().filter(p => p.id !== id))
}
