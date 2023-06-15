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

function AllFilters() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActivities());
    dispatch(allcountries());
  }, [dispatch]);

  const countries = useSelector((state) => state.country);
  //filter activities
  const [activity, setActivity] = useState("");
  const activities = useSelector((state) => state.activities);
  const handleActivity = (event) => {
    const selectedActivity = event.target.value;
    dispatch(filterByAct(selectedActivity));
  };

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
	const [continente, setContinente] = useState('');
  function handleFilteredCountrie(event) {
		setContinente(event.target.value);
		dispatch(filterByContinent(event.target.value));
	}

  return (
    <div className={style.cajafilter}>

      <span >Filter By : </span>
      <select
        defaultValue="Order By"
        onChange={handleSortChange}
      >
        <option value="Order By" disabled="disabled">
          Order By
        </option>
        <option value="AtoZ">A-Z</option>
        <option value="ZtoA">Z-A</option>
      </select>


      <span> continente </span>
      <select
   
        onChange={(event) => handleFilteredCountrie(event)}
        value={continente}
      >
        <option value={continente === "All" ? continente : "All"}>Todos</option>
        <option value={continente === "Americas" ? continente : "Americas"}>
          Americas
        </option>
        <option value={continente === "Africa" ? continente : "Africa"}>
          África
        </option>
        <option value={continente === "Asia" ? continente : "Asia"}>Asia</option>
        <option value={continente === "Europe" ? continente : "Europe"}>
          Europa
        </option>
        <option value={continente === "Oceania" ? continente : "Oceania"}>
          Oceanía
        </option>
        <option value={continente === "Antarctica" ? continente : "Antarctica"}>
          Antárctica
        </option>
      </select>


      <span> activity </span>
      <select onChange={(event) => handleActivity(event)}>
        {activities.map((ac) => (
          <option key={ac.id} value={ac.name}>
            {ac.name}
          </option>
        ))}
      </select>




      <span>poblacion </span>
      <select
        onChange={(e) => handleSortPop(e)}
        value={population}
      >
        <option value={population === "All" ? population : "All"}>Todos</option>
        <option value={population === "mayp" ? population : "mayp"}>
          Menor a Mayor
        </option>
        <option value={population === "menp" ? population : "menp"}>
          Mayor a Menor
        </option>
    </select>

  </div>
  );
}
export default AllFilters;
