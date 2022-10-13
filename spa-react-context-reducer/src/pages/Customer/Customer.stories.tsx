import { ComponentMeta } from "@storybook/react";
import { GlobalContextProvider } from "../../contexts/GlobalContext";
import { MemoryRouter } from "react-router-dom";
import Customer from "./Customer";
import MockAdapter from "axios-mock-adapter/types";
import AxiosMock from "../../test-utils/AxiosMock";

export default {
  title: "Pages/Customer",
  component: Customer,
} as ComponentMeta<typeof Customer>;

export const Default = () => {
  const mock = (axiosMock: MockAdapter) => {
    axiosMock.onGet("/api/v1/address?postcode=1840015").reply(200, {
      address: "東京都XXXXXX",
    });
  };
  return (
    <GlobalContextProvider>
      <MemoryRouter>
        <AxiosMock mock={mock}>
          <Customer />
        </AxiosMock>
      </MemoryRouter>
    </GlobalContextProvider>
  );
};
