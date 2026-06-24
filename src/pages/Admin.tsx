import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DataTable from '../components/admin/DataTable'
import FormModal, { type FieldConfig } from '../components/admin/FormModal'
import {
  getProducts, createProduct, updateProduct, deleteProduct,
  getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost,
  getBeanItems, createBeanItem, updateBeanItem, deleteBeanItem,
  getBrewItems, createBrewItem, updateBrewItem, deleteBrewItem,
} from '../lib/store'
import type { Product, BlogPost, BeanItem, BrewItem } from '../types'

type Tab = 'products' | 'blog' | 'bean' | 'brew'

// ─── 欄位設定 ──────────────────────────────────────────────────────

const PRODUCT_FIELDS: FieldConfig[] = [
  { key: 'title', label: '名稱', type: 'text', placeholder: '例：衣索比亞 耶加雪菲' },
  { key: 'description', label: '描述', type: 'textarea', placeholder: '商品說明' },
  { key: 'icon', label: '圖示（Emoji）', type: 'text', placeholder: '例：🫘' },
  { key: 'tag', label: '標籤', type: 'text', placeholder: '例：日曬' },
  { key: 'price', label: '價格（只輸入數字）', type: 'text', placeholder: '例：580' },
  { key: 'category', label: '分類', type: 'select', options: [
    { value: 'coffee-beans', label: '咖啡豆' },
    { value: 'equipment', label: '器材' },
  ]},
]

const BLOG_FIELDS: FieldConfig[] = [
  { key: 'title', label: '標題', type: 'text', placeholder: '文章標題' },
  { key: 'excerpt', label: '摘要', type: 'textarea', placeholder: '文章摘要內容' },
  { key: 'emoji', label: '封面 Emoji', type: 'text', placeholder: '例：☕' },
  { key: 'bgColor', label: '封面背景色', type: 'text', placeholder: '例：#f5e6d3' },
  { key: 'tag', label: '分類標籤', type: 'text', placeholder: '例：沖煮技術' },
  { key: 'date', label: '發布日期', type: 'text', placeholder: '例：2025年6月1日' },
]

const BEAN_FIELDS: FieldConfig[] = [
  { key: 'title', label: '名稱', type: 'text', placeholder: '例：衣索比亞' },
  { key: 'description', label: '描述', type: 'textarea', placeholder: '詳細說明' },
  { key: 'icon', label: '圖示（Emoji）', type: 'text', placeholder: '例：🌍' },
  { key: 'tag', label: '標籤', type: 'text', placeholder: '例：非洲' },
  { key: 'category', label: '分類', type: 'select', options: [
    { value: 'origin', label: '產地' },
    { value: 'processing', label: '處理法' },
    { value: 'variety', label: '品種' },
    { value: 'roasting', label: '烘焙' },
  ]},
]

const BREW_FIELDS: FieldConfig[] = [
  { key: 'title', label: '名稱', type: 'text', placeholder: '例：手沖 Pour Over' },
  { key: 'description', label: '描述', type: 'textarea', placeholder: '詳細說明' },
  { key: 'icon', label: '圖示（Emoji）', type: 'text', placeholder: '例：☕' },
  { key: 'tag', label: '標籤', type: 'text', placeholder: '例：手沖' },
  { key: 'category', label: '分類', type: 'select', options: [
    { value: 'extraction', label: '萃取方法' },
    { value: 'principles', label: '沖煮原理' },
    { value: 'products', label: '品項介紹' },
    { value: 'sensory', label: '感官品數' },
  ]},
]

// ─── 主元件 ────────────────────────────────────────────────────────

export default function Admin() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!sessionStorage.getItem('admin_auth')) {
      navigate('/admin/login')
    }
  }, [])

  function handleLogout() {
    sessionStorage.removeItem('admin_auth')
    navigate('/admin/login')
  }

  const [tab, setTab] = useState<Tab>('products')
  const [products, setProducts] = useState<Product[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [beanItems, setBeanItems] = useState<BeanItem[]>([])
  const [brewItems, setBrewItems] = useState<BrewItem[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState<Record<string, string> | null>(null)

  function reload() {
    setProducts(getProducts())
    setBlogPosts(getBlogPosts())
    setBeanItems(getBeanItems())
    setBrewItems(getBrewItems())
  }

  useEffect(() => { reload() }, [])

  function openCreate() {
    setEditing(null)
    setModalOpen(true)
  }

  function openEdit(item: Record<string, string>) {
    // 編輯商品時，去掉 "NT$ " 前綴只顯示數字
    if (tab === 'products' && item.price) {
      setEditing({ ...item, price: item.price.replace('NT$ ', '') })
    } else {
      setEditing(item)
    }
    setModalOpen(true)
  }

  function handleSubmit(values: Record<string, string>) {
    if (tab === 'products') {
      const data = {
        ...values,
        price: `NT$ ${values.price.replace('NT$ ', '')}`,  // 自動加上 NT$
      } as unknown as Omit<Product, 'id'>
      editing ? updateProduct(editing.id, data) : createProduct(data)
    } else if (tab === 'blog') {
      const data = values as unknown as Omit<BlogPost, 'id'>
      editing ? updateBlogPost(editing.id, data) : createBlogPost(data)
    } else if (tab === 'bean') {
      const data = values as unknown as Omit<BeanItem, 'id'>
      editing ? updateBeanItem(editing.id, data) : createBeanItem(data)
    } else {
      const data = values as unknown as Omit<BrewItem, 'id'>
      editing ? updateBrewItem(editing.id, data) : createBrewItem(data)
    }
    setModalOpen(false)
    reload()
  }

  const TABS: { key: Tab; label: string; count: number }[] = [
    { key: 'products', label: '商品管理', count: products.length },
    { key: 'blog',     label: '文章管理', count: blogPosts.length },
    { key: 'bean',     label: '咖啡豆知識', count: beanItems.length },
    { key: 'brew',     label: '沖煮知識', count: brewItems.length },
  ]

  const currentFields =
    tab === 'products' ? PRODUCT_FIELDS :
    tab === 'blog'     ? BLOG_FIELDS :
    tab === 'bean'     ? BEAN_FIELDS : BREW_FIELDS

  const currentData =
    tab === 'products' ? products :
    tab === 'blog'     ? blogPosts :
    tab === 'bean'     ? beanItems : brewItems

  const currentColumns =
    tab === 'products' ? [
      { key: 'icon', label: '圖示' },
      { key: 'title', label: '名稱' },
      { key: 'tag', label: '標籤' },
      { key: 'price', label: '價格' },
      { key: 'category', label: '分類' },
    ] : tab === 'blog' ? [
      { key: 'emoji', label: '封面' },
      { key: 'title', label: '標題' },
      { key: 'tag', label: '分類' },
      { key: 'date', label: '日期' },
    ] : [
      { key: 'icon', label: '圖示' },
      { key: 'title', label: '名稱' },
      { key: 'tag', label: '標籤' },
      { key: 'category', label: '分類' },
    ]

  const handleDelete =
    tab === 'products' ? deleteProduct :
    tab === 'blog'     ? deleteBlogPost :
    tab === 'bean'     ? deleteBeanItem : deleteBrewItem

  return (
    <div className="admin">
      {/* 頂部列 */}
      <header className="admin-header">
        <span className="admin-logo">☕ CoffeeWorld 後台</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/" className="admin-front-link" target="_blank">← 前台預覽</Link>
          <button className="admin-logout-btn" onClick={handleLogout}>登出</button>
        </div>
      </header>

      {/* 內容區 */}
      <div className="admin-body">
        {/* 分頁標籤 */}
        <div className="admin-tabs">
          {TABS.map(t => (
            <button
              key={t.key}
              className={`admin-tab${tab === t.key ? ' active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
              <span className="admin-tab-count">{t.count}</span>
            </button>
          ))}
        </div>

        {/* 資料表區 */}
        <div className="admin-content">
          <div className="admin-toolbar">
            <h2 className="admin-section-title">
              {TABS.find(t => t.key === tab)?.label}
            </h2>
            <button className="btn-admin btn-add" onClick={openCreate}>＋ 新增</button>
          </div>

          <DataTable
            columns={currentColumns}
            data={currentData as (typeof currentData[number] & { id: string })[]}
            onEdit={item => openEdit(item as unknown as Record<string, string>)}
            onDelete={id => { handleDelete(id); reload() }}
          />
        </div>
      </div>

      {/* 新增/編輯 Modal */}
      {modalOpen && (
        <FormModal
          title={editing ? '編輯資料' : '新增資料'}
          fields={currentFields}
          initialValues={editing ?? undefined}
          onSubmit={handleSubmit}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}
