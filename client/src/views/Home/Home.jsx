import { useEffect } from "react";
import CardsContainer from "../../componentes/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { allcountries } from "../../Redux/actions";
import Paginado from "../../componentes/Paginado/Paginado";
import { useState } from "react";
import SearchName from "../../componentes/SearchName/SearchName";
import style from './Home.module.css'
function Home() {
  const country = useSelector ((state)=>state.allcountries)
  const countries = useSelector((state) => state.country);
  //Paginado
  const [pages, setPages] = useState(1);
  const [CountryPage, setCountryPage] = useState(10);
  
  const lastcountry = pages * CountryPage;
  const firstcountry = lastcountry - CountryPage;
  const tencountry = countries.slice(firstcountry, lastcountry);
  
  const pagination = (nambercountries) => {
    setPages(nambercountries);
  };
  
  //****************************************************/
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allcountries());
  }, []);
  return (
    <div className={style.body}>
      <SearchName/>
      <Paginado
        CountryPage={CountryPage}
        countries={ countries.length}
        pagination={pagination}
        />
      <CardsContainer tencountry={tencountry} />

    </div>
  );
}

export default Home;
