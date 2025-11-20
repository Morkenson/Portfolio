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
      title: 'J.A.R.V.I.S AI Personal Assistant',
      description: 'Built a cross-platform desktop voice assistant with real-time wake word detection using Picovoice Porcupine, GPT-4 for natural language understanding, and Google Cloud Text-to-Speech for responses. Implemented multithreaded architecture to keep GUI responsive while streaming audio input/output and AI processing. Packaged as Windows installer with auto-update support and integrated multiple third-party APIs including Spotify, Microsoft Graph API, and OpenAI.',
      image: jarvis,
      technologies: ['Python', 'OpenAI API', 'Google Cloud', 'CustomTkinter', 'PyInstaller', 'GitHub Actions', 'PyAudio', 'NumPy', 'Picovoice Porcupine'],
      category: 'ai',
      github: 'https://github.com/Morkenson',
      live: 'https://landing-page-jarvis.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Premier League Match Predictor',
      description: 'Developed a supervised machine learning model using Logistic Regression to predict Premier League match outcomes with 75% accuracy on historical data. Built an end-to-end ML pipeline for data ingestion, feature engineering, model training, and Flask-based REST API deployment with PostgreSQL backend. Applied cross-validation and hyperparameter tuning to improve model accuracy by 12%, visualizing predictions and performance with Recharts and Matplotlib.',
      image: prem,
      technologies: ['Python', 'JavaScript', 'React', 'Flask', 'PostgreSQL', 'Scikit-learn', 'Pandas', 'NumPy', 'Recharts', 'Matplotlib'],
      category: 'ml',
      github: 'https://github.com/Morkenson',
      live: 'https://premier-league-predictor-zach.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Finance and Stock Analyzer',
      description: 'Built a full-stack stock research platform using Angular 17 and .NET 8, following a service-oriented architecture with dependency injection and layered design. Implemented RESTful APIs for intelligent stock search, technical indicator analytics, interactive historical charts, watchlists, and real-time price updates. Designed data models and workflows to provide users a unified view of investments across multiple brokerages, improving research and portfolio monitoring in a single dashboard.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center',
      technologies: ['C#', '.NET 8', 'TypeScript', 'Angular 17', 'REST APIs'],
      category: 'fullstack',
      github: 'https://github.com/Morkenson',
      live: 'https://stock-analyzer-zach.vercel.app/',
      featured: true
    }
  ]


  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title fade-in">My Projects</h2>
        
        <div className="projects-intro fade-in">
          <p>
            Here are some of my recent projects that showcase my expertise in software engineering, AI/ML development, 
            and full-stack applications. Each project demonstrates my ability to build end-to-end solutions, from 
            voice assistants and ML predictors to financial analysis platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid fade-in">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
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
