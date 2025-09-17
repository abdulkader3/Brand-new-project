import React from "react";
import ProductSlider from "../component/ProductSlider.jsx";
import { GiBilledCap, GiRunningShoe } from "react-icons/gi";
import { PiHighHeel } from "react-icons/pi";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ProductCard from "../component/ProductCard.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main bg-white min-h-screen">
        <div className="w-full h-fit bg-[#e8f4ff94]">

          {/* Slider */}
          <div className="first-row w-full h-fit flex flex-col items-center md:items-start md:px-8 lg:px-20 ">
            <div className="Slider w-[90%] h-[200px] bg-white mt-2 rounded-2xl shadow-2xl md:w-[900px] md:h-[300px] lg:w-[1400px] lg:h-[350px] ">
              <ProductSlider />
            </div>
          </div>
          {/* slider */}


          {/* Categories */}
          <div className="Categories w-full h-fit px-4 mt-5 md:mt-10 pb-5 md:px-8 lg:px-20 ">
            <p className="text-[18px] md:text-2xl font-semibold ">Categories</p>

            <div className=" flex justify-center gap-5 mt-5 md:gap-8 lg:gap-12 ">
              <Link to="/all-categories" className=" w-12 h-12 md:w-[90px] md:h-[90px] md:text-[45px] rounded-full bg-white flex justify-center items-center text-[30px] ">
                {" "}
                <GiRunningShoe />{" "}
              </Link>
              <Link to="/all-categories" className="w-12 h-12 md:w-[90px] md:h-[90px] md:text-[45px] rounded-full bg-white flex justify-center items-center text-[30px] ">
                {" "}
                <PiHighHeel />{" "}
              </Link>
              <Link to="/all-categories" className="w-12 h-12 md:w-[90px] md:h-[90px] md:text-[45px] rounded-full bg-white flex justify-center items-center text-[30px] ">
                {" "}
                <BsFillHandbagFill />{" "}
              </Link>
              <Link to="/all-categories" className="w-12 h-12 md:w-[90px] md:h-[90px] rounded-full bg-white flex justify-center items-center ">
                {" "}
                <img
                  className="w-[70px] md:w-[100px] md:h-[80px] h-[50px]"
                  src="photos/makeUp-icon.png"
                  alt="icon"
                />{" "}
              </Link>
              <Link to="/all-categories" className="w-12 h-12 md:w-[90px] md:h-[90px] md:text-[45px] rounded-full bg-white flex justify-center items-center text-[30px] ">
                {" "}
                <GiBilledCap />{" "}
              </Link>
            </div>
          </div>
          {/* Categories */}
        </div>

        {/* Best sales */}
         <div className="best-sales w-full h-fit mt-2 md:mt-5 px-4 md:px-8 lg:px-20 ">
          <p className="text-[18px] md:text-2xl font-semibold md:mb-5">Best Sale</p>

          <div className="single-row w-full flex flex-nowrap gap-5 overflow-x-auto no-scrollbar md:gap-8 lg:gap-12 ">
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct2.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
            
            {/* product card */}
            <div className="flex-shrink-0 md:flex-shrink md:w-[220px] lg:w-[250px]">
              <ProductCard
                ProductImage={"photos/insparetionProduct3.jpg"}
                ProductPrice={"Price: $700"}
              />
            </div>
            {/* product card */}
           

          </div>

        </div>
        {/* Best sales */}


        

        {/* All Products */}
        <div className="best-sales w-full h-fit mt-2 md:mt-5 px-4 md:px-8 lg:px-20  ">
          <p className="text-[18px] md:mb-5 md:text-2xl font-semibold">All Products</p>

          <div className="all-product w-full flex flex-wrap gap-5 justify-center md:gap-12 lg:gap-16 ">

            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct2.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            <ProductCard 
            ProductImage={"photos/insparetionProduct3.jpg"}
            ProductPrice={"Price: $700"}
            ProductWSize={"w-[180px]"}
            ProductHSize={"h-[190px]"}
            ProductImageSize={"w-[120px]"}
            
            />
            
            
            

          </div>

        </div>
        {/* All Products */}



      </div>
    </>
  );
};

export default Home;
