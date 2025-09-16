import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import ManuBar from '../Page/ManuBar.jsx'

const Layout = () => {
  return (
    <>
      <div className="relative">
        
        {/* Navbar always at the top */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <Outlet />

        {/* MenuBar always at the bottom */}
        <div className="sticky bottom-1 z-50">
          <ManuBar/>
        </div>
      </div>
    </>
  )
}

export default Layout
