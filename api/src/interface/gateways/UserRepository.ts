import { IUserRepository } from "../../application/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { HttpClient } from "../../infrastructure/HttpClient";
import { IHttpClient } from "./IHttpClient";

export class UserRepository implements IUserRepository {
  private _httpClient: IHttpClient;

  constructor() {
    this._httpClient = new HttpClient();
  }

  async getUsers(): Promise<User[]> {
    const usersFromExternalApi: UsersExternalApiResponse =
      await this._httpClient.get("/users");
    const users: User[] = [];
    for (const userFromExternalApi of usersFromExternalApi.users) {
      users.push(this.toUser(userFromExternalApi));
    }
    return users;
  }

  toUser(userExternalApiResponse: UserExternalApiResponse): User {
    return new User(
      userExternalApiResponse.user_id,
      userExternalApiResponse.user_name,
      userExternalApiResponse.user_email
    );
  }
}

type UsersExternalApiResponse = {
  users: UserExternalApiResponse[];
};

type UserExternalApiResponse = {
  user_id: number;
  user_name: string;
  user_email: string;
};
