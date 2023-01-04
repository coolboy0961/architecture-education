import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { User } from "../../../../src/domain/entities/User";
import { UserExternalApi } from "../../../../src/interface/gateways/UserExternalApi";

const axiosMock = new MockAdapter(axios);
describe("UserExternalApi Tests", () => {
  beforeEach(() => {
    // axiosMockに登録したMockをクリア
    axiosMock.reset();
  });
  test("Normal Case", async () => {
    // Arrange
    const expected: User[] = [
      new User(1, "User1", "user1@test.local"),
      new User(2, "User2", "user2@test.local"),
      new User(3, "User3", "user3@test.local"),
    ];
    axiosMock.onGet("/users").reply(200, {
      users: [
        { user_id: 1, user_name: "User1", user_email: "user1@test.local" },
        { user_id: 2, user_name: "User2", user_email: "user2@test.local" },
        { user_id: 3, user_name: "User3", user_email: "user3@test.local" },
      ]
    });

    // Act
    const target = new UserExternalApi();
    const actual = await target.getUsers();

    // Assert
    expect(actual).toEqual(expected);
  });
});
