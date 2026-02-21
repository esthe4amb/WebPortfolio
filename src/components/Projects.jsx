import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'E-commerce Платформа',
      description: 'Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
      image: '🛒',
      link: '#',
    },
    {
      title: 'Dashboard Аналитики',
      description: 'Панель управления с графиками, таблицами и экспортом данных',
      tech: ['React', 'TypeScript', 'Chart.js', 'Material UI'],
      image: '📊',
      link: '#',
    },
    {
      title: 'Социальная Сеть',
      description: 'Платформа для общения с постами, комментариями и уведомлениями',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
      image: '💬',
      link: '#',
    },
    {
      title: 'Task Manager',
      description: 'Приложение для управления задачами с drag-and-drop и командной работой',
      tech: ['React', 'DnD', 'Firebase', 'Redux'],
      image: '✅',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Проекты</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                Смотреть →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
