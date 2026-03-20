import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookings: [],
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
    vehicleNumber: "",
};

const bookingSlice = createSlice({

    name: "booking",
    initialState,

    reducers: {

        addBooking: (state, action) => {
            state.bookings.push(action.payload)
        }
    setCheckInDate: (state, action) => {
            state.checkInDate = action.payload;
        },
        setCheckInTime: (state, action) => {
            state.checkInTime = action.payload;
        },
        setCheckOutDate: (state, action) => {
            state.checkOutDate = action.payload;
        },
        setCheckOutTime: (state, action) => {
            state.checkOutTime = action.payload;
        },
        setVehicleNumber: (state, action) => {
            state.vehicleNumber = action.payload;
        },

    }

});

export const { addBooking, setCheckInDate,
    setCheckInTime,
    setCheckOutDate,
    setCheckOutTime,
    setVehicleNumber, } = bookingSlice.actions;

export default bookingSlice.reducer;