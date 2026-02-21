import './Skills.css'

function Skills() {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Redux/Zustand', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 85 },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Навыки</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
