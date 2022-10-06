import { configureStore } from "@reduxjs/toolkit";
import { RootState } from "../store";
import storeReducer from "../store/features/store";
import StoreFixture from "./fixture";

export default class TestUtils {
  static sleep(ms: number) {
    return new Promise((reslove) => {
      setTimeout(() => reslove, ms);
    });
  }

  static createTestStore(mockState?: RootState) {
    if(!mockState) {
      mockState = StoreFixture.initialState();
    }
    return configureStore({
      reducer: {
        store: storeReducer,
      },
      preloadedState: mockState,
    });
  }
}
