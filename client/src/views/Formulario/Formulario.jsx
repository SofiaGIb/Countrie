import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allcountries } from "../../Redux/actions";
import { useEffect } from "react";
import {validate} from "./validate"

function Formulario() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  const [errors,setErrors] = useState ({
    name: "",
    dificultad: "",
    duración: "",
    temporada: "",
    CountryIds: "",

  })

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
    CountryIds: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    validate({...form,[property]:value})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("/Activity/", {
        name: form.name,
        dificultad: form.dificultad,
        duracion: form.duración,
        temporada: form.temporada,
        CountryIds: form.CountryIds,
      })

      .then((res) => alert("creado con exito "))
      .catch((err) => alert(err.response.data.error));
  };

  const handleId = (event) => {
    setForm({ ...form, CountryIds: event.target.value });
  };

  return (
    <div>
      <form>
        <div>

        <label>Nombre</label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={changeHandler}
          />

          {errors.name && <span>{erraors.name}</span>}
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
        <label>CountryIds</label>
        <select onChange={(event) => handleId(event)}>
          <option value="-">CountryIds</option>

          {country.map((t) => (
            <option value={t.id} key={t.id}>
              {t.id}
            </option>
          ))}
        </select>
        <div>
          <button onClick={(event) => submitHandler(event)}>Submit</button>
        </div>
      </form>
      <Link to="/home">
        <button>home</button>
      </Link>
    </div>
  );
}

export default Formulario;
