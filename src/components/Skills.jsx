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
      title: 'AI/ML Technologies',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95, color: '#3776ab' },
        { name: 'TensorFlow', icon: <FaCode />, level: 85, color: '#ff6f00' },
        { name: 'PyTorch', icon: <FaCode />, level: 80, color: '#ee4c2c' },
        { name: 'Scikit-learn', icon: <FaPython />, level: 90, color: '#f7931e' },
        { name: 'OpenCV', icon: <FaCode />, level: 85, color: '#06b6d4' },
        { name: 'Pandas/NumPy', icon: <FaPython />, level: 90, color: '#150458' }
      ]
    },
    {
      title: 'Computer Vision & Robotics',
      skills: [
        { name: 'Object Detection', icon: <FaCode />, level: 85, color: '#10b981' },
        { name: 'Image Processing', icon: <FaCode />, level: 80, color: '#06b6d4' },
        { name: 'Real-time Systems', icon: <FaCode />, level: 85, color: '#f59e0b' },
        { name: 'Embedded Systems', icon: <FaCode />, level: 80, color: '#f59e0b' },
        { name: 'TensorFlow Lite', icon: <FaCode />, level: 85, color: '#ff6f00' },
        { name: 'Edge Computing', icon: <FaCode />, level: 75, color: '#10b981' }
      ]
    },
    {
      title: 'Cloud & Deployment',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 85, color: '#ff9900' },
        { name: 'Docker', icon: <SiDocker />, level: 80, color: '#2496ed' },
        { name: 'ML Model Deployment', icon: <FaCode />, level: 85, color: '#10b981' },
        { name: 'Flask', icon: <FaPython />, level: 85, color: '#000000' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#f05032' },
        { name: 'Linux', icon: <FaCode />, level: 85, color: '#fcc624' }
      ]
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, color: '#336791' },
        { name: 'Data Pipeline', icon: <FaDatabase />, level: 80, color: '#059669' },
        { name: 'Feature Engineering', icon: <FaCode />, level: 85, color: '#dc2626' },
        { name: 'Model Optimization', icon: <FaCode />, level: 80, color: '#7c2d12' },
        { name: 'Cross-validation', icon: <FaCode />, level: 85, color: '#10b981' },
        { name: 'Hyperparameter Tuning', icon: <FaCode />, level: 80, color: '#0ea5e9' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title fade-in">Skills & Technologies</h2>
        
        <div className="skills-intro fade-in">
          <p>
            I specialize in AI/ML engineering with expertise in developing intelligent systems, 
            computer vision solutions, and machine learning pipelines. Here are the technologies 
            I work with.
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="learning-section fade-in">
          <h3>Current Research & Learning Focus</h3>
          <div className="learning-items">
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>AI-Driven Robotics & Computer Vision</span>
            </div>
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>Real-time Inference Optimization (&lt;150ms)</span>
            </div>
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>TensorFlow Lite for Edge Deployment</span>
            </div>
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>Advanced ML Model Tuning & Performance</span>
            </div>
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>Object Detection & Obstacle Avoidance</span>
            </div>
            <div className="learning-item">
              <span className="learning-dot"></span>
              <span>End-to-End ML Pipeline Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
