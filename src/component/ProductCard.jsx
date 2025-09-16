import React from "react";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ProductImage,ProductPrice}) => {
  return (
    <>
      {/* product card */}
      <div className="w-[140px] h-[140px] bg-[#e8f4ff94] rounded-xl  px-2 py-2 flex flex-col justify-between ">
        <div className="product w-full flex justify-center ">
          {" "}
          <img
            className="w-[70px] "
            src={ProductImage}
            alt="product"
          />{" "}
        </div>
        <div className="price-and-addCard w-full flex justify-between  ">
          <p> {ProductPrice} </p>
          <button>
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
