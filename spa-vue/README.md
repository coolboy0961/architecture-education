# vue2 project 作成方法
```
npx vue create vue2
cd vue2
npx vue add typescript
npx vue add unit-jest
npm install --save-dev ts-jest
```

add following setting to jest.conf.js
```
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "@vue/vue2-jest",
    // `ts-jest` で `*.ts` ファイルを処理します。
    "^.+\\.tsx?$": "ts-jest",
  },
```

add storybook to vue2
```
npx storybook init --type vue
```