import React, { useEffect } from "react";
import style from "./Details.module.css";
import { countryDetail } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
function Details() {
  const { id } = useParams();

  const details = useSelector((state) => state.details);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryDetail(id));
  }, [dispatch, id]);

  useEffect(() => {}, [details]);

  return (
    <div className={style.ttl}>
    <div className={style.container}>
      <div>
      <div className={style.img}>
        <img
          className={style.banderad}
          src={details.imagen}
          alt="Imagen no disponible"
        />
      </div>
        <h3 className={style.texto}>Name: {details.name}{" "}</h3>
      </div>
      <div>
        <h3 className={style.texto}>Poblacion :  {details.poblacion}</h3>
      
      </div>
      <div>
        <h3 className={style.texto}>Continente: {details.continente}</h3> 
      </div>
      <div>
        <h3 className={style.texto}>Capital: {details.capital} </h3>
        
      </div>
      <div>
        <h2 className={style.textoA}>ACTIVIDADES:</h2>
        {details.Activities && details.Activities.length ? (
          details.Activities?.map((elem) => {
            return (
              <div key={elem.id}>
                <h4 className={style.name}>{elem.name}</h4>
                <p className={style.texto}>Dificultad: {elem.dificultad}</p>
                <p className={style.texto}>Duración: {elem.duracion} horas</p>
                <p className={style.texto}>Temporada: {elem.temporada}</p>
              </div>
            );
          })
        ) : (
          <p className={style.textto1}>
            No existe actividad en este pais aun
            <Link to="/Create">
              {" "}
              <h2 className={style.textto2}>Crea una actividad</h2>{" "}
            </Link>
          </p>
        )}
      </div>
      <div>
        <Link to="/Home">
          <button className={style.buttoncontainer}>GO BACK </button>
        </Link>
      </div>
    </div>
    </div>
  );
}
export default Details;
