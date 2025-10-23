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
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Cryptography', 'Bcrypt'],
      category: 'security',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 4,
      title: 'AI-Powered RC Car Research',
      description: 'Research project developing an AI-powered RC car with computer vision capabilities for obstacle detection and avoidance. Achieved &lt;150ms end-to-end latency at 1080p using Python, OpenCV, and TensorFlow Lite on embedded systems.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center',
      technologies: ['Python', 'Computer Vision', 'AI/ML', 'Real-time Systems', 'Embedded Systems'],
      category: 'research',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
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

  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title fade-in">My Projects</h2>
        
        <div className="projects-intro fade-in">
          <p>
            Here are some of my recent projects that showcase my expertise in AI/ML engineering and machine learning. 
            Each project demonstrates my ability to develop end-to-end ML pipelines, implement computer vision solutions, 
            and deploy intelligent systems for real-world applications.
          </p>
        </div>

        {/* Projects Filter */}
        <div className="projects-filter fade-in">
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

        {/* Projects Grid */}
        <div className="projects-grid fade-in">
          {filteredProjects.map((project) => (
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
