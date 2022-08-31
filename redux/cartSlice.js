import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem } = cartSlice.actions

export default cartSlice.reducer