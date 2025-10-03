import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'

function Header() {
  const { user, isAdmin, login, logout } = useAuth()
  const [showLoginOptions, setShowLoginOptions] = useState(false)

  const handleLogin = (role) => {
    const userData = role === 'admin' 
      ? {
          id: 1,
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'admin'
        }
      : {
          id: 2,
          name: 'Utilisateur Normal',
          email: 'user@example.com',
          role: 'user'
        }
    
    login(userData)
    setShowLoginOptions(false)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <header style={{ 
      padding: '1rem', 
      borderBottom: '1px solid #ccc',
      backgroundColor: '#f8f9fa',
      position: 'relative'
    }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>
            Accueil
          </Link>
          <Link to="/about" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>
            À propos
          </Link>
          <Link to="/contact" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>
            Contact
          </Link>
          
          {isAdmin && (
            <>
              <span style={{ marginRight: '1rem', color: '#666' }}>|</span>
              <Link to="/admin" style={{ marginRight: '1rem', textDecoration: 'none', color: '#dc3545' }}>
                Admin
              </Link>
              <Link to="/admin/users" style={{ marginRight: '1rem', textDecoration: 'none', color: '#dc3545' }}>
                Utilisateurs
              </Link>
              <Link to="/admin/products" style={{ marginRight: '1rem', textDecoration: 'none', color: '#dc3545' }}>
                Produits
              </Link>
            </>
          )}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {user && (
            <span style={{ color: '#666', fontSize: '0.9rem' }}>
              Connecté en tant que <strong>{user.name}</strong>
              {isAdmin && <span style={{ color: '#dc3545', marginLeft: '0.5rem' }}>(Admin)</span>}
            </span>
          )}
          
          {user ? (
            <button 
              onClick={handleLogout}
              style={{ 
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Déconnexion
            </button>
          ) : (
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setShowLoginOptions(!showLoginOptions)}
                style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Connexion
              </button>
              
              {showLoginOptions && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '0.5rem',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  zIndex: 1000
                }}>
                  <button
                    onClick={() => handleLogin('admin')}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #eee',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    👑 Se connecter en Admin
                  </button>
                  <button
                    onClick={() => handleLogin('user')}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    👤 Se connecter en Utilisateur
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header