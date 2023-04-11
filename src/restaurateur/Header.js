import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Tete = styled.header`
  margin: 0px;
  height: 9vh;
  background: #f7e2bc;
`;

const Admin = styled.div`
  display: inline;
  width: 500px;
  font-size: 50px;
  margin-left: 15px;
`;

const Gestion = styled.button`
  top: 0;
  background-color: #f7e2bc;
  margin-left: 50px;
  color: #333;
  font-size: 1.2rem;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8d294;
    color: white;
  }

  &:active {
    transform: translateY(2px);
  }
`;

function Header() {
  const location = useLocation();
  const username = location.state.rusername;

  return (
    <>
      <Tete>
        <Admin>Admin: {username}</Admin>
        <Gestion>Gestion</Gestion>
      </Tete>
    </>
  );
}

export default Header;
