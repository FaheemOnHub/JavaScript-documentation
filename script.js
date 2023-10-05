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
console.log('here', jonas.__proto__ == Person.prototype);
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

//Coding Challenge

//1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
//'speed' property. The 'speed' property is the current speed of the car in
//km/h
//
//2. Implement an 'accelerate' method that will increase the car's speed by 10,
//and log the new speed to the console
//
//
//3. Implement a 'brake' method that will decrease the car's speed by 5, and log
//the new speed to the console
//
//
//4. Create 2 'Car' objects and experiment with calling 'accelerate' and
//'brake' multiple times on each of them
//
//
//Test data:
//§ Data car 1: 'BMW' going at 120 km/h
//§ Data car 2: 'Mercedes' going at 95 km/h

const Car = function (make, speed) {
  this.Attribute = make;
  this.SecondAttribute = speed;
};

const car1 = new Car('BMW', '110');
const car2 = new Car('Mercedes', '100');
console.log(car1);

Car.prototype.accelerate = function () {
  this.SecondAttribute = Math.trunc(this.SecondAttribute) + 10;
  console.log(this.Attribute + ' going at ' + this.SecondAttribute + ' km/h');
};

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
Car.prototype.brake = function () {
  this.SecondAttribute = Math.trunc(this.SecondAttribute) - 5;
  console.log(this.Attribute + ' going at ' + this.SecondAttribute + ' km/h');
};

car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
console.log('Both Crashed🚨');

//Classes in JS
//Basically

//class declaration

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1998);
jessica.calcAge();
console.log(jessica.__proto__ == PersonCl.prototype); //same as a constructor function

//Setters set the value
//Getters get the value

console.log('hey');
