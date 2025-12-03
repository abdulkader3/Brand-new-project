import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { LuBoxes } from "react-icons/lu";
import { MdOutlineManageAccounts, MdOutlineNotificationsNone } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { VscHeart } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [memoOpen, setMemoOpen] = useState(false);
  return (
    <>
      <nav>
        <ul className="flex justify-between px-2 items-center py-2  bg-white lg:px-12">

          <li>
            <Link to="/">
              {" "}
              <img className="w-[60px] md:w-[100px] " src="photos/main-logo.png" alt="logo" />{" "}
            </Link>
          </li>

          {/* Search box */}
          <li>
            <div className="Search relative">
              <input
                className="bg-[#4c4c4c50] px-1 md:px-20 lg:px-40 py-1 md:py-2 rounded-full outline-0 "
                type="search"
                placeholder="Search"
              />
              <button className=" absolute text-[20px] top-[7px] md:top-[10px] right-[14px] md:right-[20px] hover:scale-125 active:scale-95 transition-all ">
                <IoSearchOutline />
              </button>
            </div>
          </li>
          {/* Search box */}

          {/* Memo Button */}
          <li>
            <button onClick={() => setMemoOpen((prev) => !prev)}>
             <FaBarsStaggered className="text-[25px] md:text-[40px] " /> 
            </button>
          </li>
          {/* Memo Button */}
          

        </ul>

        {/* memo content */}
        <div
          className={`w-fit h-screen rounded-2xl fixed top-14 lg:top-20 right-0 bg-[#eff7ff] py-5 px-10 shadow-[-2px_1px_10px_6px_rgba(0,_0,_0,_0.1)] transition-transform duration-500 ease-in-out z-50
            ${memoOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="profile-Image flex flex-col items-center">
            <div className="profilePhotos w-[100px] rounded-full overflow-hidden ">
              <img className="w-full" src="photos/profile.png" alt="profile" />
            </div>
            {/* name id */}
            <div className="Name-id text-center ">
              <p className="font-bold text-[21px] " >Name Joni</p>
              <p className="font-semibold" >ID: 002 21</p>
            </div>
            {/* name id */}
            
            {/* Others links  */}
            <div className="Others-Links w-full mt-5 text-center ">
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-base md:text-lg lg:text-xl">
                <div className="white-line bg-white h-[2px] w-[180px] md:w-[220px] lg:w-[250px] rounded-full"></div>
                <div className="login-singUp my-2">
                  <Link onClick={() => setMemoOpen((prev) => !prev)} className="flex items-center gap-2 md:gap-4 lg:gap-5 text-[16px] md:text-[20px] lg:text-[22px]" to="/login">
                    <CgProfile className="text-[20px] md:text-[24px] lg:text-[28px]" />
                    <span>Login/Sing Up</span>
                  </Link>
                </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-base md:text-lg lg:text-xl">
                <div className="white-line bg-white h-[2px] w-[180px] md:w-[220px] lg:w-[250px] rounded-full"></div>
                <div className="login-singUp my-2">
                  <Link onClick={() => setMemoOpen((prev) => !prev)} className="flex items-center gap-2 md:gap-4 lg:gap-5 text-[16px] md:text-[20px] lg:text-[22px]" to="/profile">
                    <MdOutlineManageAccounts className="text-[20px] md:text-[24px] lg:text-[28px]" />
                    <span>My Profile</span>
                  </Link>
                </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-base md:text-lg lg:text-xl">
                <div className="white-line bg-white h-[2px] w-[180px] md:w-[220px] lg:w-[250px] rounded-full"></div>
                <div className="login-singUp my-2">
                  <Link onClick={() => setMemoOpen((prev) => !prev)} className="flex items-center gap-2 md:gap-4 lg:gap-5 text-[16px] md:text-[20px] lg:text-[22px]" to="/notification">
                    <MdOutlineNotificationsNone className="text-[20px] md:text-[24px] lg:text-[28px]" />
                    <span>Notification</span>
                  </Link>
                </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-base md:text-lg lg:text-xl">
                <div className="white-line bg-white h-[3px] w-[180px] md:w-[220px] lg:w-[250px] rounded-full"></div>
                <div className="login-singUp my-2">
                  <Link onClick={() => setMemoOpen((prev) => !prev)} className="flex items-center gap-2 md:gap-4 lg:gap-5 text-[16px] md:text-[20px] lg:text-[22px]" to="/all-categories">
                    <LuBoxes className="text-[20px] md:text-[24px] lg:text-[28px]" />
                    <span>All products</span>
                  </Link>
                </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-base md:text-lg lg:text-xl">
                <div className="white-line bg-white h-[2px] w-[180px] md:w-[220px] lg:w-[250px] rounded-full"></div>
                <div className="login-singUp my-2">
                  <Link onClick={() => setMemoOpen((prev) => !prev)} className="flex items-center gap-2 md:gap-4 lg:gap-5 text-[16px] md:text-[20px] lg:text-[22px]" to="/my-order">
                    <TiShoppingCart className="text-[20px] md:text-[24px] lg:text-[28px]" />
                    <span>My Order</span>
                  </Link>
                </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-base md:text-lg lg:text-xl">
                <div className="white-line bg-white h-[3px] w-[180px] md:w-[220px] lg:w-[250px] rounded-full"></div>
                <div className="login-singUp my-2">
                  <Link onClick={() => setMemoOpen((prev) => !prev)} className="flex items-center gap-2 md:gap-4 lg:gap-5 text-[16px] md:text-[20px] lg:text-[22px]" to="/cart">
                    <FiShoppingCart className="text-[20px] md:text-[24px] lg:text-[28px]" />
                    <span>cart</span>
                  </Link>
                </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-base md:text-lg lg:text-xl">
                <div className="white-line bg-white h-[2px] w-[180px] md:w-[220px] lg:w-[250px] rounded-full"></div>
                <div className="login-singUp my-2">
                  <Link onClick={() => setMemoOpen((prev) => !prev)} className="flex items-center gap-2 md:gap-4 lg:gap-5 text-[16px] md:text-[20px] lg:text-[22px]" to="/wishlist">
                    <VscHeart className="text-[20px] md:text-[24px] lg:text-[28px]" />
                    <span>Wishlist</span>
                  </Link>
                </div>
                <div className="white-line bg-white h-[2px] w-[180px] md:w-[220px] lg:w-[250px] rounded-full"></div>
              </div>
              {/* ...existing code... */}
            </div>
            {/* Others links  */}
          </div>
        </div>
        {/* memo content */}

      </nav>
    </>
  );
};

export default Navbar;
