import React from "react";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({
  ProductImage,
  ProductPrice,
  ProductWSize,
  ProductHSize,
  ProductImageSize,
  color,
  wish
}) => {
  return (
    <>
      {/* product card */}
      <div
        className={`${ProductWSize ? ProductWSize : "w-[180px]"} ${
          ProductHSize ? ProductHSize : "h-[150px]"
        } ${color?color:"bg-[#e8f4ff94]"} rounded-xl px-2 py-2 flex flex-col justify-between md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]`}
      >
        <div className="product w-full flex justify-center ">
          {" "}
          <img
            className={` ${
              ProductImageSize ? ProductImageSize : "w-[90px]"
            } md:w-[150px] lg:w-[180px]`}
            src={ProductImage}
            alt="product"
          />{" "}
        </div>
        <div className="price-and-addCard w-full flex justify-between items-center md:text-lg lg:text-xl ">
          <p> {ProductPrice} </p>
          <button className={`${wish ? "p-1 bg-purple-600 rounded-full text-white" : wish }`}>
            {" "}
            <FaRegHeart />{" "}
          </button>
        </div>
      </div>
      {/* product card */}
    </>
  );
};

export default ProductCard;
