import reducer, { selectProduct } from "../../store/features/store";
import StoreFixture from "../../test-utils/fixture";

describe("store unit tests", () => {
  test("初期ステータスが正しいこと", () => {
    // Arrange
    const expected = StoreFixture.initialState().store;

    // Act
    const actual = reducer(undefined, { type: undefined });

    // Assert
    expect(actual).toEqual(expected);
  });

  test("selectProductが正しく動くこと", () => {
    // Arrange
    const expected = StoreFixture.initialState().store;
    expected.pages.productSelectPage.selectedProductCode = "product2";

    // Act
    const actual = reducer(StoreFixture.initialState().store, selectProduct("product2"));

    // Assert
    expect(actual).toEqual(expected);
  })
});
