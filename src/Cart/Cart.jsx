import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Cart = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Leather Bag",
      category: "Bag",
      image: "/photos/insparetionProduct.jpg",
      originalPrice: 460,
      currentPrice: 200,
      quantity: 1
    },
    {
      id: 2,
      name: "Lipstick",
      category: "Cosmetics",
      image: "/photos/makeUp-icon.png",
      originalPrice: 4,
      currentPrice: 20,
      quantity: 1
    },
    {
      id: 3,
      name: "Sports shoe",
      category: "Shoe",
      image: "/photos/product4.webp",
      originalPrice: 60,
      currentPrice: 40,
      quantity: 1
    }
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [shippingOption, setShippingOption] = useState("standard");



// Calculation of price according to quantity of product 
  const calculateTotal = () => {
    
    let total = 0;

    for (let item of cartItems) {
      total = total + (item.currentPrice * item.quantity);
    }
    
    return total;
  
};
// Calculation of price according to quantity of product


// Customer will decide what they want 
  const getShippingCost = () => {
    return shippingOption === "standard" ? 20 : 30;
  };
// Customer will decide what they want 


  const getGrandTotal = () => {
    return calculateTotal() + getShippingCost();
  };

  const updateQuantity = (id, change) => {
    // Create a new array to store updated items
    let updatedItems = [];
    
    // Go through each item in the cart
    for (let item of cartItems) {
      if (item.id === id) {
        // This is the item we want to update
        let newQuantity = item.quantity + change;
        
        // Make sure quantity never goes below 1
        if (newQuantity < 1) {
          newQuantity = 1;
        }
        
        // Create updated item with new quantity
        let updatedItem = {
          id: item.id,
          name: item.name,
          category: item.category,
          image: item.image,
          originalPrice: item.originalPrice,
          currentPrice: item.currentPrice,
          quantity: newQuantity
        };
        
        updatedItems.push(updatedItem);
      } else {
        // This item stays the same
        updatedItems.push(item);
      }
    }
    
    // Update the cart with new items
    setCartItems(updatedItems);
  };
  

  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 relative flex flex-col max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <IoIosArrowBack className="text-xl" />
            <span className="text-base font-medium">Back</span>
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Cart</h1>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Main Content Container - Responsive Layout */}
        <div className="flex-1 flex flex-col lg:flex-row lg:gap-8 lg:px-8 lg:py-6">
          
          {/* Left Column - Cart Items (Mobile: full width, Desktop: 2/3 width) */}
          <div className="flex-1 lg:flex-[2]">
            {/* Cart Items */}
            <div className="px-4 md:px-6 lg:px-0 py-6 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Product Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
                      {item.name === "Lipstick" ? (
                        // Special styling for lipstick with multiple colors
                        <div className="flex gap-1 items-center justify-center">
                          <div className="w-4 h-6 md:w-5 md:h-7 bg-purple-400 rounded-full"></div>
                          <div className="w-4 h-6 md:w-5 md:h-7 bg-gray-800 rounded-full"></div>
                          <div className="w-4 h-6 md:w-5 md:h-7 bg-pink-400 rounded-full"></div>
                        </div>
                      ) : (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/photos/product2.webp"; // Fallback image
                          }}
                        />
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg md:text-xl mb-1">{item.name}</h3>
                      <p className="text-sm md:text-base text-gray-500 mb-3">{item.category}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg md:text-xl font-bold text-green-500">
                          ${item.currentPrice}
                        </span>
                        <span className="text-sm md:text-base text-gray-400 line-through">
                          ${item.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 md:gap-4">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors font-medium"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900 text-lg md:text-xl">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors font-medium"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Coupon & Totals (Mobile: full width, Desktop: 1/3 width) */}
          <div className="lg:flex-[1] lg:sticky lg:top-24 lg:self-start">
            {/* Coupon Section */}
            <div className="px-4 md:px-6 lg:px-0 py-6 bg-white lg:rounded-2xl lg:shadow-sm lg:border lg:border-gray-100 lg:mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Use Coupon Code</h2>
              <p className="text-sm md:text-base text-gray-500 mb-6">Enter your coupon code if you have one.</p>
              
              <div className="space-y-4">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                />
                
                <button className="w-full bg-green-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors shadow-sm">
                  APPLY COUPON
                </button>
              </div>
            </div>

            {/* Cart Total Section */}
            <div className="px-4 md:px-6 lg:px-0 py-6 bg-gray-50 lg:bg-white lg:rounded-2xl lg:shadow-sm lg:border lg:border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Cart Total</h2>
              
              {/* Total Products */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-900 font-medium md:text-lg">Total products</span>
                <span className="text-xl md:text-2xl font-bold text-gray-900">${calculateTotal().toFixed(2)}</span>
              </div>

              {/* Shipping Options */}
              <div className="mb-6">
                <h3 className="text-gray-900 font-medium md:text-lg mb-4">Total shipping</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={shippingOption === "standard"}
                        onChange={(e) => setShippingOption(e.target.value)}
                        className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-3 text-gray-700 md:text-lg">Standard</span>
                    </div>
                    <span className="text-gray-900 font-medium md:text-lg">$20.00</span>
                  </label>
                  
                  <label className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={shippingOption === "express"}
                        onChange={(e) => setShippingOption(e.target.value)}
                        className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-3 text-gray-700 md:text-lg">Express</span>
                    </div>
                    <span className="text-gray-900 font-medium md:text-lg">$30.00</span>
                  </label>
                </div>
              </div>

              {/* Grand Total */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-bold text-gray-900">Grand Total</span>
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">${getGrandTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-green-500 text-white py-4 px-6 rounded-xl font-bold text-lg md:text-xl hover:bg-green-600 transition-colors shadow-sm">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
