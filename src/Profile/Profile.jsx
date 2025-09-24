import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoHomeOutline } from 'react-icons/io5'
import { LiaCartArrowDownSolid } from 'react-icons/lia'
import { PiChats } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div className="Profile">
                  {/* Profile Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200">
            <img 
              src="/photos/demoProfileImage.webp" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Nicholas J. Echeverria
            </h2>
            
            <div className="flex gap-6 text-sm mb-2">
              <div>
                <span className="text-gray-600">ID Number</span>
                <div className="font-medium text-gray-900">MB 4350</div>
              </div>
              <div>
                <span className="text-gray-600">Points</span>
                <div className="font-medium text-gray-900">346 ($40)</div>
              </div>
            </div>
            
            <div className="text-sm">
              <span className="text-gray-600">Level </span>
              <span className="font-medium text-orange-500">04</span>
              <div className="w-16 h-1 bg-orange-500 rounded-full mt-1"></div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Full Name</span>
            <span className="text-blue-600 font-medium">Saiful Islam</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">al_safa</span>
            <span className="text-orange-600 font-medium">john007</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Phone</span>
            <span className="text-orange-600 font-medium">(+1) 223556 66</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">E-mail Address</span>
            <span className="text-blue-600 font-medium">demo@mail.com</span>
          </div>

          <div className="flex justify-between items-start py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Shipping Address</span>
            <div className="text-right">
              <div className="text-gray-900 font-medium">935-1670 Neque. St.</div>
              <div className="text-gray-900 font-medium">Centennial Delaware</div>
              <div className="text-gray-900 font-medium">48432</div>
            </div>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Total Order</span>
            <span className="text-gray-900 font-medium">25</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Edit Profile</span>
            <button className="p-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Help Center</span>
            <span className="text-orange-600 font-medium">62256</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">To be Shiped</span>
            <span className="text-orange-600 font-medium">05</span>
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600 font-medium">Review</span>
            <span className="text-blue-600 font-medium">10</span>
          </div>
        </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full min-h-screen bg-gray-50">
        {/* Left Sidebar - Navigation */}
        <div className="w-64 xl:w-80 bg-white border-r border-gray-200 flex flex-col fixed h-full">
          <div className="flex-1 p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
              <nav className="space-y-2">
                <Link to="/" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <IoHomeOutline className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">Home</span>
                </Link>
                <Link to="/chat" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <PiChats className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">Chat</span>
                </Link>
                <Link to="/cart" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <LiaCartArrowDownSolid className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">Cart</span>
                </Link>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-blue-50 text-blue-600">
                  <CgProfile className="text-xl" />
                  <span className="font-medium">Profile</span>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content Area - Profile */}
        <div className="flex-1 ml-64 xl:ml-80 flex justify-center p-6">
          <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-sm">
            {/* Profile Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200">
                <img 
                  src="/photos/demoProfileImage.webp" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  Nicholas J. Echeverria
                </h2>
                
                <div className="flex gap-6 text-sm mb-2">
                  <div>
                    <span className="text-gray-600">ID Number</span>
                    <div className="font-medium text-gray-900">MB 4350</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Points</span>
                    <div className="font-medium text-gray-900">346 ($40)</div>
                  </div>
                </div>
                
                <div className="text-sm">
                  <span className="text-gray-600">Level </span>
                  <span className="font-medium text-orange-500">04</span>
                  <div className="w-16 h-1 bg-orange-500 rounded-full mt-1"></div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Full Name</span>
                <span className="text-blue-600 font-medium">Don Normane</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">User Name</span>
                <span className="text-orange-600 font-medium">john007</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Phone</span>
                <span className="text-orange-600 font-medium">(+1) 223556 66</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">E-mail Address</span>
                <span className="text-blue-600 font-medium">demo@mail.com</span>
              </div>

              <div className="flex justify-between items-start py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Shipping Address</span>
                <div className="text-right">
                  <div className="text-gray-900 font-medium">935-1670 Neque. St.</div>
                  <div className="text-gray-900 font-medium">Centennial Delaware</div>
                  <div className="text-gray-900 font-medium">48432</div>
                </div>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Total Order</span>
                <span className="text-gray-900 font-medium">25</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Edit Profile</span>
                <button className="p-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Help Center</span>
                <span className="text-orange-600 font-medium">62256</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">To be Shiped</span>
                <span className="text-orange-600 font-medium">05</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Review</span>
                <span className="text-blue-600 font-medium">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
