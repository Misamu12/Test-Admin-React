import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Sidebar from './components/Layout/Sidebar'
import { useLocation } from 'react-router-dom'

// Pages Publiques
import Home from './pages/Public/Home'
import About from './pages/Public/About'
import Contact from './pages/Public/Contact'

// Pages Admin
import AdminDashboard from './pages/Admin/Dashboard'
import AdminUsers from './pages/Admin/Users'
import AdminProducts from './pages/Admin/Products'

function AppContent() {

  const { isAdmin } = useAuth()
  const location = useLocation()

  return (
    <div className="app">
      <Header />
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 120px)' }}>
        {isAdmin && location.pathname.startsWith('/admin') && <Sidebar />}
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Routes Publiques */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Routes Admin */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/products" element={<AdminProducts />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App