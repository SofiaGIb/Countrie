import React from "react";
import style from "./form.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allcountries } from "../../Redux/actions";
import { useEffect } from "react";
import validate from "./validate";

function Formulario() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  const [errors, setErrors] = useState({
    name: "",
    dificultad: "",
    duración: "",
    temporada: "",
    CountryIds: "",
  });
  useEffect(() => {
    if (country.length === 0) {
      dispatch(allcountries());
    }
  }, [dispatch, country]);

  const [form, setForm] = useState({
    name: "",
    dificultad: "",
    duración: "",
    temporada: "",
    CountryIds: [],
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !form.name ||
      !form.dificultad ||
      !form.duración ||
      !form.temporada ||
      !form.CountryIds
    ) {
      return alert(
        "Complete correctamente el formulario antes de enviarlo"
      );
    }

    axios
      .post("/Activity/", {
        name: form.name,
        dificultad: form.dificultad,
        duracion: form.duración,
        temporada: form.temporada,
        CountryIds: form.CountryIds,
      })
      .then((res) => {
        alert("Creado con éxito");
        setForm({
          name: "",
          dificultad: "",
          duración: "",
          temporada: "",
          CountryIds: [],
        });
        setErrors({
          name: "",
          dificultad: "",
          duración: "",
          temporada: "",
          CountryIds: "",
        });
      })
      .catch((err) => alert(err.response.data.error));
  };

  const handleId = (event) => {
    setForm({ ...form, CountryIds: event.target.value });
  };

  return (
    <div className={style.formulario}>

    <div className={style.container}>
      <form>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={changeHandler}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <label>Dificultad</label>
        <input
          type="number"
          value={form.dificultad}
          name="dificultad"
          onChange={changeHandler}
        />
        <label>Duración</label>
        <input
          type="time"
          value={form.duración}
          name="duración"
          onChange={changeHandler}
        />
        <label>Temporada</label>
        <select
          value={form.temporada}
          name="temporada"
          onChange={changeHandler}
          >
          <option value="verano">Verano</option>
          <option value="otoño">Otoño</option>
          <option value="invierno">Invierno</option>
          <option value="primavera">Primavera</option>
        </select>
        {errors.temporada && <span>{errors.temporada}</span>}
        <label>paises</label>
        <select onChange={(event) => handleId(event)}>
          <option value="-"></option>
          {country.map((t) => (
            <option value={t.id} key={t.id}>
              {t.name}
            </option>
          ))}
        </select>
        {errors.CountryIds && <span>{errors.CountryIds}</span>}

        <div>
          <button onClick={(event) => submitHandler(event)} className={style.button}>Submit</button>
        </div>
      </form>
    </div>
      <Link to="/home">
        <button>home</button>
      </Link>
          </div>
  );
}

export default Formulario;
