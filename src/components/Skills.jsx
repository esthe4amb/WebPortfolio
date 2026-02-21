import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faGitAlt, 
  faNodeJs,
  faPython,
  faDocker
} from '@fortawesome/free-brands-svg-icons'
import { 
  faDatabase, 
  faServer, 
  faCodeBranch,
  faTerminal
} from '@fortawesome/free-solid-svg-icons'
import FadeIn from './FadeIn'
import './Skills.css'

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Все' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Инструменты' },
  ]

  const skills = [
    { 
      name: 'React', 
      level: 95, 
      category: 'frontend', 
      icon: faReact,
      color: '#61dafb',
      description: 'Hooks, Context, Redux, Router'
    },
    { 
      name: 'TypeScript', 
      level: 88, 
      category: 'frontend', 
      icon: faCodeBranch,
      color: '#3178c6',
      description: 'Типизация, Generics, Utilities'
    },
    { 
      name: 'Next.js', 
      level: 85, 
      category: 'frontend', 
      icon: faServer,
      color: '#000000',
      description: 'SSR, SSG, API Routes'
    },
    { 
      name: 'JavaScript', 
      level: 92, 
      category: 'frontend', 
      icon: faJs,
      color: '#f7df1e',
      description: 'ES6+, Async/Await, Modules'
    },
    { 
      name: 'HTML5', 
      level: 95, 
      category: 'frontend', 
      icon: faHtml5,
      color: '#e34f26',
      description: 'Semantic, Accessibility, SEO'
    },
    { 
      name: 'CSS3/SASS', 
      level: 90, 
      category: 'frontend', 
      icon: faCss3Alt,
      color: '#264de4',
      description: 'Flexbox, Grid, Animations'
    },
    { 
      name: 'Node.js', 
      level: 75, 
      category: 'backend', 
      icon: faNodeJs,
      color: '#339933',
      description: 'Express, REST APIs, WebSocket'
    },
    { 
      name: 'Python', 
      level: 65, 
      category: 'backend', 
      icon: faPython,
      color: '#3776ab',
      description: 'FastAPI, Django, Scripts'
    },
    { 
      name: 'PostgreSQL', 
      level: 70, 
      category: 'backend', 
      icon: faDatabase,
      color: '#336791',
      description: 'Queries, Optimization, Prisma'
    },
    { 
      name: 'Git', 
      level: 88, 
      category: 'tools', 
      icon: faGitAlt,
      color: '#f05032',
      description: 'Branching, Rebase, Workflows'
    },
    { 
      name: 'Docker', 
      level: 70, 
      category: 'tools', 
      icon: faDocker,
      color: '#2496ed',
      description: 'Containers, Compose, Deploy'
    },
    { 
      name: 'Terminal', 
      level: 80, 
      category: 'tools', 
      icon: faTerminal,
      color: '#4eaa25',
      description: 'Bash, Zsh, Scripting'
    },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Навыки</h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="section-subtitle">
            Технологии и инструменты, которые я использую в работе
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="skills-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.05}>
              <div className="skill-card">
                <div 
                  className="skill-icon" 
                  style={{ 
                    background: `rgba(${hexToRgb(skill.color)}, 0.1)`,
                    color: skill.color 
                  }}
                >
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <div className="skill-info">
                  <div className="skill-header">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                      }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result 
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '100, 100, 100'
}

export default Skills
