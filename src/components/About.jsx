import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faUsers, faAward } from '@fortawesome/free-solid-svg-icons'
import FadeIn from './FadeIn'
import './About.css'

function About() {
  const features = [
    {
      icon: faCode,
      title: 'Чистый код',
      description: 'Пишу поддерживаемый и тестируемый код следуя лучшим практикам',
    },
    {
      icon: faLaptopCode,
      title: 'Современные технологии',
      description: 'Использую актуальный стек технологий для оптимальных решений',
    },
    {
      icon: faUsers,
      title: 'Командная работа',
      description: 'Эффективно работаю в команде и открыт к коммуникации',
    },
    {
      icon: faAward,
      title: 'Качество',
      description: 'Гарантирую высокое качество и внимание к деталям',
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
            Passionate разработчик с фокусом на создание отличного пользовательского опыта
          </p>
        </FadeIn>

        <div className="about-content">
          <FadeIn delay={0.3}>
            <div className="about-text">
              <p>
                Я <span className="text-highlight">frontend-разработчик</span>, специализирующийся на создании 
                интерактивных и производительных пользовательских интерфейсов с помощью React и современной 
                экосистемы JavaScript.
              </p>
              <p>
                Мой подход к разработке сочетает в себе техническую экспертизу и внимание к деталям дизайна. 
                Я верю, что хорошие приложения должны быть не только функциональными, но и интуитивно понятными, 
                доступными и приятными в использовании.
              </p>
              <p>
                Постоянно изучаю новые технологии и подходы, чтобы оставаться в курсе последних тенденций 
                веб-разработки и предоставлять клиентам решения мирового уровня.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">3+</span>
                <span className="stat-label">Года опыта</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">20+</span>
                <span className="stat-label">Проектов</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">15+</span>
                <span className="stat-label">Клиентов</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Довольных</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default About
