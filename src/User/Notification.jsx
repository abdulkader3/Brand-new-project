import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Notification = () => {
  const navigate = useNavigate()

  const notifications = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit",
      content: "amet consectetur adipisicing elit. Dolores, illum.",
      timestamp: "Just now",
      isNew: true
    },
    {
      id: 2,
      title: "Dolores, illum.",
      content: "amet consectetur adipisicing elit. Dolores, illum.",
      timestamp: "2 minutes ago",
      isNew: false
    },
    {
      id: 3,
      title: "consectetur adipisicing",
      content: "amet consectetur adipisicing elit. Dolores, illum.",
      timestamp: "5 minutes ago",
      isNew: false
    },
    {
      id: 4,
      title: "adipisicing elit",
      content: "amet consectetur adipisicing elit. Dolores, illum.",
      timestamp: "3 days ago",
      isNew: false
    },
    {
      id: 5,
      title: "amet consectetur",
      content: "dolor sit adipisicing elit. Dolores, illum.",
      timestamp: "2 weeks ago",
      isNew: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button and title - Fixed at top */}
      <div className="fixed top-18 lg:top-30 md:top-26 left-0 right-0 z-10 bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <IoChevronBackOutline className="text-xl" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Notifications</h1>
        </div>
      </div>

      {/* Notifications list - Scrollable with top padding to account for fixed header */}
      <div className="px-4 py-2 pt-20">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className="bg-white rounded-lg mb-3 p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="mb-2">
              <span className="font-semibold text-gray-900 text-sm">
                {notification.title}
              </span>
              <span className="text-gray-600 text-sm ml-1">
                {notification.content}
              </span>
            </div>
            
            <div className="flex items-center text-xs text-gray-500">
              <svg 
                className="w-3 h-3 mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <span>{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notification
