import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Router from "./router/Router";
import { GlobalContextProvider } from "./contexts/GlobalContext";

export default {
  title: "Pages/Index",
} as ComponentMeta<typeof GlobalContextProvider>;

export const Default: ComponentStory<typeof GlobalContextProvider> = () => {
  return (
    <GlobalContextProvider>
      <MemoryRouter initialEntries={["/"]}>
        <Router />
      </MemoryRouter>
    </GlobalContextProvider>
  );
};
