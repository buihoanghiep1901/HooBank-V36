import React from 'react'
import { people01,people02,people03, quotes } from '../assets'
import styles from '../style'
import { layout } from '../style'

const FeedbackCard = (prop) => {
  return (
    <div className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] feedback-card my-5 mr-0 ${prop.index ===2? 'self-start': 'md:mr-5'} ${prop.index ===1? 'self-center': ''}`}>
      <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain' />

      <p className='font-poppins font-normal text-white text-[18px] leading-[32px] my-10 '>{prop.feedback.content}</p>

      <div className='flex justify-start'>
        <div>
          <img src={prop.feedback.img} alt="people image" className='w-[48px]' />
        </div>

        <div className='flex flex-col justify-start items-start ml-4 '>
          <h4 className={`font-poppins font-semibold text-white text-[20px] leading-[32px]`}>
            {prop.feedback.name}
          </h4>
          <p className='font-poppins font-normal text-white text-[16px] leading-[24px]'>{prop.feedback.title}</p>
        </div>
      </div>
    </div>
  )
}

export default  FeedbackCard