import { createSlice } from "@reduxjs/toolkit";
import { Store } from "../types";

const store = createSlice({
  name: "store",
  initialState: initStore(),
  reducers: {
    selectProduct(state, { type, payload }) {
      state.pages.productSelectPage.selectedProductCode = payload;
    },
  },
});

const { selectProduct } = store.actions;
export { selectProduct }
export default store.reducer;

function initStore() {
  return {
    user: {
      name: "",
      address: "",
      age: 0,
    },
    pages: {
      productSelectPage: {
        selectedProductCode: "product1",
      },
    },
  } as Store;
}
