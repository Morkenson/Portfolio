import React, { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import './Hero.css'
import self from '../static/self.jpg'

const Hero = () => {
  const heroRef = useRef(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // About content moved to separate About page

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
      </div>
      
      <div className="container">
        <div className="hero-content fade-in">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm
            </h1>
            <h1 className="hero-name">
              Zachary Mork
            </h1>
            <h2 className="hero-subtitle">
              AI & ML Learning Engineer
            </h2>
            <p className="hero-description">
              AI & ML Learning Engineer and Software Engineering student at UW-Platteville with expertise in computer vision, 
              robotics, and real-time inference systems. Currently developing cutting-edge AI solutions with &lt;150ms latency 
              for embedded systems while pursuing my Bachelor's degree with a Cybersecurity minor.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Me
              </button>
              <a 
                href="https://raw.githubusercontent.com/Morkenson/Portfolio/main/Zachary-Mork-Resume.docx" 
                download="Zachary_Mork_Resume.docx"
                className="btn btn-resume"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/zachary-mork" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="mailto:morkzachw@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src={self} 
                  alt="Zachary Mork" 
                  className="profile-photo"
                />
              </div>
              
              </div>
            </div>
          </div>
        </div>

        {/* About content moved to separate About page */}
      
    </section>
  )
}

export default Hero
