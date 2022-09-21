function mainMethod() {
  return {
    subMethod1: subMethod1(),
    subMethod2: subMethod2(),
    subMethod3: subMethod3(),
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

exports.mainMethod = mainMethod;
// export default mainMethod;
