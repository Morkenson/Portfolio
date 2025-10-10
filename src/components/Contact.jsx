import React, { useEffect, useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'morkzachw@gmail.com',
      link: 'mailto:morkzachw@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '(715) 716-0295',
      link: 'tel:+17157160295'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Wisconsin, USA',
      link: null
    }
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/zachary-mork', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaEnvelope />, url: 'mailto:morkzachw@gmail.com', label: 'Email' }
  ]

  return (
    <section id="contact" className="contact section" ref={contactRef}>
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        
        <div className="contact-intro fade-in">
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3>Let's Connect</h3>
            <p>
              I'm currently seeking internship opportunities and collaborative projects in software engineering, 
              cybersecurity, and cloud technologies. As a Software Engineering student with AWS certification, 
              I'm passionate about building secure, scalable solutions and contributing to innovative research projects.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-in">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
