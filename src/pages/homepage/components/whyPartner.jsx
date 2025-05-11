import React from 'react'
import colchart from '../../../assets/images/colchart.png';
import nonrebbon from '../../../assets/images/nonrebbon.png';

const Card = ({icon, title, message}) =>{
    return (
        <div className="w-full h-full rounded-xl grid grid-cols-7 border border-[#d1d1da] p-4">
            <div className="w-[48px] h-[48px] bg-[#f5f5fb] rounded-full flex items-center justify-center border border-[#dfd2f8]">
                <img src={icon} className="w-[24px] h-[24px] object-contain" alt="" />
            </div>
            <div className="w-full col-span-6">
                <h4 className="font-semibold">{title}</h4>
                <p className="text-[13px] text-slate-500 mt-2"> {message} </p>
            </div>
        </div>
    )
}

export default function WhyPartner() {
  return (
    <div className="w-full h-[380px] flex items-center justify-center">
        <div className="w-[75%] h-[90%] grid grid-cols-2 gap-x-20">
            <div className="w-full flex items-start justify-center flex-col">
                <h5 className="text-normal text-slate-500">Why Partner with Obsidi®</h5>
                <h3 className="font-semibold text-[37px] my-3">Diversify Your Talent Pipeline</h3>
                <p className="text-slate-500 text-[15px]">
                    Only Obsidi Recruit has thousands of qualified black tech professionals looking for their next career opportunity.
                     Post up to 10 jobs/month directly to Obsidi Recruit and achieve your business goals with a diverse network 
                     of Black tech talent from across North America.
                </p>
            </div>
            <div className="w-full h-full  flex items-center justify-center flex-col">
                <div className="w-full h-[80%] grid grid-rows-2 gap-y-5">
                    <Card
                        icon={colchart}
                        title="Be an Employer of Choice"
                        message={`As an Obsidi partner, you’ll be in front of our growing network of 90,000+ Black tech professionals and allies worldwide - elevating your brand positioning and values to the industry.`}
                    />
                    <Card
                        icon={nonrebbon}
                        title="Be an Employer of Choice"
                        message={`As an Obsidi partner, you’ll be in front of our growing network of 90,000+ Black tech professionals and allies worldwide - elevating your brand positioning and values to the industry.`}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
