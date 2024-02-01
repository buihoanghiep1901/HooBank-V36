import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>

      <div className={`${styles.flexStart} flex-col flex-1 px-6 sm:px-16 xl:px-0`}>.
        {/* discount */}
        <div className='flex items-center bg-discount-gradient rounded-[10px] px-4 py-[6px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`ml-4 ${styles.paragraph}`}>
            <span className='text-white'>
              20%
            </span> Discount For {" "}
            <span className='text-white'>
              1 Month
            </span> Account
          </p>
        </div>

        {/* the next gen */}
        <div className='flex justify-between items-center w-full'>
          <h1 className='font-poppins text-white font-semibold text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100px]' >
            The Next <br />
            <span className='text-gradient'>Generation</span>
          </h1>

          <div className='hidden ss:flex mr-0 md:mr-4'>
            <GetStarted/>
          </div>
        </div>

        <h1 className='font-poppins w-full text-white font-semibold text-[52px] ss:text-[68px] leading-[75px] ss:leading-[100px]' >
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={` flex-1  md:my-0 my-10 relative`}>
        <img src={robot} alt="hand of robot" className='w-[100%] h-[100%] relative z-[5]' />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className='ss:hidden flex justify-center'>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero