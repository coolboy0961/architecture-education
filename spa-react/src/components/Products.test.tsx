import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import TestUtils from "../test-utils/utils";
import Products from "./Products";
import { EnhancedStore } from "@reduxjs/toolkit/dist/configureStore";
import StoreFixture from "../test-utils/fixture";

describe("Products Componentのテスト", () => {
  let store: EnhancedStore;
  beforeEach(() => {
    store = TestUtils.createTestStore();
  });
  describe("初期表示の要素存在確認", () => {
    test("初期ステータスでproduct1が選択されている", () => {
      // Arrange

      // Act
      render(
        <Provider store={store}>
          <Products products={[]} />
        </Provider>
      );
      const actualProduct1Element = screen.getByRole("radio", {
        name: "商品1",
      });

      // Assert
      expect(actualProduct1Element).toBeChecked();
    });

    test("product2が選択されているステータスの場合、画面上もproduct2が選択されている", () => {
      // Arrange
      store = TestUtils.createTestStore(StoreFixture.product2SelectedState());

      // Act
      render(
        <Provider store={store}>
          <Products products={[]} />
        </Provider>
      );
      const actualProduct1Element = screen.getByRole("radio", {
        name: "商品2",
      });

      // Assert
      expect(actualProduct1Element).toBeChecked();
    });

    test("propsのproductsごとにradioが生成されること", () => {
      // Arrange
      const products = [
        {
          code: "product1",
          name: "商品1",
        },
        {
          code: "product2",
          name: "商品2",
        },
        {
          code: "product3",
          name: "商品3",
        },
      ];

      // Act
      render(
        <Provider store={store}>
          <Products products={products} />
        </Provider>
      );
      const actualProduct1Element = screen.getByRole("radio", {
        name: "商品1",
      });
      const actualProduct2Element = screen.getByRole("radio", {
        name: "商品2",
      });
      const actualProduct3Element = screen.getByRole("radio", {
        name: "商品3",
      });

      // Assert
      expect(actualProduct1Element).toBeInTheDocument();
      expect(actualProduct2Element).toBeInTheDocument();
      expect(actualProduct3Element).toBeInTheDocument();
    });
  });

  describe("動的機能のテスト", () => {
    test("商品1と商品2をそれぞれ選択できること", () => {
      // Arrange

      // Act
      render(
        <Provider store={store}>
          <Products products={[]} />
        </Provider>
      );
      const product1Element = screen.getByRole("radio", {
        name: "商品1",
      });
      const product2Element = screen.getByRole("radio", {
        name: "商品2",
      });
      userEvent.click(product2Element);
      // Assert
      expect(product1Element).not.toBeChecked();
      expect(product2Element).toBeChecked();
    });
  });
});
