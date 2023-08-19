class Calculator {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }

  init = () => {
    return this.calc(this.operator, this.numbers);
  };
  calc = (op, numbersArr) => {
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
}
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map(num => Number(num));

module.exports = new Calculator(operator, numbers);
