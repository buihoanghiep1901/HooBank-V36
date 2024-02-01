//@ts-nocheck
import React from 'react'
import styles from '../style'
import { layout } from '../style'
import {feedback} from '../constants/index'
import FeedbackCard from '../components/FeedbackCard'
const Testimonials = () => {
  return (
    <section id='client' className={`${styles.paddingY} flex flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className='flex justify-between items-start flex-col md:flex-row '>
        
        <div className='flex-1'>
          <h2 className={styles.heading2}>
            What People are <br/> 
            saying about us
          </h2>
        </div>

        <div className='flex-1'>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='flex justify-between items-end flex-col md:flex-row feedback-container'>
        {
          feedback.map((fb, index)=>(
            <FeedbackCard feedback={fb} index={index}/>
          ))
        }
      </div>

    </section>
  )
}

export default Testimonials