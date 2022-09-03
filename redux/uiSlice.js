import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartMenuOpen: false,
    isNewItemMenuOpen: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCartMenu: (state, action) => {
            state.isCartMenuOpen = action.payload;
        },
        toggleNewItemMenu: (state, action) => {
            state.isNewItemMenuOpen = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleCartMenu, toggleNewItemMenu } = uiSlice.actions;

export default uiSlice.reducer;