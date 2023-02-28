import React, { useState } from "react";
import "./Acceuil_client.css";
import Profil from "../img/profil.png";
import MaxiBestOf from "../img/Maxi-bestof.jpg";
import { Link } from "react-router-dom";

function Acceuil_client() {
  return (
    <>
      <div>
        <header>
          <h1>Mc do</h1>
          <img src={Profil} alt="Profil" className="profil"></img>
        </header>
        <body>
          <Link to="/DetailProduits">
            <img src={MaxiBestOf} alt="MaxiBestof" className="MaxiBestof"></img>
          </Link>
        </body>
      </div>
    </>
  );
}

export default Acceuil_client;
