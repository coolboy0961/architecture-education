import React from "react";

import { ComponentMeta } from "@storybook/react";
import { GlobalContextProvider } from "../../contexts/GlobalContext";
import { MemoryRouter } from "react-router-dom";
import Customer from "./Customer";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pages/Customer",
  component: Customer,
} as ComponentMeta<typeof Customer>;

export const Normal = () => {
  return (
    <GlobalContextProvider>
      <MemoryRouter>
        <Customer />
      </MemoryRouter>
    </GlobalContextProvider>
  );
};
