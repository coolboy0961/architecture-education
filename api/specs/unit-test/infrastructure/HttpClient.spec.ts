import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { HttpClient } from "../../../src/infrastructure/HttpClient";
import { ErrorCodes } from "../../../src/exception/ErrorCodes";

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

  test("error case", async () => {
    // Arrange
    const details = JSON.stringify({
      name: "Error",
      message: "Request failed with status code 404",
    });
    const expected = ErrorCodes.SMP000002(details);

    // Act
    const target = new HttpClient();
    try {
      await target.get("/test");
    } catch (error: any) {
      // Assert
      expect(error).toEqual(expected);
      expect(error.details).toEqual(expected.details);
    }
  });
});
