import { GetUsers } from "../../../../src/application/usecases/GetUsers";
import { User } from "../../../../src/domain/entities/User";

describe("GetUsers Usecase Tests", () => {
  test("Normal Case", () => {
    // Arrange
    const expected: User[] = [
      new User(1, "User1", "user1@test.local"),
      new User(2, "User2", "user2@test.local"),
      new User(3, "User3", "user3@test.local"),
    ];

    // Act
    const target = new GetUsers();
    const actual = target.getUsers();

    // Assert
    expect(actual).toEqual(expected);

  });
});