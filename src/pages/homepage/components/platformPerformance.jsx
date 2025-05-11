import React from 'react'
import mindmap from '../../../assets/images/mindmap.png';
import stemleaf from '../../../assets/images/stemleaf.png';
import colchart from '../../../assets/images/colchart.png';
import nonrebbon from '../../../assets/images/nonrebbon.png';
import { motion } from "framer-motion";
const Card = ({image, title, message}) =>{
    return (
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full h-full rounded-xl bg-[#f5f5fb] p-4 hover:translate-x-[-2%] hover:translate-y-[2%] transition-translate duration-300">
            <img src={image} className="w-[30px] h-[24px] object-contain mb-8" alt="" />
            <h4 className="font-semibold md:text-[27px] lg:text-[15px]">{title}</h4>
            <p className="mt-3 text-slate-500 text-[14px]"> {message} </p>
        </motion.div>
    )
}

export default function PlatformPerformance() {
  return (
    <div className="w-full lg:h-[512px] py-10 lg:py-0 mb-20 lg:mb-0 flex items-center justify-center">
        <div className="w-[90%] lg:w-[85%] h-[90%] grid lg:grid-cols-2 lg:gap-x-10">
            <div className="w-full grid grid-rows-2 gap-y-2">
                <div className="w-full h-full flex items-start justify-end flex-col">
                    <h5 className="text-slate-600">By The Numbers</h5>
                    <h3 className="font-semibold my-2 text-[25px] md:text-[35px] lg:text-[35px]">Platform Performance Insights</h3>
                    <p className="text-slate-500 w-[80%] lg:w-[70%]">
                        Leveraging cutting-edge technology to streamline your recruitment and talent sourcing workflow.
                    </p>
                </div>
                <div className="mt-3 w-full h-[67px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 mt-5">
                    <div className="w-full h-full col-span-2 md:col-span-1 lg:col-span-1">
                        <div className="w-full flex items-end justify-start">
                            <h3 className="font-semibold text-[35px] m-0">90,000</h3>
                            <span className="font-bold text-[20px]">+</span>
                        </div>
                        <small className="text-slate-500">Users Served</small>
                    </div>
                    <div className="w-full h-full">
                        <h3 className="font-semibold text-[35px] m-0">4.9</h3>
                        <small className="text-slate-500">Users Score</small>
                    </div>
                    <div className="w-full h-full">
                        <h3 className="font-semibold text-[35px] m-0">12</h3>
                        <small className="text-slate-500">Hires Per Hour</small>
                    </div>
                </div>
            </div>
            <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 lg:p-5 gap-4 mt-20 lg:mt-0">
                <Card title="Partner Success" image={mindmap} message= "Advanced machine learning algorithms delivering intelligent candidate insights."/>
                <Card title="24/7 Support" image={stemleaf} message="Advanced machine learning algorithms delivering intelligent candidate insights."/>
                <Card title="AI - Powered Tools" image={colchart} message="Advanced machine learning algorithms delivering intelligent candidate insights."/>
                <Card title="Enterprise Security" image={nonrebbon} message="Advanced machine learning algorithms delivering intelligent candidate insights."/>
            </div>
        </div>
    </div>
  )
}
