import { useEffect } from "react";
import CardsContainer from "../../componentes/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { allcountries } from "../../Redux/actions";
import Paginado from "../../componentes/Paginado/Paginado";
import { useState } from "react";
function Home() {
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
    <div className="home">
      <h1 className="home-title"> home</h1>
      <Paginado
        CountryPage={CountryPage}
        countries={countries}
        pagination={pagination}
      />
      <CardsContainer tencountry={tencountry} />

    </div>
  );
}

export default Home;
