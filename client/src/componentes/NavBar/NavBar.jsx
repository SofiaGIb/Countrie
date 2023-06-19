import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link to="/Home" className={styles.button}>HOME</Link>
      <Link to="/Create" className={styles.button}>FORM</Link>
    </div>
  );
}

export default NavBar;