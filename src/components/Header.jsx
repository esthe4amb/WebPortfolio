import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-bracket">&lt;</span>
          Dev
          <span className="logo-bracket">/&gt;</span>
        </div>
        <nav className="nav">
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
