import React from 'react';
import { render, screen } from "@testing-library/react";
import ProductSelect from "./ProductSelect";

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
});
