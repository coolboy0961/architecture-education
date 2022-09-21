import rewire from "rewire";

describe("Common Tests", () => {
  test("subMethod1 tests", () => {
    // Arrange
    const expected = {
      a: "a",
      b: "b",
    };

    // Act
    const target = rewire("../../../src/utils/Common1.ts");
    const subMethod1 = target.__get__("subMethod1");
    const actual = subMethod1();

    // Assert
    expect(actual).toEqual(expected);
  });

  test("mainMethod", () => {
    // Arrange
    const expected = {
      subMethod1: {
        x1: "x1",
        y1: "y1",
      },
      subMethod2: {
        x2: "x2",
        y2: "y2",
      },
      subMethod3: {
        x3: "x3",
        y3: "y3",
      },
    };
    const mockModule = rewire("../../../src/utils/Common1.ts");
    const mock1 = () => {
      return {
        x1: "x1",
        y1: "y1",
      };
    };
    const mock2 = () => {
      return {
        x2: "x2",
        y2: "y2",
      };
    };
    const mock3 = () => {
      return {
        x3: "x3",
        y3: "y3",
      };
    };
    mockModule.__set__("subMethod1", mock1);
    mockModule.__set__("subMethod2", mock2);
    mockModule.__set__("subMethod3", mock3);

    // Act
    const target = mockModule.__get__("mainMethod");
    const actual = target();

    // Assert
    expect(actual).toEqual(expected);
  });
});
