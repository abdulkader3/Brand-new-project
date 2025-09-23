import React from 'react'
import { FaFilter } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ProductCard from '../component/ProductCard.jsx';

const Wishlist = () => {
  return (
    <>

    <div className="w-full h-fit bg-[#e8f4ff94] relative pt-5 ">
        {/* navigate */}
        <div className="navigate flex justify-between px-4 py-3 text-xl h-fit items-center mb-10 w-full fixed top-18 left-0 z-40 bg-[#e8e8e8e4] border-b border-gray-200">
          <Link to="/" className="flex gap-2 items-center">
            {" "}
            <IoIosArrowBack /> Back
          </Link>
          <button> Wishlist </button>
          <button className="flex gap-1 items-center">
            Filter <FaFilter />{" "}
          </button>
        </div>
        <div className="h-[60px] md:h-[70px] lg:h-[80px]"></div>
        {/* spacer for fixed nav */}

        <div className="w-full flex flex-wrap justify-center gap-5">
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct2.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct3.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct2.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct3.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct2.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct3.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct2.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct3.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct2.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>
          <Link to="/product-details">
            {" "}
            <ProductCard
              ProductImage={"photos/insparetionProduct3.jpg"}
              ProductPrice={"Price: $700"}
              ProductWSize={"w-[180px]"}
              ProductHSize={"h-[190px]"}
              ProductImageSize={"w-[120px]"}
              color={"bg-[#fff]"}
              wish={"true"}
            />{" "}
          </Link>

        </div>
      </div>
        
      
    </>
  )
}

export default Wishlist
