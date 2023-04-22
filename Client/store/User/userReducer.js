import { createSlice } from '@reduxjs/toolkit'
import { AuthThunk, LoginThunk } from './userActions'
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    user: {
        id: null,
        email: null,
        role: null,
    },
    isLoading: false,
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        // [HYDRATE](state, { payload }) {
        //     console.log(state)
        //     state.user.id = payload.User.user.id;
        //     state.user.email = payload.User.user.email;
        //     state.user.role = payload.User.user.role;

        // },
        [LoginThunk.pending](state, _) {
            state.isLoading = true
        },
        [LoginThunk.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.user.id = payload.id;
            state.user.email = payload.email;
            state.user.role = payload.role;
            state.error = ''
        },
        [LoginThunk.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },

        [AuthThunk.pending](state, _) {
            state.isLoading = true
        },
        [AuthThunk.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.user.id = payload.id;
            state.user.email = payload.email;
            state.user.role = payload.role;
            state.error = ''
        },
        [AuthThunk.rejected](state, { payload }) {
            state.user.id = null;
            state.user.email = null;
            state.user.role = null;
            state.isLoading = false;
            state.error = '';
        },

    }
})

export default userSlice.reducer