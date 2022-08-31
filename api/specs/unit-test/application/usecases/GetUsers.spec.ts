import { GetUsers } from "../../../../src/application/usecases/GetUsers";
import { User } from "../../../../src/domain/entities/User";
import { UserExternalApi } from "../../../../src/interface/gateways/UserExternalApi";

describe("GetUsers Usecase Tests", () => {
  test("Normal Case", async () => {
    // Arrange
    const expected: User[] = [
      new User(1, "User1", "user1@test.local"),
      new User(2, "User2", "user2@test.local"),
      new User(3, "User3", "user3@test.local"),
    ];
    const UserExternalApiMock = jest
      .spyOn(UserExternalApi.prototype, "getUsers")
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
    expect(UserExternalApiMock).toHaveBeenCalledTimes(1);
  });
});
