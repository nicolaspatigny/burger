import "./Login.css";
import client from "../img/client.png";
import serveur from "../img/serveur.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    <>
      <Fond>
        <header>
          <Titre>Burger</Titre>
        </header>
        <div className="gallery">
          <Link to="/ClientLogin" className="image-wrapper">
            <img src={client} alt="client" />
          </Link>
          <Link to="/RestaurateurLogin" className="image-wrapper">
            <img src={serveur} alt="serveur" />
          </Link>
        </div>
      </Fond>
    </>
  );
}

export default Login;
