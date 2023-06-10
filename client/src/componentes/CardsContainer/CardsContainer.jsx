import Card from '../Card/Card'
import style from './CardsC.module.css'
import { useSelector } from 'react-redux'

function CardsContainer({tencountry}) {
  const countries = useSelector(state =>state.country) 
  return (
    <div className={style.cardc}>
      {countries.map(country=>{
        return  <Card
        id ={country.id}
        key ={country.id}
      name ={country.name}
      imagen={country.imagen}

      continente = {country.continente}
      
      />
      })}
    </div>
  )
}

export default CardsContainer