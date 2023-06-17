import React, { useState } from 'react';
import style from './paginado.module.css';

function Paginado({ pagination, CountryPage, countries }) {
  const [currentPage, setCurrentPage] = useState(CountryPage);

  const paginado = [];
  for (let i = 1; i <= Math.ceil(countries / CountryPage); i++) {
    paginado.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      pagination(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < paginado.length) {
      setCurrentPage(currentPage + 1);
      pagination(currentPage + 1);
    }
  };

  return (
    <div>
      {paginado.length < 1 ? (
        <>fallo</>
      ) : (
        <nav className={style.pagination}>
          <div className={style.page}>
            <button
              className={style.pageBtn}
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            <button
              className={`${style.pageBtn} ${style.currentPageBtn}`}
              onClick={() => pagination(currentPage)}
            >
              {currentPage}
            </button>

            <button
              className={style.pageBtn}
              onClick={goToNextPage}
              disabled={currentPage === paginado.length}
            >
              &gt;
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Paginado;



