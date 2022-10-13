import { ComponentMeta } from "@storybook/react";
import { GlobalContextProvider } from "../../contexts/GlobalContext";
import { MemoryRouter } from "react-router-dom";
import Customer from "./Customer";

export default {
  title: "Pages/Customer",
  component: Customer,
} as ComponentMeta<typeof Customer>;

export const Default = () => {
  return (
    <GlobalContextProvider>
      <MemoryRouter>
        <Customer />
      </MemoryRouter>
    </GlobalContextProvider>
  );
};
