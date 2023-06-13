import React from "react";
import { useState } from "react";

function Formulario() {
  const [form, setForm] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    paises: [],
  });

  const changeHandler = (event) => {
    const property = event.target.Name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };
  return (
    <div>
      <form action="">
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          value={form.name}
          Name="name"
          onChange={changeHandler}
        />
        <label htmlFor="">Dificultad</label>
        <input
          type="text"
          value={form.dificultad}
          Name="dificultad"
          onChange={changeHandler}
        />
        <label htmlFor="">Duración</label>
        <input
          type="text"
          value={form.duración}
          Name="duración"
          onChange={changeHandler}
        />
        <label htmlFor="">Temporada</label>
        <input
          type="text"
          value={form.temporada}
          Name="temporada"
          onChange={changeHandler}
        />
        <label htmlFor="">Paises</label>
        <select
          name=""
          id=""
          value={form.paises}
          Name="paises"
          onChange={changeHandler}
        ></select>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
