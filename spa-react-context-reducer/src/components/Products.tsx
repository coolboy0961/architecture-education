import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { selectProduct } from "../store/features/store";

export default function Products(props: { products: Product[] }) {
  // Data Model
  let products: Product[] = [
    {
      code: "product1",
      name: "商品1",
    },
    {
      code: "product2",
      name: "商品2",
    },
  ];
  if (props.products.length > 0) {
    products = props.products;
  }

  // Data Binding
  const dispatch = useDispatch();
  const selectedProductFromState = useSelector((state: RootState) => {
    return state.store.pages.productSelectPage.selectedProductCode;
  });

  // Event Method
  function onChangeProduct(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(selectProduct(event.target.value));
  }

  // HTML
  return (
    <div>
      {products.map((product) => {
        return (
          <label key={product.name}>
            <input
              type="radio"
              value={product.code}
              checked={selectedProductFromState === product.code}
              onChange={onChangeProduct}
            />
            {product.name}
          </label>
        );
      })}
    </div>
  );
}

type Product = {
  code: string;
  name: string;
};
