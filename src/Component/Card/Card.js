import React from 'react'
import style from "./Card.module.css"

function Card() {
  return (
    <div className={style.main}>
        <div className={style.box}>
            <img src="https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg?w=2000" alt='Wallpaper' />
            <div className={style.list}>
            <li><span>✉️</span>Ipsum Lorem</li>
            <li><span>🔗</span>Ipsum Lorem</li>
            <li><span>⟟</span>Ipsum Lorem</li>
        </div>
        </div>

        <div className={style.box1}>
            <div className={style.infobox}>
                <p>Numquam, Esse aliqulp do,magni.</p>
                <h2>Minima ad for vitae sit</h2>
                <h6>Ipsum Lorem</h6>
            </div>
            <div className={style.img}>
            </div>
            <div className={style.bottoninfobox}>
                  <button>🔗ispum lorem</button>
                   <h3>Numquam, Esse aliqulp do,magni.</h3>
                   <h6>Ipsum Lorem</h6>
            </div>
        </div>
      
    </div>
  )
}

export default Card
