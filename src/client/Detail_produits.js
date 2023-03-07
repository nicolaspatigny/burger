import React, { useState } from "react";
import styled from "styled-components";
import Panier from "../panier/Panier";

const Table = styled.table`
  border-collapse: collapse;
  margin: 20px 0;
`;

const Th = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;
`;

const QuantityCell = styled(Td)`
  display: flex;
  align-items: center;
`;

function Detailproduits() {
  const [ingredients, setIngredients] = useState([
    {
      name: "Ingredient 1",
      price: 2.99,
      quantity: 1,
      maxQuantity: 4,
      minQuantity: 0,
    },
    { name: "Ingredient 2", price: 1.99, quantity: 1, minQuantity: 1 },
    { name: "Ingredient 3", price: 0.99, quantity: 1, minQuantity: 0 },
  ]);

  const updatePrice = () => {
    let totalPrice = 0;
    ingredients.forEach((ingredient) => {
      totalPrice += ingredient.price * ingredient.quantity;
    });
    return totalPrice;
  };

  const increaseQuantity = (index) => {
    const updatedIngredients = [...ingredients];
    if (
      index === 0 &&
      updatedIngredients[index].quantity >=
        updatedIngredients[index].maxQuantity
    ) {
      return;
    }
    updatedIngredients[index].quantity = Math.min(
      updatedIngredients[index].quantity + 1,
      updatedIngredients[index].maxQuantity
    );
    setIngredients(updatedIngredients);
  };

  const decreaseQuantity = (index) => {
    const updatedIngredients = [...ingredients];
    if (updatedIngredients[index].quantity > 0) {
      updatedIngredients[index].quantity -= 1;
      setIngredients(updatedIngredients);
    }
  };
  return (
    <div>
      <h2>Ingredients</h2>
      <Table>
        <thead>
          <tr>
            <Th>Désignation</Th>
            <Th>Prix</Th>
            <Th>Quantité</Th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <Td>{ingredient.name}</Td>
              <Td>${ingredient.price.toFixed(2)}</Td>
              <QuantityCell>
                <Button onClick={() => decreaseQuantity(index)}>-</Button>
                <span>{ingredient.quantity}</span>
                <Button onClick={() => increaseQuantity(index)}>+</Button>
              </QuantityCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Panier /> Price:{updatePrice().toFixed(2)}€ <Panier />
      </div>
    </div>
  );
}
export default Detailproduits;
