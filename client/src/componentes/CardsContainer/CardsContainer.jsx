import Card from '../Card/Card'
import style from './CardsC.module.css'
import { useSelector } from 'react-redux'

function CardsContainer({tencountry}) {
  const countries = useSelector(state =>state.country) 
  return (
    <div className={style.cardc}>
      { !countries ?( <h3>pais no encontrado</h3>  ):(tencountry.map((countries)=>{       
         return (  <Card
        id ={countries.id}
        key ={countries.id}
      name ={countries.name}
      imagen={countries.imagen}
      continente = {countries.continente}
      
      />)



      }))}

    </div>
  )
}

export default CardsContainer