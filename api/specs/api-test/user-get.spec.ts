import { HttpHelper } from "../helper/HttpHelper";
import { MockHelper } from "../helper/MockHelper";

describe("user get api tests", () => {
  beforeAll((done) => {
    MockHelper.start(done);
  });

  afterAll((done) => {
    MockHelper.stop(done)
  });

  beforeEach(() => {
    MockHelper.ResetMock();
  })

  test("normal case", async () => {
    // Arrange
    const expected = [
      { id: 1, name: "User1", email: "user1@test.local" },
      { id: 2, name: "User2", email: "user2@test.local" },
      { id: 3, name: "User3", email: "user3@test.local" },
    ];
    MockHelper.MockOn({
        method: "GET",
        path: "/api/users",
        filter: (req) => {
          console.log("/api/users is called.");
          return true;
        },
        reply: {
          status: 200,
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            users: [
              { user_id: 1, user_name: "User1", user_email: "user1@test.local" },
              { user_id: 2, user_name: "User2", user_email: "user2@test.local" },
              { user_id: 3, user_name: "User3", user_email: "user3@test.local" },
            ],
          }),
        },
      }
    );
    // Act
    const actual = await HttpHelper.get("v1/users");

    // Assert
    expect(actual).toEqual(expected);
  });
});
