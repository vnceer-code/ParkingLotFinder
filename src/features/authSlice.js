import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",

    initialState: {
        user: null
    },

    reducers: {
        signup: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
        },
        login: (state, action) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
        },

        logout: (state) => {
            state.user = null
            localStorage.removeItem("user")
        }
    }
});

export const { login, logout , signup } = authSlice.actions;

export default authSlice.reducer;