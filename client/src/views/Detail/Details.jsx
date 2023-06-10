import React, { useEffect } from 'react'
import style from './Details.module.css'
import { countryDetail } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams,} from 'react-router-dom'
function Details() {
  const {id} =useParams()



const details = useSelector(state=> state.details)

const dispatch = useDispatch()

useEffect(()=>{
dispatch(countryDetail(id))
},[dispatch,id])

useEffect(()=>{
},[details])

  return (
    <div>
      
      <h1> name  : {details.name}</h1>
<h2>id: {details.id}</h2>
<div>
<img src={details.imagen} alt="" />
</div>
<div>continente : {details.continente}</div>
<div>poblacion :{details.poblacion}</div>
<div>Capital : {details.capital}</div> 
<div>

<Link to="/Home">
<button className={style.buttoncontainer}>GO BACK </button>
</Link>
</div>

<div>
  <Link to="/Create"><h3>Crea una actividad para este pais </h3></Link>
</div>
    </div>
  )
}
export default Details