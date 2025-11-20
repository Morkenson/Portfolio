// Scroll animation utility
export const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .blur-in, .rotate-in, .section-title'
  )
  
  animatedElements.forEach((el) => observer.observe(el))

  return observer
}

// Initialize scroll animations
if (typeof window !== 'undefined') {
  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupScrollAnimations)
  } else {
    setupScrollAnimations()
  }
  
  // Also run after a short delay to catch dynamically loaded content
  setTimeout(setupScrollAnimations, 500)
  
  // Re-run when route changes (for React Router)
  window.addEventListener('popstate', () => {
    setTimeout(setupScrollAnimations, 100)
  })
}

