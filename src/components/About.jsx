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
    { icon: <FaCode />, title: 'AI-Driven Robotics', description: 'Implementing object detection and obstacle avoidance using Python, OpenCV, and TensorFlow Lite on embedded systems' },
    { icon: <FaGraduationCap />, title: 'Machine Learning', description: 'Developing predictive models with Scikit-learn, Pandas, and NumPy for real-world applications' },
    { icon: <FaLightbulb />, title: 'Computer Vision', description: 'Building intelligent systems with &lt;150ms end-to-end latency for real-time deployment' },
    { icon: <FaHeart />, title: 'Cloud Integration', description: 'Deploying ML models and applications using AWS services with focus on performance optimization' }
  ]

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <h3>Hello! I'm Zachary Mork</h3>
            <p>
              I'm an AI & ML Learning Engineer and Software Engineering student at the University of Wisconsin-Platteville 
              with a passion for developing intelligent systems and machine learning solutions. My journey combines academic 
              excellence with hands-on experience in AI-driven robotics, computer vision, and predictive modeling.
            </p>
            <p>
              Currently pursuing my Bachelor's degree with a minor in Cybersecurity, I'm focused on mastering 
              AI/ML technologies including Python, TensorFlow, PyTorch, OpenCV, and AWS cloud services. I specialize in 
              developing end-to-end ML pipelines with emphasis on real-time inference and model optimization.
            </p>
            <p>
              As a Research Assistant, I'm working on cutting-edge AI projects including object detection and obstacle 
              avoidance systems with &lt;150ms latency requirements. When I'm not developing ML models, you can find me 
              on the soccer field as team captain or exploring the latest advances in computer vision and deep learning.
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