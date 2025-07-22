// 📘 DAY 1: var, let, const — Scoping & Behavior
// 🔥 Concept Name: JavaScript Variable Declarations & Scope
// ✅ Mini Summary (write this in your notebook):
// | Keyword | Scope    | Hoisted                            | Can Reassign | Can Redeclare |
// | ------- | -------- | ---------------------------------- | ------------ | ------------- |
// | `var`   | function | ✅ yes (initialized as `undefined`) | ✅ yes        | ✅ yes         |
// | `let`   | block    | ✅ yes (but in TDZ)                 | ✅ yes        | ❌ no          |
// | `const` | block    | ✅ yes (in TDZ)                     | ❌ no         | ❌ no          |




// 🔹 Problem 1: Basic Scope
// function sayHi() {
//   var greeting = "Hello";
//   if (true) {
//     var greeting = "Hi";
//     console.log(greeting); 
//   }
//   console.log(greeting); 
// }
// sayHi();

{/* 🔹 Problem 2: Let Scope vs Var Scope */ }
// function testScope() {
//   let a = 1;
//   if (true) {
//     let a = 2;
//     console.log("Inside block:", a);
//   }
//   console.log("Outside block:", a);
// }
// testScope();


// 🔹 Problem 3: Re-declaration Error
// let x = 10;
// let x = 20; // What happens?

// 🔹 Problem 4: Const Reassignment
// const a = 5;
// a = 10; // What happens here?


// 🔹 Problem 5: Const with Objects      //  🧠 Why does this work?
// const user = { name: "Abhi" };       //  const means the binding (the reference) to the variable user cannot change.
// user.name = "Tiwari";                 // But the content of the object (its properties) can still be mutated.
// console.log(user.name);

// ❌ Example of invalid reassignment:
//  const user = { name: "Abhi" };
// user = { name: "Tiwari" }; // ❌ TypeError: Assignment to constant variable.

// 🔹 Problem 6: Shadowing

// var x = 100;
// function demo() {
//   let x = 50;
//   console.log(x); // ?
// }
// demo();
// console.log(x); // ?

                                  // 🧠 Practice Problems: Tricky Output Questions

//  🔹 Problem 1: Hoisting with var
// console.log(a); // ?
// var a = 5;
// console.log(a); // ?


// 🔹 Problem 2: Hoisting with let
// console.log(b); // ?
// let b = 10;
// console.log(b); // ?


// 🔹 Problem 3: Function vs Function Expression
// greet(); // ?
// function greet() {
//   console.log("Hello!");
// }

// greetExp(); // ?
// const greetExp = function() {
//   console.log("Hi there!");
// };


// 🔹 Problem 4: TDZ + Scope Chain
// let x = 100;

// function demo() {
//   console.log(x); // ?
//   let x = 50;
// }
// demo();


// 🔹 Problem 5: Hoisting inside Block
// {
//   console.log(foo); // ?
//   var foo = "bar";
// }

// {
//   console.log(bar); // ?
//   let bar = "baz";
// }

// 🔹 Problem 5: Function expression with var 
demo(); // ?

var demo = function() {
  console.log("Hello from expression");
};
