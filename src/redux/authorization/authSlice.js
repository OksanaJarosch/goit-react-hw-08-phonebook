import { createSlice } from "@reduxjs/toolkit";


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
        .addCase()
    }

})

export const filterReducer = authSlice.reducer;