import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faFilter } from '@fortawesome/free-solid-svg-icons'
import { faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons'
import FadeIn from './FadeIn'
import './Projects.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'react', label: 'React' },
    { id: 'nextjs', label: 'Next.js' },
    { id: 'fullstack', label: 'Fullstack' },
  ]

  const projects = [
    {
      title: 'E-commerce Платформа',
      description: 'Полнофункциональный интернет-магазин с корзиной, оплатой через Stripe и админ-панелью для управления товарами',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      image: '🛒',
      demoLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      title: 'Dashboard Аналитики',
      description: 'Интерактивная панель управления с визуализацией данных, экспортом отчётов и реальным временем обновления',
      tech: ['React', 'TypeScript', 'Chart.js', 'Material UI', 'WebSocket'],
      category: 'react',
      image: '📊',
      demoLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      title: 'Социальная Сеть',
      description: 'Платформа для общения с постами, комментариями, уведомлениями и системой подписок',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'Socket.io'],
      category: 'nextjs',
      image: '💬',
      demoLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      title: 'Task Manager Pro',
      description: 'Приложение для управления задачами с drag-and-drop, командной работой и интеграцией с календарём',
      tech: ['React', 'DnD Kit', 'Firebase', 'Redux Toolkit'],
      category: 'react',
      image: '✅',
      demoLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      title: 'Crypto Portfolio',
      description: 'Трекер криптовалютных активов с реальными ценами, портфелем и историей транзакций',
      tech: ['Next.js', 'TypeScript', 'CoinGecko API', 'Chart.js'],
      category: 'nextjs',
      image: '📈',
      demoLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      title: 'Blog Platform',
      description: 'Платформа для ведения блогов с Markdown-редактором, SEO-оптимизацией и комментариями',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'MDX'],
      category: 'fullstack',
      image: '✍️',
      demoLink: '#',
      githubLink: '#',
      featured: false,
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = filteredProjects.filter(p => p.featured)
  const otherProjects = filteredProjects.filter(p => !p.featured)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Проекты</h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="section-subtitle">
            Избранные проекты, демонстрирующие мои навыки и опыт
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="projects-filters">
            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {featuredProjects.length > 0 && (
          <>
            <FadeIn delay={0.4}>
              <h3 className="projects-subtitle">Избранные проекты</h3>
            </FadeIn>
            
            <div className="projects-grid featured">
              {featuredProjects.map((project, index) => (
                <FadeIn key={project.title} delay={index * 0.1}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </>
        )}

        {otherProjects.length > 0 && (
          <>
            <FadeIn delay={0.5}>
              <h3 className="projects-subtitle">Другие проекты</h3>
            </FadeIn>
            
            <div className="projects-grid">
              {otherProjects.map((project, index) => (
                <FadeIn key={project.title} delay={index * 0.1}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <span className="project-emoji">{project.image}</span>
        <div className="project-overlay">
          <div className="project-actions">
            <a 
              href={project.demoLink} 
              className="action-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span>Demo</span>
            </a>
            <a 
              href={project.githubLink} 
              className="action-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubBrand} />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
