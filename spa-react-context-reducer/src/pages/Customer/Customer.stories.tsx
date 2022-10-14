import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GlobalContextProvider } from "../../contexts/GlobalContext";
import { MemoryRouter } from "react-router-dom";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Customer from "./Customer";
import MockAdapter from "axios-mock-adapter/types";
import AxiosMock from "../../test-utils/AxiosMock";

export default {
  title: "Pages/Customer",
  component: Customer,
} as ComponentMeta<typeof Customer>;

const TemplateWithMock = (mock: (axiosMock: MockAdapter) => void) => (
  <GlobalContextProvider>
    <MemoryRouter>
      <AxiosMock mock={mock}>
        <Customer />
      </AxiosMock>
    </MemoryRouter>
  </GlobalContextProvider>
);

const Template = () => (
  <GlobalContextProvider>
    <MemoryRouter>
      <Customer />
    </MemoryRouter>
  </GlobalContextProvider>
);

export const Default: ComponentStory<typeof Customer> = () => {
  const mock = (axiosMock: MockAdapter) => {
    axiosMock.onGet("/api/v1/address?postcode=1840015").reply(200, {
      address: "東京都XXXXXX",
    });
  };
  return TemplateWithMock(mock);
};
Default.storyName = "Customerページの手動動作確認";

export const FilledName: ComponentStory<typeof Customer> = () => {
  return Template();
};
FilledName.storyName =
  "氏名の入力欄に入力したデータはvalueにBindingされていること";
FilledName.play = async ({ canvasElement }: any) => {
  // Arrange
  const expected = "React太郎";

  // Act
  const canvas = within(canvasElement);
  const nameInputElement = canvas.getByTestId("name-input-text");
  userEvent.type(nameInputElement, expected);
  const actual = nameInputElement.getAttribute("value");

  // Assert
  expect(actual).toBe(expected);
};

export const AutoFilledAddress1: ComponentStory<typeof Customer> = () => {
  const mock = (axiosMock: MockAdapter) => {
    axiosMock.onGet("/api/v1/address?postcode=1840015").reply(200, {
      address: "東京都XXXXXX",
    });
  };
  return TemplateWithMock(mock);
};
AutoFilledAddress1.storyName =
  "郵便番号を入れて、チェックボタンをクリックすると、住所が「住所1」に入ること";
AutoFilledAddress1.play = async ({ canvasElement }: any) => {
  // Arrange
  const expected = "東京都XXXXXX";

  // Act
  const canvas = within(canvasElement);
  const postcodeInputElement = canvas.getByTestId("postcode-input-text");
  userEvent.type(postcodeInputElement, "1840015");
  const addressInputButtonElement = canvas.getByRole("button", {
    name: "住所入力",
  });
  userEvent.click(addressInputButtonElement);

  await waitFor(() => {
    const actual = canvas
      .getByTestId("address1-input-text")
      .getAttribute("value");
    // Assert
    expect(actual).toBe(expected);
  });
};
