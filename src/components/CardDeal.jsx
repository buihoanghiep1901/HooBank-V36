import React from 'react'
import { card } from '../assets'
import styles from '../style'
import { layout } from '../style'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className={layout.section}>
      
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br/> 
          in few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau. 
        </p>

        <Button styles="mt-10"/>
      </div>

      <div className={`flex-1 ${layout.sectionImgReverse}`}>
        <img src={card} alt="card deal" />
      </div>
    </section>
  )
}

export default CardDeal