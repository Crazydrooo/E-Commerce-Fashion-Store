import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    totalPrice: 0,
    FinalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const cartData = action.payload;
      const existence = state.cart.find(
        (product) =>
          product.id === cartData.id &&
          String(product.size) === String(cartData.size) &&
          String(product.color) === String(cartData.color)
      );

      if (existence) {
        existence.quantity++;
        existence.totalPrice += cartData.amount;
        state.FinalPrice += cartData.amount;
      } else {
        state.cart.push({
          id: cartData.id,

          img: cartData.img,
          name: cartData.name,
          text: cartData.text,
          amount: cartData.amount,
          size: cartData.size,
          color: cartData.color,
          totalPrice: cartData.amount,
          quantity: 1,
        });
        state.FinalPrice += cartData.amount;
      }
    },
    removeFromCart(state, action) {
      const cartData = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === cartData.id &&
            String(product.size) === String(cartData.size) &&
            String(product.color) === String(cartData.color)
        );

        if (exist.quantity > 1) {
          exist.quantity--;
          exist.totalPrice -= cartData.amount;
          state.FinalPrice -= cartData.amount;
        } else {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== cartData.id ||
              String(product.size) !== String(cartData.size) ||
              String(product.color) !== String(cartData.color)
          );
          state.FinalPrice -= cartData.amount;
        }
      } catch (error) {
        console.log("This is the Error:", error);
      }
    },
  },
});
export const selectFinalPrice = (state) => state.cart.FinalPrice;
export const { addToCart, removeFromCart } = CardSlice.actions;

export default CardSlice.reducer;
