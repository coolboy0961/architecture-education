import { DBClient } from "../../../src/infrastructure/DBClient";
import { DBHelper } from "../../helper/DBHelper";

describe("DBClient Tests", () => {
  beforeEach(() => {
    DBHelper.setUpDB();
  });

  afterEach(() => {
    DBHelper.tearDownDB();
  });

  test("normal case", () => {
    // Arrange

    const expected = [
      {
        id: 1,
        firstName: "Jiadong",
        lastName: "Chen",
        age: 38,
        email: "jiadchen@redhat.com",
      },
    ];
    DBHelper.execute(`INSERT INTO users (
        id,
        firstName,
        lastName,
        age,
        email
      )
      VALUES (
        1,
        'Jiadong',
        'Chen',
        38,
        'jiadchen@redhat.com'
      )`);

    // Act
    const target = new DBClient();
    const actual = target.select("SELECT * FROM users");

    // Assert
    expect(actual).toEqual(expected);
  });
});
