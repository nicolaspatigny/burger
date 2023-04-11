import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OrdersWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Order = styled.div`
  margin-bottom: 30px;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const OrderTitle = styled.h2`
  margin: 0;
`;

const OrderDate = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const OrderTotalPrice = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProductList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ProductListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const ProductName = styled.span`
  flex-grow: 1;
`;

const ProductCount = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

const ProductPrice = styled.span`
  font-weight: bold;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin-left: 20px;
  cursor: pointer;
`;

function Commandes() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(orders);
  }, []);

  const handleDeleteOrder = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
    localStorage.setItem("orders", JSON.stringify(newOrders));
  };

  return (
    <OrdersWrapper>
      {orders.map((order, index) => (
        <Order key={index}>
          <OrderHeader>
            <OrderTitle>Order #{index + 1}</OrderTitle>
            <div>
              <OrderDate>{order.date}</OrderDate>
              <DeleteButton onClick={() => handleDeleteOrder(index)}>
                Delete
              </DeleteButton>
            </div>
          </OrderHeader>
          <OrderTotalPrice>
            Total Price: {order.totalPrice.toFixed(2)}€
          </OrderTotalPrice>
          <ProductList>
            {order.products.map((product, index) => (
              <ProductListItem key={index}>
                <ProductName>{product.name}</ProductName>
                <ProductCount>({product.count})</ProductCount>
                <ProductPrice>{product.basePrice.toFixed(2)}€</ProductPrice>
              </ProductListItem>
            ))}
          </ProductList>
        </Order>
      ))}
    </OrdersWrapper>
  );
}

export default Commandes;
