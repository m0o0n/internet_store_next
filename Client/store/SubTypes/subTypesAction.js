import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, getAll } from "../../api/subtypes";

export const getAllSubTypesThunk = createAsyncThunk(
    'subtypes/getAll',
    async (thunkAPI) => {
        try {
            const response = await getAll()
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(`An error occured can't get subtypes: ${e.message}`)
        }
    }
)

export const createSubTypeThunk = createAsyncThunk(
    'subtypes/create',
    async (thunkAPI) => {
        const {name} = thunkAPI
        try {
            const response = await create({name})
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(`An error occured can't create subtype: ${e.message}`)
        }
    }
)