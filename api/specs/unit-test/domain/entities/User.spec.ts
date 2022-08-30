import { User } from "../../../../src/domain/entities/User";

describe("User Tests", () => {
  test("それぞれの属性を正しく取得できること", () => {
    // Arrange
    const expectedId = 1;
    const expectedName = "Jiadong Chen";
    const expectedEmail = "jiadchen@redhat.com";

    // Act
    const target = new User(1, "Jiadong Chen", "jiadchen@redhat.com");
    const actualId = target.id;
    const actualName = target.name;
    const actualEmail = target.email;
    // Assert
    expect(actualId).toBe(expectedId);
    expect(actualName).toBe(expectedName);
    expect(actualEmail).toBe(expectedEmail);
  });
});