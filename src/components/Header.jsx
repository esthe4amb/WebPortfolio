import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faRobot, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import FadeIn from './FadeIn'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'Обо мне' },
    { href: '#stack', label: 'Стек' },
    { href: '#projects', label: 'Проекты' },
    { href: '#contact', label: 'Контакты' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <motion.a 
          href="#" 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <FontAwesomeIcon icon={faRobot} className="logo-icon" />
          <span className="logo-text">
            AI<span className="highlight">Dev</span>
          </span>
        </motion.a>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <motion.button 
            className="ai-badge"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            <span>AI-Powered</span>
          </motion.button>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
