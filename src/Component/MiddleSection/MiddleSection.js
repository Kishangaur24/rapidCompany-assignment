import React from 'react'
import style from "./MiddleSection.module.css"
const MiddleSection = () => {
  return (
    <div className={style.main}>
      <div className={style.text}>
        <h1>Proident anim <span>nor nulla iste.</span></h1>
      </div>
      <div className={style.item}>
        <h5>Minim modi yet omnis nor quia so minima</h5>
        <div className={style.list}>
            <li><span>✉️</span>Ipsum Lorem</li>
            <li><span>🔗</span>Ipsum Lorem</li>
            <li><span>⟟</span>Ipsum Lorem</li>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection
