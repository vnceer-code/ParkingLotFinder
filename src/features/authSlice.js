import { createSlice } from "@reduxjs/toolkit";

const storedUsers = JSON.parse(localStorage.getItem("user"));
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const authSlice = createSlice({
    name: "auth",

    initialState: {
        user: storedUsers || [],
        loggedinUser: currentUser || null,
        showAuthModal: false
    },

    reducers: {
        signup: (state, action) => {
            const { email } = action.payload;
            const existingUser = state.user.find((u) => u.email === email);
            if (existingUser) {
                alert("User already exists with this email");
                return;
            }
            state.user.push({ id: Date.now(), ...action.payload });
            localStorage.setItem("user", JSON.stringify(state.user));

        },
        login: (state, action) => {
            const { email, password } = action.payload;
            const existingUser = state.user.find((u) => u.email === email && u.password === password);
            if (existingUser) {
                state.loggedinUser = existingUser;
                localStorage.setItem("currentUser", JSON.stringify(existingUser));
            } else {
                alert("Invalid email or password");
            }

        },

        logout: (state) => {
            state.loggedinUser = null
            localStorage.removeItem("currentUser")
        },
        setShowAuthModal: (state, action) => {
            state.showAuthModal = action.payload
        }
    }
});

export const { login, logout, signup, setShowAuthModal } = authSlice.actions;

export default authSlice.reducer;