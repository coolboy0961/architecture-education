import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Products from "./Products";
import { GlobalContextProvider } from "../contexts/GlobalContext";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Products",
  component: Products,
} as ComponentMeta<typeof Products>;

const Template: ComponentStory<typeof Products> = (args) => (
  <GlobalContextProvider>
    <Products {...args} />
  </GlobalContextProvider>
);

export const SingleProduct = Template.bind({});
SingleProduct.args = {
  products: [
    {
      code: "product1",
      name: "商品1",
    },
  ],
};

export const TwoProducts = Template.bind({});
TwoProducts.args = {
  products: [
    {
      code: "product1",
      name: "商品1",
    },
    {
      code: "product2",
      name: "商品2",
    },
  ],
};

export const ThreeProducts = Template.bind({});
ThreeProducts.args = {
  products: [
    {
      code: "product1",
      name: "商品1",
    },
    {
      code: "product2",
      name: "商品2",
    },
    {
      code: "product3",
      name: "商品3",
    },
  ],
};