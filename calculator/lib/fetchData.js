const [operator, ...args] = process.argv.slice(2);
const numbers = args.map(num => Number(num));

module.exports = {
  operator,
  numbers,
};
