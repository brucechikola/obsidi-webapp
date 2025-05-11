import React from 'react'
import mindmap from '../../../assets/images/mindmap.png';
import stemleaf from '../../../assets/images/stemleaf.png';
import colchart from '../../../assets/images/colchart.png';
import nonrebbon from '../../../assets/images/nonrebbon.png';

const Card = ({image, title, message}) =>{
    return (
        <div className="w-full h-full rounded-xl bg-[#f5f5fb] p-4 hover:translate-x-[-2%] hover:translate-y-[2%] transition-translate duration-300">
            <img src={image} className="w-[30px] h-[24px] object-contain mb-8" alt="" />
            <h4 className="font-semibold">{title}</h4>
            <p className="mt-3 text-slate-500 text-[13px]"> {message} </p>
        </div>
    )
}

export default function PlatformPerformance() {
  return (
    <div className="w-full h-[512px] flex items-center justify-center">
        <div className="w-[85%] h-[90%] grid grid-cols-2 gap-x-10">
            <div className="w-full grid grid-rows-2 gap-y-2">
                <div className="w-full h-full flex items-start justify-end flex-col">
                    <h5 className="text-slate-600">By The Numbers</h5>
                    <h3 className="font-semibold my-2 text-[35px]">Platform Performance Insights</h3>
                    <p className="text-slate-500 w-[70%]">
                        Leveraging cutting-edge technology to streamline your recruitmment and talent sourcing workflow.
                    </p>
                </div>
                <div className="mt-3 w-full h-[67px] grid grid-cols-3 gap-x-4 mt-5">
                    <div className="w-full h-full">
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
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 p-5 gap-4">
                <Card title="Partner Success" image={mindmap} message= "Advanced machine learning algorithms delivering intelligent candidate insights."/>
                <Card title="24/7 Support" image={stemleaf} message="Advanced machine learning algorithms delivering intelligent candidate insights."/>
                <Card title="AI - Powered Tools" image={colchart} message="Advanced machine learning algorithms delivering intelligent candidate insights."/>
                <Card title="Enterprise Security" image={nonrebbon} message="Advanced machine learning algorithms delivering intelligent candidate insights."/>
            </div>
        </div>
    </div>
  )
}
