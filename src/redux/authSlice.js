import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "authorization",
    initialState: {
        isLoggedin: false,
        token: ""
    },

    extraReducers: (builder) => {
        builder
        .addCase()
    }

})