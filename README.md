## README
### api
expressをベースとしてAPI Serverです。  
Clean Architectureのサンプル実装となります。

#### 実行準備
```
cd api
npm ci
```
#### UT実行方法
```
npm run test
```
#### Server実行方法
```
npm run start
```
#### 動作確認方法
※下記を実行する前に、external-api-mockを実行してください。
```
curl localhost:3000/api/users
[{"id":1,"name":"User1","email":"user1@test.local"},{"id":2,"name":"User2","email":"user2@test.local"},{"id":3,"name":"User3","email":"user3@test.local"}]
```
### external-api-mock
apiから呼び出す外部APIのMock Serverです。

#### 実行準備
```
cd api
npm ci
```
#### Server実行方法
```
npm run start
```