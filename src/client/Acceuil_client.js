import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Acceuil_client.css";
import Profil from "../img/profil.png";

function Acceuil_client() {
  const location = useLocation();
  const username = location.state.username;

  return (
    <>
      <div>
        <header>
          <img src={Profil} alt="Profil" className="profil"></img>
          <h1>Welcome {username}</h1>
        </header>
        <body></body>
      </div>
    </>
  );
}

export default Acceuil_client;
