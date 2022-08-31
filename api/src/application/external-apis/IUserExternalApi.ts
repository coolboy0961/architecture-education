import { User } from "../../domain/entities/User";

export interface IUserExternalApi {
  getUsers(): Promise<User[]>;
}
