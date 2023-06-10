import React from 'react'
import { Link } from 'react-router-dom'
import style from './form.module.css'

function Formulario() {
  return (
    <div className={style.imgf}>
      <Link to="/Home">
      
      <button>Home</button>
      </Link>
    </div>
  )
}
export default Formulario