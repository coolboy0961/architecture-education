import { ComponentMeta } from "@storybook/react";
import { GlobalContextProvider } from "../../contexts/GlobalContext";
import { MemoryRouter } from "react-router-dom";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Customer from "./Customer";
import MockAdapter from "axios-mock-adapter/types";
import AxiosMock from "../../test-utils/AxiosMock";

export default {
  title: "Pages/Customer",
  component: Customer,
} as ComponentMeta<typeof Customer>;

const DefaultDOM = (mock: (axiosMock: MockAdapter) => void) => (
  <GlobalContextProvider>
    <MemoryRouter>
      <AxiosMock mock={mock}>
        <Customer />
      </AxiosMock>
    </MemoryRouter>
  </GlobalContextProvider>
);

export const Default = () => {
  const mock = (axiosMock: MockAdapter) => {
    axiosMock.onGet("/api/v1/address?postcode=1840015").reply(200, {
      address: "東京都XXXXXX5",
    });
  };
  return DefaultDOM(mock);
};

export const FilledForm = () => {
  const mock = (axiosMock: MockAdapter) => {
    axiosMock.onGet("/api/v1/address?postcode=1840014").reply(200, {
      address: "東京都XXXXXX4",
    });
  };
  return DefaultDOM(mock);
};
FilledForm.play = async ({ canvasElement }: any) => {
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