// node calc.js sum 2 5 3
// node calc.js sub 10 5 5
// node calc.js mult 2 5 3
// node calc.js div 50 5 2

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map(num => Number(num));

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

const result = calc(operator, numbers);
console.log(result);

