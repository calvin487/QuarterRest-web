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

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          ☕ CoffeeWorld
        </Link>
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
      </div>
    </header>
  )
}
