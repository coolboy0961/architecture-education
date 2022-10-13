import { Store } from "./types";

/**
 * 単体テストでこのメソッドをモックしてストアの初期状態を変更しやすいようにStoreUtilsというクラスを作った
 */
export default class StoreUtils {
  /**
   * 初期ストアのデータを作るためのメソッド
   * @returns 初期ストアのデータ
   */
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