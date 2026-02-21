import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowUp, faRobot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
    { icon: faLinkedin, href: 'https://linkedin.com/in/aidev', label: 'LinkedIn' },
    { icon: faTelegram, href: 'https://t.me/aidev', label: 'Telegram' },
    { icon: faTwitter, href: 'https://twitter.com/aidev', label: 'Twitter' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <FontAwesomeIcon icon={faRobot} className="logo-icon" />
              <span className="logo-text">
                AI<span className="highlight">Dev</span>
              </span>
            </a>
            <p className="footer-tagline">
              Vibe Coding Developer | AI-Powered Development
            </p>
          </div>

          <div className="footer-social">
            <h4 className="footer-social-title">Связаться</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} AI Developer. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> & AI
          </p>
        </div>

        <motion.button
          className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Наверх"
          initial={false}
          animate={{
            opacity: showScrollTop ? 1 : 0,
            visibility: showScrollTop ? 'visible' : 'hidden',
            y: showScrollTop ? 0 : 20,
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
