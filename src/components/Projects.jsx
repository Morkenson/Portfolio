import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projectsRef = useRef(null)
  const [filter, setFilter] = useState('all')

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
      title: 'Premier League Match Predictor',
      description: 'Developed a predictive model to forecast Premier League match outcomes using historical data and machine learning. Utilized Logistic Regression with hyperparameter tuning and cross-validation to improve model performance.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Scikit-learn', 'Pandas', 'NumPy'],
      category: 'ml',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Real-Time Messaging Application',
      description: 'Built a full-stack chat application enabling users to send and receive messages in real-time. Integrated WebSockets for instant notifications, typing indicators, and seamless message exchange with React frontend.',
      image: '/api/placeholder/400/300',
      technologies: ['Node.js', 'React', 'Express', 'MySQL', 'Socket.IO', 'Cryptography'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Secure Password Manager',
      description: 'Designed and developed a cross-platform password manager to securely store and generate user credentials. Utilized industry-standard encryption (AES-256) and hashing with multi-factor authentication.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Cryptography', 'Bcrypt'],
      category: 'security',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 4,
      title: 'AI-Powered RC Car Research',
      description: 'Currently prototyping an internet-controlled RC car with an onboard AI vision stack to detect and avoid obstacles. Goal of end-to-end control latency of less than 150ms @ 720p on campus Wi-Fi.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Computer Vision', 'AI/ML', 'Real-time Systems', 'Embedded Systems'],
      category: 'research',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'security', label: 'Security' },
    { id: 'research', label: 'Research' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title fade-in">My Projects</h2>
        
        <div className="projects-intro fade-in">
          <p>
            Here are some of my recent projects that showcase my skills and passion for development. 
            Each project represents a learning journey and demonstrates different aspects of modern web development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects fade-in">
          <h3>Featured Projects</h3>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card featured">
                <div className="project-image">
                  <div className="project-placeholder">
                    <FaCode />
                    <span>Project Image</span>
                  </div>
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

        {/* All Projects with Filter */}
        <div className="all-projects fade-in">
          <div className="projects-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">
                    <FaCode />
                    <span>Project Image</span>
                  </div>
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
      </div>
    </section>
  )
}

export default Projects
