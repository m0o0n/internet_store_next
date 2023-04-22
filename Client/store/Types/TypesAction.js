import { createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "../../api/types";
import { getAll } from "../../api/types";

export const getAllTypesThunk = createAsyncThunk(
    'types/getAll',
    async (thunkAPI) => {
        try {
            const response = await getAll();
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(`An error occured can't get type: ${e.message}`)
        }

    }
)

export const createTypeThunk = createAsyncThunk(
    'types/create',
    async (thunkAPI) => {
        try {
            const response = await create({ name: thunkAPI.name, subTypeId: Number(thunkAPI.subTypeId) });
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(`An error occured can't create type: ${e.message}`)
        }

    }
)