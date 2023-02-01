import { createSlice, createAction } from "@reduxjs/toolkit";

import toast from "react-hot-toast";

//actions
const setCartQty = createAction("setCartQty");
const addToCart = createAction("addToCart");
const toggleCartItemQty = createAction("toggleCartItemQty");
const removeCartItem = createAction("removeCartItem");

//init states
const initialState = {
  cartItems: [],
  totalQuantities: 0,
  totalPrice: 0,
  qty: 0,
};
let foundProduct, index, temp;

//slices && reducers
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCartQty, (state, action) => {
      state.qty = action.payload;
    });

    builder.addCase(addToCart, (state, action) => {
      const checkProductInCart = state.cartItems.find(
        (item) => item._id === action.product._id
      );
      state.totalPrice += action.product.price * state.qty;
      state.totalQuantities += state.qty;
      if (checkProductInCart) {
        const updatedCartItems = state.cartItems.map((cartItem) => {
          if (cartItem._id === action.product._id)
            return { ...cartItem, quantity: cartItem.quantity + state.qty };
        });
        state.cartItems = updatedCartItems;
      } else {
        action.product.quantity = state.qty;
        state.cartItems = [...state.cartItems, { ...action.product }];
      }
      toast.success(`${state.qty} ${action.product.name} added to the cart`);
    });

    builder.addCase(toggleCartItemQty, (state, action) => {
      foundProduct = state.cartItems.find(
        (item) => item._id === action.payload.itemId
      );
      index = state.cartItems.findIndex(
        (item) => item._id === action.payload.itemId
      );

      if (action.payload.value === "inc") {
        foundProduct.quantity += 1;
        let newCartItems = [...state.cartItems];
        newCartItems[index] = foundProduct;
        state.cartItems = newCartItems;
        state.totalPrice += foundProduct.price;
        state.totalQuantities += 1;
      } else if (action.payload.value === "dec") {
        if (foundProduct.quantity > 1) {
          let newCartItems = [...state.cartItems];
          foundProduct.quantity -= 1;
          newCartItems[index] = foundProduct;
          state.cartItems = newCartItems;
          state.totalPrice -= foundProduct.price;
          state.totalQuantities -= 1;
        }
      }
    });

    builder.addCase(removeCartItem, (state, action) => {
      foundProduct = state.cartItems.find(
        (item) => item._id === action.payload.itemId
      );
      temp = [...state.cartItems].filter(
        (cartItem) => cartItem._id !== foundProduct._id
      );
      state.cartItems = temp;
      state.totalPrice -= foundProduct.quantity * foundProduct.price;
      state.totalQuantities -= foundProduct.quantity;
    });

    builder.addDefaultCase((state, action) => {
      return state;
    });
  },
});

export default cartSlice.reducer;