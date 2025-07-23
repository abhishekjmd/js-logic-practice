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
console.log(double(4)); // ?
