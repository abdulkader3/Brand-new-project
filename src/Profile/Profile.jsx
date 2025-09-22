import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
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
    </>
  )
}

export default Profile
