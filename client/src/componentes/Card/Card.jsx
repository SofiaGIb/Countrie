import React from 'react'
import style from './Card.module.css'
 function Card({name,image,continente,}) {
  return (
    <div className={style.card}>
        <h2>name : {name}</h2>
    <div>
        <img src="{image}"  />
    </div>
    <div>
        <h4>continente:{continente}</h4>
    </div>
    </div>
  )
}
export default Card