import { mainMethod, exportedForTesting } from "../../../src/utils/Common2";

describe("Common Tests", () => {
  test("subMethod1 tests", () => {
    // Arrange
    const expected = {
      a: "a",
      b: "b",
    };

    // Act
    const subMethod1 = exportedForTesting.subMethod1;
    const actual = subMethod1();

    // Assert
    expect(actual).toEqual(expected);
  });

  test("mainMethod", () => {
    // Arrange
    const expected = {
      subMethod1: {
        a: "x1",
        b: "y1",
      },
      subMethod2: {
        c: "x2",
        d: "y2",
      },
      subMethod3: {
        e: "x3",
        f: "y3",
      },
    };
    const subMethod1Mock = jest
      .spyOn(exportedForTesting, "subMethod1")
      .mockImplementation(() => {
        return {
          a: "x1",
          b: "y1",
        };
      });
    const subMethod2Mock = jest
      .spyOn(exportedForTesting, "subMethod2")
      .mockImplementation(() => {
        return {
          c: "x2",
          d: "y2",
        };
      });
    const subMethod3Mock = jest
      .spyOn(exportedForTesting, "subMethod3")
      .mockImplementation(() => {
        return {
          e: "x3",
          f: "y3",
        };
      });

    // Act
    const actual = mainMethod();

    // Assert
    expect(subMethod1Mock).toBeCalled();
    expect(actual).toEqual(expected);
  });
});
