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
        <ul className="flex justify-between px-2 items-center py-2  bg-white">

          <li>
            <Link to="#">
              {" "}
              <img src="photos/insparetionLogo.webp" alt="logo" />{" "}
            </Link>
          </li>

          {/* Search box */}
          <li>
            <div className="Search relative">
              <input
                className="bg-[#4c4c4c50] px-2 py-2 rounded-full outline-0 "
                type="search"
                placeholder="Search"
              />
              <button className=" absolute text-[20px] top-[10px] right-[10px] hover:scale-125 active:scale-95 transition-all ">
                <IoSearchOutline />
              </button>
            </div>
          </li>
          {/* Search box */}

          {/* Memo Button */}
          <li>
            <button onClick={() => setMemoOpen((prev) => !prev)}>
             <FaBarsStaggered className="text-[25px] " /> 
            </button>
          </li>
          {/* Memo Button */}
          

        </ul>

        {/* memo content */}
        <div
          className={`w-fit h-screen rounded-2xl fixed top-14 right-0 bg-[#eff7ff] py-5 px-10 shadow-[-2px_1px_10px_6px_rgba(0,_0,_0,_0.1)] transition-transform duration-500 ease-in-out z-50
            ${memoOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="profile-Image flex flex-col items-center">
            <div className="profilePhotos w-[100px] rounded-full overflow-hidden ">
              <img className="w-full" src="photos/demoProfileImage.webp" alt="profile" />
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
              <div className="LingBox mb-5 text-xl">
                <div className=" white-line bg-white h-[2px] w-[250px] rounded-full "></div>
              <div className="login-singUp my-2">
                <Link className="flex text-[22px] item-center gap-5" to="#" > <CgProfile className="text-[28px] " /> <span>Login/Sing Up</span> </Link>
              </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-xl">
                <div className=" white-line bg-white h-[2px] w-[250px] rounded-full "></div>
              <div className="login-singUp my-2">
                <Link className="flex text-[22px] item-center gap-5" to="#" > <MdOutlineManageAccounts className="text-[28px] " /> <span>My Profile</span> </Link>
              </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-xl">
                <div className=" white-line bg-white h-[2px] w-[250px] rounded-full "></div>
              <div className="login-singUp my-2">
                <Link className="flex text-[22px] item-center gap-5" to="#" > <MdOutlineNotificationsNone className="text-[28px] " /> <span>Notification</span> </Link>
              </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-xl">
                <div className=" white-line bg-white h-[3px] w-[250px] rounded-full "></div>
              <div className="login-singUp my-2">
                <Link className="flex text-[22px] item-center gap-5" to="#" > <LuBoxes className="text-[28px] " /> <span>All products</span> </Link>
              </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-xl">
                <div className=" white-line bg-white h-[2px] w-[250px] rounded-full "></div>
              <div className="login-singUp my-2">
                <Link className="flex text-[22px] item-center gap-5" to="#" > <TiShoppingCart className="text-[28px] "  /> <span>My Order</span> </Link>
              </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-xl">
                <div className=" white-line bg-white h-[3px] w-[250px] rounded-full "></div>
              <div className="login-singUp my-2">
                <Link className="flex text-[22px] item-center gap-5" to="#" > <FiShoppingCart className="text-[28px] " /> <span>cart</span> </Link>
              </div>
              </div>
              {/* ...existing code... */}
              <div className="LingBox mb-5 text-xl">
                <div className=" white-line bg-white h-[2px] w-[250px] rounded-full "></div>
              <div className="login-singUp my-2">
                <Link className="flex text-[22px] item-center gap-5" to="#" > <VscHeart className="text-[28px] " /> <span>Wishlist</span> </Link>
              </div>
              <div className=" white-line bg-white h-[2px] w-[250px] rounded-full "></div>
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
