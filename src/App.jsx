import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutPage from './pages/AboutPage'
import ScrollProgress from './components/ScrollProgress'
import { setupScrollAnimations } from './utils/scrollAnimations'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    // Re-initialize scroll animations when route changes
    setTimeout(() => {
      setupScrollAnimations()
    }, 100)
  }, [location.pathname])

  return (
    <>
      <ScrollProgress />
      <Header />
      <Routes>
        <Route path="/" element={
          <main className="home-page">
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </main>
        } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  )
}

export default App
