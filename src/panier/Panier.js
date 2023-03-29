import styled from "styled-components";

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

const ProductCount = styled.div`
  margin-bottom: 5px;
`;

const ResetButton = styled.button`
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

function Panier(props) {
  const { products, totalPrice, onReset } = props;

  // Create an object that groups products by name and counts the total
  // number of each product that has been selected
  const selectedProductCounts = products.reduce((counts, product) => {
    if (product.count > 0) {
      const name = product.name;
      const count = product.count;
      if (name in counts) {
        counts[name] += count;
      } else {
        counts[name] = count;
      }
    }
    return counts;
  }, {});

  // Convert the selectedProductCounts object into an array of strings
  // with the format "Product Name (count)"
  const selectedProductStrings = Object.entries(selectedProductCounts).map(
    ([name, count]) => `${name} (${count})`
  );

  // Join the selectedProductStrings array into a single string
  const selectedProductNames = selectedProductStrings.join(", ");

  return (
    <Footer>
      <Total>Total : </Total>

      <ProductCount>{selectedProductNames}</ProductCount>
      <Euro>{`${totalPrice.toFixed(2)}€`}</Euro>
      <ResetButton onClick={onReset}>Reset</ResetButton>
    </Footer>
  );
}

export default Panier;
