import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'
import { layout } from '../style'
import { logo } from '../assets'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter}  ${styles.paddingY} flex-col`}>
      
      <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
        <div className={`flex-1 flex  justify-start flex-col mr-10`}>
          <img src={logo} alt="bank logo" 
          className="w-[266px] h-[72.14px] object-contain" />

          <p className={`${styles.paragraph} max-w-[350px] mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className={`mt-10 md:mt-0 flex justify-between flex-[1.5] w-full`}>
          {footerLinks.map((footerLink)=>(
            <div key={footerLink.key} className='flex flex-col min-w-[150px] ss:my-0 my-4'>
              <h4 className='font-poppins font-semibold text-[18px] leading-[27px] text-white'>
                {footerLink.title}
              </h4>

              <ul className='list-none mt-4'>
                {footerLink.links.map((link,index)=>(
                  <li key={link.name} 
                  className={`${styles.paragraph}  hover:text-secondary cursor-pointer 
                  ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-semibold text-[18px] leading-[27px] text-white'>
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <div className='flex md:mt-0 mt-6'>
          {socialMedia.map((social,index)=>(
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer