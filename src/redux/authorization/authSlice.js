import { createSlice } from "@reduxjs/toolkit";
import { registration } from "./authOperations";


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
        .addCase(registration.pending, (state) => state)
        .addCase(registration.fulfilled, (state, action) => {
            console.log(action.payload);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedin = true;
        })
        .addCase(registration.rejected, (state) => state)
    }

})

export const authReducer = authSlice.reducer;