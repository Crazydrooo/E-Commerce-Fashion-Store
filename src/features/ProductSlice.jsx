import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/DummyData";
const ProductSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filterData")) || storeData,
    singleProducts:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    error: false,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        state.error = false;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filterData", saveState);
      } catch (error) {
        return error;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProducts = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveState);
      } catch (error) {
        return error;
      }
    },
    filterBySize(state, action) {
      try {
        const size = state.filteredProducts.filter((product) =>
          product.size.includes(action.payload)
        );

        if (size.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = size;
          const saveState = JSON.stringify(size);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (error) {
        return error;
      }
    },

    filterByColor(state, action) {
      try {
        const filteredByColor = storeData.filter((product) =>
          product.color.some((color) => color === action.payload)
        );
        state.error = false;

        state.filteredProducts = filteredByColor;
        sessionStorage.setItem("filterData", JSON.stringify(filteredByColor));
      } catch (error) {
        console.error("Error in filterByColor:", error);
      }
    },

    filterGender(state, action) {
      try {
        const getGender = storeData.filter(
          (product) => product.gender === action.payload
        );
        state.error = false;

        if (getGender.length > 0) {
          state.error = false;

          state.filteredProducts = getGender;
          const saveState = JSON.stringify(getGender);
          sessionStorage.setItem("filterData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    sortByPrice(state, action) {
      try {
        const sortedProducts = state.filteredProducts
          .slice()
          .sort((a, b) => b.amount - a.amount);

        state.filteredProducts = sortedProducts;

        if (sortedProducts.length > 1) {
          const saveState = JSON.stringify(sortedProducts);
          sessionStorage.setItem("filterData", saveState);

          state.error = false;
        } else {
          state.filteredProducts = [];
          state.error = true;
        }
      } catch (error) {
        state.error = true;
        state.filteredProducts = [];
      }
    },
  },
});

export const {
  filterProducts,
  singleProduct,
  filterByColor,
  filterGender,
  filterBySize,
  sortByPrice,
} = ProductSlice.actions;
export default ProductSlice.reducer;
