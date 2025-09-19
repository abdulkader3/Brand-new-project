import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";

const ProductDetails = () => {
  return (
    <>
      <div className="w-full h-screen bg-white pr-4 ">

        {/* Image */}
        <div className="product w-full p-18 h-[400px] bg-[#fff] rounded-br-[80px] shadow-[0px_1px_1px_1px_rgba(0,_0,_0,_0.1)] ">
           <img className="w-full" src="photos/insparetionProduct3.jpg" alt="product-image" />
        </div>
        {/* Image */}

          {/* Dot */}
          <div className="w-full flex justify-center gap-4 mt-5 mb-10">
            <div className="w-3 h-3 rounded-full bg-green-400 border-green-400 hover:bg-green-400 active:bg-green-400 border"></div>
            <div className="w-3 h-3 rounded-full border-gray-500-400 hover:bg-green-400 active:bg-green-400 border"></div>
            <div className="w-3 h-3 rounded-full border-gray-500-400 hover:bg-green-400 active:bg-green-400 border"></div>
          </div>
          {/* Dot */}

          
          {/* Essential details  */}
          <div className="w-full flex justify-between pl-3 pr-5 bg-white pb-10 shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.1)] ">

            <div className="">
                <p className="font-semibold">Lather Demo Bag Name</p>
                <div className="price flex gap-3 text-green-400 my-1">
                  <p className=" line-through"> $460 </p>
                <p>$320</p>
                </div>
                <p className="flex gap-1 items-center text-[12px] ">
                  <FaStar className="text-[#eca900] " />
                  <FaStar className="text-[#eca900] " />
                  <FaStar className="text-[#eca900] " />
                  <FaStar className="text-[#eca900] " />
                  <FaStar className="text-[#eca900] " />
                  <span className="text-white px-2 ml-1 rounded-2xl bg-green-400">6</span>
                </p>
            </div>

            <div className="Love-count flex flex-col items-center">
              <span> <CiHeart className=""/> </span>
              <span className="text-green-400">6</span>
            </div>

          </div>
          {/* Essential details  */}


          {/* Description  */}
          <div className="Description w-full text-[14px] font-light mt-5 pb-4 pl-4 shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.1)]">
              <p className="w-[310px] ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>

              <p className="text-[14px] font-semibold mt-5"> 
                 Free Shipping              
              </p>
              <p className="text-[14px] w-[310px]">To Bangladesh from seller via china. Shipping method online.</p>
          </div>
          {/* Description  */}

          {/* secured payment method  */}
          <div className="w-full flex items-center gap-2 py-3 pl-4 shadow-[0px_1px_1px_1px_rgba(0,_0,_0,_0.1)]">
            <GoShieldCheck className="text-green-400" />
            <p className="text-[13px] font-semibold ">  Secure Payment Method.</p>
          </div>
          {/* secured payment method  */}


          {/* Color Select */}
          <div className="Color-Select w-full pl-3 pb-3 shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.1)] ">

            <p className="font-semibold mr-2">Color select </p>

            <div className="radio-div h-8 flex items-center gap-5 mt-3 pl-3 ">
              <label className="relative">
              <input type="radio" name="color" value="pink" defaultChecked className="sr-only peer" />
              <span className="w-6 h-6 rounded-full bg-pink-400 border-2 border-gray-400 peer-checked:ring-3 peer-checked:ring-green-600 inline-block cursor-pointer transition-all"></span>
            </label>

            <label className="relative">
              <input type="radio" name="color" value="gray" className="sr-only peer" />
              <span className="w-6 h-6 rounded-full bg-gray-500 border-2 border-gray-400 peer-checked:ring-3 peer-checked:ring-green-600 inline-block cursor-pointer transition-all"></span>
            </label>

            <label className="relative">
              <input type="radio" name="color" value="black" className="sr-only peer" />
              <span className="w-6 h-6 rounded-full bg-black border-2 border-gray-400 peer-checked:ring-3 peer-checked:ring-green-600 inline-block cursor-pointer transition-all"></span>
            </label>
            
            <label className="relative">
              <input type="radio" name="color" value="orange" className="sr-only peer" />
              <span className="w-6 h-6 rounded-full bg-orange-400 border-2 border-gray-400 peer-checked:ring-3 peer-checked:ring-green-600 inline-block cursor-pointer transition-all"></span>
            </label>

            </div>

          </div>
          {/* Color Select */}



      </div>
    </>
  );
};

export default ProductDetails;
