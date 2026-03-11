import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "../features/parkingSlice";
import bookingReducer from "../features/bookingSlice";

export const store = configureStore({
    reducer :{
        parking : parkingReducer ,
        booking: bookingReducer

    }
});