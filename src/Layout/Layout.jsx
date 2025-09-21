import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import ManuBar from '../Page/ManuBar.jsx'

const Layout = () => {
  useEffect(() => {
    // Function to set real viewport height for mobile browsers
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      // Update safe viewport heights for better mobile browser support
      if (window.visualViewport) {
        const svh = window.visualViewport.height * 0.01;
        document.documentElement.style.setProperty('--svh', `${svh}px`);
      }
    };

    // Set initial values
    setViewportHeight();

    // Listen for resize events (when mobile browser UI appears/disappears)
    window.addEventListener('resize', setViewportHeight);
    
    // Listen for visual viewport changes (better mobile browser detection)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setViewportHeight);
    }

    // Listen for orientation changes
    window.addEventListener('orientationchange', () => {
      setTimeout(setViewportHeight, 100); // Small delay to ensure accurate values
    });

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setViewportHeight);
      }
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  return (
    <>
  <div className="flex flex-col mobile-safe-min-height w-full bg-gray-50 lg:bg-white">
        {/* Navbar always at the top */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="flex-1 flex flex-col mobile-safe-bottom lg:pb-8 xl:pb-12">
          <Outlet />
        </div>

        {/* MenuBar always at the bottom - hidden on large desktop */}
        <div className="sticky bottom-0 z-50 lg:hidden">
          <ManuBar/>
        </div>
      </div>
    </>
  )
}

export default Layout
