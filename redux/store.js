import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";

export default configureStore({
    reducer: {
        cart: cartSlice,
        ui: uiSlice
    }
});