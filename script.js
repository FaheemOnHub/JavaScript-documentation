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

const account = {
  owner: 'Faheem',
  movements: [200, 100, 200, 400],

  get newData() {
    return this.movements;
  },

  set newData(data) {
    this.movements.push(data);
  },
};

account.newData = 50;

console.log(account.movements);

//Object.create

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

//Coding-Challenge #2
//1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
//2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
//by 1.6)
//3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
//converts it to km/h before storing the value, by multiplying the input by 1.6)
//4. Create a new car and experiment with the 'accelerate' and 'brake'
//methods, and with the getter and setter.
//Test data:
//§ Data car 1: 'Ford' going at 120 km/h
//GOOD LUCK �

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(data) {
    this.speed = data * 1.6;
  }
}

const Ford = new CarCl('Ford', 120);
Ford.accelerate();
Ford.brake();

Ford.speedUS = 50;
console.log(Ford);
console.log(Ford.speedUS);
