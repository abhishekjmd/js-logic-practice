// 📘 DAY 3: Functions in JavaScript
// 🔥 Concept Name: Functions (Declaration, Expression, IIFE, Parameters)
// ✅ Mini Summary (Notebook Note):
// | Type                                           | Hoisted                      | Can Be Called Early | Syntax                    |
// | ---------------------------------------------- | ---------------------------- | ------------------- | ------------------------- |
// | Function Declaration                           | ✅ Yes                        | ✅ Yes               | `function foo() {}`       |
// | Function Expression (var)                      | `var` hoisted as `undefined` | ❌ No                | `var foo = function() {}` |
// | Function Expression (let/const)                | TDZ applies                  | ❌ No                | `const foo = () => {}`    |
// | IIFE (Immediately Invoked Function Expression) | Not hoisted                  | Called immediately  | `(function() { })()`      |




//  Problem 1: Function Declaration
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Abhi")); // ?

// 🔹 Problem 2: Function Expression with var
// sayHi(); // ?

// var sayHi = function() {
//   console.log("Hi!");
// };


// 🔹 Problem 3: Arrow Function vs Normal Function
// function normal() {
//   console.log(this);
// }

// const arrow = () => {
//   console.log(this);
// };

// normal(); // ?
// arrow();  // ?


// 🔹 Problem 4: IIFE Syntax Test
// (function(){
//     console.log('hello abhishek')
// })();


// 🔹 Problem 5: Function with Default Parameters
// function add(a = 5, b = 10) {
//   return a + b;
// }
// console.log(add(0,9));       // ?
// console.log(add(8));      // ?
// console.log(add(3, 7)); 


// Problem 6: Function with Rest Parameters
// function sum(...nums) {
//   return nums.reduce((acc, val) => acc + val, 0);
// }
// console.log(sum(1, 2, 3, 4)); // ?



// 📘 DAY 4: this Keyword + Arrow Functions + IIFE
// 🔥 Concept Name: this in JavaScript (Context, Arrow Function Behavior, IIFE Scope)
// ✅ Notebook Summary for this:
// | Situation                              | What `this` refers to                   |
// | -------------------------------------- | --------------------------------------- |
// | Global scope (`this` outside function) | `window` (in browser)                   |
// | Inside a regular function              | Depends on how it's **called**          |
// | Inside a method (obj.func)             | That object                             |
// | Inside an arrow function               | Inherits `this` from **lexical parent** |
// | In constructor functions               | The newly created object                |
// | In event listeners                     | The element triggering the event        |



// 🔹 Problem 1: Global vs Function Scope
// console.log(this); // ?

// function show() {
//   console.log(this); // ?
// }
// show();


// Problem 2: Method vs Arrow in Object
// const user = {
//   name: "Abhi",
//   sayHi: function () {
//     console.log("sayHi:", this.name); // ?
//   },
//   arrowHi: () => {
//     console.log("arrowHi:", this.name); // ?
//   }
// };

// user.sayHi();
// user.arrowHi();

// 🔹 Problem 3: Arrow Inside Method
// const team = {
//   title: "Frontend",
//   members: ["Abhi", "Tiwari"],
//   showMembers: function () {
//     this.members.forEach(member => {
//       console.log(`${member} - ${this.title}`); // ?
//     });
//   }
// };
// team.showMembers();

// 🔹 Problem 4: IIFE and this
// (function () {
//   console.log("IIFE this:", this); // ?
// })();


// 🔹 Problem 5: DOM Event + this
{/* <html>
<button id="clickBtn">Click Me</button>
<script>
  document.getElementById("clickBtn").addEventListener("click", function () {
    console.log(this); // ?
  });

  document.getElementById("clickBtn").addEventListener("click", () => {
    console.log(this); // ?
  });
</script>
</html> */}


// 🔹 Problem 6: this in setTimeout
// const obj = {
//     name: "JS",
//     logName: function () {

//         setTimeout(function () {
//             console.log("Timeout:", this.name); // ?
//         }, 1000);
//     }
// };
// obj.logName();


// 📘 Continuing with this — Tricky & Complex Questions
// 🔹 Problem 1: this in nested objects
// const user = {
//   name: "Abhi",
//   details: {
//     name: "Inner",
//     greet: function () {
//       console.log(this.name); // ?
//     }
//   }
// };

// user.details.greet(); // ?


// 🔹 Problem 2: this when function is extracted
// const person = {
//   name: "Abhi",
//   greet() {
//     console.log("Hello", this.name); // ?
//   }
// };

// const greetFn = person.greet;
// greetFn(); // ?


// 🔹 Problem:  IIFE Scope Trick
// (function greet(name) {
//   console.log(name);
// })("Abhishek");

// console.log(typeof greet);

// 🔹 Problem:  Named Function Expression
// const sayHello = function greetUser() {
//   console.log(typeof greetUser);
// };

// sayHello();
// console.log(typeof greetUser);

// 🔹 Problem:  Function with Default Parameter Dependency
// function display(a = 1, b = a + 2) {
//   console.log(a, b);
// }

// display();           // ?
// display(5);          // ?
// display(undefined, 10); // ?


// 🔹 Problem:  Rest Parameter Quirk
// function collect(a, ...rest) {
//   console.log(a, rest.length);
// }

// collect(1);              // ?
// collect(1, 2, 3, 4);      // ?

// 🔹 Problem:  Function Overwrite
// function greet() {
//   console.log("Hello");
// }

// var greet = function () {
//   console.log("Hi");
// };

// greet();

// 🔹 Problem 7: this in nested objects
// const user = {
//   name: "Abhi",
//   details: {
//     name: "Inner",
//     greet: function () {
//       console.log(this.name); // ?
//     }
//   }
// };

// user.details.greet(); // ?

// 🔹 Problem 8: this when function is extracted
// const person = {
//   name: "Abhi",
//   greet() {
//     console.log("Hello", this.name); // ?
//   }
// };

// const greetFn = person.greet;
// greetFn(); // ?

// 🔹 Problem 9: this in arrow function inside regular function
// const company = {
//   name: "OpenAI",
//   log: function () {
//     const arrow = () => {
//       console.log(this.name); // ?
//     };
//     arrow();
//   }
// };

// company.log();


// 🔹 Problem 10: this in constructor + setTimeout
// function Developer(name) {
//   this.name = name;
//   setTimeout(() => {
//     console.log("Hi", this.name); // ?
//   }, 1000);
// }

// new Developer("Abhi");

// 🔹 Problem 11: this inside chained objects
const obj = {
  name: "Abhi",
  greet: function () {
    // console.log(this.name)
    return function () {
      console.log(this.name); // ?
    };
  }
};

obj.greet(); // ?

// 🔹 Problem 12: Using .bind(this) inside method
// const user = {
//   name: "Abhi",
//   greet: function () {
//     const inner = function () {
//       console.log(this.name);
//     }.bind(this);
//     inner();
//   }
// };

// user.greet(); // ?

// 🔹 Problem 13: Arrow function with call()
// const user = {
//   name: "Abhi",
//   greet: () => {
//     console.log("Hello", this.name);
//   }
// };

// user.greet.call({ name: "Tiwari" }); // ?


// 🔹 Problem 14: bind doesn't override arrow this
// const obj = {
//   name: "Original",
//   arrow: () => {
//     console.log(this.name);
//   }
// };

// const bound = obj.arrow.bind({ name: "Bound" });
// bound(); // ?


// 🔹 Problem 15: Preserving this in loops
const profile = {
  name: "Abhi",
  hobbies: ["Coding", "Music"],
  printHobbies: function () {
    for (let i = 0; i < this.hobbies.length; i++) {
      setTimeout(function () {
        console.log(`${this.name} likes }`);
      }, 1000);
    }
  }
};
profile.printHobbies();
