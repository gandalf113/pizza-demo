import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartMenuOpen: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCartMenu: (state, action) => {
            state.isCartMenuOpen = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleCartMenu } = uiSlice.actions;

export default uiSlice.reducer;