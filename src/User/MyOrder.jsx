import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const MyOrder = () => {
  // Sample order data based on the image
  const navigate = useNavigate()
  const orders = [
    {
      id: 1,
      name: "Leather Bag",
      category: "Bag",
      originalPrice: "$460",
      currentPrice: "$320",
      status: "Completed",
      image: "/photos/product2.webp"
    },
    {
      id: 2,
      name: "Lipstick",
      category: "Cosmetics",
      originalPrice: "$4",
      currentPrice: "$3",
      status: "Returned",
      image: "/photos/product3.webp"
    },
    {
      id: 3,
      name: "Sports shoe",
      category: "Show",
      originalPrice: "$60",
      currentPrice: "$20",
      status: "Cancelled",
      image: "/photos/product4.webp"
    },
    {
      id: 4,
      name: "Leather Bag",
      category: "Bag",
      originalPrice: "$460",
      currentPrice: "$320",
      status: "Completed",
      image: "/photos/product2.webp"
    },
    {
      id: 5,
      name: "Lipstick",
      category: "Cosmetics",
      originalPrice: "$4",
      currentPrice: "$3",
      status: "Returned",
      image: "/photos/product3.webp"
    }
  ]

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
    
    switch(status) {
      case "Completed":
        return `${baseClasses} bg-green-100 text-green-800`
      case "Returned":
        return `${baseClasses} bg-blue-100 text-blue-800`
      case "Cancelled":
        return `${baseClasses} bg-red-100 text-red-800`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`
    }
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case "Completed":
        return "●"
      case "Returned":
        return "↻"
      case "Cancelled":
        return "●"
      default:
        return "●"
    }
  }

  return (
    <div className="bg-white min-h-screen overflow-y-scroll relative">
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

      {/* Orders List */}
      <div className="py-6 px-4 mt-10 space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            {/* Product Image */}
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={order.image}
                alt={order.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-base">{order.name}</h3>
              <p className="text-gray-500 text-sm">{order.category}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-400 line-through text-sm">{order.originalPrice}</span>
                <span className="text-green-600 font-semibold">{order.currentPrice}</span>
              </div>
            </div>

            {/* Status Badge */}
            <div className={getStatusBadge(order.status)}>
              <span className="text-xs">{getStatusIcon(order.status)}</span>
              <span>{order.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrder
