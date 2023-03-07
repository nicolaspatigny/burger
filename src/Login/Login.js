import "./Login.css";
import client from "../img/client.png";
import serveur from "../img/serveur.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const Fond = styled.div``;

  const Titre = styled.h1`
    font-family: cursive;
    font-style: italic;
    position: absolute;
    font-size: 50px;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background: rgb(0, 0, 0);
      transform: scale(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scale(1);
    }
  `;

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
