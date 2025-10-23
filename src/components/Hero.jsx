import React, { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import './Hero.css'

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

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content fade-in">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Zachary Mork</span>
            </h1>
            <h2 className="hero-subtitle">
              AI & ML Learning Engineer
            </h2>
            <p className="hero-description">
              Passionate about developing intelligent systems and machine learning solutions. 
              Currently pursuing my Bachelor's in Software Engineering with expertise in AI-driven robotics, 
              computer vision, and predictive modeling for real-world applications.
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
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
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
              <a href="/resume.pdf" download className="social-link">
                <FaDownload />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <div className="placeholder-avatar">
                  <span>ZM</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Zachary Mork</h3>
                <p>AI & ML Learning Engineer</p>
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  Available for opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
