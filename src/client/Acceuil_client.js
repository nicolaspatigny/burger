import React, { useState } from "react";
import "./Acceuil_client.css";
import Profil from "../img/profil.png";

function Acceuil_client() {
  return (
    <>
      <div>
        <header>
          <img src={Profil} alt="Profil" className="profil"></img>
          <h1>Mcdo</h1>
        </header>
        <body></body>
      </div>
    </>
  );
}

export default Acceuil_client;
