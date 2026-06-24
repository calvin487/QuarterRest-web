import { useEffect, useState } from 'react'
import { getBlogPosts } from '../lib/store'
import type { BlogPost } from '../types'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    setPosts(getBlogPosts())
  }, [])

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
          {posts.map(post => (
            <article className="blog-card" key={post.id}>
              <div className="blog-card-image" style={{ background: post.bgColor }}>
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
