import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Profil_src from "../img/profil.png";
import MaxiBestOf from "../img/Maxi-bestof.jpg";
import Panier from "../panier/Panier";
import styled from "styled-components";
import Popup from "../Popup";
import Categorie from "../categorie/Categorie";

const HeaderPlus = styled.div`
  padding: 0px;
  margin: 0px;
`;
const Header = styled.header`
  height: 75px;
  padding: 0px;
  width: 100%;
  margin: 0px;
  background-color: #f7e2bc;
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

const Ajouter1 = styled.button`
  height: 30px;
  width: 60px;
  background-color: rgb(0, 160, 0);
  color: white;

  &:hover {
    color: black;
  }
`;

const Maxibestof = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

function Acceuilclient() {
  const location = useLocation();
  const username = location.state.username;
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderPlus>
        <Header>
          <Bienvenue> Bienvenue {username},</Bienvenue>
          <Profil src={Profil_src} alt="Profil" className="profil"></Profil>
        </Header>
      </HeaderPlus>
      <Panier />
      <Categorie />

      <div>
        <body>
          <Maxibestof>
            <img
              src={MaxiBestOf}
              alt="MaxiBesstof"
              className="MaxiBestof"
            ></img>
            Menu Maxi Bestof
            <Ajouter1 onClick={togglePopup}>
              + {isOpen && <Popup content={<></>} handleClose={togglePopup} />}
            </Ajouter1>
          </Maxibestof>
        </body>
      </div>
    </>
  );
}

export default Acceuilclient;
