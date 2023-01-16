import { configureStore } from "@reduxjs/toolkit";

// slices
import modalSlice from "./slices/modal";
import productSlice from "./slices/products";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productSlice
  },
});
