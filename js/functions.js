// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// greet("Rebecca");

// function checkInput(args) {
//   const num = Number(args);

//   console.log(num);
// }

// checkInput("12");

// function stringtoNumber(input) {
//   if (Number(input) === "NaN") {
//     return "Not a number";
//   }
// }

// console.log(stringtoNumber("asd"));

// const numbers = [2, 4, 4, 330, 330, 11, 34, 65];

// function findMax(arr) {
//   console.log(Math.max(...arr));
// }

// findMax(numbers);

// console.log(`Numbers Array: ${numbers}`);
// const nonDuplicateArray = new Set(numbers);

// console.log(nonDuplicateArray);

const numbers = [2, 4, 4, 330, 330, 11, 34, 65, 52];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers.indexOf(numbers[i]));
}

function printMultiplicationTable(n) {
  let mulTable = [];
  for (let i = 1; i <= n; i++) {
    mulTable.push(`${n} x ${i} = ${n * i}`);
  }

  return mulTable;
}

console.log(printMultiplicationTable(5));

// Higher Orde Functions and Arrow Function
const squareNumbers = (arr) => arr * arr;

console.log(squareNumbers(5));

const arrObject = [
  { name: "James", age: 23 },
  { name: "Adams", age: 25 },
  { name: "Linka", age: 27 },
];

const getNames = (arr) => arr.map((obj) => obj.name);

console.log(getNames(arrObject));
