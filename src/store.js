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
