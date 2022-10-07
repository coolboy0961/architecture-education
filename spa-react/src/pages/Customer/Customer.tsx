import React from "react";

export default function Customer() {
  // Data Model
  // Data Binding
  // Event Method
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
          <input type="text" data-testid="postcode-input-text" />
        </label>
        <button>チェック</button>
        <br />
        <label>
          住所1：
          <input type="text" data-testid="address1-input-text" />
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
