import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/users', label: 'Utilisateurs', icon: '👥' },
    { path: '/admin/products', label: 'Produits', icon: '📦' }
  ]

  return (
    <aside style={{ 
      width: '250px', 
      backgroundColor: '#343a40', 
      color: 'white',
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Admin Panel</h3>
      
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {menuItems.map(item => (
            <li key={item.path} style={{ marginBottom: '0.5rem' }}>
              <Link
                to={item.path}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  color: location.pathname === item.path ? '#fff' : '#adb5bd',
                  backgroundColor: location.pathname === item.path ? '#495057' : 'transparent',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'all 0.3s'
                }}
              >
                <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar