import { GetUsers } from "../../../../src/application/usecases/GetUsers";
import { User } from "../../../../src/domain/entities/User";
import { UserRepository } from "../../../../src/interface/gateways/UserRepository";

describe("GetUsers Usecase Tests", () => {
  test("Normal Case", async () => {
    // Arrange
    const expected: User[] = [
      new User(1, "User1", "user1@test.local"),
      new User(2, "User2", "user2@test.local"),
      new User(3, "User3", "user3@test.local"),
    ];
    const userRepositoryMock = jest
      .spyOn(UserRepository.prototype, "getUsers")
      .mockResolvedValue([
        new User(1, "User1", "user1@test.local"),
        new User(2, "User2", "user2@test.local"),
        new User(3, "User3", "user3@test.local"),
      ]);

    // Act
    const target = new GetUsers();
    const actual = await target.getUsers();

    // Assert
    expect(actual).toEqual(expected);
    expect(userRepositoryMock).toHaveBeenCalledTimes(1);
  });
});
