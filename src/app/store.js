import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/SliderSlice";
import cartReducer from "../features/CartSlice";
import ProductReducer from "../features/ProductSlice";
export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    cart: cartReducer,
    products: ProductReducer,
  },
});
