import React from 'react'
import Logo from '../logo';

const NavigationLink = ({title="", url="", className="", width=130}) =>{
    return <a href={url} className={`${className} !h-[50px] h-full flex items-center justify-center btn transition duration-100 hover:bg-slate-100 rounded-xl`}>{title}</a>
}

export default function Nav() {
  return (
    <div className="w-full h-[70px] border-b border-b-slate-300">
        <div className="w-[90%] mx-auto h-full flex items-center justify-between">
            <div className="h-full flex items-center justify-center">
                <Logo className="w-[90px] object-contain"/>
            </div>
            <div className="flex items-center justify-end gap-x-5 text-[14px]">
                <NavigationLink title="Sign In" className=" w-[90px]" />
                <NavigationLink title="Register" className=" w-[90px]" />
                <NavigationLink title="Talk To Sales" className="bg-[#1b1b21] !hover:bg-[#1b1b21]/80 text-white w-[120px]" />
            </div>
        </div>
    </div>
  )
}
