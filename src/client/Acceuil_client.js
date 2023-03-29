import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Profil_src from "../img/profil.png";
import Panier from "../panier/Panier";
import styled from "styled-components";
import Popup from "../Popup";
import Categorie from "../categorie/categorie";
import Product0 from "../img/product-image-0.jpg";
import Product1 from "../img/product-image-1.jpg";

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

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

function Acceuilclient({ index }) {
  const location = useLocation();
  const username = location.state.username;
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [products, setProducts] = useState([
    { name: "Maxi", basePrice: 7.8, count: 0, image: Product0 },
    {
      name: "McFirst",
      basePrice: 8.5,
      count: 0,
      image: Product1,
    },
    {
      name: "Product C",
      basePrice: 20,
      count: 0,
      image: "./img/product-image-2.jpg",
    },
  ]);

  function handleCountChange(index, newCount) {
    if (newCount < 0) {
      newCount = 0;
    }
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      newProducts[index].count = newCount;
      return newProducts;
    });
  }
  const totalPrice = products.reduce((total, product) => {
    return total + product.basePrice * product.count;
  }, 0);

  return (
    <>
      <HeaderPlus>
        <Header>
          <Bienvenue> Bienvenue {username},</Bienvenue>
          <Profil src={Profil_src} alt="Profil" className="profil"></Profil>
        </Header>
      </HeaderPlus>
      <Panier totalPrice={totalPrice} />
      <Categorie />

      <div>
        <ProductWrapper>
          {products.map((product, index) => (
            <div key={index}>
              <ProductImage src={product.image} alt={`Product ${index}`} />
              <div>
                <button
                  onClick={() => handleCountChange(index, product.count + 1)}
                >
                  +
                </button>
                <span>{product.count}</span>
                <button
                  onClick={() => handleCountChange(index, product.count - 1)}
                >
                  -
                </button>
                <p>{`Price: $${product.basePrice.toFixed(2)}`}</p>
              </div>
            </div>
          ))}
        </ProductWrapper>
      </div>
    </>
  );
}

export default Acceuilclient;
