const calc = (op, numbersArr) => {
  switch (op) {
    case "sum":
      return numbersArr.reduce((acc, num) => acc + num);
    case "sub":
      return numbersArr.reduce((acc, num) => acc - num);
    case "mult":
      return numbersArr.reduce((acc, num) => acc * num);
    case "div":
      return numbersArr.reduce((acc, num) => acc / num);

    default:
      return "Unknown operation type";
  }
};

module.exports = calc;
