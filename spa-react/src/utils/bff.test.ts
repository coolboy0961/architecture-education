import MockAdapter from "axios-mock-adapter";
import { bff } from "./bff";

const axiosMock = new MockAdapter((bff as any)._axiosInstance);

describe("bff utilのテスト", () => {
  beforeEach(() => {
    // axiosMockに登録したMockをクリア
    axiosMock.reset();
  });
  test("address apiから住所を取得できること", async () => {
    // Arrange
    axiosMock.onGet("/api/v1/address").reply(200, {
      address: "東京都XXXXXX",
    });
    const expected = "東京都XXXXXX";

    // Act
    const response = await bff.getAddress("1840015");
    const actual = response.address;

    // Assert
    expect(actual).toBe(expected);
  });
});
