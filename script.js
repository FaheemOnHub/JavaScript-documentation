'use strict';

//Constructor Function
const Person = function (firstName, birthYear) {
  this.first = firstName;
  this.birth = birthYear;
};

//Instance
const jonas = new Person('Jonas', 1991);

console.log(jonas);
//Instance
const Faheem = new Person('Faheem', 2002);

console.log(Faheem);
//Prototyping
Person.prototype.calcAge = function () {
  console.log(2023 - this.birth);
};

Faheem.calcAge();
jonas.calcAge();
console.log(jonas.__proto__); //Objects own Proto Property
console.log(jonas.__proto__.__proto__); //This moves to Proto Property of Constructor Functions Prototype Object
console.log(jonas.__proto__.__proto__.__proto__); //This will be Null as there is nothing after the JS Objects.Prototype;
//Objects own Properties are only
//those props that are defined
//inside the object itself
//.
//prototype proprties are
//not objects own props
//infact they are
//proto proprties
//hey

const arr = [1, 5, 4, 2, 6, 7, 7, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ == Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
console.log('Hello');
console.log('Hi');
