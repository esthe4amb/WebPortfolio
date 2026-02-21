import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="greeting">Привет, я</p>
          <h1 className="name">React Разработчик</h1>
          <p className="title">Создаю современные веб-приложения</p>
          <p className="description">
            Специализируюсь на разработке производительных и масштабируемых 
            frontend-решений с использованием React и современных технологий
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Смотреть работы</a>
            <a href="#contact" className="btn btn-secondary">Связаться</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-block">
            <pre>
              <code>
{`const developer = {
  name: 'React Dev',
  skills: ['React', 'TypeScript', 'Next.js'],
  experience: '3+ года',
  location: 'Remote'
};

export default developer;`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
