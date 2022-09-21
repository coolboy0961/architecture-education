import { Common } from "../../../src/utils/Common3";


describe("Common Tests", () => {
  test("subMethod1 tests", () => {
    // Arrange
    const expected = {
      a: "a",
      b: "b",
    };

    // Act
    const actual = (Common as any).subMethod1();

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
      .spyOn(Common as any, "subMethod1")
      .mockImplementation(() => {
        return {
          a: "x1",
          b: "y1",
        };
      });
    const subMethod2Mock = jest
      .spyOn(Common as any, "subMethod2")
      .mockImplementation(() => {
        return {
          c: "x2",
          d: "y2",
        };
      });
    const subMethod3Mock = jest
      .spyOn(Common as any, "subMethod3")
      .mockImplementation(() => {
        return {
          e: "x3",
          f: "y3",
        };
      });

    // Act
    const actual = Common.mainMethod();

    // Assert
    expect(subMethod1Mock).toBeCalled();
    expect(actual).toEqual(expected);
  });
});
