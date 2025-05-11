import React, {useState} from 'react'
import Logo from '../logo';
import { AnimatePresence, motion } from "framer-motion";
const NavigationLink = ({title="", url="", className="", width=130}) =>{
    return <a href={url} className={`${className} !h-[50px] h-full flex items-center justify-center btn transition duration-100 hover:bg-slate-100 rounded-xl`}>{title}</a>
}

export default function Nav() {
    const [navExpand, setNavExpand] = useState(false)
  return (
    <div className="w-full h-[70px] border-b border-b-slate-300 relative">
        <div className="w-[90%] mx-auto h-full flex items-center justify-between">
            <div className="h-full flex items-center justify-center">
                <Logo className="w-[90px] object-contain"/>
            </div>
            <div className="hidden md:flex items-center justify-end gap-x-5 text-[14px]">
                <NavigationLink title="Sign In" className=" w-[90px]" />
                <NavigationLink title="Register" className=" w-[90px]" />
                <NavigationLink title="Talk To Sales" className="bg-[#1b1b21] !hover:bg-[#1b1b21]/80 text-white w-[120px]" />
            </div>

            {/* menu button for mobile menu options */}
            <button 
                onClick={e=>setNavExpand(!navExpand)}
                className="flex md:hidden items-end justify-center flex-col w-[60px] h-[60px] bg-transparent rounded-md relative">
                <div className={`w-[80%] h-[7px] rounded-full transition duration-3000 ${navExpand ? "!w-[40px] absolute rotate-[-60deg] bg-orange-2000": "bg-black"}`}></div>
                <div className={`w-full h-[7px] rounded-full my-2 transition duration-1000 ${navExpand ? "!w-[40px] absolute rotate-[130deg] bg-orange-800": "bg-black"}`}></div>
                <div className={`w-[80%] h-[7px] rounded-full  transition duration-500 ${navExpand ? "!w-[40px] absolute rotate-[-130deg] bg-orange-800": "bg-black"}`}></div>
            </button>
        </div>
        {/* mobile nav menus */}
        {
            navExpand && <AnimatePresence>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className={`w-full h-[calc(100dvh-70px)] bg-black/99 fixed top-[70px] left-0 p-5 z-5 text-white`}>
                    <div className="h4 text-[28px] w-full pb-3 border-b border-dotted border-slate-700">Menu</div>
                    <NavigationLink title="HomePage" className=" w-full !justify-start" />
                    <NavigationLink title="Sign In" className=" w-full !justify-start" />
                    <NavigationLink title="Register" className=" w-full !justify-start" />
                    <NavigationLink title="Talk To Sales" className="bg-white/30 !hover:bg-[#1b1b21]/80 text-white w-[120px] !rounded-md mt-5" />
                </motion.div>       
            </AnimatePresence>
        }
        
    </div>
  )
}
