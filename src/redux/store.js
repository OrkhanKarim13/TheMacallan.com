import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter/counterSlice";
import productSlice from "./product/productSlice";
import {cartSlice} from "./product/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productSlice,
    cart: cartSlice.reducer,

  },
})