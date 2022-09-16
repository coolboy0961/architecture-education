import Database from "better-sqlite3";
import { IDBClient } from "../interface/gateways/IDBClient";

export class DBClient implements IDBClient {
  private dbInstance: Database.Database;
  constructor() {
    this.dbInstance = new Database(process.env.DB_FILE_PATH!, { verbose: console.log });
  }

  select(query: string) {
    return this.dbInstance.prepare(query).all();
  }
  execute(query: string) {
    return this.dbInstance.prepare(query).run();
  }
}
