import { createSlice } from "@reduxjs/toolkit";
import {
  createBrandCountryThunk,
  getAllBrandsCountryThunk,
} from "./brandCountryActions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  brandsCountry: [],
  isLoading: false,
  error: "",
};

const brandsCountrySlice = createSlice({
  name: "brandCountry",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE](state, { payload }) {
      state.brandsCountry = [
        ...state.brandsCountry,
        ...payload.BrandsCountry.brandsCountry,
      ];
    },
    [getAllBrandsCountryThunk.pending](state, _) {
      state.isLoading = true;
    },
    [getAllBrandsCountryThunk.fulfilled](state, { payload }) {
      state.brandsCountry = [...payload];
      state.isLoading = false;
    },
    [getAllBrandsCountryThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [createBrandCountryThunk.pending](state, _) {
      state.isLoading = true;
    },
    [createBrandCountryThunk.fulfilled](state, { payload }) {
      state.brandsCountry = [...state.brandsCountry, payload];
      state.isLoading = false;
    },
    [createBrandCountryThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default brandsCountrySlice.reducer;
