import React from "react";
import styled from "styled-components";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
`;

function Popup({ isOpen, togglePopup, product }) {
  if (!isOpen) return null;

  return (
    <PopupWrapper>
      <PopupContent>
        <h2>{product.name} Ingredients:</h2>
        <ul>
          {product.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <button onClick={togglePopup}>Close</button>
      </PopupContent>
    </PopupWrapper>
  );
}

export default Popup;
