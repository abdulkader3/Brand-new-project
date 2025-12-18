import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { MdOutlineManageAccounts, MdOutlineNotificationsNone } from "react-icons/md";
import { Link } from 'react-router-dom'

const ProfileRightSide = () => {
    return (
        <>

        {/* Right Sidebar - Profile */}
        <div className="w-64 xl:w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden mb-4 ring-2 ring-blue-100">
                <img src="photos/profile.png" alt="profile" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <p className="font-bold text-lg xl:text-xl">Name Joni</p>
                <p className="font-semibold text-gray-600 text-sm xl:text-base">ID: 002 21</p>
                <div className="mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Online
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-6 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link to="/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <CgProfile className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="text-sm font-medium group-hover:text-blue-600">View Profile</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <MdOutlineManageAccounts className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="text-sm font-medium group-hover:text-blue-600">Account Settings</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <MdOutlineNotificationsNone className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="text-sm font-medium group-hover:text-blue-600">Notifications</span>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Shopping Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Orders</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Wishlist Items</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Purchase</span>
                  <span className="font-medium">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Sidebar - Profile */}
            
        </>
    )
}

export default ProfileRightSide
