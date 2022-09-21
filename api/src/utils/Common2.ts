export function mainMethod() {
  return {
    subMethod1: exportedForTesting.subMethod1(),
    subMethod2: exportedForTesting.subMethod2(),
    subMethod3: exportedForTesting.subMethod3(),
  };
}

function subMethod1() {
  return {
    a: "a",
    b: "b",
  };
}
function subMethod2() {
  return {
    c: "c",
    d: "d",
  };
}
function subMethod3() {
  return {
    e: "e",
    f: "f",
  };
}

export const exportedForTesting = {
  subMethod1,
  subMethod2,
  subMethod3,
};
