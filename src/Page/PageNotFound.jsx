import React from 'react'
import Lottie from "lottie-react";
import animationData from "./NotFound/pageNotFound.json"; // path to your JSON


const PageNotFound = () => {
  return (
    <>

    <div className="w-full h-screen bg-blue-300 text-white text-3xl flex justify-center items-center ">
        <Lottie animationData={animationData} loop={true} />
    </div>
      
    </>
  )
}

export default PageNotFound
