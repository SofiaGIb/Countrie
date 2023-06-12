import style from './NavBar.module.css';
import React from 'react'
import { Link } from 'react-router-dom'
  function NavBar() {
  return (
    <div className={style.search}>
    <Link to="/Home" >HOME</Link>
    <Link to="/Create">FORM</Link>
    </div>
  )
}

export default  NavBar;