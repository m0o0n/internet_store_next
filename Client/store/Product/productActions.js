import { getOne } from "../../api/product";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOneProductThunk = createAsyncThunk(
    "product/getOne",
    async (thunkAPI) => {
        try {
            const response = await getOne(thunkAPI);
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(
                `An error occured can't get products: ${e.message}`
            );
        }
    }
);