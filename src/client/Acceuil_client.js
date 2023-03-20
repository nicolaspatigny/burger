import React from "react";
import { useLocation } from "react-router-dom";
import Profil_src from "../img/profil.png";
import MaxiBestOf from "../img/Maxi-bestof.jpg";
import { Link } from "react-router-dom";
import Panier from "../panier/Panier";
import styled from "styled-components";

const Header = styled.header`
  position: relative;
  margin-bottom: 10px;
  height: 75px;
  background-color: #fff7e9;
`;
const Bienvenue = styled.h1`
  text-align: justify;
  width: 500px;
  display: inline-block;
  margin: 0;
  font-style: italic;
`;
const Profil = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 65px;
  z-index: 2;
`;

const Ligne = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff7e9;
  position: absolute;
  left: 0;
  z-index: 1;
`;

const Ajouter = styled.button`
  height: 30px;
  width: 80px;
  background-color: rgb(0, 160, 0);
  color: white;

  &:hover {
    color: black;
  }
`;

const Maxibestof = styled.div`
  position: relative;
  left: 10%;
  padding-left: 100px;
`;

function Acceuilclient() {
  const location = useLocation();
  const username = location.state.username;

  return (
    <>
      <div>
        <Header>
          <Bienvenue> Bienvenue {username},</Bienvenue>
          <Profil src={Profil_src} alt="Profil" className="profil"></Profil>
        </Header>
      </div>
      <Ligne></Ligne>
      <div>
        <body>
          <Link to="/DetailProduits">
            <img src={MaxiBestOf} alt="MaxiBestof" className="MaxiBestof"></img>
          </Link>
          <Maxibestof>
            Menu Maxi Bestof
            <Ajouter>+</Ajouter>
          </Maxibestof>
          <Panier />
        </body>
      </div>
    </>
  );
}

export default Acceuilclient;
