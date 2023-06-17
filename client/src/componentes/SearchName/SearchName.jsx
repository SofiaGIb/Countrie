import {useState } from 'react'
import { useDispatch } from 'react-redux';
import { country_by_name } from '../../Redux/actions';
import style from "./search.module.css"



export default function SearchName({setpages}) {
  const [name ,setName] = useState("")
  
  const handleChange=(event)=>{
    setName(event.target.value)
  }
    const dispatch = useDispatch()
    function searchName(name) {
      dispatch(country_by_name(name));
      setName("")
      setpages(1)
      
    };
  return (
        <div className={style.search}>
      <input
        className={style.searchInput}
        type="text"
        value={name}
        placeholder="search country by name"
        onChange={(event) => handleChange(event)}
      />
      <button
        className={style.searchButton}
        type="submit"
        onClick={() => searchName(name)}
        >
        BUSCAR
      </button>
    </div>
  )
}
