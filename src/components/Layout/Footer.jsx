function Footer() {
  return (
    <footer style={{ 
      padding: '2rem', 
      backgroundColor: '#f8f9fa', 
      borderTop: '1px solid #dee2e6',
      marginTop: '2rem',
      textAlign: 'center'
    }}>
      <p>&copy; 2024 Mon Projet React. Tous droits réservés.</p>
      <div style={{ marginTop: '1rem' }}>
        <a href="/about" style={{ margin: '0 1rem', color: '#007bff', textDecoration: 'none' }}>À propos</a>
        <a href="/contact" style={{ margin: '0 1rem', color: '#007bff', textDecoration: 'none' }}>Contact</a>
        <a href="/privacy" style={{ margin: '0 1rem', color: '#007bff', textDecoration: 'none' }}>Confidentialité</a>
      </div>
    </footer>
  )
}

export default Footer