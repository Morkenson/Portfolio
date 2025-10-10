import React, { useEffect, useRef } from 'react'
import { FaCode, FaGraduationCap, FaLightbulb, FaHeart } from 'react-icons/fa'
import './About.css'

const About = () => {
  const aboutRef = useRef(null)

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
    { number: '3.6', label: 'GPA (4.0 Scale)' },
    { number: '2026', label: 'Graduation Year' },
    { number: '1', label: 'AWS Certification' },
    { number: '100%', label: 'Passion for Code' }
  ]

  const interests = [
    { icon: <FaCode />, title: 'Full-Stack Development', description: 'Building secure and scalable web applications with modern technologies' },
    { icon: <FaGraduationCap />, title: 'Cybersecurity', description: 'Protecting systems and data through secure coding practices and encryption' },
    { icon: <FaLightbulb />, title: 'AI & Machine Learning', description: 'Developing intelligent systems and predictive models for real-world applications' },
    { icon: <FaHeart />, title: 'Cloud Technologies', description: 'Leveraging AWS services to build robust, scalable cloud solutions' }
  ]

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <h3>Hello! I'm Zachary Mork</h3>
            <p>
              I'm a Software Engineering student at the University of Wisconsin-Platteville with a passion 
              for creating secure, innovative solutions. My journey combines academic excellence with hands-on 
              experience in full-stack development, cybersecurity, and cloud technologies.
            </p>
            <p>
              Currently pursuing my Bachelor's degree with a minor in Cybersecurity, I'm focused on mastering 
              modern technologies including React, Node.js, Python, and AWS cloud services. I believe in writing 
              clean, secure code and following industry best practices to create scalable applications.
            </p>
            <p>
              As a Research Assistant, I'm working on cutting-edge projects including an AI-powered RC car with 
              obstacle detection. When I'm not coding, you can find me on the soccer field as team captain or 
              exploring new technologies that push the boundaries of what's possible.
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
    </section>
  )
}

export default About
