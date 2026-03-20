import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
    try {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const initialState = {
    favorites: loadFavorites(),
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const exists = state.favorites.find(item => item.id === action.payload.id);

            if (exists) {
                state.favorites = state.favorites.filter(
                    item => item.id !== action.payload.id
                );
            } else {
                state.favorites.push(action.payload);
                
            }
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
    },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;