import style from './NavBar.module.css';
import React from 'react'
import { Link } from 'react-router-dom'
  function NavBar() {
  return (
    <div className={style.navbar}>
          <a href="#" className={style.item} is-active color="orange">
    <Link to="/Home" >HOME</Link>
      </a>

      <a className={style.item}>
    <Link to="/Create">FORM</Link>
      </a>
    
    
    </div>
  )
}

export default  NavBar;