import React from 'react'
import styles from '../style'
import { layout } from '../style'
import { clients } from '../constants'
const Clients = () => {
  return (
    <section id='clients' className={`${styles.flexCenter} `}>
      {clients.map((client)=>(
        <div key={client.id} className={` flex-1 ${styles.flexCenter} m-4`}>
          <img src={client.logo} alt="client logo" className='w-[100px] sm:w-[192px] object-contain ' />
        </div>
      ))}
    </section>
  )
}

export default Clients