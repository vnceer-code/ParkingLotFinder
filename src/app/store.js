import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "../features/parkingSlice";
import bookingReducer from "../features/bookingSlice";
import authReducer from "../features/authSlice";
import favoriteReducer from "../features/favoriteSlice";

export const store = configureStore({
    reducer: {
        parking: parkingReducer,
        booking: bookingReducer,
        auth: authReducer,
        favorites: favoriteReducer,

    }
});