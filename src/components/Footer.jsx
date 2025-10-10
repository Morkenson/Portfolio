import React from 'react'
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Zachary Mork</h3>
            <p>Software Engineering Student passionate about creating secure, innovative solutions and building scalable applications with a focus on cybersecurity and cloud technologies.</p>
            <div className="footer-social">
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

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Technologies</h4>
            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Cybersecurity</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Zachary Mork. Made with <FaHeart className="heart-icon" /> and lots of coffee.
            </p>
          </div>
          <button className="back-to-top" onClick={scrollToTop}>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
