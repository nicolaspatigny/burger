import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Acceuilrest from "./restaurateur/Acceuil_restaurateur";
import Acceuilclient from "./client/Acceuil_client";
import ClientLogin from "./Login/ClientLogin";
import RestaurateurLogin from "./Login/RestaurateurLogin";
import Detailproduits from "./client/Detail_produits";
import { Provider } from "react-redux";
import store from "./store";
import Commandes from "./restaurateur/Commandes";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/restaurateur" element={<Acceuilrest />} />
          <Route path="/client" element={<Acceuilclient />} />
          <Route path="/clientlogin" element={<ClientLogin />} />
          <Route path="/restaurateurlogin" element={<RestaurateurLogin />} />
          <Route path="/detail" element={<Detailproduits />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
