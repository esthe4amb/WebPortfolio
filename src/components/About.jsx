import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Обо мне</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Я <strong>frontend-разработчик</strong>, специализирующийся на создании 
              интерактивных пользовательских интерфейсов с помощью React. Моя страсть — 
              превращать сложные задачи в простые и интуитивно понятные решения.
            </p>
            <p>
              Имею опыт работы с современными технологиями и фреймворками экосистемы 
              React. Постоянно изучаю новые подходы и лучшие практики разработки.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Года опыта</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Проектов</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Клиентов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
