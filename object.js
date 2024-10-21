//Exercise 1: create an object
var student = {
  name: "Trang",
  age: 29,
  address: "HCMC",
};

//Exercise 2: create an object constructor
function Animal(name, leg, speed) {
  (this.name = name), (this.leg = leg), (this.speed = speed);
}
var parrot = new Animal("parrot", 2, "40km/h");

//Exercise 3: add prototype methor
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Student.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
// Ví dụ khi sử dụng
var student = new Student("Long", "Bui");
console.log(student.firstName); // 'Long'
console.log(student.lastName); // 'Bui'
console.log(student.getFullName()); // 'Long Bui

//Exercise 4: use a function to return the next year with type of number
var date = new Date();
function getNextYear() {
  return date.getFullYear() + 1;
}
//Exercise 5: create a function that receives an array as a parameter and returns a random element of this array
function getRandomItem(array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}
