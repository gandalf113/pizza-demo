import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartMenuOpen: false,
    isNewItemMenuOpen: false,
    isEditItemMenuOpen: false,

    currentlyEditedMenuItem: {}
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
        /**
         * @prop {boolean} isOpen - true to open, false to close
         * @prop {Object} item - menu item to edit
         */
        toggleEditItemMenu: (state, action) => {
            const [isOpen, item] = action.payload
            state.isEditItemMenuOpen = isOpen;
            state.currentlyEditedMenuItem = item;
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleCartMenu, toggleNewItemMenu, toggleEditItemMenu } = uiSlice.actions;

export default uiSlice.reducer;