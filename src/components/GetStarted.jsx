import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'
const GetStarted = () => {
  return (
    <div className=' w-[140px] h-[140px] rounded-full p-[2px] bg-blue-gradient'>
      <div className='w-full h-full bg-primary rounded-full'>
        <div className={`${styles.flexCenter} flex-col w-full h-full`}>
         
          <div className='flex'>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
              <span className='text-gradient'>Get</span>
            </p>
            <img src={arrowUp} alt="arrow" 
            className='w-[23px] h-[23px] object-contain ml-1' />
          </div>

          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted