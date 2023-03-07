import "./Login.css";
import client from "../img/client.png";
import serveur from "../img/serveur.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="fond">
        <header>
          <h1 className="Burger">Burger</h1>
        </header>
        <div className="gallery">
          <Link to="/ClientLogin" className="image-wrapper">
            <img src={client} alt="client" />
          </Link>
          <Link to="/RestaurateurLogin" className="image-wrapper">
            <img src={serveur} alt="serveur" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
