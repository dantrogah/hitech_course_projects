class Vehicle {
  constructor(make, model) {
    ((this.make = make), (this.model = model));
  }

  start() {
    return `${this.make} of model ${this.model} is starting`;
  }

  testing() {
    return `Initial testing of ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.model} is now driving.`;
  }

  testing() {
    return `${this.make} is undergoing specification testing.`;
  }
}

let vehicle01 = new Vehicle("Honda", "Camry");
let camry = new Car("Honda", "Camry");
let tata = new Car("Honda", "Tata");

console.log(camry.drive());
console.log(tata.drive());
console.log(vehicle01.testing());
console.log(camry.testing());
