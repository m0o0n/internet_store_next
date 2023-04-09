import { createSlice } from "@reduxjs/toolkit";
import { createSubTypeThunk, getAllSubTypesThunk } from "./subTypesAction";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  subtypes: [],
  isLoading: false,
  error: "",
};

const subTypesSlice = createSlice({
  name: "subtypes",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE](state, { payload }) {
      state.subtypes = [...payload.SubTypes.subtypes];
    },
    [getAllSubTypesThunk.pending](state, _) {
      state.isLoading = true;
    },
    [getAllSubTypesThunk.fulfilled](state, { payload }) {
      state.subtypes = [...payload];
      state.isLoading = false;
    },
    [getAllSubTypesThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [createSubTypeThunk.pending](state, _) {
      state.isLoading = true;
    },
    [createSubTypeThunk.fulfilled](state, { payload }) {
      state.subtypes = [...state.subtypes, payload];
      state.isLoading = false;
    },
    [createSubTypeThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default subTypesSlice.reducer;
