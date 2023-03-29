import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Acceuilrest from "./restaurateur/Acceuil_restaurateur";
import Acceuilclient from "./client/Acceuil_client";
import ClientLogin from "./login/ClientLogin";
import RestaurateurLogin from "./login/RestaurateurLogin";
import Detailproduits from "./client/Detail_produits";

import Categorie from "./categorie/categorie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/restaurateur" element={<Acceuilrest />} />
        <Route path="/client" element={<Acceuilclient />} />
        <Route path="/clientlogin" element={<ClientLogin />} />
        <Route path="/restaurateurlogin" element={<RestaurateurLogin />} />
        <Route path="/detail" element={<Detailproduits />} />
        <Route path="/categorie" element={<Categorie />} />
      </Routes>
    </>
  );
}

export default App;
