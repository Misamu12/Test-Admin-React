import { useAuth } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

function AdminProducts() {
  const { isAdmin } = useAuth()
  const [products, setProducts] = useState([
    { id: 1, name: 'Produit A', price: 29.99, stock: 15, category: 'Électronique' },
    { id: 2, name: 'Produit B', price: 49.99, stock: 8, category: 'Maison' },
    { id: 3, name: 'Produit C', price: 19.99, stock: 25, category: 'Vêtements' }
  ])

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: '',
    category: ''
  })

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    const product = {
      id: products.length + 1,
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock),
      category: newProduct.category
    }
    setProducts([...products, product])
    setNewProduct({ name: '', price: '', stock: '', category: '' })
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Gestion des Produits</h1>
      
      {/* Formulaire d'ajout */}
      <section style={{ marginBottom: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Ajouter un nouveau produit</h3>
        <form onSubmit={handleAddProduct} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Nom du produit"
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            required
            style={{ padding: '0.5rem' }}
          />
          <input
            type="number"
            placeholder="Prix"
            step="0.01"
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            required
            style={{ padding: '0.5rem' }}
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
            required
            style={{ padding: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="Catégorie"
            value={newProduct.category}
            onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
            required
            style={{ padding: '0.5rem' }}
          />
          <button 
            type="submit"
            style={{ 
              gridColumn: '1 / -1',
              padding: '0.75rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Ajouter le produit
          </button>
        </form>
      </section>

      {/* Tableau des produits */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa' }}>
            <th style={{ border: '1px solid #dee2e6', padding: '12px', textAlign: 'left' }}>ID</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px', textAlign: 'left' }}>Nom</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px', textAlign: 'left' }}>Prix</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px', textAlign: 'left' }}>Stock</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px', textAlign: 'left' }}>Catégorie</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{product.id}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{product.name}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{product.price}€</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{product.stock}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{product.category}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>
                <button 
                  onClick={() => handleDeleteProduct(product.id)}
                  style={{ 
                    padding: '0.5rem 1rem', 
                    backgroundColor: '#dc3545', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminProducts