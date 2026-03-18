import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    parkingLots: [],
    selectedParking: null,
    searchQuery: "",
    filters: {
        location: "",
        price: "",
        distance: "",
        available: false
    },
    showFilterSidebar: false
}

const parkinSlice = createSlice({
    name: "parking",
    initialState,
    reducers: {
        setParkingLots: (state, action) => {
            state.parkingLots = action.payload;
        },

        setSelectedParking: (state, action) => {
            state.selectedParking = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setLocationFilter: (state, action) => {
            state.filters.location = action.payload
        },

        setPriceFilter: (state, action) => {
            state.filters.price = action.payload
        },

        setDistanceFilter: (state, action) => {
            state.filters.distance = action.payload
        },

        setAvailabilityFilter: (state, action) => {
            state.filters.available = action.payload
        },
        setShowFilterSidebar: (state, action) => {
            state.showFilterSidebar = action.payload
        }
    }
});

export const { setParkingLots, setSelectedParking, setSearchQuery, setLocationFilter,
    setPriceFilter,
    setDistanceFilter,
    setAvailabilityFilter, setShowFilterSidebar } = parkinSlice.actions;

export default parkinSlice.reducer;