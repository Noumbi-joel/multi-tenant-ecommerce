import { configureStore } from "@reduxjs/toolkit";

// slices
import modalSlice from "./slices/modal";
import productSlice from "./slices/products";
import filterSlice from "./slices/filters";
import imageSlice from "./slices/images";
import categorySlice from "./slices/category";
import orderSlice from "./slices/orders";
import customerSlice from "./slices/customers";
import settingSlice from "./slices/settings";
import storeSlice from "./slices/store";
import cartSlice from "./slices/cart";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productSlice,
    filter: filterSlice,
    image: imageSlice,
    categories: categorySlice,
    orders: orderSlice,
    customers: customerSlice,
    settings: settingSlice,
    store: storeSlice,
    cart: cartSlice,
  },
});
