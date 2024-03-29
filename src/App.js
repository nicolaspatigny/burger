import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Acceuilrest from "./restaurateur/Acceuil_restaurateur";
import Acceuilclient from "./client/Acceuil_client";
import ClientLogin from "./login/ClientLogin";
import RestaurateurLogin from "./login/RestaurateurLogin";
import Categorie from "./categorie/categorie";
import PaymentPopup from "./client/Payment";
import Header from "./restaurateur/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/restaurateur" element={<Acceuilrest />} />
        <Route path="/client" element={<Acceuilclient />} />
        <Route path="/clientlogin" element={<ClientLogin />} />
        <Route path="/restaurateurlogin" element={<RestaurateurLogin />} />
        <Route path="/categorie" element={<Categorie />} />
        <Route path="/pay" element={<PaymentPopup />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
