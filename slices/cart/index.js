import { createSlice, createAction } from "@reduxjs/toolkit";

import toast from "react-hot-toast";

//actions
// const toggleCartItemQty = createAction("toggleCartItemQty");
const setCartQty = createAction("setCartQty");
const setCartColor = createAction("setCartColor");
const setCartSize = createAction("setCartSize");
const addToCart = createAction("addToCart");
const removeCartItem = createAction("removeCartItem");

//init states
const initialState = {
  cartItems: [],
  totalQuantities: 0,
  totalPrice: 0,
  qty: 1,
  color: "",
  size: "",
};
let foundProduct, temp;

//slices && reducers
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCartQty, (state, action) => {
      state.qty = action.payload;
    });
    builder.addCase(setCartColor, (state, action) => {
      state.color = action.payload;
    });
    builder.addCase(setCartSize, (state, action) => {
      state.size = action.payload;
    });

    builder.addCase(addToCart, (state, action) => {
      const checkProductInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      state.totalPrice += action.payload.price * state.qty;
      state.totalQuantities += state.qty;
      if (checkProductInCart) {
        if (
          checkProductInCart.selectedColor === state.color &&
          checkProductInCart.selectedSize === state.size
        ) {
          const updatedCartItems = state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              return { ...cartItem, quantity: cartItem.quantity + state.qty };
            }
          });
          state.cartItems = updatedCartItems;
        } else {
          action.payload.id = Date.now();
          action.payload.selectedColor = state.color;
          action.payload.selectedSize = state.size;
          action.payload.quantity = state.qty;
          state.cartItems = [...state.cartItems, { ...action.payload }];
        }
      } else {
        action.payload.selectedColor = state.color;
        action.payload.selectedSize = state.size;
        action.payload.quantity = state.qty;
        state.cartItems = [...state.cartItems, { ...action.payload }];
      }
      toast.success(`${state.qty} ${action.payload.title} added to the cart`);
    });

    builder.addCase(removeCartItem, (state, action) => {
      foundProduct = state.cartItems.find((item) => item.id === action.payload);
      temp = [...state.cartItems].filter(
        (cartItem) => cartItem.id !== foundProduct.id
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
