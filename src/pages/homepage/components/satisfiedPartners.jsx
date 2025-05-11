import React from 'react'
import satisfiedPartners from "../../../data/satisfiedPartmers.js"
const ResultCard = ({content})=>{
  return (
    <div className="w-full min-h-[250px] grid grid-cols-4 gap-x-10">
      <div className="w-full h-250px bg-[#f5f5fb] rounded-xl flex items-center justify-center">
        <img src={content?.icon} alt="" className="w-[180px] object-contain" />
      </div>
      <div className="w-full h-full col-span-2 flex items-start justify-center flex-col">
        <p className="text-slate-700 text-[20px]">{content?.paragraph?.message}</p>
        <h4 className="font-semibold mt-5">{content?.paragraph?.names}</h4>
        <h5 className="mt-2 text-slate-600 text-light">{content?.paragraph?.position}</h5>
      </div>
      <div className="w-[80%] border-l border-l-[#f4f4f6] flex items-center justify-end">
        <div className="w-[80%] h-full grid grid-rows-2 gap-y-4">
          <div className="w-full flex flex-col">
            <h2 className="font-bold text-[35px] flex items-end justify-start">
              {content?.stats?.percentage}
              <span className="font-bold text-[24px]">%</span>
            </h2>
            <span className="font-semibold text-[14px] my-2">Customer Satisfaction</span>
            <span className="text-slate-600 mt-3">From verified review</span>
          </div>
          <div className="w-full flex flex-col">
            <h2 className="font-bold text-[35px] flex items-end justify-start">
              {content?.stats?.score}
              <span className="font-bold text-[24px]"></span>
            </h2>
            <span className="font-semibold text-[14px] my-2">NPS Score</span>
            <span className="text-slate-600 mt-2">{content?.stats?.period}</span>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto border-t border-t-slate-300 my-4 col-span-4"></div>
    </div>
  )
}

export default function SatisfiedPartners() {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto my-10 flex items-center justify-center flex-col">
        <span className="text-slate-600 text-[20px]">200+ Satisfied Partners</span>
        <h2 className="font-bold w-[40%] text-[40px]">Real results from real users</h2>

        <div className="w-full h-full mt-14">
          {satisfiedPartners.map((partner,index)=><ResultCard key={index} content={partner} />)}
        </div>
      </div>
    </div>
  )
}
