import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { selectProduct } from "../../store/features/store";

export default function ProductSelect() {
  // Data Model
  const products: product[] = [
    {
      code: "product1",
      name: "商品1",
    },
    {
      code: "product2",
      name: "商品2",
    },
  ];

  // Data Binding
  const dispatch = useDispatch();
  const selectedProductFromState = useSelector((state: RootState) => {
    console.log("useSelector is called.", JSON.stringify(state));
    return state.store.pages.productSelectPage.selectedProductCode;
  });
  const [selectedProduct, setSelectedProduct] = useState(
    selectedProductFromState
  );

  // Event Method
  function onChangeProduct(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedProduct(event.target.value);
  }
  function onClickToNextPage() {
    // Storeへデータを反映するタイミングをボタンクリック時に指定
    console.log("onClickToNextPage is called.")
    dispatch(selectProduct(selectedProduct));
  }

  // HTML
  return (
    <>
      <h1>商品選択画面</h1>
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
      <button onClick={onClickToNextPage}>次へ</button>
    </>
  );
}

type product = {
  code: string;
  name: string;
};
