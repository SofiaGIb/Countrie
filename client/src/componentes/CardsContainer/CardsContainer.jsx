import Card from '../Card/Card'
import style from './CardsC.module.css'
import { useSelector } from 'react-redux'

function CardsContainer({tencountry}) {
  const countries = useSelector(state =>state.country) 
  console.log(countries);
  return (
    <div className={style.cardc}>
      { tencountry?(tencountry.map((countries)=>{       
         return (  <Card
        id ={countries.id}
        key ={countries.id}
      name ={countries.name}
      imagen={countries.imagen}
      continente = {countries.continente}
      
      />)



      })): ( 
        <h1>Cargando</h1>)}

    </div>
  )
}

export default CardsContainer