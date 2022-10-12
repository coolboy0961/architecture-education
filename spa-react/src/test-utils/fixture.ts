import { RootState } from "../store";

export default class StoreFixture {
  /**
   * 初期状態のStateオブジェクトを返す
   * @returns 初期状態のState
   */
  static initialState(): RootState {
    return {
      store: {
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
      },
    };
  }

  static product2SelectedState(): RootState {
    return {
      store: {
        user: {
          name: "",
          address: "",
          age: 0,
        },
        pages: {
          productSelectPage: {
            selectedProductCode: "product2",
          },
        },
      },
    };
  }
}
