// jest.mockに代入するjest.fnを一番上で宣言しないとエラーになる
const mockV4 = jest.fn();

import { GetUsers } from "../../../../src/application/usecases/GetUsers";
import { User } from "../../../../src/domain/entities/User";
import { UserExternalApi } from "../../../../src/interface/gateways/UserExternalApi";
import { Time } from "../../../../src/utils/Time";

// Mock library
// ライブラリのMockはimportの後に続く必要がある
jest.mock("uuid", () => {
  return {
    v4: mockV4
  };
});

// Mock Class method
jest.mock("../../../../src/utils/Time");

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

  test("test mock private method", () => {
    // Arrange
    const expected = "bbb";
    jest
      .spyOn(GetUsers.prototype as any, "privateMethod")
      .mockReturnValue("bbb");

    // Act
    const target = new GetUsers();
    const actual = target.callPrivateMethod();

    // Assert
    expect(actual).toBe(expected);
  });

  test("test mock library", () => {
    // Arrange
    const expected = "mock-uuid";
    mockV4.mockReturnValue("mock-uuid");

    // Act
    const target = new GetUsers();
    const actual = target.getUUID();

    // Assert
    expect(actual).toBe(expected);
  });

  test("test mock class method", () => {
    // Arrange
    const expected = "mock-date";
    Time.getTime = () => {
      return "mock-date";
    };

    // Act
    const target = new GetUsers();
    const actual = target.getTime();

    // Assert
    expect(actual).toBe(expected);
  });
});
