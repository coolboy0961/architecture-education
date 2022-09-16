import Database from "better-sqlite3";
const npm = require("npm-commands");

export class DBHelper {
  private static dbInstance: Database.Database;

  /**
   * データベース初期化
   */
  public static setUpDB() {
    DBHelper.dbInstance = new Database("./specs/helper/testdb", { verbose: console.log });
    DBHelper.dbInstance.prepare(`
      CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY, 
        firstName TEXT, 
        lastName TEXT, 
        age INTEGER, 
        email TEXT)`).run();
  }

  /**
   * データベースクリア
   */
  public static tearDownDB() {
    DBHelper.dbInstance.close();
    npm().arguments(false).run("rm:testdb");
  }

  /**
   * 更新系処理
   * @param query クエリ文
   * @returns クエリ実行結果
   */
  public static execute(query: string): any {
    return DBHelper.dbInstance.prepare(query).run();
  }

  /**
   * 検索系処理
   * @param query クエリ文
   * @returns 検索結果
   */
  public static select(query: string): any {
    return DBHelper.dbInstance.prepare(query).all();
  }
}