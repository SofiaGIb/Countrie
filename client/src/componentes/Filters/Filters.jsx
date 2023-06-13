import React, { useEffect } from 'react'
import style from "./Filters.module.css"
import { allcountries, alphabeticalSort } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
 function AllFilters() {

    const dispatch = useDispatch()
useEffect(()=>{
    dispatch(allcountries())
},[])

    const countries = useSelector(state => state.country)
    const handleSortChange = (event) => {

          //  const handleSortChange = (event) => {
   // dispatch(aplhabeticalSort(event.target.value))
//};
          if (event.target.value === "AtoZ") {
            const sortedCountries = countries.slice().sort((a, b) => a.name.localeCompare(b.name));
            dispatch(alphabeticalSort(sortedCountries));
          } else if (event.target.value === "ZtoA") {
            const sortedCountries = countries.slice().sort((a, b) => b.name.localeCompare(a.name));
            dispatch(alphabeticalSort(sortedCountries));
          }

      };
  return (
      <div>
        <h1>hola</h1>
         <span className={style.titleFilter}>Filter By : </span>
        <select defaultValue="Order By" onChange={handleSortChange} style={{ width: "180px" }}>
          <option value="Order By" disabled="disabled">Order By</option>
          <option value="AtoZ">A-Z</option>
          <option value="ZtoA">Z-A</option>
        </select>

      
    </div>
  )
}
export default AllFilters
