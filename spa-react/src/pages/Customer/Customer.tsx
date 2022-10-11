import React, { useState } from "react";
import { bff } from "../../utils/bff";

export default function Customer() {
  // Data Model
  // Data Binding
  const [postcode, setPostcode] = useState("");
  const [address1, setAddress1] = useState("");
  // Event Method
  function onChangePostcode(event: any) {
    setPostcode(event.target.value);
  }
  function onChangeAddress1(event: any) {
    setAddress1(event.target.value);
  }
  async function onClickAddressInput(event: any) {
    const response = await bff.getAddress(postcode);
    const address = response.address;
    setAddress1(address);
  }
  // HTML
  return (
    <>
      <h1>顧客情報入力画面</h1>
      <label>
        氏名：
        <input type="text" data-testid="name-input-text"></input>
      </label>
      <br />
      <label>
        性別：
        <select data-testid="sex-pull-down-list">
          <option value="">---</option>
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
      </label>
      <div>
        <span>住所</span>
        <br />
        <label>
          郵便番号：
          <input
            type="text"
            data-testid="postcode-input-text"
            value={postcode}
            onChange={onChangePostcode}
          />
        </label>
        <button onClick={onClickAddressInput}>住所入力</button>
        <br />
        <label>
          住所1：
          <input
            type="text"
            data-testid="address1-input-text"
            value={address1}
            onChange={onChangeAddress1}
          />
        </label>
        <br />
        <label>
          住所2：
          <input type="text" data-testid="address2-input-text" />
        </label>
      </div>
      <br />
      <button>次へ</button>
    </>
  );
}
