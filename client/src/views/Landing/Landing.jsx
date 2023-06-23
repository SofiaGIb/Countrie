import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css"


function Landing() {
  return (
    <div >
      <div className={style.img}>
      <Link to="/Home">
        <button className={style.button}>GO</button>
      </Link>
      </div>
      <p className={style.texto}> <h2>En esta web descubriremos las variedades de paises que tenemos en el mundo y las diversas actividades que podemos realizar en ellos. </h2></p>

    </div>
  );
}
export default Landing;
