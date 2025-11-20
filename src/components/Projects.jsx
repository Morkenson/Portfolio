import React, { useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile } from 'react-icons/fa'
import './Projects.css'
import jarvis from '../static/JARVIS.png'
import prem from '../static/prem.webp'


const Projects = () => {
  const projectsRef = useRef(null)

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'J.A.R.V.I.S AI',
      description: 'Desktop AI personal assistant that takes in voice commands and performs tasks based on the user requests like adding events to the calendar, searching the web, and playing music.',
      image: jarvis,
      technologies: ['Python', 'OpenAI API', 'Google Cloud', 'CustomTkinter', 'PyInstaller', 'GitHub Actions', 'PyAudio', 'NumPy', 'Picovoice Porcupine'],
      category: 'ai',
      github: 'https://github.com/Morkenson/JARVIS',
      live: 'https://landing-page-jarvis.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Premier League Match Predictor',
      description: 'Full-stack web app that allows users to predict the outcome of Premier League matches based on historical data.',
      image: prem,
      technologies: ['Python', 'JavaScript', 'React', 'Flask', 'PostgreSQL', 'Scikit-learn', 'Pandas', 'NumPy', 'Recharts', 'Matplotlib'],
      category: 'ml',
      github: 'https://github.com/Morkenson/PremierLeaguePredictor',
      live: 'https://premier-league-predictor-zach.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Midnight Wealth',
      description: 'Full-stack stock research and analysis platform that allows users to search for stocks and upload their own portfolio to track their investments.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center',
      technologies: ['C#', '.NET 8', 'TypeScript', 'Angular 17', 'REST APIs'],
      category: 'fullstack',
      github: 'https://github.com/MorkensonStockAnalyzer',
      live: 'https://stock-analyzer-zach.vercel.app/',
      featured: true
    }
  ]


  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title blur-in">My Projects</h2>
        
        <div className="projects-intro slide-in-left">
          <p>
            Here are some of my recent projects that showcase my expertise in software engineering, AI/ML development, 
            and full-stack applications. Each project demonstrates my ability to build end-to-end solutions, from 
            voice assistants and ML predictors to financial analysis platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid stagger-children">
          {projects.map((project) => (
            <div key={project.id} className={`project-card scale-in ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
