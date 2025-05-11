import React from 'react'


const CompanyItem = ({index, logo}) =>{
    return (
        <div key={index} className="w-[200px] h-[30px] mx-4 bg-black rounded-lg flex-shrink-0 flex items-center justify-center text-white text-xl font-bold" >
            {logo}
        </div>
    )
}

export default function TrustedCompanies() {
    const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  return (
    <div className="w-full overflow-hidden whitespace-nowrap h-[250px] bg-[#faf8fe] pt-18">
        <h5 className="text-center mb-5 text-slate-600 font-light">Trusted By:</h5>

        <div className="flex animate-infinite-scroll1">
            {[...items, ...items].map((text, index) => <CompanyItem index={index} logo={text}/>)}
        </div>
        <div className="flex animate-infinite-scroll2 mt-5">
            {[...items, ...items].map((text, index) => <CompanyItem index={index} logo={text}/>)}
        </div>
    </div>
  )
}
