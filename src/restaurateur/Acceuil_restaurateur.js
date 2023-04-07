import React from "react";
import styled from "styled-components";
import Commandes from "./Commandes";

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
