class Vehicle {
  constructor(make, model) {
    ((this.make = make), (this.model = model));
  }

  start() {
    return `${this.make} which is of model ${this.model} is starting...`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.model} is driving...`;
  }
}

let corolla = new Car("Toyota", "Corolla");
let camry = new Car("Toyota", "Camry");

console.log(corolla.start());
console.log(corolla.drive());
console.log(camry.start());
console.log(camry.drive());
