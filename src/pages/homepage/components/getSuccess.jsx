import React from 'react'
import getsuccess from '../../../assets/images/getsuccess.png';
import { FiArrowRight } from "react-icons/fi";
export default function GetSuccess() {
  return (
    <div className="w-full h-[948px] flex items-center justify-center flex-col">
        <span className="text-[#3328bf]">Get Success Together!</span>
        <h2 className="font-semibold text-[40px] w-[40%] text-center my-8">Adapting and Thriving in a Changing World</h2>
        <img src={getsuccess} alt="" className="w-[95%] object-cover h-[400px]" />
        <div className="flex items-center justify-center mt-10">
            <button className="btn rounded-xl text-[13px] cursor-pointer flex items-center justify-center bg-[#3328bf] hover:brightness-90 w-[123px] h-[43px] text-white transition duration-300">Get Started</button>
            <button className="btn rounded-xl text-[13px] cursor-pointer flex items-center justify-center bg-slate-100 w-[144px] h-[43px] ml-4 border border-slate-300 hover:shadow-md transition duration-300">
                Learn More
                <FiArrowRight className="ml-2 text-[14px]" />
            </button>
        </div>
    </div>
  )
}
