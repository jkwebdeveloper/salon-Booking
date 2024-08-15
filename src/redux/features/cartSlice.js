import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
     name: "Cart",
     initialState: {
          cart: {},
     },
     reducers: {
          Add_To_Cart: (state, action) => {
               const cart = action.payload;
               const cartString = JSON.stringify(cart);
               typeof window != 'undefined' && localStorage.setItem("cart", cartString);
               state.cart = cart;
          }
     },
});

export const { Add_To_Cart } = Cart.actions;
export default Cart.reducer;