import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <>
      <div className="w-full mobile-safe-height bg-white pr-4 overflow-scroll md:px-8 lg:overflow-hidden lg:px-12 xl:px-20">

        {/* Main Content Container for Desktop Layout */}
        <div className="lg:flex lg:gap-8 lg:max-w-7xl lg:mx-auto lg:h-screen">
          
          {/* Left Column - Product Image and Gallery - Fixed on Desktop */}
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:h-screen lg:py-4">
            {/* Image */}
            <div className="product w-full p-18 h-[400px] md:h-[500px] lg:h-[500px] bg-[#fff] rounded-br-[80px] shadow-[0px_1px_1px_1px_rgba(0,_0,_0,_0.1)] ">
               <img className="w-full h-full object-cover" src="photos/insparetionProduct3.jpg" alt="product-image" />
            </div>
            {/* Image */}

            {/* Dot Gallery Indicators */}
            <div className="w-full flex justify-center gap-4 mt-5 mb-10">
              <div className="w-3 h-3 rounded-full bg-green-400 border-green-400 hover:bg-green-400 active:bg-green-400 border"></div>
              <div className="w-3 h-3 rounded-full border-gray-500-400 hover:bg-green-400 active:bg-green-400 border"></div>
              <div className="w-3 h-3 rounded-full border-gray-500-400 hover:bg-green-400 active:bg-green-400 border"></div>
            </div>
            {/* Dot Gallery Indicators */}
          </div>
          
          {/* Right Column - Product Details - Scrollable on Desktop */}
          <div className="lg:w-1/2 lg:pl-8 lg:h-screen lg:overflow-y-auto lg:py-4">

          

          
          {/* Essential details  */}
          <div className="w-full flex justify-between pl-3 pr-5 md:px-6 lg:px-0 bg-white pb-6 md:pb-8 lg:pb-10 shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.1)] ">

            <div className="">
                <p className="font-semibold text-lg md:text-xl lg:text-2xl">Lather Demo Bag Name</p>
                <div className="price flex gap-3 text-green-400 my-1 md:my-2">
                  <p className="line-through text-base md:text-lg lg:text-xl"> $460 </p>
                <p className="text-base md:text-lg lg:text-xl">$320</p>
                </div>
                <p className="flex gap-1 items-center text-[12px] md:text-sm lg:text-base ">
                  <FaStar className="text-[#eca900] " />
                  <FaStar className="text-[#eca900] " />
                  <FaStar className="text-[#eca900] " />
                  <FaStar className="text-[#eca900] " />
                  <FaStar className="text-[#eca900] " />
                  <span className="text-white px-2 ml-1 rounded-2xl bg-green-400">6</span>
                </p>
            </div>

            <div className="Love-count flex flex-col items-center">
              <span> <CiHeart className="text-xl md:text-2xl lg:text-3xl"/> </span>
              <span className="text-green-400 text-sm md:text-base">6</span>
            </div>

          </div>
          {/* Essential details  */}


          {/* Description  */}
          <div className="Description w-full text-[14px] md:text-base lg:text-lg font-light mt-5 pb-4 md:pb-6 lg:pb-8 pl-4 md:pl-6 lg:pl-0 shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.1)]">
              <p className="w-[310px] md:w-[450px] lg:w-full max-w-2xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>

              <p className="text-[14px] md:text-base lg:text-lg font-semibold mt-5"> 
                 Free Shipping              
              </p>
              <p className="text-[14px] md:text-base lg:text-lg w-[310px] md:w-[450px] lg:w-full max-w-2xl">To Bangladesh from seller via china. Shipping method online.</p>
          </div>
          {/* Description  */}

          {/* secured payment method  */}
          <div className="w-full flex items-center gap-2 py-3 md:py-4 lg:py-5 pl-4 md:pl-6 lg:pl-0 shadow-[0px_1px_1px_1px_rgba(0,_0,_0,_0.1)]">
            <GoShieldCheck className="text-green-400 text-base md:text-lg lg:text-xl" />
            <p className="text-[13px] md:text-base lg:text-lg font-semibold ">  Secure Payment Method.</p>
          </div>
          {/* secured payment method  */}


          {/* Color Select */}
          <div className="Color-Select w-full pl-3 md:pl-6 lg:pl-0 py-5 md:py-6 lg:py-8 shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.1)] ">

            <p className="font-semibold mr-2 text-base md:text-lg lg:text-xl">Color select </p>

            <div className="radio-div h-8 md:h-10 lg:h-12 flex items-center gap-5 md:gap-6 lg:gap-8 mt-3 md:mt-4 lg:mt-5 pl-3 md:pl-6 lg:pl-0 ">
              <label className="relative">
              <input type="radio" name="color" value="pink" defaultChecked className="sr-only peer" />
              <span className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-pink-400 border-2 border-gray-400 peer-checked:ring-3 peer-checked:ring-green-600 inline-block cursor-pointer transition-all"></span>
            </label>

            <label className="relative">
              <input type="radio" name="color" value="gray" className="sr-only peer" />
              <span className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gray-500 border-2 border-gray-400 peer-checked:ring-3 peer-checked:ring-green-600 inline-block cursor-pointer transition-all"></span>
            </label>

            <label className="relative">
              <input type="radio" name="color" value="black" className="sr-only peer" />
              <span className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-black border-2 border-gray-400 peer-checked:ring-3 peer-checked:ring-green-600 inline-block cursor-pointer transition-all"></span>
            </label>
            
            <label className="relative">
              <input type="radio" name="color" value="orange" className="sr-only peer" />
              <span className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-orange-400 border-2 border-gray-400 peer-checked:ring-3 peer-checked:ring-green-600 inline-block cursor-pointer transition-all"></span>
            </label>

            </div>

          </div>
          {/* Color Select */}

          {/* Specification */}
          <div className="w-full text-[14px] md:text-base lg:text-lg font-light mt-5 pb-4 md:pb-6 lg:pb-8 pl-4 md:pl-6 lg:pl-0 shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.1)]">
            
              <p className="text-[14px] md:text-base lg:text-lg font-semibold mt-5"> 
                 Specification              
              </p>
              <p className="text-[14px] md:text-base lg:text-lg w-[310px] md:w-[450px] lg:w-full max-w-2xl">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          {/* Specification */}



          {/* button */}
          <div className="w-full flex justify-center gap-5 md:gap-8 lg:gap-10 mt-10 md:mt-12 lg:mt-16 mobile-button-safe">
           
           <button className="bg-gray-300 font-semibold text-black px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-400 transition-colors" >
            <Link to="/cart"> ADD TO CART </Link>
           </button>

           <button className="bg-red-700 font-semibold text-white px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg rounded-lg hover:bg-red-800 transition-colors" >
            <Link to="/cart"> ADD TO CART </Link>
           </button>
          
          </div>
          {/* button */}

          </div> {/* End Right Column */}


        </div> {/* End Main Content Container */}

      </div>
    </>
  );
};

export default ProductDetails;
