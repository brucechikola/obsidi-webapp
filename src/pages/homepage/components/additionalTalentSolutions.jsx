import React from 'react'
import techeats from '../../../assets/images/techeats.png';
import techtalks from '../../../assets/images/techtalks.png';
import career from '../../../assets/images/career.png';

import { FaChevronRight } from "react-icons/fa6";
import talentbg from '../../../assets/images/talentbg.svg';

const Card = ({title, message, image}) =>{
    return (
        <div className="w-full h-[376px] bg-white rounded-xl p-4 border border-[#e7e6ec] shadow-md relative">
            <img src={image} alt="" className="w-full h-[180px] bg-blue-900 rounded-xl object-cover" />
            <h5 className="my-3">{title}</h5>
            <p className="text-[14px] text-gray-500 text-light">{message}</p>
            <a href="#" className="flex items-center justify-center absolute bottom-3 right-3 rounded-full border border-[#1b1b21] text-[13px] w-[100px] !h-[40px] bg-[#f9f9f9] hover:border-gray-400 hover:!w-[130px] transition duration-300">
                Learn More
                {/* <FaChevronRight className="ml-2" /> */}
            </a>
        </div>
    )
}
export default function AdditionalTalentSolutions() {
  return (
    <div className="min-h-[565px] bg-[#fbf9fe] flex items-center justify-center flex-col relative">
        <div className="w-full h-full absolute left-0 top-0 bg-[#fbf9fe]">
        <img src={talentbg} alt="" className="w-full h-full object-contain mix-blend-color-burn" />
        </div>
        <h3 className="font-semibold text-[40px] mb-10 relative">Additional Talent Solutions</h3>
        <div className="w-[90%] h-[80%] grid grid-cols-3 gap-x-10">
            <Card image={techeats} title="Obsidi® Academy" message="Obsidi® Academy is a bespoke knowledge-based provider by BPTN, offerign best in-class training and professional development experiences for Black-identified Canadians"/>
            <Card image={techtalks} title="Tech Talks" message="Tech professionals, AI enthusiasts, and innovators looking to leverage AI beyond the surface-level conversation  will benefit from this discussion. Register now." />
            <Card image={career} title="BFUTR Summit" message="Tech professionals, AI enthusiasts, and innovators looking to leverage AI beyond the surface-level conversation  will benefit from this discussion. Register now." />
        </div>
    </div>
  )
}
