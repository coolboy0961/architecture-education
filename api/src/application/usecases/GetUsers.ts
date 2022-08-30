import { User } from "../../domain/entities/User";

export class GetUsers {
  public getUsers(): User[] {
    return [
      new User(1, "User1", "user1@test.local"),
      new User(2, "User2", "user2@test.local"),
      new User(3, "User3", "user3@test.local"),
    ];
  }
}
