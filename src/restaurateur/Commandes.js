import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OrdersWrapper = styled.div`
  margin: 0 auto;
  padding: 10px;
`;

const Order = styled.div`
  display: inline-block;
  margin-bottom: 30px;
  margin-left: 15px;
  left: 0;
  vertical-align: top;
`;

const OrderHeader = styled.div`
  display: flex;
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
  align-items: center;
`;

const ProductName = styled.span`
  flex: 1;
`;

const ProductCount = styled.span`
  width: 80px;
  text-align: right;
  margin-right: 10px;
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
  margin-left: 65px;
  border-radius: 10px;
  transition: all 0.15s ease;
  cursor: pointer;

  &:hover {
    color: black;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(4px);
  }
`;

const CommandePaC = styled.p`
  font-size: 4vh;
  left: 0;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 25px;
  text-decoration: underline;
`;

const Encadrer = styled.div`
  border-radius: 5px;
  background-color: #dcdcdc;
  padding: 8px 16px;
`;

const CommandesEff = styled.p`
  font-size: 4vh;
  left: 0;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 25px;

  &:hover {
    text-decoration: underline;
  }
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
    <>
      <CommandePaC>Commande(s) en préparation :</CommandePaC>
      <OrdersWrapper>
        {orders.map((order, index) => (
          <Order key={index}>
            <Encadrer>
              <OrderHeader>
                <OrderTitle>Commande n°{index + 1}</OrderTitle>
                <div>
                  <OrderDate>{order.date}</OrderDate>
                  <DeleteButton onClick={() => handleDeleteOrder(index)}>
                    Delete
                  </DeleteButton>
                </div>
              </OrderHeader>
              <OrderTotalPrice>
                Prix Total : {order.totalPrice.toFixed(2)}€
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
            </Encadrer>
          </Order>
        ))}
      </OrdersWrapper>
      <CommandesEff>Commande(s) effectuée(s) :</CommandesEff>
    </>
  );
}

export default Commandes;
