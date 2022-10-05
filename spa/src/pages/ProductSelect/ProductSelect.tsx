import React from "react";
import { useState } from "react"

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
    }
  ];

  // Data Binding
  const [selectedProduct, setSelectedProduct] = useState("product1");

  // Event Method
  function onChangeProduct(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedProduct(event.target.value);
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
      <button>次へ</button>
    </>
  );
}

type product = {
  code: string;
  name: string;
};
