import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { HttpClient } from "../../../src/infrastructure/HttpClient";

const axiosMock = new MockAdapter(axios);
describe("HttpClient Tests", () => {
  beforeEach(() => {
    // axiosMockに登録したMockをクリア
    axiosMock.reset();
  });
  test("axios get", async () => {
    // Arrange
    const expected = {
      name: "testName",
      age: 38,
    };
    axiosMock.onGet("/test").reply(200, {
      name: "testName",
      age: 38,
    });

    // Act
    const target = new HttpClient();
    const actual = await target.get("/test");
    // Assert
    expect(actual).toEqual(expected);
  });
});
