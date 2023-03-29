import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Profil_src from "../img/profil.png";
import Panier from "../panier/Panier";
import styled from "styled-components";
import Popup from "../Popup";
import Categorie from "../categorie/categorie";
import Product0 from "../img/product-image-0.jpg";
import Product1 from "../img/product-image-1.jpg";
import Product2 from "../img/product-image-2.jpg";

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
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; // Add this property to add space between count and buttons
    max-width: 250px;
    margin: 10px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 300px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #f7e2bc;
  border: none;
  color: #333;
  font-size: 1.2rem;
  padding: 8px 16px;
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
const Count = styled.span`
  background-color: #f7e2bc;
  color: #333;
  font-size: 1.2rem;
  padding: 8px 16px;
  border: none;
  margin: 0 5px;
`;

function Acceuilclient({ index }) {
  const location = useLocation();
  const username = location.state.username;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const togglePopup = (product) => {
    setSelectedProduct(product);
    setIsOpen(!isOpen);
  };

  const [products, setProducts] = useState([
    {
      name: "Maxi Best of",
      basePrice: 7.8,
      count: 0,
      image: Product0,
      ingredients: ["beef patty", "lettuce", "tomato", "onion", "mayonnaise"],
    },
    {
      name: "McFirst",
      basePrice: 8.5,
      count: 0,
      image: Product1,
      ingredients: [
        "chicken patty",
        "lettuce",
        "tomato",
        "mayonnaise",
        "spicy sauce",
      ],
    },
    {
      name: "Happy Meal",
      basePrice: 20,
      count: 0,
      image: Product2,
      ingredients: [
        "beef patty",
        "fries",
        "drink",
        "ketchup",
        "mustard",
        "toy",
      ],
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
    localStorage.setItem(`product-${index}-count`, newCount);
  }
  const totalPrice = products.reduce((total, product) => {
    return total + product.basePrice * product.count;
  }, 0);

  useEffect(() => {
    // Retrieve the count of each product from local storage
    const productCounts = products.map((product, index) => {
      const count = localStorage.getItem(`product-${index}-count`);
      return count ? parseInt(count) : 0;
    });

    // Set the count of each product to the value retrieved from local storage
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      productCounts.forEach((count, index) => {
        newProducts[index].count = count;
      });
      return newProducts;
    });
  }, []);
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
              <ProductImage
                src={product.image}
                alt={`Product ${index}`}
                onClick={() => togglePopup(product)}
              />
              <div>
                <Button
                  onClick={() => handleCountChange(index, product.count - 1)}
                >
                  -
                </Button>
                <Count>{product.count}</Count>
                <Button
                  onClick={() => handleCountChange(index, product.count + 1)}
                >
                  +
                </Button>
                <p>{`${product.name}`}</p>
                <p>{`${product.basePrice.toFixed(2)}€`}</p>
              </div>
            </div>
          ))}
        </ProductWrapper>
        <Popup
          isOpen={isOpen}
          togglePopup={() => togglePopup(selectedProduct)}
          product={selectedProduct}
        />
      </div>
    </>
  );
}

export default Acceuilclient;
