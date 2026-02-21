import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} React Developer. Все права защищены.</p>
        <p className="footer-note">
          Создано с ❤️ используя React
        </p>
      </div>
    </footer>
  )
}

export default Footer
