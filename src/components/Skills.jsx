import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faReact, faJs, faNodeJs, faGitAlt, faDocker, 
  faPython, faAws, faGithub
} from '@fortawesome/free-brands-svg-icons'
import { 
  faBrain, faDatabase, faServer, faCode, 
  faTerminal, faBolt, faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons'
import FadeIn from './FadeIn'
import './Skills.css'

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Все', icon: faWandMagicSparkles },
    { id: 'frontend', label: 'Frontend', icon: faCode },
    { id: 'ai', label: 'AI Tools', icon: faBrain },
    { id: 'backend', label: 'Backend', icon: faServer },
  ]

  const skills = [
    { 
      name: 'React', 
      level: 95, 
      category: 'frontend', 
      icon: faReact,
      color: '#61dafb',
      description: 'Hooks, Context, Redux, RTK',
    },
    { 
      name: 'TypeScript', 
      level: 90, 
      category: 'frontend', 
      icon: faCode,
      color: '#3178c6',
      description: 'Types, Generics, Utilities',
    },
    { 
      name: 'Next.js', 
      level: 88, 
      category: 'frontend', 
      icon: faServer,
      color: '#ffffff',
      description: 'SSR, SSG, App Router, API',
    },
    { 
      name: 'Tailwind CSS', 
      level: 92, 
      category: 'frontend', 
      icon: faBolt,
      color: '#06b6d4',
      description: 'Utility-first, Responsive',
    },
    { 
      name: 'Cursor IDE', 
      level: 95, 
      category: 'ai', 
      icon: faBrain,
      color: '#10b981',
      description: 'AI-first code editor',
    },
    { 
      name: 'Claude AI', 
      level: 90, 
      category: 'ai', 
      icon: faWandMagicSparkles,
      color: '#8b5cf6',
      description: 'Code generation & review',
    },
    { 
      name: 'GitHub Copilot', 
      level: 88, 
      category: 'ai', 
      icon: faGithub,
      color: '#6e5494',
      description: 'AI pair programmer',
    },
    { 
      name: 'Node.js', 
      level: 80, 
      category: 'backend', 
      icon: faNodeJs,
      color: '#339933',
      description: 'Express, REST, WebSocket',
    },
    { 
      name: 'PostgreSQL', 
      level: 75, 
      category: 'backend', 
      icon: faDatabase,
      color: '#336791',
      description: 'Queries, Prisma ORM',
    },
    { 
      name: 'Git', 
      level: 90, 
      category: 'backend', 
      icon: faGitAlt,
      color: '#f05032',
      description: 'Branching, Rebase, Workflows',
    },
    { 
      name: 'Docker', 
      level: 72, 
      category: 'backend', 
      icon: faDocker,
      color: '#2496ed',
      description: 'Containers, Compose',
    },
    { 
      name: 'AWS', 
      level: 65, 
      category: 'backend', 
      icon: faAws,
      color: '#ff9900',
      description: 'EC2, S3, Lambda',
    },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="stack" className="skills">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Технологии</h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="section-subtitle">
            Стек технологий, который я использую для создания современных приложений
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="skills-categories">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={category.icon} />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </FadeIn>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.05}>
              <motion.div 
                className="skill-card"
                whileHover={{ y: -5, borderColor: skill.color }}
              >
                <div 
                  className="skill-icon" 
                  style={{ 
                    background: `${skill.color}15`,
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
                    <motion.div 
                      className="skill-progress" 
                      style={{ background: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
