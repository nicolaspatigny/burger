import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Acceuilrest from "./restaurateur/Acceuil_restaurateur";
import Acceuilclient from "./client/Acceuil_client";
import ClientLogin from "./Login/ClientLogin";
import RestaurateurLogin from "./Login/RestaurateurLogin";
import Categorie from "./categorie/categorie";
import PaymentPopup from "./client/Payment";

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
      </Routes>
    </>
  );
}

export default App;
