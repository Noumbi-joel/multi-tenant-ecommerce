import { createSlice, createAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../helpers";

// import { toast } from "react-hot-toast";

//actions
const handleModalVisible = createAction("handleModalVisible");

//init states
const initialState = {
  products: PRODUCTS,
};

let foundProduct, index, updatedProducts;

//slices && reducers
export const productSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleModalVisible, (state, action) => {
      const { payload } = action;
      updatedProducts = [...state.products];
      foundProduct = updatedProducts.find((p) => p.id === payload);
      index = updatedProducts.findIndex((p) => p.id === payload);
      foundProduct.visible = !foundProduct.visible;
      updatedProducts[index] = foundProduct;
      state.products = updatedProducts;
    });

    builder.addDefaultCase((state) => {
      return state;
    });
  },
});

export default productSlice.reducer;
