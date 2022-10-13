import React from "react";

import { ComponentMeta } from "@storybook/react";
import ProductSelect from "./ProductSelect";
import { GlobalContextProvider } from "../../contexts/GlobalContext";
import { MemoryRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pages/ProductSelect",
  component: ProductSelect,
} as ComponentMeta<typeof ProductSelect>;

export const Normal = () => {
  return (
    <GlobalContextProvider>
      <MemoryRouter>
        <ProductSelect />
      </MemoryRouter>
    </GlobalContextProvider>
  );
};
