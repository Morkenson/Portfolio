import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (path) => {
    if (path === 'home' && location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (path === 'home') {
      navigate('/')
    } else if (path === 'about') {
      navigate('/about')
    } else if (location.pathname === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If on different page, navigate to home and scroll to section
      navigate(`/#${path}`)
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <span className="logo" onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>Portfolio</span>
        </div>
        
        <div className="nav-container">
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => handleNavigation('home')} className="nav-link">Home</button></li>
              <li><button onClick={() => handleNavigation('projects')} className="nav-link">Projects</button></li>
              <li><button onClick={() => handleNavigation('skills')} className="nav-link">Skills</button></li>
              <li><button onClick={() => handleNavigation('contact')} className="nav-link">Contact</button></li>
            </ul>
          </nav>
          
          <div className="nav-right">
            <button onClick={() => handleNavigation('about')} className="nav-link nav-about">About</button>
          </div>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header
