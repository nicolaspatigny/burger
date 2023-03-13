import { createStore } from "redux";

const initialState = {
  ingredients: [
    {
      name: "Steacks",
      price: 1.5,
      quantity: 1,
      maxQuantity: 3,
      minQuantity: 1,
    },
    {
      name: "Salade",
      price: 0.5,
      quantity: 1,
      maxQuantity: 2,
      minQuantity: 0,
    },
    {
      name: "Tomate",
      price: 0.99,
      quantity: 2,
      maxQuantity: 4,
      minQuantity: 0,
    },
  ],
  total_price: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INGREDIENTS":
      return {
        ...state,
        ingredients: action.payload,
      };
    case "UPDATE_TOTAL_PRICE":
      return {
        ...state,
        total_price: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
