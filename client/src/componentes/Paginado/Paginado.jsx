import React from 'react'
import style from "./paginado.module.css"


function Paginados({CountryPage,allCountries,pagination}) {
  const paginado =[];
  for(let i =1; i<=Math.ceil(allCountries/CountryPage);i++){
    paginado.push(i)
  }
  return (
    <div>
      {paginado.length <=1?
      <></>:
       <nav className={style.pagination}>
        <ul className={style.pages}>
          {paginado?.map(num=>(
            <li className={style.page} key={num}>

              <button className={style.pageBtn} onClick={()=>pagination(num)} style={{width:"30px"}}>{num}</button>
            </li>
          ))}

        </ul>
      </nav>
}
    </div>
  )
}

export default Paginados