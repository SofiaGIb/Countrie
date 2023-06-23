import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { country_by_name } from '../../Redux/actions';
import style from "./search.module.css";

export default function SearchName({ setpages }) {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const dispatch = useDispatch();

  function searchName(name) {
    if (name.trim() === "") {
      setErrorMessage("Ingrese el nombre de un pais.");
      return;
    }

    dispatch(country_by_name(name))
      .then(() => {
        setName("");
        setpages(1);
        setErrorMessage(""); 
      })
      .catch(() => {
        setErrorMessage("Pais no encontrado.");
      });
  }

  return (
    <div className={style.search}>
      <input
        className={style.Input}
        type="text"
        value={name}
        placeholder="search country by name"
        onChange={(event) => handleChange(event)}
      />
      <div>
        <button
          className={style.searchButton}
          type="submit"
          onClick={() => searchName(name)}
        >
          SEARCH
        </button>
      </div>
      {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
