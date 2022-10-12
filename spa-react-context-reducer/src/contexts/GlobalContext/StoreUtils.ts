import { Store } from ".";

export default class StoreUtils {
  static initStore() {
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
}