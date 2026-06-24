import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Bean from './pages/Bean'
import Brew from './pages/Brew'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 後台（無 Header/Footer） */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />

        {/* 前台 */}
        <Route path="/*" element={
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:category" element={<Shop />} />
                <Route path="/bean" element={<Bean />} />
                <Route path="/bean/:category" element={<Bean />} />
                <Route path="/brew" element={<Brew />} />
                <Route path="/brew/:category" element={<Brew />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
