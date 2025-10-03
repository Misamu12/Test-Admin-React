import { useAuth } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

function AdminDashboard() {
  const { isAdmin } = useAuth()

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  return (
    <div>
      <h1>Tableau de Bord Admin</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
          <h3>Utilisateurs</h3>
          <p>150 inscrits</p>
        </div>
        <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
          <h3>Produits</h3>
          <p>45 produits</p>
        </div>
        <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
          <h3>Commandes</h3>
          <p>12 commandes aujourd'hui</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard