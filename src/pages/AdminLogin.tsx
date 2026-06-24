import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ADMIN_USER = 'admin'
const ADMIN_PASS = '0000'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    setTimeout(() => {
      if (username === ADMIN_USER && password === ADMIN_PASS) {
        sessionStorage.setItem('admin_auth', '1')
        navigate('/admin')
      } else {
        setError('帳號或密碼錯誤，請重新輸入')
        setLoading(false)
      }
    }, 400)
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">☕</div>
        <h1 className="login-title">CoffeeWorld</h1>
        <p className="login-subtitle">後台管理系統</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">帳號</label>
            <input
              className="form-input"
              type="text"
              placeholder="請輸入帳號"
              value={username}
              autoComplete="username"
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">密碼</label>
            <input
              className="form-input"
              type="password"
              placeholder="請輸入密碼"
              value={password}
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? '登入中...' : '登入'}
          </button>
        </form>
      </div>
    </div>
  )
}
