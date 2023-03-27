import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Acceuilrest from "./restaurateur/Acceuil_restaurateur";
import Acceuilclient from "./client/Acceuil_client";
import ClientLogin from "./login/ClientLogin";
import RestaurateurLogin from "./login/RestaurateurLogin";
import Detailproduits from "./client/Detail_produits";
import { Provider } from "react-redux";
import store from "./store";

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
