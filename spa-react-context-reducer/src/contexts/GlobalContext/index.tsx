import { createContext, useContext, useReducer } from "react";
import { globalReducer } from "./reducers";
import StoreUtils from "./StoreUtils";

export type GlobalContextType = {
  store: Store;
  selectProduct: (productCode: string) => void;
};

const GlobalContext = createContext<GlobalContextType>({
  store: StoreUtils.initStore(),
  selectProduct: () => {},
});

export const useGlobalContext = (): GlobalContextType =>
  useContext<GlobalContextType>(GlobalContext);

interface GlobalContextProviderProps {
  children?: React.ReactNode;
}

/**
 * Test only!!
 * Test時に現状の状態を取得する
 */
export let currentStore: Store;
export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [store, dispatch] = useReducer(globalReducer, StoreUtils.initStore());
  currentStore = store;
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
