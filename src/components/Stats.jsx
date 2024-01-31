import React from 'react'
import { stats } from '../constants'
import styles from '../style'
const Stats = () => {
  return (
    <div className={`${styles.flexCenter} justify-between flex-wrap mb-6 sm:mb-20`}>
      {stats.map((stat,index)=>(
       <div key={stat.id} className={`font-poppins flex  justify-start items-center`}>
          <h4 className='text-white font-semibold  text-[25px] xs:text-[35px] leading-[43px] xs:leading-[53px]'>
            {stat.value}
          </h4>
          <p className='text-gradient font-semibold  text-[12px] xs:text-[17px] leading-[21px] xs:leading-[26px]  ml-3'>
            {stat.title}
          </p>
       </div>
      ))}

    </div>
  )
}

export default Stats