import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, getAll } from "../../api/brandCountry";

export const getAllBrandsCountryThunk = createAsyncThunk(
    'brandsCountry/getAll',
    async (thunkAPI) => {
        try {
            const response = await getAll()
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(`An error occured can't get brands: ${e.message}`)
        }

    }
)

export const createBrandCountryThunk = createAsyncThunk(
    'brandsCountry/create',
    async (thunkAPI) => {
        const {name, rejectWithValue} = thunkAPI
        try {
            const response = await create({name})
            return response
        } catch (e) {
            return rejectWithValue(`An error occured can't get brands: ${e.message}`)
        }

    }
)