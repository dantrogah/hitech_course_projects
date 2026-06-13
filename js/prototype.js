let computer = {
  cpu: 4,
  ram: 2,
};

let lenovo = {
  screen: "HD",
  //   __proto__: computer,
};

Object.setPrototypeOf(lenovo, computer);
console.log(Object.getPrototypeOf(lenovo));

// console.log(computer.__proto__);
// console.log(lenovo.__proto__);

// Example 2
let box = { backgroundColor: "blue", size: 12 };
let childBox = { age: 4, birthPlace: "Nkwanta" };
Object.setPrototypeOf(childBox, box);

// console.log(childBox.__proto__);
console.log(Object.getPrototypeOf(childBox));
