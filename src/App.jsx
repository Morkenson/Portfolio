import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutPage from './pages/AboutPage'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  )
}

export default App
