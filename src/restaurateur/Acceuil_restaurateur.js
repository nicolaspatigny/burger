import React from "react";
import Commandes from "./Commandes";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

function Accueilrest() {
  return (
    <Wrapper>
      <Title>Orders</Title>
      <Commandes />
    </Wrapper>
  );
}

export default Accueilrest;
