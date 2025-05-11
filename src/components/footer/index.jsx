import React from 'react'
import Logo from '../logo';
import LinkedIn from '../../assets/images/LinkedIn.png';
import YouTube from '../../assets/images/YouTube.png';
import Instagram from '../../assets/images/Instagram.png';
import Twitter from '../../assets/images/Twitter.png';
import Facebook from '../../assets/images/Facebook.png';

const ExternalLink = ({icon, url}) =>{
    return <a href={url} target="_blank">
        <img src={icon} alt="Link" className="w-[24px] h-[24px] object-contain" />
    </a>
}

const FooterLink = ({title, url}) =>{
    return <a href={url} target="_blank" className="text-[12px] text-slate-500 hover:text-blue-600">{title}</a>
}
export default function Footer() {
  return (
    <div className="w-full pt-14 pb-10">
        <div className="w-[90%] lg:w-[85%] xl:w-[85%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-x-4 mx-auto">
            <div className="w-full col-span-2 mb-8 lg:xl:mb-0">
                <Logo className="w-[160px]"/>
                <p className="text-slate-600 my-3 text-[12px]">Stay in touch</p>
                <div className="grid grid-cols-5 w-full md:w-[70%] lg:xl:w-[50%]">
                    <ExternalLink icon={LinkedIn} url="#" />
                    <ExternalLink icon={YouTube} url="#" />
                    <ExternalLink icon={Instagram} url="#" />
                    <ExternalLink icon={Twitter} url="#" />
                    <ExternalLink icon={Facebook} url="#" />
                </div>
            </div>
            <div className="w-full flex flex-col gap-y-4">
                <h3 className="font-semibold mb-5">Products</h3>
                <FooterLink url="#" title="Obsidi® Academy"/>
                <FooterLink url="#" title="Obsidi® Award"/>
                <FooterLink url="#" title="Obsidi® Recruit"/>
            </div>
            <div className="w-full flex flex-col gap-y-4">
                <h3 className="font-semibold mb-5">Resources</h3>
                <FooterLink url="#" title="Obsidi® Blog"/>
                <FooterLink url="#" title="Obsidi® Tech Talks"/>
                <div className="w-full lg:mt-30 xl:mt-30">
                    <FooterLink url="#" title="Obsidi® Tech Talk Recordings"/>
                </div>
            </div>
            <div className="w-full flex flex-col gap-y-4 mt-4 lg:mt-0 xl:mt-0">
                <h3 className="font-semibold mb-5">Company</h3>
                <FooterLink url="#" title="About Us"/>
                <FooterLink url="#" title="Work at BPTN"/>
                <FooterLink url="#" title="Privacy Policy"/>
                <FooterLink url="#" title="Terms and Conditions"/>
                <FooterLink url="#" title="Contact Us"/>
            </div>
            <div className="w-full flex flex-col gap-y-4 mt-4 lg:mt-0 xl:mt-0">
                <h3 className="font-semibold mb-5">Support</h3>
                <FooterLink url="#" title="User Manual"/>
                <FooterLink url="#" title="FAQ"/>
                <FooterLink url="#" title="Release Notes"/>
                <FooterLink url="#" title="Status Page"/>
                <FooterLink url="#" title="Need Help?"/>
            </div>
        </div>
        <div className="w-[90%] lg:w-[85%] xl:w-[85%] border-t border-slate-200 mx-auto mt-1 grid grid-cols-6 gap-x-4 pt-2">
            <div className="col-span-6 lg:col-span-3 xl:col-span-3">
                <span className="text-[12px] text-slate-600">©2025 All rights reserved to Obsidi® and BPTN.</span>
            </div>
            <div className="w-full flex flex-col gap-y-4 col-span-3 mt-5 lg:col-span-1 xl:col-span-1 lg:mt-0 xl:mt-0">
                <FooterLink url="#" title="BFUTR SUMMIT"/>
                <FooterLink url="#" title="Obsidi® BNXT"/>
            </div>
            <div className="w-full lg:w-[80%] xl:lg:w-[80%] flex col-span-3 mt-5 flex-col lg:flex-row xl:flex-row lg:col-span-1 xl:col-span-1 lg:mt-0 xl:mt-0 lg:col-span-2 xl:col-span-2 lg:items-center xl:items-center justify-around gap-y-4 ">
                <FooterLink url="#" title="Terms and Conditions"/>
                <FooterLink url="#" title="Privacy Policy"/>
            </div>
        </div>
    </div>
  )
}
