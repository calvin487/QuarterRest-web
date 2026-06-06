import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">☕ CoffeeWorld</span>
          <p>探索咖啡的世界，品味每一口的故事與溫度。</p>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <Link to="/shop/coffee-beans">咖啡豆</Link>
          <Link to="/shop/equipment">器材</Link>
        </div>

        <div className="footer-col">
          <h4>Bean</h4>
          <Link to="/bean/origin">產地</Link>
          <Link to="/bean/processing">處理法</Link>
          <Link to="/bean/variety">品種</Link>
          <Link to="/bean/roasting">烘焙</Link>
        </div>

        <div className="footer-col">
          <h4>Brew</h4>
          <Link to="/brew/extraction">萃取方法</Link>
          <Link to="/brew/principles">沖煮原理</Link>
          <Link to="/brew/products">品項介紹</Link>
          <Link to="/brew/sensory">感官品數</Link>
        </div>

        <div className="footer-col">
          <h4>關於</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/">首頁</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CoffeeWorld. All rights reserved.</p>
      </div>
    </footer>
  )
}
