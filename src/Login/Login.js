import React from "react";
import "./Login.css";
import client from "../img/client.png";
import serveur from "../img/serveur.jpg";

function Login() {
  return (
    <>
      <div className="body">
        <header>
          <h1 className="Burger">Burger</h1>
        </header>
        <div className="gallery">
          <img src={client} alt="client"></img>
          <img src={serveur} alt="serveur"></img>
        </div>
      </div>
    </>
  );
}

export default Login;
