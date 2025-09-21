import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import ManuBar from '../Page/ManuBar.jsx'

const Layout = () => {
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
