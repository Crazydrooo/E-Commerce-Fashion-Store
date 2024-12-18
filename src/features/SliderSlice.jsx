import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../assets/DummyData";

const SliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: sliderData.length - 1,
  },
  reducers: {
    nextSlide(state) {
      state.value = state.value + 1 > state.length ? 0 : state.value + 1;
    },
    prevSlide(state) {
      state.value = state.value - 1 < 0 ? state.length : state.value - 1;
    },
    dotSlice(state, action) {
      state.value = action.payload;
    },
  },
});
export const { nextSlide, prevSlide, dotSlice } = SliderSlice.actions;

export default SliderSlice.reducer;
