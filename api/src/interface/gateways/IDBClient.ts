export interface IDBClient {
    /**
   * 更新系処理
   * @param query クエリ文
   * @returns クエリ実行結果
   */
  execute(query: string): any;
    /**
   * 検索系処理
   * @param query クエリ文
   * @returns 検索結果
   */
  select(query: string): any;
}