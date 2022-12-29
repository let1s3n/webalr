import React from 'react'

const CustomButton = ({ size, content, className }) => {
  return (
    <button className={className + " d-block btn btn-primary"} style={size === "sm" ? { width: "80px", height: "54px" } : size === "md" ? { width: "120px", height: "54px" } : size === "xl" ? { width: "320px", height: "54px" } : size === "xxl" ? { width: "410px", height: "54px" } : { width: "80px", height: "50px" }}>{content}</button>
  )
}

export default CustomButton