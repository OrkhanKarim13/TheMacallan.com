import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  reducers: {
    addToCart: (state, action) => {
      const { id, name, details, productImage, price, abv, volume } =
        action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        
      } else {
        state.push({
          id,
          name,
          details,
          productImage,
          price,
          abv,
          volume,
          quantity: 1,
        });
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    incrementProduct: (state, action) => {
      const { id, name, price } = action.payload;
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({
          id,
          name,
          price,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementProduct: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeProduct: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  incrementProduct,
  decrementProduct,
  removeProduct,

} = cartSlice.actions;
