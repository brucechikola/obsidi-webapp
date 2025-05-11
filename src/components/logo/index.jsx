import React from 'react'
import logo from "../../assets/images/logo.png"
export default function Logo({className=""}) {
  return (
    <img src={logo} className={className} alt="Company Logo" />
  )
}
