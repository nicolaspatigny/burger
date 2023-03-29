import React, { useState } from "react";
import "./categorie.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <div className="arrow-container" onMouseOver={toggleSidebar}>
        <div className="arrow"></div>
      </div>

      <div className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <ul>
          <li className="menu">
            <a href="#">Menu</a>
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
