import React from 'react'
import style from "./paginado.module.css"


function Paginados({CountryPage, countries,pagination}) {
  const paginado =[];
  for(let i =1; i<=Math.ceil( countries/CountryPage);i++){
    paginado.push(i)
  }
  return (
    <div>
      {paginado.length <=1?
      <>fallo</>:
       <nav className={style.pagination}>
        <ul className={style.pages}>
          {paginado.map(num=>(
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