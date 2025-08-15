// Q1: Borrow Array Method with Apply
// Without converting to a real array, find the maximum value from:
// const numbersLike = { 0: 12, 1: 7, 2: 45, 3: 30, length: 4 };

// 💡 Use Math.max with .apply().


const numberLike = { 0: 12, 1: 7, 2: 45, 3: 30, length: 4 };
// console.log(Math.max.apply(null, numberLike))





// Q2: Apply vs Call with Arguments
// Explain the difference in output between:

// function sum(a, b, c) {
//   console.log(a + b + c);
// }
// sum.call(null, 1, 2, 3);
// sum.apply(null, [1, 2, 3]);


// Why would .apply() sometimes be better in dynamic situations?

function sum(a, b, c) {
  console.log(a + b + c);
}
// sum.call(null, 1, 2, 3);
// sum.apply(null,[1,2,3])




// Q3: Method Borrowing
// Given:

// const person = { name: "Abhi" };
// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }


// Use .call() and .apply() to greet "Hello, Abhi!" and "Hi, Abhi?".


const personThree = { name: 'Abhi' };
function greet(greeting, punchation) {
  console.log(`${greeting}, ${this.name}${punchation}`)
}

// greet.call(personThree,'Hello','!');
// greet.apply(personThree,['hello','?'])




// Q4: Constructor Inheritance using Call
// You have:

// function Animal(name) {
//   this.name = name;
// }
// function Dog(name, breed) {
//   // your code here using call
// }

// Make Dog inherit name from Animal using .call().

function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name)
  this.breed = breed
}

const randomBreed = new Dog('bruno', 'Labrador');
// console.log(randomBreed.name)






// Q5. Implement customCall
// Difficulty: Medium
// Implement your own version of .call() and name it .customCall.
// It should behave exactly like native .call().

// Example:
// function greet(city, country) {
//   return `Hello, my name is ${this.name} from ${city}, ${country}`;
// }
// const person = { name: "Abhi" };

// console.log(greet.customCall(person, "Ahmedabad", "India"));
// // Output: "Hello, my name is Abhi from Ahmedabad, India"


// Constraints:
// Do not use .call() internally.
// Handle any number of arguments.



