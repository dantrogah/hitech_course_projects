// Learning about Constructor Function
// Learning Objective:
// Create a constructor function.
// Create object from the constructor function.
// Access the properties and methods from a constructor function.

function People(name, age) {
  ((this.name = name),
    (this.age = age),
    (this.describe = function () {
      console.log(`My name is ${this.name} and I am ${this.age} old.`);
    }));
}

const tom = new People("Timothy", 54);
const nicky = new People("Nicky", 43);
tom.describe();
nicky.describe();

console.log(tom);
console.log(nicky);
