import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  isLoading: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await axios("http://localhost:5000/api/products");
    const data = await res.data;
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = action.message;
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
