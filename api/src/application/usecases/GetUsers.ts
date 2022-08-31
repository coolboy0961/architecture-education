import { User } from "../../domain/entities/User";
import { UserExternalApi } from "../../interface/gateways/UserExternalApi";
import { IUserExternalApi } from "../external-apis/IUserExternalApi";

export class GetUsers {
  private _UserExternalApi: IUserExternalApi;

  constructor() {
    this._UserExternalApi = new UserExternalApi();
  }
  public async getUsers(): Promise<User[]> {
    return await this._UserExternalApi.getUsers();
  }
}
