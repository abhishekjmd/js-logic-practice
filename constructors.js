// 🔹 Q1: new keyword omitted
// function Person(name) {
//   this.name = name;
// }
// const p1 = new Person("Abhi");
// console.log(p1); // ?


// 🔹 Q2: new keyword used
// function Person(name) {
//   this.name = name;
// }
// const p1 = new Person("Abhi");
// console.log(p1.name); // ?

// 🔹 Q3: constructor returns object
// function Car(make) {
//   this.make = make;
//   return { make: "Tesla" };
// }
// const c1 = new Car("Toyota");
// console.log(c1.make); // ?


// 🔹 Q4: constructor returns primitive
// function Gadget(name) {
//   this.name = name;
//   return 42;
// }
// const g1 = new Gadget("Phone");
// console.log(g1.name); // ?

// 🔹 Q5: constructor hijack using Function
// function Animal(type) {
//   this.type = type;
//   this.getType = function () {
//     return this.type;
//   }
// }
// const a = new Animal("Dog");
// const b = new a.getType.constructor("return 'Cat'")();
// console.log(b); // ?


// 🔹 Q6: (Title: Nested new operators)
// function Animal(type) {
//   this.type = type;
// }
// Animal.prototype.sound = "Generic Sound";

// const result = new new Animal("Dog").constructor("return 'Meow'");
// console.log(result); // ?


// 🔹 Q7: Chained new with constructor
// function Person(name) {
//   this.name = name;
// }
// const result = new new Person("John").constructor("return 7 * 6");
// console.log(result); // ✅ 42

// 🔹 Q8: Function returning object vs primitive
// function Test() {
//   this.name = "JS";
//   return { topic: "Constructor" };
// }
// const t = new Test();
// console.log(t.name); // ?


// leetcode style problems
// Q1. Create a Person Constructor

// Difficulty: Easy

// Write a constructor function Person that takes name and age as parameters and assigns them to the object.

// Example:

// const p1 = new Person("Abhi", 25);
// console.log(p1.name); // "Abhi"
// console.log(p1.age);  // 25

function Person = {
    
}