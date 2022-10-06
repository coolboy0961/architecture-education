import React, { useState } from "react";
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
  const [selectedProduct, setSelectProduct] = useState(
    selectedProductFromState
  );

  // Event Method
  function onChangeProduct(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectProduct(event.target.value);
    dispatch(selectProduct(event.target.value));
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <label key={product.name}>
            <input
              type="radio"
              value={product.code}
              checked={selectedProduct === product.code}
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
