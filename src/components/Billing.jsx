import React from 'react'
import { bill, google, apple } from '../assets'
import styles from '../style'
import { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="" className='' />
      </div>
      
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br/> 
          billing & invoicing.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.  
        </p>
        
        <div className='flex justify-start mt-10'>
            <img src={apple} alt="Appple store" className='mr-5' />
            <img src={google} alt=" Google Play" />
        </div>
      </div>
    </section>
  )
}

export default Billing
