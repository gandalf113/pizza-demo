import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Adds item to the cart
     * @param {Object} action - item to be added
     */
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    /**
     * Removes an item from the cart
     * @param {Object} action - item to be removed
     */
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;