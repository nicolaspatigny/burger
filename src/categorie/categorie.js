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
          <li>
            <a href="#">Onglet 1</a>
          </li>
          <li>
            <a href="#">Onglet 2</a>
          </li>
          <li>
            <a href="#">Onglet 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
