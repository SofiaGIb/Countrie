import React, { useEffect } from "react";
import style from "./Filters.module.css";
import {
  allcountries,
  alphabeticalSort,
  allActivities,
  filterByAct,
  filterbypopulation,
  filterByContinent,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function AllFilters({setpages}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActivities());
    dispatch(allcountries());
  }, [dispatch]);

  //filter activities
  const [activity, setActivity] = useState("");
  const activities = useSelector((state) => state.activities);
  const handleActivity = (event) => {
    const selectedActivity = event.target.value;
    setActivity(selectedActivity);
    dispatch(filterByAct(selectedActivity));
    setpages(1);
  };
  const countries = useSelector((state) => state.country);
  // refresh filtro
  function handleClearFilters() {
    setPopulation("All");
    setContinente("All");
    setActivity("All");

    return dispatch(allcountries());
  }
  // orden alfabetico
  const handleSortChange = (event) => {
    if (event.target.value === "AtoZ") {
      const sortedCountries = countries
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      dispatch(alphabeticalSort(sortedCountries));
    } else if (event.target.value === "ZtoA") {
      const sortedCountries = countries
        .slice()
        .sort((a, b) => b.name.localeCompare(a.name));
      dispatch(alphabeticalSort(sortedCountries));
    }
  };
  //filter population
  const [population, setPopulation] = useState("");

  function handleSortPop(event) {
    event.preventDefault();
    setPopulation(event.target.value);
    dispatch(filterbypopulation(event.target.value));
  }
  // filter continente
  const [continente, setContinente] = useState("");
  function handleFilteredCountrie(event) {
    setContinente(event.target.value);
    dispatch(filterByContinent(event.target.value));
  }

  return (
    <div className={style.caja}>
      <div className={style.div}>
        <span className={style.span}>Filter By : </span>
        <select
          className={style.select}
          defaultValue="Order By"
          onChange={handleSortChange}
        >
          <option value="Order By" disabled="disabled">
            Order By
          </option>
          <option value="AtoZ">A-Z</option>
          <option value="ZtoA">Z-A</option>
        </select>
        <span className={style.span}> Continente: </span>
        <select
          className={style.select}
          onChange={(event) => handleFilteredCountrie(event)}
          value={continente}
        >
          <option value={continente === "All" ? continente : "All"}>
            Todos
          </option>
          <option value={continente === "Americas" ? continente : "Americas"}>
            Americas
          </option>
          <option value={continente === "Africa" ? continente : "Africa"}>
            África
          </option>
          <option value={continente === "Asia" ? continente : "Asia"}>
            Asia
          </option>
          <option value={continente === "Europe" ? continente : "Europe"}>
            Europa
          </option>
          <option value={continente === "Oceania" ? continente : "Oceania"}>
            Oceanía
          </option>
          <option
            value={continente === "Antarctic" ? continente : "Antarctic"}
          >
            Antárctica
          </option>
        </select>
      </div>

      <div className={style.div}>
        <span className={style.span}> Activity   :  </span>
          {activities.length === 0 ? (
            <p>No se han creado actividades</p>
          ) : (
            <select
              className={style.select}
              onChange={(event) => handleActivity(event)}
              value={activity}
            >
              <option value={activity === "Todos" ? activity : "Todos"}>
                Todas
              </option>
              <option value={activity === "none" ? activity : "none"}></option>
              N
              {activities.map((e) => (
                <option
                  value={activity === e.name ? activity : e.name}
                  key={e.id}
                >
                  {e.name}
                </option>
              ))}
            </select>
          )}

        <span className={style.span}>poblacion </span>
        <select
          onChange={(event) => handleSortPop(event)} 
          value={population}
          className={style.select}
        >
          <option value={population === "All" ? population : "All"}>
            Todos
          </option>
          <option value={population === "mayp" ? population : "mayp"}>
            Menor a Mayor
          </option>
          <option value={population === "menp" ? population : "menp"}>
            Mayor a Menor
          </option>
        </select>
      </div>

      <div>
        <button onClick={handleClearFilters} className={style.button}>
          Refresh
        </button>
      </div>
    </div>
  );
}
export default AllFilters;
