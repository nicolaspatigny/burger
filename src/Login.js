import React from "react";
import "./Login.css"

function Login() {
  return (
    <>
      <div className="body">
        <header>
          <h1>Burger</h1>
        </header>
          <div className="boutton">
            <div className="client">
              <button className="client_boutton">Client</button>
            </div>
            <div className="Restaurateur">
            <button className="Restaurateur_boutton">Restaurateur</button>
            </div>
          </div>
      </div>
    </>
  );
}

export default Login;
