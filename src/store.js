import { createStore } from "redux";

const initialState = {
  ingredients: [
    {
      name: "Ingredient 1",
      price: 2.99,
      quantity: 1,
      maxQuantity: 4,
      minQuantity: 0,
    },
    {
      name: "Ingredient 2",
      price: 1.99,
      quantity: 1,
      maxQuantity: 4,
      minQuantity: 1,
    },
    {
      name: "Ingredient 3",
      price: 0.99,
      quantity: 1,
      maxQuantity: 4,
      minQuantity: 0,
    },
  ],
  total_price: 5.97,
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
