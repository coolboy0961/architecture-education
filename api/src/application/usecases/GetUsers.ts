import { v4 as uuidv4 } from "uuid";
import { User } from "../../domain/entities/User";
import { UserExternalApi } from "../../interface/gateways/UserExternalApi";
import { IUserExternalApi } from "../gateways/IUserExternalApi";
import { Time } from "../../utils/Time";

export class GetUsers {
  private _UserExternalApi: IUserExternalApi;

  constructor() {
    this._UserExternalApi = new UserExternalApi();
  }
  public async getUsers(): Promise<User[]> {
    return await this._UserExternalApi.getUsers();
  }

  public callPrivateMethod() {
    return this.privateMethod();
  }

  private privateMethod() {
    return "aaa";
  }

  public getUUID() {
    return uuidv4();
  }

  public getTime() {
    return Time.getTime();
  }
}
