import React from "react";
import { render, screen } from "@testing-library/react";
import Customer from "./Customer";

describe("顧客情報入力ページのテスト", () => {
  describe("初期表示の要素存在確認", () => {
    test("タイトルが表示されること", () => {
      // Arrange
      const expected = "顧客情報入力画面";

      // Act
      render(<Customer />);
      const actual = screen.getByRole("heading", {
        name: "顧客情報入力画面",
      }).textContent;

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
