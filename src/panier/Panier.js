import styled from "styled-components";
import "./panier.css";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #86deff;
`;

const Total = styled.h1`
  font-style: normal;
`;

const Euro = styled.div`
  font-style: italic;
  right: 0;
  font-size: 50px;
`;

function Panier() {
  return (
    <Footer>
      <Total>Total :</Total>
      <Euro>€</Euro>
    </Footer>
  );
}

export default Panier;
