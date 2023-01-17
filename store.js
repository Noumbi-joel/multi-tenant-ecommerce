import { configureStore } from "@reduxjs/toolkit";

// slices
import modalSlice from "./slices/modal";
import productSlice from "./slices/products";
import filterSlice from "./slices/filters";
import imageSlice from "./slices/images";
import categorySlice from "./slices/category";
import orderSlice from "./slices/orders";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productSlice,
    filter: filterSlice,
    image: imageSlice,
    categories: categorySlice,
    orders: orderSlice
  },
});
