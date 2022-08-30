import { UserController } from "../../../src/interfaces/controllers/UserController";

describe("UserController Tests", () => {
  test("normal case", () => {
    // Arrange
    const expected = JSON.stringify([
      { id: 1, name: "User1", email: "user1@test.local" },
      { id: 2, name: "User2", email: "user2@test.local" },
      { id: 3, name: "User3", email: "user3@test.local" },
    ]);
    // Act
    const target = new UserController();
    const actual = target.get({} as any);
    // Assert
    expect(actual).toBe(expected);
  });
});
