import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        <div className="contact-content">
          <p className="contact-text">
            Открыт для новых проектов и интересных предложений. 
            Свяжитесь со мной любым удобным способом!
          </p>
          <div className="contact-links">
            <a href="mailto:email@example.com" className="contact-link">
              <span className="contact-icon">📧</span>
              email@example.com
            </a>
            <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">✈️</span>
              Telegram
            </a>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">💻</span>
              GitHub
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
