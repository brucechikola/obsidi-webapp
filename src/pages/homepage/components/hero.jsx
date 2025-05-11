import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import woman from '../../../assets/images/woman.png';
import handshake from '../../../assets/images/handshake.png';
import meeting from '../../../assets/images/meeting.png';
import meeting2 from '../../../assets/images/meeting2.png';
import { motion } from "framer-motion";

// class to render shape component
const ShapeComponent = ({className, children, ...rest}) =>{
    return (
        <motion.div 
            // initial={{ opacity: 0, y: 500 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 2 }}
            className={`group w-full h-full flex items-center justify-center col-span-${rest?.colspan || 1} ${rest?.position || ''} transition-transform duration-500 hover:scale-105 hove:opacity-[0.3]`}>
            <div className={`w-full h-full overflow-hidden ${className && className} relative`}>
                {rest?.image && <>
                    <img src={rest?.image} className="w-full h-full object-cover transition-transform duration-500 delay-200 group-hover:scale-110" alt="" />
                    <div className="absolute inset-0 bg-black/30 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </>}
            </div>
            {children && children }
        </motion.div>
    )
}

export default function Hero() {
  return (
    <div className="w-[90%] mx-auto min-h-[calc(100dvh-(100px))] grid grid-cols-2 gap-x-13">
        {/* left side of the content */}
        <div className="w-full h-full flex items-start justify-center flex-col">
            <h1 className="font-semibold text-[90px] leading-[110px] mt-30 bg-gradient-to-r from-slate-700 via-blue-900 to-black/80 bg-clip-text text-transparent animate-pulse">Find & Hire Talent, Fast</h1>
            <p className="text-gray-500 text-[20px] my-6"> A vibrant community where black tech <br /> professionals connect with like-minded peers.</p>
            <button className="w-[265px] h-[65px] rounded-xl flex items-center justify-center bg-[#6424da] text-white transition duration-500 text-[18px] cursor-pointer hover:">
                Find Talent For Free
                <FiArrowRight className="ml-3 text-[30px]" />
            </button>
        </div>
        {/* right side of the content */}
        <div className="w-full h-full relative">
            <div className="w-full h-[90%] grid grid-cols-3 grid-rows-3 gap-4 absolute bottom-0">
                <ShapeComponent className="bg-red-500 rounded-full" image={woman}/>
                <ShapeComponent className="bg-[#0f0226] rounded-bl-[120px] rounded-tr-[120px]"/>
                <ShapeComponent className="bg-red-500 rounded-tl-[120px]" image={handshake}/>
                <ShapeComponent className="bg-red-500 rounded-tl-[130px] rounded-br-[130px] col-span-2" colspan="2" image={meeting}/>
                <ShapeComponent className="bg-[#0f0226] rounded-bl-[120px] rounded-tr-[120px]"/>
                <ShapeComponent className="bg-[#ff7d8c] rounded-tl-[120px] rounded-br-[120px]"/>
                <ShapeComponent className="bg-[#be5efe] rounded-bl-[120px] rounded-tr-[120px]" position="relative">
                    <div className="w-[60px] h-[60px] rounded-full bg-black absolute top-[-20%] right-[-20%]"></div>
                </ShapeComponent>
                <ShapeComponent className="w-full h-full  bg-red-500 rounded-tl-[130px]" image={meeting2}/>
            </div>
        </div>
    </div>
  )
}
