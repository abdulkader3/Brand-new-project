import React from "react";
import ProductSlider from "../component/ProductSlider.jsx";
import { GiBilledCap, GiRunningShoe } from "react-icons/gi";
import { PiHighHeel, PiChats } from "react-icons/pi";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageAccounts, MdOutlineNotificationsNone } from "react-icons/md";
import ProductCard from "../component/ProductCard.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Desktop Layout (lg screens and up) */}
      <div className="hidden lg:flex w-full h-screen bg-[#ffffffc7]">
        {/* Left Sidebar - Navigation */}
        <div className="w-64 xl:w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="flex-1 p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
              <nav className="space-y-2">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-blue-50 text-blue-600">
                  <IoHomeOutline className="text-xl" />
                  <span className="font-medium">Home</span>
                </div>
                <Link to="/chat" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <PiChats className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">Chat</span>
                </Link>
                <Link to="/cart" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <LiaCartArrowDownSolid className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">Cart</span>
                </Link>
                <Link to="/profile" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <CgProfile className="text-xl text-gray-600 group-hover:text-blue-600" />
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">Profile</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Center - Main Content */}
        <div className="flex-1 flex flex-col relative bg-gray-50">
          {/* Header */}
          

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto" style={{WebkitOverflowScrolling: 'touch'}}>
            <div className="main bg-white min-h-full">
              <div className="w-full h-fit bg-[#e8f4ff94]">
                {/* Slider */}
                <div className="first-row w-full h-fit flex flex-col items-center px-4 py-4">
                  <div className="Slider w-full max-w-4xl h-[350px] bg-white rounded-2xl shadow-2xl">
                    <ProductSlider />
                  </div>
                </div>
                {/* slider */}

                {/* Categories */}
                <div className="Categories w-full h-fit px-4 pb-5">
                  <p className="text-lg lg:text-2xl font-semibold mb-4">Categories</p>

                  <div className="flex justify-center gap-4 lg:gap-10">
                    <Link
                      to="/all-categories"
                      className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-2xl hover:shadow-md transition-shadow"
                    >
                      <GiRunningShoe />
                    </Link>
                    <Link
                      to="/all-categories"
                      className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-2xl hover:shadow-md transition-shadow"
                    >
                      <PiHighHeel />
                    </Link>
                    <Link
                      to="/all-categories"
                      className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-2xl hover:shadow-md transition-shadow"
                    >
                      <BsFillHandbagFill />
                    </Link>

                    <Link
                      to="/all-categories"
                      className="w-12 h-12 rounded-full bg-white flex justify-center items-center hover:shadow-md transition-shadow"
                    >
                      <img
                        className="w-12 h-6 object-contain"
                        src="photos/makeUp-icon.png"
                        alt="icon"
                      />
                    </Link>

                    <Link
                      to="/all-categories"
                      className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-2xl hover:shadow-md transition-shadow"
                    >
                      <GiBilledCap />
                    </Link>
                  </div>
                </div>
                {/* Categories */}
              </div>

              {/* Best sales */}
              <div className="best-sales w-full h-fit px-4 py-4">
                <p className="text-lg lg:text-2xl font-semibold mb-4">Best Sale</p>

                <div className="single-row w-full lg:w-[1100px] flex flex-nowrap gap-4 lg:gap-20 overflow-x-auto no-scrollbar">
                  <Link to="/product-details">
                    <div className="flex-shrink-0 w-48 lg:w-52">
                      <ProductCard
                        ProductImage={"photos/insparetionProduct.jpg"}
                        ProductPrice={"Price: $700"}
                      />
                    </div>
                  </Link>
                  <Link to="/product-details">
                    <div className="flex-shrink-0 w-48 lg:w-52">
                      <ProductCard
                        ProductImage={"photos/insparetionProduct2.jpg"}
                        ProductPrice={"Price: $700"}
                      />
                    </div>
                  </Link>
                  <Link to="/product-details">
                    <div className="flex-shrink-0 w-48 lg:w-52">
                      <ProductCard
                        ProductImage={"photos/insparetionProduct3.jpg"}
                        ProductPrice={"Price: $700"}
                      />
                    </div>
                  </Link>
                  <Link to="/product-details">
                    <div className="flex-shrink-0 w-48 lg:w-52">
                      <ProductCard
                        ProductImage={"photos/insparetionProduct.jpg"}
                        ProductPrice={"Price: $700"}
                      />
                    </div>
                  </Link>
                  <Link to="/product-details">
                    <div className="flex-shrink-0 w-48 lg:w-52">
                      <ProductCard
                        ProductImage={"photos/insparetionProduct2.jpg"}
                        ProductPrice={"Price: $700"}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              {/* Best sales */}

              {/* Popular Products */}
              <div className="Popular-Products w-full h-fit px-4 py-4">
                <p className="text-lg font-semibold mb-4">Popular Products</p>

                <div className="single-row w-full flex flex-nowrap gap-4 overflow-x-auto no-scrollbar">
                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-[180px]"}
                      ProductHSize={"h-[200px]"}
                      ProductImageSize={"w-[120px]"}
                    />
                  </Link>
                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct2.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-[180px]"}
                      ProductHSize={"h-[200px]"}
                      ProductImageSize={"w-[120px]"}
                    />
                  </Link>
                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct3.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-[180px]"}
                      ProductHSize={"h-[200px]"}
                      ProductImageSize={"w-[120px]"}
                    />
                  </Link>
                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-[180px]"}
                      ProductHSize={"h-[200px]"}
                      ProductImageSize={"w-[120px]"}
                    />
                  </Link>
                </div>
              </div>
              {/* Popular Products */}

              {/* All Products */}
              <div className="all-Products w-full h-fit px-4 py-4 pb-8">
                <p className="text-lg font-semibold mb-4">All Products</p>

                <div className="two-row w-full grid grid-cols-2 xl:grid-cols-3 gap-4">
                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-full"}
                      ProductHSize={"h-[180px]"}
                      ProductImageSize={"w-[100px]"}
                    />
                  </Link>

                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct2.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-full"}
                      ProductHSize={"h-[180px]"}
                      ProductImageSize={"w-[100px]"}
                    />
                  </Link>

                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct3.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-full"}
                      ProductHSize={"h-[180px]"}
                      ProductImageSize={"w-[100px]"}
                    />
                  </Link>

                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-full"}
                      ProductHSize={"h-[180px]"}
                      ProductImageSize={"w-[100px]"}
                    />
                  </Link>
                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct2.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-full"}
                      ProductHSize={"h-[180px]"}
                      ProductImageSize={"w-[100px]"}
                    />
                  </Link>
                  <Link to="/product-details">
                    <ProductCard
                      ProductImage={"photos/insparetionProduct3.jpg"}
                      ProductPrice={"Price: $700"}
                      ProductWSize={"w-full"}
                      ProductHSize={"h-[180px]"}
                      ProductImageSize={"w-[100px]"}
                    />
                  </Link>
                </div>
              </div>
              {/* All Products */}
            </div>
          </div>
        </div>

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
      </div>

      {/* Mobile & Tablet Layout (hidden on lg+ screens) */}
      <div className="lg:hidden">
        <div className="main bg-white min-h-screen">
          <div className="w-full h-fit bg-[#e8f4ff94]">
            {/* Slider */}
            <div className="first-row w-full h-fit flex flex-col items-center px-4 py-4">
              <div className="Slider w-full h-[200px] md:h-[250px] bg-white rounded-2xl shadow-2xl">
                <ProductSlider />
              </div>
            </div>
            {/* slider */}

            {/* Categories */}
            <div className="Categories w-full h-fit px-4 pb-5">
              <p className="text-lg md:text-xl font-semibold mb-4">Categories</p>

              <div className="flex justify-center gap-4 md:gap-6">
                <Link
                  to="/all-categories"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex justify-center items-center text-2xl md:text-3xl hover:shadow-md transition-shadow"
                >
                  <GiRunningShoe />
                </Link>
                <Link
                  to="/all-categories"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex justify-center items-center text-2xl md:text-3xl hover:shadow-md transition-shadow"
                >
                  <PiHighHeel />
                </Link>
                <Link
                  to="/all-categories"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex justify-center items-center text-2xl md:text-3xl hover:shadow-md transition-shadow"
                >
                  <BsFillHandbagFill />
                </Link>
                <Link
                  to="/all-categories"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex justify-center items-center hover:shadow-md transition-shadow"
                >
                  <img
                    className="w-8 h-6 md:w-10 md:h-8 object-contain"
                    src="photos/makeUp-icon.png"
                    alt="icon"
                  />
                </Link>
                <Link
                  to="/all-categories"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex justify-center items-center text-2xl md:text-3xl hover:shadow-md transition-shadow"
                >
                  <GiBilledCap />
                </Link>
              </div>
            </div>
            {/* Categories */}
          </div>

          {/* Best sales */}
          <div className="best-sales w-full h-fit px-4 py-4">
            <p className="text-lg md:text-xl font-semibold mb-4">Best Sale</p>

            <div className="single-row w-full flex flex-nowrap gap-4 overflow-x-auto no-scrollbar">
              <Link to="/product-details">
                <div className="flex-shrink-0 w-44 md:w-52">
                  <ProductCard
                    ProductImage={"photos/insparetionProduct.jpg"}
                    ProductPrice={"Price: $700"}
                  />
                </div>
              </Link>
              <Link to="/product-details">
                <div className="flex-shrink-0 w-44 md:w-52">
                  <ProductCard
                    ProductImage={"photos/insparetionProduct2.jpg"}
                    ProductPrice={"Price: $700"}
                  />
                </div>
              </Link>
              <Link to="/product-details">
                <div className="flex-shrink-0 w-44 md:w-52">
                  <ProductCard
                    ProductImage={"photos/insparetionProduct3.jpg"}
                    ProductPrice={"Price: $700"}
                  />
                </div>
              </Link>
              <Link to="/product-details">
                <div className="flex-shrink-0 w-44 md:w-52">
                  <ProductCard
                    ProductImage={"photos/insparetionProduct.jpg"}
                    ProductPrice={"Price: $700"}
                  />
                </div>
              </Link>
              <Link to="/product-details">
                <div className="flex-shrink-0 w-44 md:w-52">
                  <ProductCard
                    ProductImage={"photos/insparetionProduct2.jpg"}
                    ProductPrice={"Price: $700"}
                  />
                </div>
              </Link>
              <Link to="/product-details">
                <div className="flex-shrink-0 w-44 md:w-52">
                  <ProductCard
                    ProductImage={"photos/insparetionProduct3.jpg"}
                    ProductPrice={"Price: $700"}
                  />
                </div>
              </Link>
            </div>
          </div>
          {/* Best sales */}

          {/* Popular Products */}
          <div className="Popular-Products w-full h-fit px-4 py-4">
            <p className="text-lg md:text-xl font-semibold mb-4">Popular Products</p>

            <div className="single-row w-full flex flex-nowrap gap-4 overflow-x-auto no-scrollbar">
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[160px] md:w-[180px]"}
                  ProductHSize={"h-[180px] md:h-[200px]"}
                  ProductImageSize={"w-[100px] md:w-[120px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[160px] md:w-[180px]"}
                  ProductHSize={"h-[180px] md:h-[200px]"}
                  ProductImageSize={"w-[100px] md:w-[120px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[160px] md:w-[180px]"}
                  ProductHSize={"h-[180px] md:h-[200px]"}
                  ProductImageSize={"w-[100px] md:w-[120px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[160px] md:w-[180px]"}
                  ProductHSize={"h-[180px] md:h-[200px]"}
                  ProductImageSize={"w-[100px] md:w-[120px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[160px] md:w-[180px]"}
                  ProductHSize={"h-[180px] md:h-[200px]"}
                  ProductImageSize={"w-[100px] md:w-[120px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[160px] md:w-[180px]"}
                  ProductHSize={"h-[180px] md:h-[200px]"}
                  ProductImageSize={"w-[100px] md:w-[120px]"}
                />
              </Link>
            </div>
          </div>
          {/* Popular Products */}

          {/* All Products */}
          <div className="all-Products w-full h-fit px-4 py-4 pb-10">
            <p className="text-lg md:text-xl font-semibold mb-4">All Products</p>

            <div className="two-row w-full grid grid-cols-2 md:grid-cols-3 gap-4">
              
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>

           
              
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct2.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>
              <Link to="/product-details">
                <ProductCard
                  ProductImage={"photos/insparetionProduct3.jpg"}
                  ProductPrice={"Price: $700"}
                  ProductWSize={"w-[130px] sm:w-[120px]"}
                  ProductHSize={"h-[160px] md:h-[180px]"}
                  ProductImageSize={"w-[80px] md:w-[100px]"}
                />
              </Link>



        
              
            </div>
          </div>
          {/* All Products */}
        </div>
      </div>
    </>
  );
};

export default Home;