import { createSlice } from "@reduxjs/toolkit";
import { createProductsThunk, getAllProductsThunk } from "./productsActions";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE](state, { payload }) {
      state.products = [...state.products, ...payload.Products.products];
    },
    [getAllProductsThunk.pending](state, _) {
      state.isLoading = true;
    },
    [getAllProductsThunk.fulfilled](state, { payload }) {
      state.products = [...payload.rows];
      state.isLoading = false;
    },
    [getAllProductsThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [createProductsThunk.pending](state, _) {
      state.isLoading = true;
    },
    [createProductsThunk.fulfilled](state, { payload }) {
      state.products = [...state.products, payload];
      state.isLoading = false;
    },
    [createProductsThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default ProductsSlice.reducer;
