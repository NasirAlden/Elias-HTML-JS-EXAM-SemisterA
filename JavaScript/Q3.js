let atoiFunc = (str) => {
  const maxInt = 2147483647;
  const minInt = -2147483648;
  const result = parseInt(str, 10);

  switch (true) {
    case isNaN(result):
      return 0;
    case result > maxInt:
      return maxInt;
    case result < minInt:
      return minInt;
    default:
      return result;
  }
};

strNum = "42";
console.log(atoiFunc(strNum));
