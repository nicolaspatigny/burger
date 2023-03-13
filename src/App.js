import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Acceuilrest from "./restaurateur/Acceuil_restaurateur";
import Acceuilclient from "./client/Acceuil_client";
import ClientLogin from "./Login/ClientLogin";
import RestaurateurLogin from "./Login/RestaurateurLogin";
import Detailproduits from "./client/Detail_produits";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/acceuilrestaurateur" element={<Acceuilrest />} />
        <Route path="/acceuilclient" element={<Acceuilclient />} />
        <Route path="/clientlogin" element={<ClientLogin />} />
        <Route path="/restaurateurlogin" element={<RestaurateurLogin />} />
        <Route path="/detailproduits" element={<Detailproduits />} />
      </Routes>
    </>
  );
}

export default App;
