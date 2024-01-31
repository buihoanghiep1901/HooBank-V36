import React from 'react'
import { people01,people02,people03, quotes } from '../assets'
import styles from '../style'
import { layout } from '../style'

const FeedbackCard = (prop) => {
  return (
    <div className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] feedback-card my-5 mr-0 ${prop.index ===3? '': 'md:mr-5'}`}>
      <p>{prop.name}</p>
    </div>
  )
}

export default  FeedbackCard