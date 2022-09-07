# README
Table of Contents
- [README](#readme)
  - [サンプルアプリの全体像](#サンプルアプリの全体像)
  - [プロジェクト構成](#プロジェクト構成)
  - [サンプルアプリの実行、テスト方法](#サンプルアプリの実行テスト方法)
    - [api](#api)
      - [実行準備](#実行準備)
      - [UT 実行方法](#ut-実行方法)
      - [Server 実行方法](#server-実行方法)
      - [動作確認方法](#動作確認方法)
    - [external-api-mock](#external-api-mock)
      - [実行準備](#実行準備-1)
      - [Server 実行方法](#server-実行方法-1)

## サンプルアプリの全体像
![](asset/README.md_2022-09-07-14-50-51.png)

## プロジェクト構成
| プロジェクト      | 概要                                                  |
| ----------------- | ----------------------------------------------------- |
| api               | API のアプリケーションプロジェクト                    |
| external-api-mock | API からさらに外部の API を想定した Mock プロジェクト |

## サンプルアプリの実行、テスト方法

### api

express をベースとして API Server です。  
Clean Architecture のサンプル実装となります。

#### 実行準備

```
cd api
npm ci
```

#### UT 実行方法

```
npm run test
```

#### Server 実行方法

```
npm run start
```

#### 動作確認方法

※下記を実行する前に、external-api-mock を実行してください。

```
curl localhost:3000/api/users
[{"id":1,"name":"User1","email":"user1@test.local"},{"id":2,"name":"User2","email":"user2@test.local"},{"id":3,"name":"User3","email":"user3@test.local"}]
```

### external-api-mock

api から呼び出す外部 API の Mock Server です。

#### 実行準備

```
cd api
npm ci
```

#### Server 実行方法

```
npm run start
```
