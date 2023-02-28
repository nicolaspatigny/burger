import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Acceuil_rest from "./restaurateur/Acceuil_restaurateur";
import Acceuil_client from "./client/Acceuil_client";
import ClientLogin from "./Login/ClientLogin";
import RestaurateurLogin from "./Login/RestaurateurLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/Acceuilrestaurateur" element={<Acceuil_rest />} />
        <Route path="/Acceuilclient" element={<Acceuil_client />} />
        <Route path="/ClientLogin" element={<ClientLogin />} />
        <Route path="/RestaurateurLogin" element={<RestaurateurLogin />} />
      </Routes>
    </>
  );
}

export default App;
