import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Acceuil_rest from "./restaurateur/Acceuil_restaurateur";
import Acceuil_client from "./client/Acceuil_client";
import ClientLogin from "./Login/ClientLogin";
import RestaurateurLogin from "./Login/RestaurateurLogin";
import Detail_produits from "./client/Detail_produits";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/acceuilrestaurateur" element={<Acceuil_rest />} />
        <Route path="/acceuilclient" element={<Acceuil_client />} />
        <Route path="/clientlogin" element={<ClientLogin />} />
        <Route path="/restaurateurlogin" element={<RestaurateurLogin />} />
        <Route path="/detailproduits" element={<Detail_produits />} />
        <Route path="/acceuilrestaurateur" element={<Acceuil_rest />} />
      </Routes>
    </>
  );
}

export default App;
