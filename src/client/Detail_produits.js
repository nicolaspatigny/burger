import React, { useState } from "react";

function Detail_produits() {
  const initialMenu = [
    { name: "Happy meal", quantity: 0, price: 4 },
    { name: "best of ", quantity: 0, price: 8.5 },
    { name: "Maxi best of", quantity: 0, price: 10.5 },
    { name: "deluxe edition", quantity: 0, price: 9 },
  ];

  const [menu, setMenu] = useState([...initialMenu]);

  const AugmenterQuantite = (quantite) => {
    const updatedMenu = [...menu];
    updatedMenu[quantite].quantity++;
    setMenu(updatedMenu);
  };

  const DiminuerQuantite = (quantite) => {
    const updatedMenu = [...menu];
    updatedMenu[quantite].quantity--;
    setMenu(updatedMenu);
  };

  const handleReset = () => {
    setMenu([...initialMenu]);
  };

  const prixTotal = menu
    .reduce((acc, menus) => acc + menus.quantity * menus.price, 0)
    .toFixed(2);

  return (
    <>
      <ul className="liste-menu">
        {menu.map((menus, quantite) => (
          <li key={menus.name}>
            {menus.name}: {menus.quantity} ({menus.price}€)
            <button
              className="boutton-list-menu"
              onClick={() => DiminuerQuantite(quantite)}
            >
              -
            </button>
            <button
              className="boutton-list-menu"
              onClick={() => AugmenterQuantite(quantite)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleReset}>Reset</button>
      <div>
        <h3>Summary</h3>
        <p>
          Ingredients:
          <br></br>
          {menu
            .filter((menus) => menus.quantity > 0)
            .map((menus) => `${menus.name} (${menus.quantity})`)
            .join(", ")}
        </p>
        <p>Total Price: €{prixTotal}</p>
      </div>
    </>
  );
}

export default Detail_produits;
