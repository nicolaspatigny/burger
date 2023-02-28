import { useState } from "react";
import "./Login.css";
import client from "../img/client.png";
import serveur from "../img/serveur.jpg";
import { Link } from "react-router-dom";

function Login() {
  const [isClientLogin, setIsClientLogin] = useState(true);

  const handleClientClick = () => {
    setIsClientLogin(true);
  };

  const handleRestaurateurClick = () => {
    setIsClientLogin(false);
  };

  return (
    <>
      <div className="body">
        <header>
          <h1 className="Burger">Burger</h1>
        </header>
        <div className="gallery">
          <Link
            to="./ClientLogin"
            className="image-wrapper"
            onClick={handleClientClick}
          >
            <img src={client} alt="client" />
          </Link>
          <Link
            to="./RestaurateurLogin"
            className="image-wrapper"
            onClick={handleRestaurateurClick}
          >
            <img src={serveur} alt="serveur" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
