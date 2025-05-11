import React from 'react'
import looper from '../../../assets/images/looper.png';
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
export default function GetStarted() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}  
      className="w-full h-[416px] flex items-center justify-center">
        <div className="w-[90%] lg:w-[85%] h-[320px] bg-gradient-to-r from-[#090216] via-[#240D4E] to-[#6424DA] mx-auto relative rounded-xl overflow-hidden">
            <img src={looper} alt="" className="w-[100%] h-full object-cover absolute bottom-0 right-[-3%] opacity-[0.8]"/>
            <div className="absolute w-full h-full bottom-0 left-0 flex items-center justify-center flex-col text-white">
                <span className="text-[19px]">90,000+ Users</span>
                <h3 className="font-semibold text-center text-[30px] md:text-[50px] lg:text-[70px]">One Hire Pays For The Platform</h3>
                <button className="btn bg-white text-black rounded-xl flex items-center justify-center w-[163px] h-[48px] text-[15px] text-slate-600 border hover:border-[1.7px] border-black hover:border-gray-500 hover:outline-slate-300 cursor-pointer">
                    Get Started
                    <FiArrowRight className="ml-2 text-[17px]" />
                </button>
            </div>
        </div>
    </motion.div>
  )
}
