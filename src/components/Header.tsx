import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  {
    label: '商店',
    path: '/shop',
    children: [
      { label: '咖啡豆', path: '/shop/coffee-beans' },
      { label: '器材', path: '/shop/equipment' },
    ],
  },
  {
    label: '咖啡豆',
    path: '/bean',
    children: [
      { label: '產地', path: '/bean/origin' },
      { label: '處理法', path: '/bean/processing' },
      { label: '品種', path: '/bean/variety' },
      { label: '烘焙', path: '/bean/roasting' },
    ],
  },
  {
    label: '萃取',
    path: '/brew',
    children: [
      { label: '萃取方法', path: '/brew/extraction' },
      { label: '沖煮原理', path: '/brew/principles' },
      { label: '品項介紹', path: '/brew/products' },
      { label: '感官品數', path: '/brew/sensory' },
    ],
  },
  { label: 'Blog', path: '/blog', children: [] },
]

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={closeMobile}>
          ☕ CoffeeWorld
        </Link>

        {/* 電腦版 Nav */}
        <nav className="nav">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="nav-item"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
                {item.children.length > 0 && <span className="nav-arrow">▾</span>}
              </NavLink>

              {item.children.length > 0 && activeMenu === item.label && (
                <div className="dropdown">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="dropdown-item"
                      onClick={() => setActiveMenu(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 手機版漢堡按鈕 */}
        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="開關選單"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* 手機版展開選單 */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="mobile-nav-item">
            {item.children.length > 0 ? (
              <>
                <button
                  className="mobile-nav-link"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <span className={`mobile-arrow${mobileExpanded === item.label ? ' open' : ''}`}>
                    ▾
                  </span>
                </button>
                <div className={`mobile-dropdown${mobileExpanded === item.label ? ' open' : ''}`}>
                  <Link to={item.path} className="mobile-dropdown-item" onClick={closeMobile}>
                    全部{item.label}
                  </Link>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="mobile-dropdown-item"
                      onClick={closeMobile}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
                onClick={closeMobile}
              >
                {item.label}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </header>
  )
}
