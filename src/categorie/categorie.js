import React, { useState } from "react";
import "./categorie.css";
import menu from "../img/menu.png";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <div className="arrow-container" onClick={toggleSidebar}>
        <div className="arrow"></div>
      </div>

      <div className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <ul>
          <li>
            <img src={menu} alt="Burger" className="menu"></img>
            <a href="#" className="menu-titre">
              Menu
            </a>
          </li>
          <li>
            <a href="#">Burger</a>
          </li>
          <li>
            <a href="#">Boissons</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
