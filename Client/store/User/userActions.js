import { createAsyncThunk } from "@reduxjs/toolkit";
import { check, login } from "../../api/auth";

export const LoginThunk = createAsyncThunk(
    'user/login',
    async (data, thunkAPI) => {
        try {
            const {email, password} = data
            const response = await login(email, password)
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(
                `An error occured: ${e.message}`
            )
        }
    }
)

export const AuthThunk = createAsyncThunk(
    'user/auth',
    async (thunkAPI) => {
        try {
            const response = await check()
            console.log(response)
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(
                `An error occured: ${e.message}`
            )
        }
    }
)
