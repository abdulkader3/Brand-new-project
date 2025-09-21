import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Mobile browser viewport height handling
function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set initial viewport height
setViewportHeight();

// Update on resize and orientation change
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', () => {
  // Delay to ensure orientation change is complete
  setTimeout(setViewportHeight, 100);
});

// Additional handling for iOS Safari address bar
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  // Force initial calculation after page load
  window.addEventListener('load', () => {
    setTimeout(setViewportHeight, 100);
  });
  
  // Handle scroll events for Safari address bar hide/show
  let ticking = false;
  function updateViewportOnScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        setViewportHeight();
        ticking = false;
      });
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', updateViewportOnScroll, { passive: true });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
