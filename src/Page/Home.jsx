import React from "react";
import ProductSlider from "../component/ProductSlider.jsx";
import { GiBilledCap, GiRunningShoe } from "react-icons/gi";
import { PiHighHeel } from "react-icons/pi";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="main bg-white">

        <div className="w-full h-fit bg-[#e8f4ff94]">

            {/* Slider */}
        <div className="first-row w-full h-fit flex flex-col items-center ">
          <div className="Slider w-[90%] h-[200px] bg-white mt-2 rounded-2xl shadow-2xl ">
            <ProductSlider />
          </div>
        </div>
        {/* slider */}


        {/* Categories */}
        <div className="Categories w-full h-fit px-4 mt-5 pb-5 ">
          <p className="text-[18px] font-semibold ">Categories</p>

          <div className=" flex justify-center gap-5 mt-5 ">
            <button className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-[30px] ">
              {" "}
              <GiRunningShoe />{" "}
            </button>
            <button className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-[30px] ">
              {" "}
              <PiHighHeel />{" "}
            </button>
            <button className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-[30px] ">
              {" "}
              <BsFillHandbagFill />{" "}
            </button>
            <button className="w-12 h-12 rounded-full bg-white flex justify-center items-center ">
              {" "}
              <img
                className="w-[70px] h-[50px]"
                src="photos/makeUp-icon.png"
                alt="icon"
              />{" "}
            </button>
            <button className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-[30px] ">
              {" "}
              <GiBilledCap />{" "}
            </button>
          </div>
        </div>
        {/* Categories */}

        </div>

        


        {/* Best sales */}
        <div className="best-sales w-full h-fit mt-2 px-4 ">
            <p className="text-[18px] font-semibold">Best Sale</p>
            
            <div className="single-row w-full flex flex-wrap gap-5 justify-center">

                {/* product card */}
                <div className="w-[140px] h-[140px] bg-[#e8f4ff94] rounded-xl  px-2 py-2 flex flex-col justify-between ">
                    <div className="product w-full flex justify-center "> <img className="w-[70px] " src="photos/insparetionProduct.jpg" alt="product" /> </div>
                    <div className="price-and-addCard w-full flex justify-between  ">
                        <p> Price: $700 </p>
                        <button> <FaRegHeart/> </button>
                    </div>
                </div>
                {/* product card */}
                {/* product card */}
                <div className="w-[140px] h-[140px] bg-[#e8f4ff94] rounded-xl  px-2 py-2 flex flex-col justify-between ">
                    <div className="product w-full flex justify-center "> <img className="w-[70px] " src="photos/insparetionProduct.jpg" alt="product" /> </div>
                    <div className="price-and-addCard w-full flex justify-between  ">
                        <p> Price: $700 </p>
                        <button> <FaRegHeart/> </button>
                    </div>
                </div>
                {/* product card */}
                {/* product card */}
                <div className="w-[140px] h-[140px] bg-[#e8f4ff94] rounded-xl  px-2 py-2 flex flex-col justify-between ">
                    <div className="product w-full flex justify-center "> <img className="w-[70px] " src="photos/insparetionProduct.jpg" alt="product" /> </div>
                    <div className="price-and-addCard w-full flex justify-between  ">
                        <p> Price: $700 </p>
                        <button> <FaRegHeart/> </button>
                    </div>
                </div>
                {/* product card */}
                {/* product card */}
                <div className="w-[140px] h-[140px] bg-[#e8f4ff94] rounded-xl  px-2 py-2 flex flex-col justify-between ">
                    <div className="product w-full flex justify-center "> <img className="w-[70px] " src="photos/insparetionProduct.jpg" alt="product" /> </div>
                    <div className="price-and-addCard w-full flex justify-between  ">
                        <p> Price: $700 </p>
                        <button> <FaRegHeart/> </button>
                    </div>
                </div>
                {/* product card */}
                
                {/* product card */}
                <div className="w-[140px] h-[140px] bg-[#e8f4ff94] rounded-xl  px-2 py-2 flex flex-col justify-between ">
                    <div className="product w-full flex justify-center "> <img className="w-[70px] " src="photos/insparetionProduct.jpg" alt="product" /> </div>
                    <div className="price-and-addCard w-full flex justify-between  ">
                        <p> Price: $700 </p>
                        <button> <FaRegHeart/> </button>
                    </div>
                </div>
                {/* product card */}


            </div>


        </div>
        {/* Best sales */}



      </div>
    </>
  );
};

export default Home;
