import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#home" className="nav-link">Главная</a>
          <a href="#about" className="nav-link">Обо мне</a>
          <a href="#projects" className="nav-link">Проекты</a>
          <a href="#contact" className="nav-link">Контакты</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Привет, я <span className="highlight">Разработчик</span></h1>
            <p className="subtitle">Frontend Developer | React | TypeScript</p>
            <p className="description">
              Создаю современные и удобные веб-приложения
            </p>
            <a href="#projects" className="btn">Смотреть работы</a>
          </div>
        </section>

        <section id="about" className="section about">
          <h2>Обо мне</h2>
          <p>
            Я начинающий frontend-разработчик, увлечённый созданием красивых 
            и функциональных интерфейсов. Изучаю современные технологии: 
            React, TypeScript, Vite.
          </p>
        </section>

        <section id="projects" className="section projects">
          <h2>Проекты</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>WebPortfolio</h3>
              <p>Моё портфолио на React + Vite</p>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Vite</span>
            </div>
            <div className="project-card">
              <h3>Проект 2</h3>
              <p>Описание будущего проекта</p>
              <span className="tech-tag">React</span>
            </div>
            <div className="project-card">
              <h3>Проект 3</h3>
              <p>Описание будущего проекта</p>
              <span className="tech-tag">TypeScript</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Контакты</h2>
          <p>Готов к сотрудничеству и интересным проектам!</p>
          <div className="contact-links">
            <a href="https://github.com/esthe4amb" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href="mailto:email@example.com" className="contact-link">
              Email
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 WebPortfolio. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App
