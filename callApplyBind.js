// 🔹 Q1: Basic call vs bind
// const user = {
//   name: "Abhi",
//   sayHello: function () {
//     console.log("Hi", this.name);
//   }
// };

// const greet = user.sayHello;
// greet(); // ?
// greet.call(user); // ?
// greet.bind(user)(); // ? // here the second () is used to call the function immediately


// 🔹 Q2: bind with setTimeout
// const obj = {
//   name: "Tiwari",
//   logName: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }.bind(this), 1000);
//   }
// };
// obj.logName(); // ?


// 🔹 Q3: bind returns new function
// function sayHi() {
//     console.log(this.name);
// }

// const user1 = { name: 'A' };
// const user2 = { name: 'B' }

// const hiA = sayHi.bind(user1);
// const hiB = sayHi.bind(user2);
// hiB()


// 🔹 Q4: Partial application
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
// console.log(double(4)); // ?


// leetcode style problems 
// Q1: Change Context and Invoke

// Problem:
// Write a function greet that prints "Hello, <name>" where <name> is taken from the object it is called with.
// You are given an object and you must call greet with that object using call.

// function greet() {
// your code here
// }
// const person = { name: "Alice" };

// Expected Output: "Hello, Alice"

function greetOne(greeting) {
  console.log(`${greeting}, ${this.name}`)
}

const personOne = { name: 'Alice' };
// greetOne.call(personOne,'Hello')







// Q2: Sum with Different Contexts

// Problem:
// Create a function sum that returns this.a + this.b.
// Use call to invoke it with different objects and print results.

// function sum() {
// your code here
// }

// const obj1 = { a: 2, b: 3 }; // Expected: 5
// const obj2 = { a: 10, b: 15 }; // Expected: 25


function sum() {
  return this.a + this.b
}

const objOne = { a: 2, b: 3 };
const objTwo = { a: 10, b: 15 };

// console.log(sum.call(objOne, null))
// console.log(sum.call(objTwo, null))





// Q3: Borrow Method Using apply

// Problem:
// You are given an array of numbers. Use Math.max and apply to find the maximum number.

// const nums = [5, 8, 2, 10, 3];
// Expected Output: 10

const nums = [5, 8, 2, 10, 2];
// console.log(Math.max.apply(null, nums))





// Q4: bind for Later Execution

// Problem:
// Write a function sayHi that logs "Hi, my name is <name>".
// Bind it to an object and store it in a variable, then call it later.

// function sayHi() {
// your code here
// }

// const person = { name: "Bob" };


function sayHi(greeting){
  return `${greeting} ${this.name}`
}

const personSayHi = {name:'Bob'};
const greet = sayHi.bind(personSayHi,'Hi, my name is');
console.log(greet())