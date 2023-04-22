import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getOneProductThunk } from "./productActions";
const initialState = {
    product: {},
    isLoading: false,
    error: "",
};

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {
        [HYDRATE](state, { payload }) {
            state.product = payload.Product.product;
        },
        [getOneProductThunk.pending](state, _) {
            state.isLoading = true;
        },
        [getOneProductThunk.fulfilled](state, { payload }) {
            state.product = payload;
            state.isLoading = false;
        },
        [getOneProductThunk.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        }
    },
});

export default ProductSlice.reducer;
