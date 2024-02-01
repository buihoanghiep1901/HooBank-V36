import React from 'react'
import Button from './Button'
import styles from '../style'
import { layout } from '../style'

const CTA = () => {
  return (
    <section className={`flex justify-center items-start flex-col sm:flex-row ${styles.padding} ${styles.marginY} bg-black-gradient-2 rounded-[20px]`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2}`}>
          Let’s try our <br className='block sm:hidden'/>service now!
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      <div className='sm:self-center'>
        <Button styles='mt-10 ml-0 sm:mt-0 sm:ml-10 '/>
      </div>
    </section>
  )
}

export default CTA