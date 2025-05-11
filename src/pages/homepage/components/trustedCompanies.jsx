import React from 'react'
import trustedCompanies from "../../../data/trustedCompanies.js"

const CompanyItem = ({index, logo}) =>{
    return (
        <div key={index} className="mx-4 h-[30px] flex-shrink-0 flex items-center justify-center" >
            <img src={logo} alt="company logo" className="w-[112px] h-[28px] object-contain" />
        </div>
    )
}

export default function TrustedCompanies() {
    const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  return (
    <div className="w-full overflow-hidden whitespace-nowrap h-[272px] bg-[#faf8fe] pt-18">
        <h5 className="text-center mb-5 text-slate-600 font-light">Trusted By:</h5>

        <div className="flex animate-infinite-scroll1">
            {[...trustedCompanies.first_line, ...trustedCompanies.first_line, ...trustedCompanies.first_line].map((text, index) => <CompanyItem key={index} index={index} logo={text}/>)}
        </div>
        <div className="flex animate-infinite-scroll2 mt-5">
            {[...trustedCompanies.second_line, ...trustedCompanies.second_line, ...trustedCompanies.second_line].map((text, index) => <CompanyItem key={index} index={index} logo={text}/>)}
        </div>
    </div>
  )
}
