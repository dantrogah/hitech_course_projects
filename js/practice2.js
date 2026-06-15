// Literal Object
let car = {
  make: "Honda",
  model: "Camry",
  date: 2020,
  start: function () {
    console.log(`Print ${this}`);
  },
};

// console.log(car);
// console.log(car.make);

// Constructor Function
function Car(make, model, date) {
  ((this.make = make), (this.model = model), (this.date = date));
  this.start = function () {
    console.log(`Printing...${this}`);
  };
}

let camry = new Car("Honda", "Camry", 2020);
console.log(camry);

function Animal(type) {
  this.type = type;
}

Animal.prototype.sound = function () {
  console.log(`The ${this.type} made a sound.`);
};

let dog = new Animal("Dog");
dog.sound();

/**
 * You cannot make copies of Literal Objects.
 * You can make copies of Constructor Function.
 * You can create a prototype chain by using the Function name followed by the prototype
 * keyword separated by the dot operator. You then add the function name ...
 */
