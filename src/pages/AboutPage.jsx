import React, { useEffect, useRef } from 'react'
import { FaCode, FaGraduationCap, FaLightbulb, FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './AboutPage.css'

const AboutPage = () => {
  const aboutRef = useRef(null)
  const navigate = useNavigate()

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '2026', label: 'Graduation Year' },
    { number: 'May', label: 'Expected Graduation' },
    { number: 'AWS', label: 'Cloud Practitioner' },
    { number: '100%', label: 'Passion for Code' }
  ]

  const interests = [
    { icon: <FaCode />, title: 'AI-Driven Robotics', description: 'Designing and implementing AI-driven robotics features with object detection and obstacle avoidance using Python, OpenCV, and TensorFlow Lite' },
    { icon: <FaGraduationCap />, title: 'Machine Learning', description: 'Developing predictive models with Scikit-learn, Pandas, and NumPy, achieving 75% accuracy on real-world datasets' },
    { icon: <FaLightbulb />, title: 'Performance Optimization', description: 'Optimizing real-time inference from 500ms to &lt;150ms end-to-end latency at 1080p for embedded systems' },
    { icon: <FaHeart />, title: 'Full-Stack Development', description: 'Building end-to-end applications with React, Angular, .NET, and cloud services for production deployment' }
  ]

  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-page-title">About Me</h1>
      </div>
      
      <div className="about-page-content" ref={aboutRef}>
        <div className="container">
          <div className="about-content">
            <div className="about-text fade-in">
              <h3>Hello! I'm Zachary Mork</h3>
              <p>
                I'm a Software Engineering student at the University of Wisconsin-Platteville pursuing my Bachelor's degree 
                with a minor in Cybersecurity, expected to graduate in May 2026. I'm passionate about developing intelligent 
                systems, full-stack applications, and machine learning solutions that solve real-world problems.
              </p>
              <p>
                Currently working as a Research Assistant in the CSSE Department, I'm designing and implementing AI-driven 
                robotics features including object detection and obstacle avoidance. I've optimized real-time inference 
                performance from 500ms to less than 150ms end-to-end latency at 1080p, enabling smooth remote control and 
                responsive navigation.
              </p>
              <p>
                I hold an AWS Certified Cloud Practitioner (CLF-C02) certification and have experience across the full 
                technology stack - from Python and C# backend development to React and Angular frontends, with expertise in 
                AI/ML tools, cloud deployment, and DevOps practices. My projects range from voice assistants and ML predictors 
                to full-stack financial analysis platforms.
              </p>
            </div>

            <div className="about-stats fade-in">
              <h4>Quick Stats</h4>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="interests-section fade-in">
            <h4>What Drives Me</h4>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <div key={index} className="interest-card">
                  <div className="interest-icon">{interest.icon}</div>
                  <h5>{interest.title}</h5>
                  <p>{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
