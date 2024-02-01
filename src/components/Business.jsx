//@ts-nocheck
import React from 'react'
import { features } from '../constants'
import styles from '../style'
import { layout } from '../style'
import Button from './Button'
const FeatureCard= (prop)=>(
  <div className={`${styles.flexCenter} p-6 rounded-[20px] ${prop.index === features.length -1 ? 'mb-0':'mb-6'} feature-card`}>
    
    <div className={`w-[64px] h-[64px] bg-dimBlue rounded-full ${styles.flexCenter}`}>
      <img src={prop.feature.icon} alt="icon"  className='w-[50%] h-[50%]' />
    </div>

    <div className={`flex-1 flex flex-col ml-3`}>
      <h4 className='text-white font-poppins font-semibold text-[18px] leading-[23px]'>{prop.feature.title}</h4>
      <p className={`${styles.paragraph}`}>{prop.feature.content}</p>
    </div>

  </div>
)
const Business = () => {

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> 
          we’ll handle the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.  
        </p>

        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} index={index} feature={feature} />
        ))}
      </div>
    </section>
  )
}

export default Business