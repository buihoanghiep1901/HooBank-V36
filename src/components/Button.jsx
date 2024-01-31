import React from 'react'
const Button = ({styles}) => {
  return (
    <button type='button' className={`font-poppins  font-medium bg-blue-gradient px-6 py-4 text-[18px] rounded-md outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button