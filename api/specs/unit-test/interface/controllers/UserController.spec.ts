import { GetUsers } from "../../../../src/application/usecases/GetUsers";
import { User } from "../../../../src/domain/entities/User";
import { ErrorCodes } from "../../../../src/exception/ErrorCodes";
import { ControllerResponse } from "../../../../src/infrastructure/ExpressInterfaceAdapter";
import { UserController } from "../../../../src/interface/controllers/UserController";

describe("UserController Tests", () => {
  test("normal case", async () => {
    // Arrange
    const expected: ControllerResponse = {
      status: 200,
      body: [
        { id: 1, name: "User1", email: "user1@test.local" },
        { id: 2, name: "User2", email: "user2@test.local" },
        { id: 3, name: "User3", email: "user3@test.local" },
      ],
    };
    jest.spyOn(GetUsers.prototype as any, "testMethod").mockReturnValue("bbb");

    // Act
    const target = new UserController();
    const actual = await target.get({} as any);
    // Assert
    expect(actual).toEqual(expected);
  });
});
