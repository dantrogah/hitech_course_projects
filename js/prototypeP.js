let person = {
  name: "Philip",
};

let student = {
  dob: "March 05, 2002",
  __proto__: person,
};

let school = {
  name: "Noble International",
};

console.log(person);
console.log(student);
console.log(student.__proto__);

Object.setPrototypeOf(student, school);

console.log(Object.getPrototypeOf(student));
