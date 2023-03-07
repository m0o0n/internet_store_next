import { createSlice } from "@reduxjs/toolkit";
import { createTypeThunk, getAllTypesThunk } from "./TypesAction";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  types: [],
  isLoading: false,
  error: "",
};

const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE](state, { payload }) {
      state.types = [...state.types, ...payload.Types.types];
    },
    [getAllTypesThunk.pending](state, _) {
      state.isLoading = true;
    },

    [getAllTypesThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.types = [...payload];
    },

    [getAllTypesThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [createTypeThunk.pending](state, _) {
      state.isLoading = true;
    },

    [createTypeThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.types = [...state.types, payload];
    },

    [createTypeThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default typesSlice.reducer;
