import {createSlice} from '@reduxjs/toolkit'
import { AuthThunk, LoginThunk } from './userActions'


const initialState = {
    id: null,
    email: null,
    role: null,
    isLoading: false,
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [LoginThunk.pending](state, _){
            state.isLoading = true
        },
        [LoginThunk.fulfilled](state, {payload}){
            state.isLoading = false;
            state.id = payload.id;
            state.email = payload.email;
            state.role = payload.role;
            state.error = ''
        },
        [LoginThunk.rejected](state, {payload}){
            state.isLoading = false;
            state.error = payload;
        },

        [AuthThunk.pending](state, _){
            state.isLoading = true
        },
        [AuthThunk.fulfilled](state, {payload}){
            state.isLoading = false;
            state.id = payload.id;
            state.email = payload.email;
            state.role = payload.role;
            state.error = ''
        },
        [AuthThunk.rejected](state, {payload}){
            state.id = null;
            state.email = null;
            state.role = null;
            state.isLoading = false;
            state.error = '';
        },
        
    }
})

export default userSlice.reducer