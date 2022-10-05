import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductSelect from "./ProductSelect";

describe("商品選択ページのテスト", () => {
  describe("初期表示の要素存在確認", () => {
    test("商品選択画面のタイトルが表示されること", () => {
      // Arrange
      const expected = "商品選択画面";

      // Act
      render(<ProductSelect />);
      const actual = screen.getByRole("heading", {
        name: "商品選択画面",
      }).textContent;

      // Assert
      expect(actual).toBe(expected);
    });

    test("商品選択画面の選択オプションが表示されること", () => {
      // Arrange

      // Act
      render(<ProductSelect />);
      const actualProduct1Element = screen.getByRole("radio", {
        name: "商品1",
      });
      const actualProduct2Element = screen.getByRole("radio", {
        name: "商品2",
      });

      // Assert
      expect(actualProduct1Element).toBeInTheDocument();
      expect(actualProduct2Element).toBeInTheDocument();
      expect(actualProduct1Element).toBeChecked();
    });

    test("次へボタンが存在すること", () => {
      // Arrange

      // Act
      render(<ProductSelect />);
      const actualNextButton = screen.getByRole("button", {
        name: "次へ",
      });

      // Assert
      expect(actualNextButton).toBeInTheDocument();
    });
  });

  describe("動的機能のテスト", () => {
    test("商品1と商品2をそれぞれ選択できること", () => {
      // 商品1を選択できること

      // Arrange

      // Act
      render(<ProductSelect />);
      const product1Element = screen.getByRole("radio", {
        name: "商品1",
      });
      const product2Element = screen.getByRole("radio", {
        name: "商品2",
      });
      userEvent.click(product1Element);
      // Assert
      expect(product1Element).toBeChecked();

      // 商品2を選択すると、商品1の選択が外れること
      // Arrange
      // Act
      userEvent.click(product2Element);
      // Assert
      expect(product1Element).not.toBeChecked();
      expect(product2Element).toBeChecked();
    });

    test("次へのボタンをクリックすると、選択された商品コードがStoreに保存されること", () => {
      // Arrange

      // Act

      // Assert
    });
  });
});
