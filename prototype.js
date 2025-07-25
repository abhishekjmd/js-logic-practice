// 🔹 Problem 1: Inheriting method via __proto__
// const user = {
//   name: "Abhi",
//   greet() {
//     return "Hello " + this.name;
//   },
// };

// const admin = {
//   name: "Tiwari",
//   __proto__: user,
// };

// console.log(admin.greet());

// 🔹 Problem 2: Shared method from constructor’s prototype
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHi = function () {
//   return `Hi ${this.name}`;
// };

// const person1 = new Person("Abhi");
// const person2 = new Person("Tiwari");

// console.log(person1.sayHi === person2.sayHi);


// 🔹 Problem 3: Property from prototype vs own property
// const obj = {
//   a: 10,
// };

// const obj2 = Object.create(obj);
// obj2.b = 20;

// console.log(obj2.a);
// console.log(obj2.hasOwnProperty("a"));


// 🔹 Problem 4: Chained prototype inheritance
// function Animal() {}
// Animal.prototype.eats = true;

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.barks = true;

// const d = new Dog();

// console.log(d.eats);
// console.log(d.barks);


// 🔹 Problem 5: Shadowing prototype property with instance property
// function Foo() {}
// Foo.prototype.x = 10;

// const f1 = new Foo();
// const f2 = new Foo();

// f1.x = 20;

// console.log(f1.x);
// console.log(f2.x);


// 🔹 Problem 6: Object.create and prototype link
// const base = {
//   sayHi() {
//     return "Hi from base";
//   },
// };

// const child = Object.create(base);
// console.log(child.sayHi());


// 🔹 Problem 7: Prototype method override
// function Person() {}
// Person.prototype.sayHi = function () {
//   return "Hello!";
// };

// const p = new Person();
// p.sayHi = function () {
//   return "Overridden Hello!";
// };

// console.log(p.sayHi());


// 🔹 Problem 8: Multiple instances sharing prototype method
// function Car() {}
// Car.prototype.drive = function () {
//   return "Vroom!";
// };

// const car1 = new Car();
// const car2 = new Car();

// console.log(car1.drive === car2.drive);


// 🔹 Problem 9: Manual prototype assignment
// const base = {
//   greet: function () {
//     return "Hey!";
//   },
// };

// const newObj = {};
// newObj.__proto__ = base;

// console.log(newObj.greet());


// 🔹 Problem 10: __proto__ vs prototype confusion
// function Gadget() {}
// Gadget.prototype.use = function () {
//   return "Using gadget";
// };

// const g = new Gadget();

// console.log(g.__proto__ === Gadget.prototype);
// console.log(Gadget.__proto__ === Function.prototype);


// 🔹 Problem 11: Constructor's prototype replaced
// function Person() {
//   this.name = "Abhi";
// }
// Person.prototype = {
//   greet() {
//     return "Hello " + this.name;
//   },
// };

// const p = new Person();

// console.log(p.greet());


// 🔹 Problem 12: Changing prototype after instance creation
// function Person() {
//   this.name = "Tiwari";
// }
// const p1 = new Person();

// Person.prototype.sayHi = function () {
//   return "Hi " + this.name;
// };

// console.log(p1.sayHi());


// 🔹 Problem 13: Deleting prototype property
// function User() {}
// User.prototype.role = "admin";

// const u1 = new User();

// delete User.prototype.role;

// console.log(u1.role);


// 🔹 Problem 14: Constructor with own method + prototype method
// function Box() {
//   this.type = "wood";
//   this.describe = function () {
//     return "Box made of " + this.type;
//   };
// }
// Box.prototype.describe = function () {
//   return "Prototype Box";
// };

// const b = new Box();
// console.log(b.describe());


// 🔹 Problem 15: Inheritance + overriding prototype
function Animal() {}
// Animal.prototype.sound = function () {
//   return "generic sound";
// };

// function Cat() {}
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.sound = function () {
//   return "meow";
// };

// const kitty = new Cat();
// console.log(kitty.sound());


// 🔹 Problem 16: Nested prototype chain resolution
// const grandParent = {
//   house: "villa",
// };
// const parent = Object.create(grandParent);
// parent.car = "BMW";

// const child = Object.create(parent);
// child.bike = "Duke";

// console.log(child.house);
// console.log(child.car);
// console.log(child.bike);

// 🔹 Problem 17: instanceof vs __proto__
// function Human() {}

// const h = new Human();

// console.log(h instanceof Human);
// console.log(h.__proto__ === Human.prototype);


// 🔹 Problem 18: Reassigning __proto__
// const A = {
//   value: 1,
// };
// const B = {
//   value: 2,
// };

// const C = {
//   value: 3,
//   __proto__: A,
// };

// C.__proto__ = B;

// console.log(C.value);


// 🔹 Problem 19: Function constructor without prototype method
// function Gadget(name) {
//   this.name = name;
// }
// const g1 = new Gadget("Phone");

// console.log(typeof g1.sayHi);


// 🔹 Problem 20: Arrow function inside prototype
// function User(name) {
//   this.name = name;
// }
// User.prototype.greet = () => {
//   return "Hello " + this.name;
// };

// const u = new User("Abhi");
// console.log(u.greet());
