import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Menu from "./Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Log />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
