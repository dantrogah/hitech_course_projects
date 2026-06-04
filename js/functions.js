// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// greet("Rebecca");

// function checkInput(args) {
//   const num = Number(args);

//   console.log(num);
// }

// checkInput("12");

function stringtoNumber(input) {
  if (Number(input) === "NaN") {
    return "Not a number";
  }
}

console.log(stringtoNumber("asd"));
