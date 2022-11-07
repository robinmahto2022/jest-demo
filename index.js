const obj = {
  a: "2.0",
  b: "5.7",
};

let result = Object.values(obj).map((objKey) => parseInt(objKey));

console.log(result);
