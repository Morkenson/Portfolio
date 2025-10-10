import React, { useEffect, useRef } from 'react'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt, 
  FaPython,
  FaDatabase,
  FaJava,
  FaAws,
  FaCode
} from 'react-icons/fa'
import { SiTypescript, SiPostgresql, SiExpress, SiDocker, SiTerraform, SiJenkins } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90, color: '#3776ab' },
        { name: 'Java', icon: <FaJava />, level: 85, color: '#f89820' },
        { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#f7df1e' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178c6' },
        { name: 'C/C++', icon: <FaCode />, level: 75, color: '#00599c' },
        { name: 'SQL', icon: <FaDatabase />, level: 85, color: '#336791' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <FaReact />, level: 85, color: '#61dafb' },
        { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, level: 80, color: '#000000' },
        { name: 'Flask', icon: <FaPython />, level: 85, color: '#000000' },
        { name: 'Scikit-learn', icon: <FaPython />, level: 75, color: '#f7931e' },
        { name: 'Socket.IO', icon: <FaJs />, level: 80, color: '#010101' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 85, color: '#ff9900' },
        { name: 'Docker', icon: <SiDocker />, level: 80, color: '#2496ed' },
        { name: 'Terraform', icon: <SiTerraform />, level: 70, color: '#7b42bc' },
        { name: 'Jenkins', icon: <SiJenkins />, level: 75, color: '#d24939' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#f05032' },
        { name: 'Linux', icon: <FaCode />, level: 85, color: '#fcc624' }
      ]
    },
    {
      title: 'Databases & Security',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, color: '#336791' },
        { name: 'MySQL', icon: <FaDatabase />, level: 80, color: '#4479a1' },
        { name: 'Cryptography', icon: <FaCode />, level: 80, color: '#8b5cf6' },
        { name: 'Bcrypt', icon: <FaCode />, level: 85, color: '#059669' },
        { name: 'OWASP', icon: <FaCode />, level: 75, color: '#dc2626' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title fade-in">Skills & Technologies</h2>
        
        <div className="skills-intro fade-in">
          <p>
            I'm constantly learning and expanding my skill set. Here are the technologies 
            I'm currently working with and my proficiency level in each.
          </p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category fade-in">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="learning-section fade-in">
          <h3>Currently Learning & Research</h3>
          <div className="learning-items">
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>AI Vision Stack for Autonomous Vehicles</span>
            </div>
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>Real-time Control Systems & Low Latency</span>
            </div>
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>Advanced Cybersecurity Techniques</span>
            </div>
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>Machine Learning Model Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
