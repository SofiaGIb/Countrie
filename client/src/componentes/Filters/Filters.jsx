import React, { useEffect } from "react";
import style from "./Filters.module.css";
import {
  allcountries,
  alphabeticalSort,
  allActivities,
  filterByAct,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


function AllFilters() {
  const dispatch = useDispatch();
  const [activity, setActivity] = useState("");
  useEffect(() => {
    dispatch(allActivities());
    dispatch(allcountries());
  }, [dispatch]);

  const activities = useSelector((state) => state.activity);
  const countries = useSelector((state) => state.country);
 
 //filter activities
  const handleActivity = (event) => {
    event.preventDefault();
    setActivity(event.target.value);
    dispatch(filterByAct(event.target.value));
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
  return (
    <div>
      <span className={style.titleFilter}>Filter By : </span>
      <select
        defaultValue="Order By"
        onChange={handleSortChange}
        style={{ width: "180px" }}
      >
        <option value="Order By" disabled="disabled">
          Order By
        </option>
        <option value="AtoZ">A-Z</option>
        <option value="ZtoA">Z-A</option>
      </select>

      <span> poblacion </span>
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
      </select>

      <span> continente </span>
      <select onChange={(event) => handleActivity(event)}>
        <option value=""></option>
        <option value=""></option>
      </select>


      <span> by activity </span>
      <select  value={activity}
 onChange={(event) => handleActivity(event)}>
              <option value={activity === "All" ? activity : "All"}>
                Todas
              </option>
              <option value={activity === "none" ? activity : "none"}></option>
              {activities.map((e) => (
                <option
                  value={activity === e.name ? activity : e.name}
                  key={e.id}
                >
                  {e.name}
                </option>
        ))}
      </select>
    </div>
  );
}
export default AllFilters;
