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
import { SiTypescript, SiPostgresql, SiExpress, SiDocker, SiTerraform, SiJenkins, SiCsharp, SiMysql, SiAngular, SiDotnet } from 'react-icons/si'
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
      title: 'Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95, color: '#3776ab' },
        { name: 'C#', icon: <SiCsharp />, level: 85, color: '#239120' },
        { name: 'C/C++', icon: <FaCode />, level: 80, color: '#00599c' },
        { name: 'JavaScript/TypeScript', icon: <SiTypescript />, level: 90, color: '#3178c6' },
        { name: 'SQL', icon: <FaDatabase />, level: 85, color: '#336791' }
      ]
    },
    {
      title: 'Frameworks & Databases',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: '#61dafb' },
        { name: 'Angular', icon: <SiAngular />, level: 85, color: '#dd0031' },
        { name: 'Flask', icon: <FaPython />, level: 85, color: '#000000' },
        { name: 'Express', icon: <SiExpress />, level: 80, color: '#000000' },
        { name: '.NET', icon: <SiDotnet />, level: 85, color: '#512bd4' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, color: '#336791' },
        { name: 'MySQL', icon: <SiMysql />, level: 80, color: '#4479a1' }
      ]
    },
    {
      title: 'AI/ML Tools',
      skills: [
        { name: 'Scikit-learn', icon: <FaPython />, level: 90, color: '#f7931e' },
        { name: 'Pandas', icon: <FaPython />, level: 90, color: '#150458' },
        { name: 'NumPy', icon: <FaPython />, level: 90, color: '#013243' },
        { name: 'TensorFlow', icon: <FaCode />, level: 85, color: '#ff6f00' },
        { name: 'PyTorch', icon: <FaCode />, level: 80, color: '#ee4c2c' },
        { name: 'OpenCV', icon: <FaCode />, level: 85, color: '#06b6d4' },
        { name: 'Matplotlib', icon: <FaCode />, level: 85, color: '#11557c' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS (EC2, S3, RDS, IAM, CloudWatch)', icon: <FaAws />, level: 85, color: '#ff9900' },
        { name: 'Terraform', icon: <SiTerraform />, level: 80, color: '#7b42bc' },
        { name: 'Docker', icon: <SiDocker />, level: 80, color: '#2496ed' },
        { name: 'Linux', icon: <FaCode />, level: 85, color: '#fcc624' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#f05032' },
        { name: 'CI/CD', icon: <FaCode />, level: 85, color: '#10b981' },
        { name: 'GitHub Actions', icon: <FaGitAlt />, level: 85, color: '#2088ff' },
        { name: 'Jenkins', icon: <SiJenkins />, level: 75, color: '#d24939' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title blur-in">Skills & Technologies</h2>
        
        <div className="skills-intro slide-in-right">
          <p>
            I have experience across the full technology stack, from languages and frameworks to 
            AI/ML tools and cloud infrastructure. Here are the technologies I work with.
          </p>
        </div>

        <div className="skills-content stagger-children">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category scale-in">
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
