import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/esthe4amb', label: 'GitHub' },
    { icon: faLinkedin, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
    { icon: faTelegram, href: 'https://t.me/username', label: 'Telegram' },
    { icon: faTwitter, href: 'https://twitter.com/username', label: 'Twitter' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              Dev
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">
              Создаю современные веб-приложения с фокусом на качество и пользовательский опыт
            </p>
          </div>

          <div className="footer-social">
            <h4 className="footer-social-title">Связаться</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} React Developer. Все права защищены.
          </p>
          <p className="footer-made-with">
            Сделано с <FontAwesomeIcon icon={faHeart} className="heart-icon" /> используя React
          </p>
        </div>

        <button
          className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Наверх"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
