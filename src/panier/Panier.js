import styled from "styled-components";
import { useSelector } from "react-redux";

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
  background-color: #fff7e9;
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
  const total_price = useSelector((state) => state.total_price);

  return (
    <Footer>
      <Total>Total :</Total>
      <Euro>{total_price.toFixed(2)}€</Euro>
    </Footer>
  );
}

export default Panier;
