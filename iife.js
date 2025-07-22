// ✅ 1. Basic IIFE Execution
// (function () {
//   console.log("Hello from IIFE");
// })();


// ✅ 2. IIFE with Parameters
// (function (name) {
//   console.log(`Welcome, ${name}`);
// })("Abhi");


// ✅ 3. IIFE + Private Variables
// (function () {
//   let secret = "Hidden Info";
// })();
// console.log(secret); // ?


// ✅ 4. IIFE Returning a Function (Closure Preview)
// const counter = (function () {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// })();

// console.log(counter()); // ?
// console.log(counter()); // ?
// console.log(counter()); // ?


// ✅ 5. Arrow IIFE
// (() => {
//   console.log("Arrow IIFE works!");
// })();


// ✅ 6. IIFE in Loops
// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

// ✅ 7. Global Scope Leak
// (function () {
//   myVar = "Leaked!";
// })();
// console.log(myVar); // ?


// ✅ 8. IIFE with Object Return
// const config = (function () {
//   const secret = "abc123";
//   return {
//     getSecret: function () {
//       return secret;
//     }
//   };
// })();

// console.log(config.getSecret()); // ?
// console.log(config.secret); // ?


//  ✅ 9. Nested IIFEs
// (function outer() {
//   console.log("Outer IIFE");
//   (function inner() {
//     console.log("Inner IIFE");
//   })();
// })();


// ✅ 10. IIFE with Function Hoisting Trap
// (function () {
//   console.log(foo()); // ?
//   function foo() {
//     return "Hello";
//   }
// })();

// 11. Classic Loop Trap (var without IIFE)
// for (var i = 0; i < 3; i++) {
//  (function (i) {
//     console.log(i);
//   })(i);
// }

// ✅ 12. IIFE and Hoisting Trap
// (function () {
//   console.log(typeof a); // ?
//   var a = 5;
// })();

// 🔹 13. IIFE with this trap
// const obj = {
//   name: "Abhi",
//   log: (function () {

//     console.log(this.name);
// })()
// };

// obj.log(); 

// const obj = {
//   name: "Abhi",
//   log: (function() {
//     let capturedName = 'Abhi';
//     return function() {
//       console.log(capturedName);
//     };
//   })()
// };

// obj.log(); // ✅ Output: undefined because `this.name` was still global, but it's callable


// ✅ 14. Module Pattern via IIFE
// const UserModule = (function () {
//     let username = 'abhi';
//     return {
//         // userName: username,
//         getUserName: function () {
//             return username
//         },
//         setUserName: function (newName) {
//             username = newName
//         },

//     }
// })()

// console.log(UserModule.getUserName())
// UserModule.setUserName("tiwari");
// console.log(UserModule.getUserName());
// console.log(UserModule.userName)


// ✅ 15. IIFE with return inside loop (trickier closure)
// let funcs = [];
// for (var i = 0; i < 3; i++) {
//     funcs[i] = (function (j) {
//         return function () {
//             return j * j
//         }
//     })(i);
// }

// console.log(funcs[0]())
// console.log(funcs[1]()); // ?
// console.log(funcs[2]()); // ?


// ✅ 16. IIFE returning object with private counter
// const Counter = (function () {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//       return count;
//     },
//     reset: function () {
//       count = 0;
//     }
//   };
// })();

// console.log(Counter.increment()); // ?
// console.log(Counter.increment()); // ?
// Counter.reset();
// console.log(Counter.increment()); // ?

