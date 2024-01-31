import React from 'react'
import { useState } from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex w-100 justify-between items-center py-6 navbar'>
      <img src={logo} alt="logo hobo bank"  className='w-[124px] h-[32px]'/>

      <ul className=' hidden sm:flex justify-end items-center flex-1 list-none'>
        {navLinks.map((nav,index)=>(
          <li
            key={nav.id}  
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
            ${index=== navLinks.length-1? 'mr-0': 'mr-10'} `}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className=' flex sm:hidden justify-end items-center flex-1 '>
        <img src={toggle? close : menu} alt="togle for menu"
          onClick={()=>setToggle((prev)=>!prev)}
        />

        <div className={`${toggle? 'flex':'hidden'} rounded-xl p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar`}>
          <ul className=' flex flex-col justify-end items-center flex-1 list-none'>
            {navLinks.map((nav,index)=>(
              <li
                key={nav.id}  
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
                ${index=== navLinks.length-1? '': 'mb-4'} `}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar