import { createContext, useContext, useReducer } from "react";
import { globalReducer } from "./reducers";

export type GlobalContextType = {
  store: Store;
  selectProduct: (productCode: string) => void;
};

const GlobalContext = createContext<GlobalContextType>({
  store: initStore(),
  selectProduct: () => {},
});

export const useGlobalContext = (): GlobalContextType =>
  useContext<GlobalContextType>(GlobalContext);

interface GlobalContextProviderProps {
  children?: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [store, dispatch] = useReducer(globalReducer, initStore());
  // 商品選択
  function selectProduct(productCode: string) {
    dispatch({
      type: "SELECT_PRODUCT",
      payload: productCode,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        store,
        selectProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function initStore() {
  return {
    user: {
      name: "",
      address: "",
      age: 0,
    },
    pages: {
      productSelectPage: {
        selectedProductCode: "product1",
      },
    },
  } as Store;
}

export type Store = {
  user: User;
  pages: Pages;
};

export type User = {
  name: string;
  age: number;
  address: string;
};

export type Pages = {
  productSelectPage: ProductSelectPage;
};

export type ProductSelectPage = {
  selectedProductCode: string;
};
