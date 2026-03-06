import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    parkingLots : [],
    selectedParking : null
}

const parkinSlice = createSlice({
    name : "parking",
    initialState,
    reducers : {
        setParkingLots : (state , action ) => {
            state.parkingLots = action.payload;
        },

        setSelectedParking : (state , action) => {
            state.selectedParking = action.payload;
    }
}
});

export const { setParkingLots, setSelectedParking } = parkinSlice.actions;

export default parkinSlice.reducer;