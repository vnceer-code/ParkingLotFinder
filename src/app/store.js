import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "../features/parkingSlice";

export const store = configureStore({
    reducer :{
        parking : parkingReducer

    }
});