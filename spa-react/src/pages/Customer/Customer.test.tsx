import React from "react";
import { render, screen } from "@testing-library/react";
import Customer from "./Customer";

describe("顧客情報入力ページのテスト", () => {
  describe("初期表示の要素存在確認", () => {
    test("タイトルが表示されること", () => {
      // Arrange

      // Act
      render(<Customer />);
      const actual = screen.getByRole("heading", {
        name: "顧客情報入力画面",
      });

      // Assert
      expect(actual).toBeInTheDocument();
    });
    test("氏名の入力欄とラベルが存在すること", () => {
      // Arrange

      // Act
      render(<Customer />);
      const actualNameInputElement = screen.getByTestId("name-input-text");
      const actualNameLabelElement = screen.getByLabelText("氏名：");

      // Assert
      expect(actualNameInputElement).toBeInTheDocument();
      expect(actualNameLabelElement).toBeInTheDocument();
    });
    test("性別のプルダウンリストが存在して、「---」、「男」、「女」が入っていること", () => {
      // Arrange

      // Act
      render(<Customer />);
      const actualSexLabelElement = screen.getByLabelText("性別：");
      const actualSexSelectElement = screen.getByTestId("sex-pull-down-list");
      const actualSexDefaultOptionElement = screen.getByRole("option", {
        name: "---",
      });
      const actualSexMaleOptionElement = screen.getByRole("option", {
        name: "男",
      });
      const actualSexFemaleOptionElement = screen.getByRole("option", {
        name: "女",
      });

      // Assert
      expect(actualSexLabelElement).toBeInTheDocument();
      expect(actualSexSelectElement).toBeInTheDocument();
      expect(actualSexDefaultOptionElement).toBeInTheDocument();
      expect(actualSexMaleOptionElement).toBeInTheDocument();
      expect(actualSexFemaleOptionElement).toBeInTheDocument();
    });
    test("住所情報を入力する要素が存在すること", () => {
      // Arrange

      // Act
      render(<Customer />);
      const addressLabelElement = screen.getByText("住所");
      const postcodeLabelElement = screen.getByLabelText("郵便番号：");
      const postcodeInputElement = screen.getByTestId("postcode-input-text");
      const postcodeCheckButtonElement = screen.getByRole("button", {
        name: "チェック",
      });
      const address1LabelElement = screen.getByLabelText("住所1：");
      const address1InputElement = screen.getByTestId("address1-input-text");
      const address2LabelElement = screen.getByLabelText("住所2：");
      const address2InputElement = screen.getByTestId("address2-input-text");

      // Assert
      expect(addressLabelElement).toBeInTheDocument();
      expect(postcodeLabelElement).toBeInTheDocument();
      expect(postcodeInputElement).toBeInTheDocument();
      expect(postcodeCheckButtonElement).toBeInTheDocument();
      expect(address1LabelElement).toBeInTheDocument();
      expect(address1InputElement).toBeInTheDocument();
      expect(address2LabelElement).toBeInTheDocument();
      expect(address2InputElement).toBeInTheDocument();
    });
    test("次へボタンが存在すること", () => {
      // Arrange

      // Act
      render(<Customer />);
      const nextButtonElement = screen.getByRole("button", {
        name: "次へ",
      });

      // Assert
      expect(nextButtonElement).toBeInTheDocument();
    });
  });
  describe("動的機能のテスト", () => {
    test("郵便番号を入れて、チェックボタンをクリックすると、住所が「住所1」に入ること", () => {
      // Arrange

      // Act

      // Assert
    })
    test("次へボタンをクリックすると、入力された情報がStoreに保存されること", () => {
      // Arrange

      // Act

      // Assert
    })
  })
});
