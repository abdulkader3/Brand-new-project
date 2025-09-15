import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <li>
            <FaBarsStaggered />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
