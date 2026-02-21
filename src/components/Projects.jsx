import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faFilter } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import FadeIn from './FadeIn'
import './Projects.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'saas', label: 'SaaS' },
  ]

  const projects = [
    {
      title: 'AI Code Assistant',
      description: 'Интеллектуальный помощник для разработчиков на базе GPT-4 с интеграцией в VS Code',
      tech: ['React', 'Python', 'OpenAI API', 'WebSocket'],
      category: 'ai',
      image: '🤖',
      demoLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      title: 'Smart Dashboard',
      description: 'Аналитическая панель с AI-прогнозами и автоматической генерацией отчётов',
      tech: ['Next.js', 'TypeScript', 'Chart.js', 'TensorFlow.js'],
      category: 'ai',
      image: '📊',
      demoLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      title: 'E-commerce Platform',
      description: 'Полнофункциональный магазин с AI-рекомендациями товаров и чат-ботом поддержки',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      image: '🛒',
      demoLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      title: 'Task Flow Pro',
      description: 'Умный менеджер задач с автоматической приоритизацией и AI-планированием',
      tech: ['React', 'Firebase', 'OpenAI', 'DnD Kit'],
      category: 'saas',
      image: '✅',
      demoLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      title: 'Content Generator',
      description: 'SaaS платформа для генерации контента с помощью нейросетей',
      tech: ['Next.js', 'FastAPI', 'GPT-4', 'PostgreSQL'],
      category: 'saas',
      image: '✍️',
      demoLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      title: 'Crypto Tracker',
      description: 'Трекер криптовалют с AI-предсказаниями и портфельным анализом',
      tech: ['React', 'Python', 'CoinGecko API', 'ML'],
      category: 'web',
      image: '📈',
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
            Избранные проекты, созданные с помощью AI и современных технологий
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="projects-filters">
            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
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
    <motion.div 
      className="project-card"
      whileHover={{ y: -8 }}
    >
      <div className="project-image">
        <span className="project-emoji">{project.image}</span>
        <div className="project-overlay">
          <div className="project-actions">
            <a 
              href={project.demoLink} 
              className="action-btn primary"
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
              <FontAwesomeIcon icon={faGithub} />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
