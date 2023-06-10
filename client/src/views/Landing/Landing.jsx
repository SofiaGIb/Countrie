import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css"


function Landing() {
  return (
    <div >
      <div className={style.img}>
      <Link to="/Home">
        <button>Home</button>
      </Link>
      </div>

    </div>
  );
}
export default Landing;
