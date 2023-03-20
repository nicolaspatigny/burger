import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Panier from "../panier/Panier";
import store from "../store";

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
  const ingredients = useSelector((state) => state.ingredients);
  const total_price = useSelector((state) => state.total_price);
  const dispatch = useDispatch();

  useEffect(() => {
    const new_total_price = updatePrice();
    dispatch({
      type: "UPDATE_TOTAL_PRICE",
      payload: new_total_price,
    });
  }, [ingredients]);

  const updatePrice = () => {
    let new_total_price = 0;
    for (let i = 0; i < ingredients.length; i++) {
      new_total_price += ingredients[i].quantity * ingredients[i].price;
    }
    return new_total_price;
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
    store.dispatch({
      type: "UPDATE_INGREDIENTS",
      payload: updatedIngredients,
    });
  };

  const decreaseQuantity = (index) => {
    const updatedIngredients = [...ingredients];
    if (updatedIngredients[index].quantity > 0) {
      updatedIngredients[index].quantity -= 1;
      store.dispatch({
        type: "UPDATE_INGREDIENTS",
        payload: updatedIngredients,
      });
    }
  };
  return (
    <div>
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
        <Panier />
      </div>
    </div>
  );
}
export default Detailproduits;
