import React, {useState, useEffect} from 'react'
import star from '../../../assets/images/star.png';
import spring from '../../../assets/images/spring.png';
import pricing from "../../../data/pricing.js"
import {formatCurrency} from "../../../utils"
import { LuCheck } from "react-icons/lu";


// function to create pricing card
const Card = ({content}) =>{
    const [pricing, setPricing] = useState({monthly:content.monthly, annually:content.annually, active:"annually"})

    // function to toggle pricing(updating the state)
    const togglePricingFrequency = () => setPricing(prev => ({...prev, active: prev.active === "annually" ? "monthly" : "annually"}))

    return (
      <div className={`w-full rounded-xl bg-white p-8 relative border border-${content?.is_frequent ? "black/80 border-3 h-[569px]" : "slate-400 h-[545px]"}`}>
        <div className="flex items-center justify-start">
          <img src={content?.icon} alt="" className="w-[24px] h-[24px]" />
          <span className="text-slate-600 ml-3 text-[17px]">{content?.title}</span>
        </div>
        <div className="w-full flex items-end justify-start my-3">
          <h3 className="text-[30px] font-bold">{formatCurrency("USD",pricing[pricing.active], 0)} </h3>
          <span className="font-bold text-[23px]">/mo</span>
        </div>
        <div className="w-full flex items-center justify-start my-5">
          <button 
            className={`w-[60px] h-[30px] transition duration-300 ${ pricing.active === "annually" ? "bg-[#d1d1da]" : "bg-pink-200 border border-pink-300" } flex items-center relative rounded-full cursor-pointer`} 
            // add click event to toggle frequency
            onClick={e=>{togglePricingFrequency()}}>
              <div className={`w-[25px] h-[25px] absolute shadow-2xl rounded-full transition-all duration-300 ${ pricing.active === "annually" ? "left-[2px] bg-white" : "left-[31px] bg-pink-600" }`} />
          </button>
          <span className="font-semibold ml-3 text-slate-600">Billed {pricing.active}</span>
        </div>
        <div className="w-full mt-10">
          {
            content?.features?.map((feature,index)=>(
              <div key={index} className="w-full h-full flex items-start justify-start my-6">
                <LuCheck className="text-[20px] w-[30px]" />
                <span className="text-slate-600 ml-2 text-[14px]">{feature}</span>
              </div>
            ))
          }
        </div>
        <div className="w-full flex items-center justify-center absolute bottom-5 left-0">
          <button className={`btn text-[13px] rounded-xl w-[108px] h-[38px] cursor-pointer ${content?.is_frequent ? "bg-black text-white hover:bg-black/80" : "border border-slate-600 hover:border-slate-500 hover:border-2"}`}>Get Started</button>
        </div>
      </div>
    )
  }

export default function Pricing() {

  return (
    <div className="w-full h-[890px] bg-[#f9f6ff] relative">
        <img src={star} alt="" className="absolute mix-blend-color-burn w-[50%] h-[525px] object-contain" />
        <img src={spring} alt="" className="absolute  mix-blend-color-burn h-[218px] bottom-0 right-0" />
        <div className="relative w-full h-full flex items-center justify-center flex-col">
          <h3 className="font-semibold text-[45px]">Pricing</h3>
          <p className="my-4 w-[60%] text-center text-slate-600">
            Choose the plan that fits your needs. All plans include essential features to get you started, with options to scale as you grow. No hidden fees and the flexibility to change anytime.
          </p>
          <div className="w-[75%] h-[545px] grid grid-cols-3 gap-x-8 mt-5">
            {
              pricing?.map((card,index)=><Card key={index} content={card} />)
            }
            
          </div>
        </div>
    </div>
  )
}
