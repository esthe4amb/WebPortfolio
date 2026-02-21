import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCode, faBrain, faArrowDown, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import FadeIn from './FadeIn'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Фоновые эффекты */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <FadeIn direction="up" delay={0.1}>
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              <span>Vibe Coding Developer</span>
            </motion.div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Кодю в потоке<br />
              <span className="gradient-text">с помощью AI</span>
            </motion.h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Создаю современные веб-приложения, используя силу нейросетей. 
              Быстрее. Умнее. Эффективнее.
            </motion.p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a href="#projects" className="btn btn-primary">
                <FontAwesomeIcon icon={faCode} />
                Смотреть проекты
              </a>
              <a href="#contact" className="btn btn-secondary">
                Связаться
              </a>
            </motion.div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="stat">
                <div className="stat-icon">
                  <FontAwesomeIcon icon={faBolt} />
                </div>
                <div className="stat-content">
                  <span className="stat-value">5x</span>
                  <span className="stat-label">Быстрее разработки</span>
                </div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-icon">
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <div className="stat-content">
                  <span className="stat-value">AI</span>
                  <span className="stat-label">Интеграции</span>
                </div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-icon">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className="stat-content">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Чистый код</span>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
        
        <FadeIn direction="right" delay={0.6}>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="window-title">ai-assistant.js</span>
              </div>
              <div className="window-content">
                <pre>
                  <code>
                    <span className="code-keyword">const</span> <span className="code-func">developer</span> = {'{'}
                    {'\n'}  <span className="code-prop">mode</span>: <span className="code-string">'vibe coding'</span>,
                    {'\n'}  <span className="code-prop">aiTools</span>: [
                    {'\n'}    <span className="code-string">'Cursor'</span>,
                    {'\n'}    <span className="code-string">'Claude'</span>,
                    {'\n'}    <span className="code-string">'GitHub Copilot'</span>
                    {'\n'}  ],
                    {'\n'}  <span className="code-prop">productivity</span>: <span className="code-number">100</span>,
                    {'\n'}  <span className="code-prop">flow</span>: <span className="code-bool">true</span>
                    {'\n'}
                    {'}'};
                    {'\n\n'}
                    <span className="code-comment">// Let the AI handle the complexity</span>
                    {'\n'}
                    <span className="code-keyword">export default</span> <span className="code-func">developer</span>;
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
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
