import React from "react";
import { ByRoleOptions, render, screen } from "@testing-library/react";
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
    test("氏名の入力欄とラベルが存在すること", () => {
      // Arrange
      const expectedNameTextBoxTestId = "name-input-text";
      const expectedNameLabelText = "氏名：";

      // Act
      render(<Customer />);
      const actualNameInputElement = screen.getByTestId(
        expectedNameTextBoxTestId
      );
      const actualNameLabelElement = screen.getByLabelText(
        expectedNameLabelText
      );

      // Assert
      expect(actualNameInputElement).toBeInTheDocument();
      expect(actualNameLabelElement).toBeInTheDocument();
    });
  });
});
