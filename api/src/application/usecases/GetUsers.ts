import { User } from "../../domain/entities/User";
import { UserExternalApi } from "../../interface/gateways/UserExternalApi";
import { IUserExternalApi } from "../gateways/IUserExternalApi";

export class GetUsers {
  private _UserExternalApi: IUserExternalApi;

  constructor() {
    this._UserExternalApi = new UserExternalApi();
  }
  public async getUsers(): Promise<User[]> {
    console.log(this.testMethod());
    return [
      new User(1, "User1", "user1@test.local"),
      new User(2, "User2", "user2@test.local"),
      new User(3, "User3", "user3@test.local"),
    ]
    // return await this._UserExternalApi.getUsers();
  }
  private testMethod(): string {
    return "abc";
  }
}
