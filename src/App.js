import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Acceuil_rest from "./restaurateur/Acceuil_restaurateur";
import Acceuil_client from "./client/Acceuil_client";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/Acceuil_restaurateur" element={<Acceuil_rest />} />
        <Route path="/Acceuil_client" element={<Acceuil_client />} />
      </Routes>
    </>
  );
}

export default App;
