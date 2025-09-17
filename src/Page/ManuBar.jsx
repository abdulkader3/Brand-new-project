import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoHomeOutline } from 'react-icons/io5'
import { LiaCartArrowDownSolid } from 'react-icons/lia'
import { PiChats } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const ManuBar = () => {
  return (
    <>

    <div className="main w-full h-fit px-2 ">

        <div className="row bg-white px-5 md:px-14 py-2 rounded-full flex justify-between shadow-[-2px_1px_10px_6px_rgba(0,_0,_0,_0.1)]
 ">
        <Link className='flex flex-col items-center text-[18px] md:text-xl ' to="/"> <IoHomeOutline /> Home </Link>
        <Link className='flex flex-col items-center text-[18px] md:text-xl ' to="/chat"> <PiChats />  Chat </Link>
        <Link className='flex flex-col items-center text-[18px] md:text-xl ' to="/cart"> <LiaCartArrowDownSolid/>  Cart </Link>
        <Link className='flex flex-col items-center text-[18px] md:text-xl ' to="/profile"> <CgProfile/> Profile </Link>
        </div>

    </div>
      
    </>
  )
}

export default ManuBar
