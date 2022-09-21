export class Common {
  public static mainMethod() {
    return {
      subMethod1: Common.subMethod1(),
      subMethod2: Common.subMethod2(),
      subMethod3: Common.subMethod3(),
    };
  }

  private static subMethod1() {
    return {
      a: "a",
      b: "b",
    };
  }
  private static subMethod2() {
    return {
      c: "c",
      d: "d",
    };
  }
  private static subMethod3() {
    return {
      e: "e",
      f: "f",
    };
  }
}
