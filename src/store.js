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
  base_price: 8.5,
  total_price: 0, // initial total price includes base price and ingredient prices
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INGREDIENTS":
      const newIngredients = action.payload;
      const newTotalPrice =
        state.base_price + calculateIngredientsTotalPrice(newIngredients);
      return {
        ...state,
        ingredients: newIngredients,
        total_price: newTotalPrice,
      };
    default:
      return state;
  }
};

function calculateIngredientsTotalPrice(ingredients) {
  let total_price = 0;
  ingredients.forEach((ingredient) => {
    total_price += ingredient.price * ingredient.quantity;
  });
  return total_price;
}

const store = createStore(rootReducer);

export default store;
