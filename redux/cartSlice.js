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
      // First, check if item of this kind is in cart already
      const index = state.items.findIndex(item => item.item.id === action.payload.id);
      // If it is not, add it there
      if (index === -1) {
        const item = {
          item: action.payload,
          amount: 1
        }
        state.items.push(item);
      }
      // If it is, increment the amount
      else {
        state.items[index].amount += 1;
      }
    },
    /**
     * Removes an item from the cart (no matter the amount)
     * @param {Object} action - item to be removed
     */
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.item.id === action.payload.id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
    /**
 * Decreases amount of item in the cart by one or removes it entirely
 * @param {Object} action - item to be removed
 */
    decrementItem: (state, action) => {
      const index = state.items.findIndex(item => item.item.id === action.payload.id);
      if (index > -1) {
        const item = state.items[index];
        if (item.amount === 1) {
          state.items.splice(index, 1);
        } else {
          item.amount -= 1;
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;