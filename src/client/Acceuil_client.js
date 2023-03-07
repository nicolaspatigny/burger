import React from "react";
import { useLocation } from "react-router-dom";
import "./Acceuil_client.css";
import Profil from "../img/profil.png";
import MaxiBestOf from "../img/Maxi-bestof.jpg";
import { Link } from "react-router-dom";

function Acceuilclient() {
  const location = useLocation();
  const username = location.state.username;

  return (
    <>
      <div>
        <header>
          <h1>Mc do</h1>
          <img src={Profil} alt="Profil" className="profil"></img>
          <h1>Welcome {username}</h1>
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

export default Acceuilclient;
