import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Menu from "./Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
