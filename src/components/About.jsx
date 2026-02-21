import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faZap, faEye, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import FadeIn from './FadeIn'
import './About.css'

function About() {
  const features = [
    {
      icon: faRobot,
      title: 'AI-Assisted Development',
      description: 'Использую нейросети для ускорения разработки и улучшения качества кода',
    },
    {
      icon: faZap,
      title: 'Vibe Coding',
      description: 'Работаю в потоке, позволяя AI обрабатывать рутинные задачи',
    },
    {
      icon: faEye,
      title: 'Code Review',
      description: 'Каждая строка кода проходит проверку через AI и ручной аудит',
    },
    {
      icon: faCodeBranch,
      title: 'Modern Stack',
      description: 'Только актуальные технологии: React, TypeScript, Next.js, AI tools',
    },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Обо мне</h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="section-subtitle">
            Разработчик нового поколения, работающий в симбиозе с искусственным интеллектом
          </p>
        </FadeIn>

        <div className="about-content">
          <FadeIn delay={0.3}>
            <div className="about-text">
              <p>
                Я <span className="highlight">AI-Native разработчик</span>, представляющий новое 
                поколение программистов, которые используют нейросети не как костыль, а как мощный 
                инструмент для ускорения и улучшения процесса разработки.
              </p>
              <p>
                Мой подход — это симбиоз человеческого креатива и машинной точности. Я позволяю AI 
                обрабатывать шаблонный код, пока я фокусируюсь на архитектуре, UX и бизнес-логике.
              </p>
              <p>
                Работаю с полным стеком технологий, создавая современные веб-приложения, 
                которые быстры, красивы и умны.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="about-stats">
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-number">3+</span>
                <span className="stat-label">Года в разработке</span>
              </motion.div>
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-number">20+</span>
                <span className="stat-label">Проектов</span>
              </motion.div>
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-number">5x</span>
                <span className="stat-label">Быстрее с AI</span>
              </motion.div>
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-number">100%</span>
                <span className="stat-label">Качество кода</span>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="feature-card"
                  whileHover={{ y: -5, borderColor: 'var(--neon-purple)' }}
                >
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default About
