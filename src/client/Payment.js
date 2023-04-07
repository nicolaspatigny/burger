import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

function PaymentPopup(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate a payment by logging a message to the console
    console.log("Payment submitted!");
    // Close the payment popup
    props.onClose();
  };

  return (
    <Overlay>
      <Popup>
        <Title>Enter payment details</Title>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="cardNumber">Card number:</Label>
          <Input type="text" id="cardNumber" name="cardNumber" required />

          <Label htmlFor="expiryDate">Expiry date:</Label>
          <Input type="text" id="expiryDate" name="expiryDate" required />

          <Label htmlFor="cvv">CVV:</Label>
          <Input type="text" id="cvv" name="cvv" required />

          <Button type="submit">Submit payment</Button>
        </form>
      </Popup>
    </Overlay>
  );
}

export default PaymentPopup;
