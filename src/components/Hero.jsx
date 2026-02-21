import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCode, faRocket } from '@fortawesome/free-solid-svg-icons'
import FadeIn from './FadeIn'
import './Hero.css'

function Hero() {
  const codeLines = [
    { text: 'const', color: 'code-keyword' },
    { text: ' developer', color: 'code-variable' },
    { text: ' =', color: 'code-operator' },
    { text: ' {', color: 'code-punctuation' },
  ]
  const codeProperties = [
    { text: '  name:', color: 'code-keyword', value: "'React Developer'", valueColor: 'code-string' },
    { text: '  skills:', color: 'code-keyword', value: "['React', 'TypeScript', 'Next.js']", valueColor: 'code-array' },
    { text: '  experience:', color: 'code-keyword', value: "'3+ years'", valueColor: 'code-string' },
    { text: '  location:', color: 'code-keyword', value: "'Remote'", valueColor: 'code-string' },
    { text: '  available:', color: 'code-keyword', value: 'true', valueColor: 'code-boolean' },
  ]

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <FadeIn direction="up" delay={0.1}>
            <div className="hero-badge">
              <FontAwesomeIcon icon={faRocket} />
              <span>Открыт для проектов</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="greeting">Привет, я</p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <h1 className="name">
              <span className="name-highlight">React</span> Разработчик
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <p className="title">
              Создаю современные, производительные и масштабируемые веб-приложения
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <p className="description">
              Специализируюсь на разработке frontend-решений с использованием 
              современных технологий и лучших практик индустрии
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.6}>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary btn-glow">
                <FontAwesomeIcon icon={faCode} />
                Смотреть работы
              </a>
              <a href="#contact" className="btn btn-secondary">
                Связаться
              </a>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.7}>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">3+</span>
                <span className="hero-stat-label">Года опыта</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-number">20+</span>
                <span className="hero-stat-label">Проектов</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-number">15+</span>
                <span className="hero-stat-label">Клиентов</span>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn direction="left" delay={0.5}>
          <div className="hero-image">
            <motion.div 
              className="code-block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="code-header">
                <div className="code-dots">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span className="code-dot green"></span>
                </div>
                <span className="code-title">developer.js</span>
              </div>
              <pre>
                <code>
                  <div className="code-line">
                    {codeLines.map((line, i) => (
                      <span key={i} className={line.color}>{line.text}</span>
                    ))}
                  </div>
                  {codeProperties.map((prop, i) => (
                    <div key={i} className="code-line">
                      <span className={prop.color}>{prop.text}</span>
                      <span className={prop.valueColor}>{prop.value}</span>
                      <span className="code-punctuation">{i < codeProperties.length - 1 ? ',' : ''}</span>
                    </div>
                  ))}
                  <div className="code-line">
                    <span className="code-punctuation">{'};'}</span>
                  </div>
                </code>
              </pre>
            </motion.div>
          </div>
        </FadeIn>
      </div>
      
      <motion.a 
        href="#about" 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </motion.a>
    </section>
  )
}

export default Hero
