import { createSlice } from "@reduxjs/toolkit";
import { login, registration } from "./authOperations";


export const authSlice = createSlice({
    name: "authorization",
    initialState: {
        user: {name: null, email: null},
        isLoggedin: false,
        token: "",
        isRefreshing: false
    },

    extraReducers: (builder) => {
        builder
        .addCase(registration.pending, (state) => {
            state.isLoggedin = false;
        })
        .addCase(registration.fulfilled, (state, action) => {
            console.log(action.payload);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedin = true;
        })
        .addCase(registration.rejected, (state) => {
            state.isLoggedin = false;
        })

        .addCase(login.pending, (state) => {
            state.isLoggedin = false;
        })
        .addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedin = true;
        })
        .addCase(login.rejected, (state) => {
            state.isLoggedin = false;
        })
    }

})

export const authReducer = authSlice.reducer;