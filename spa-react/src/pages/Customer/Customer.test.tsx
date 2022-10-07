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
    test("性別のプルダウンリストが存在して、「---」、「男」、「女」が入っていること", () => {
      // Arrange
      const expectedSexLabel = "性別：";
      const expectedSexSelectTestId = "sex-pull-down-list";
      const expectedSexDefaultRole = {
        role: "option",
        option: {
          name: "---",
        } as ByRoleOptions,
      };
      const expectedSexMaleRole = {
        role: "option",
        option: {
          name: "男",
        } as ByRoleOptions,
      };

      const expectedSexFemaleRole = {
        role: "option",
        option: {
          name: "女",
        },
      };

      // Act
      render(<Customer />);
      const actualSexLabelElement = screen.getByLabelText(expectedSexLabel);
      const actualSexSelectElement = screen.getByTestId(expectedSexSelectTestId);
      const actualSexDefaultOptionElement = screen.getByRole(
        expectedSexDefaultRole.role,
        expectedSexDefaultRole.option
      );
      const actualSexMaleOptionElement = screen.getByRole(
        expectedSexMaleRole.role,
        expectedSexMaleRole.option
      );
      const actualSexFemaleOptionElement = screen.getByRole(
        expectedSexFemaleRole.role,
        expectedSexFemaleRole.option
      );

      // Assert
      expect(actualSexLabelElement).toBeInTheDocument();
      expect(actualSexSelectElement).toBeInTheDocument();
      expect(actualSexDefaultOptionElement).toBeInTheDocument();
      expect(actualSexMaleOptionElement).toBeInTheDocument();
      expect(actualSexFemaleOptionElement).toBeInTheDocument();
    });
  });
});
