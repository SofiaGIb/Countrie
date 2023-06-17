import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ id, name, imagen, continente }) {
  return (
    <div className={style.card}>
        <div>
          <img className={style.image} src={imagen} />
        </div>
      <Link to={`/Detail/${id}`}>
        <h2 className={style.texto}> {name}</h2>
        <div>
          <h4>continente:{continente}</h4>
        </div>
      </Link>
    </div>
  );
}
export default Card;
