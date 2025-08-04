// 🔹 Problem 1: Basic Array Destructuring
const arr1 = [1, 2, 3];
const [a, b] = arr1;
// console.log(a,b);

// 🔹 Problem 2: Skipping Elements
const arr2 = [10, 20, 30, 40];
const [first, , third] = arr2;
// console.log(first,third);

// 🔹 Problem 3: Default Values in Arrays
const arr3 = [5];
const [x = 1, y = 2] = arr3;
// console.log(x,y)

// 🔹 Problem 4: Rest in Array Destructuring
const arr4 = [1, 2, 3, 4];
const [head, ...tail] = arr4;
// console.log(head,tail)

// 🔹 Problem 5: Basic Object Destructuring
const obj5 = { name: 'abhi', age: 23 };
const { name5, age5 } = obj5;
// console.log(name5,age5);

// 🔹 Problem 6: Object Property Renaming
const obj6 = { brand: 'Toyota', year: 2024 };
const { brand: carBrand, year: carYear } = obj6;
// console.log(carBrand, carYear)

// 🔹 Problem 7: Default Values in Object Destructuring
const obj7 = { name7: 'Sam' };
const { name7, age7 = 25 } = obj7;
// console.log(name7, age7);

// 🔹 Problem 8: Nested Object Destructuring
const user8 = {
    id: 1,
    profile: {
        username: 'abhi',
        location: 'india'
    }
};

const { profile: { username, location } } = user8;
// console.log(username,location)

// 🔹 Problem 9: Function Parameter Destructuring
function printUser({ name, age }) {
    console.log(name, age);
}
const obj9 = { name: 'tiwari', age: 20 }
// printUser(obj9);

// 🔹 Problem 10: Mixing Array & Object Destructuring
const data10 = [
    { id: 1, value: "a" },
    { id: 2, value: "b" }
]

const [{ value: firstValue }, { value: secondValue }] = data10
// console.log( firstValue, secondValue)

// 🔹 Problem 11: Rest Syntax in Array Destructuring
const nums11 = [10, 20, 30, 40, 50];
const [first11, ...rest11] = nums11;
// console.log(first11,rest11)

// 🔹 Problem 12: Skipping Values in Array Destructuring
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, , tertiary] = colors;
// console.log(primary,tertiary);

// 🔹 Problem 13: Deep Nested Array Destructuring
const nestedArr13 = [1, [2, [3, 4]]];
const [a13, [b13, [c13, d13]]] = nestedArr13;
// console.log(a13,b13,c13,d13)

// 🔹 Problem 14: Default Value + Renaming in Object Destructuring
const person = { firstName: 'Abhi' };
const { firstName: name, age: years = 22 } = person
// console.log(name,years);

// 🔹 Problem 15: Dynamic Property Name Destructuring
const key = 'status';
const obj15 = { status: 'active', role: 'admin' }
const { [key]: state } = obj15;
// console.log(state)

// 🔹 Problem 16: Swapping Variables with Array Destructuring
let x16 = 5, y16 = 10;
[x16, y16] = [y16, x16];
// console.log(x16, y16)

// 🔹 Problem 17: Function Returning Object + Destructuring
function getUser() {
    return { name17: 'Abhi', age: 23, city17: 'delhi' }
}

const { name17, city17 } = getUser();
// console.log(name17,city17)

// 🔹 Problem 18: Nested Object in Array Destructuring
const data18 = [
    { id: 1, name: 'abhi' },
    { id: 2, name: 'tiwari' }
]

const [{ name: firstUser18 }, { name: secondUser18 }] = data18
// console.log(firstUser18, secondUser18)

// 🔹 Problem 19: Loop with Destructuring
const people19 = [
    { name: 'Sam', age: 19 },
    { name: 'Alex', age: 25 }
]

for (const { name, age } of people19) {
    // console.log(name,age)
}

// 🔹 Problem 20: Destructuring in Function Parameters
function printUser({ name, age }) {
    // console.log(name, age);
}
printUser({ name: "Ravi", age: 28 });


// 1. Swap Two Numbers
// Problem:
// Given two variables, swap their values using array destructuring.

// Example:
// Input: a = 5, b = 10
// Output: a = 10, b = 5

// Edge Cases:
// Same values → swap but result is same.
// Negative numbers.

let x1 = 5, y1 = 10;
[x1, y1] = [y1, x1];
// console.log(x1, y1)




// 2. Extract Values from Object
// Problem:
// Given an object:

// const user = { name: "Abhi", age: 23, city: "Delhi" }
// Extract name and city into variables using object destructuring.

// Edge Cases:
// Property missing → should be undefined.
// Extra properties should be ignored.

const user2 = { name2: 'Abhi', age2: 23, city2: 'delhi' };
const { name2, city2 } = user2;
// console.log(name2,city2)



// 3. Nested Object Destructuring
// Problem:
// You have:

// const person = { 
//   name: "Sam", 
//   address: { city: "Mumbai", pin: 400001 } 
// }
// Extract name and city using nested destructuring.

// Edge Cases:
// address missing → handle undefined error.
// Empty object.

const person3 = {
    name3: 'Sam',
    address3: {
        city3: "Mumbai",
        pin3: 400001
    }
};

const { name3, address3: { city3 } } = person3;
// console.log(name3,city3)




// 4. Array of Objects Destructuring
// Problem:
// Given:

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ];
// Extract both names using destructuring.

// Edge Cases:
// Only one object in array.
// Empty array → no destructuring possible.

const people4 = [
    { name4a: 'Alice', age: 25 },
    { name4b: 'bob', age: 30 }
]

const [{ name4a }, { name4b }] = people4;
// console.log(name4a, name4b)




// 5. Function Parameter Destructuring
// Problem:
// Write a function:

// function greetUser({ name, age }) {
// log name and age
// }
// Pass an object like { name: "Ravi", age: 28 } and print the values using destructuring.

// Edge Cases:
// Missing keys → undefined.
// Extra keys ignored.


function greetUser({ name, age }) {
    console.log(name, age);
}
const object5 = {
    name: 'abhi',
    age: 23
}
// console.log(greetUser(object5))




// 6. Default Values in Object Destructuring
// Problem:
// You are given:
// const settings = { theme: "dark" };

// Extract theme and layout into variables.
// If layout is missing, default it to "grid".

// Example:
// Input: { theme: "dark" }
// Output: theme = "dark", layout = "grid"

const settings6 = { theme: 'dark' };
const { theme, layout = 'grid' } = settings6;
// console.log(theme, layout)




// 7. Rename Variables in Object Destructuring
// Problem:
// Given:

// const car = { brand: "Toyota", year: 2024 };

// Destructure it so brand becomes a variable called carBrand and year becomes 
// manufactureYear.


const car7 = { brand7: 'Toyota', year7: 2024 };
const { brand7: carBrand7, year7: manufactureYear7 } = car7;
// console.log(carBrand7, manufactureYear7)




// 8. Rest Operator in Object Destructuring
// Problem:
// Given:

// const profile = { name: "Sam", age: 25, country: "India", role: "Engineer" };

// Extract only name into a variable and store the rest of the properties in 
// another object called otherDetails.

const profile8 = { name8: 'Sam', age: 25, country: 'India', role: 'Engineer' };
const { name8, ...others8 } = profile8
// console.log(name8,others8)




// 9. Skip Elements in Array Destructuring
// Problem:
// Given:

// const numbers = [10, 20, 30, 40, 50];
// Destructure so that only the first and third numbers are stored in variables 
// first and third.

const numbers9 = [10, 20, 30, 40, 50];
const [first9, , third9] = numbers9;
// console.log(first9,third9);




// 10. Nested Array Destructuring
// Problem:
// Given:

// const matrix = [[1, 2], [3, 4], [5, 6]];

// Extract:
// 1 into a variable a
// 4 into a variable b
// 6 into a variable c


const matrix = [[1, 2], [3, 4], [5, 6]];
const [[a10], [, b10], [, c10]] = matrix
// console.log(a10, b10, c10)




// 11. Nested Object with Default Value
// Problem:
// Given:

// const employee = { name: "Ravi", details: { department: "IT" } };

// Extract:
// name → empName
// department → dept
// position → default "Developer"

// Edge Cases:
// If details is missing → dept should be undefined.
// If position missing → should default to "Developer".
// Log: empName, dept, position

const employee11 = { name11: 'Ravi', details11: { department11: 'IT' } };
const { name11: empName, details11: { department11: dept, position11 = 'Developer' } } = employee11
// console.log(empName, dept, position11)




// 12. Deep Nested Array Destructuring
// Problem:
// Given:
// const nestedArr = [1, [2, [3, 4]], 5];

// Extract:
// 1 → first
// 3 → third
// 5 → fifth

// Edge Cases:
// Inner arrays may have fewer elements.
// Missing element → should be undefined.
// Log: first, third, fifth

const nestedArr12 = [1, [2, [3, 4]], 5];
const [first12, [second, [third12]], fifth12] = nestedArr12;
console.log(first12, third12, fifth12)



// 14. Array Destructuring + Rest Operator
// Problem:
// Given:

// const colors = ["red", "green", "blue", "yellow", "pink"];

// Extract:
// First two colors into variables.
// Remaining colors into an array.

// Edge Cases:
// Array with only two colors → remaining array should be empty.
// Log: firstColor, secondColor, restColors


const colors13 = ['red', 'green', 'blue', 'yellow', 'pink'];
const [red, green, ...others13] = colors13;
// console.log(red,green,others13)




// 15. Mix: Array of Objects Destructuring
// Problem:
// Given:

// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 }
// ];

// Extract:
// First product’s name into prod1Name
// Second product’s price into prod2Price
// Edge Cases:

// If product array has only one item → prod2Price should be undefined.

const products14 = [
    { name: 'laptop', price: 5000 },
    { name: 'phone', price: 20000 }
]

const [{ name: prod1Name }, { name: prod2Name }] = products14;
console.log(prod1Name,prod2Name)




// 16. Swap First & Last Elements in Array
// Problem:
// Given:

// const nums = [10, 20, 30, 40];
// Use array destructuring to swap the first and last elements.

// Edge Cases:
// Array with 1 element → stays the same.
// Empty array → stays the same.

let nums15 = [10, 20, 30, 40];
let [a15, b15, c15, d15] = nums15;
[a15, d15] = [d15, a15];
console.log(a15, d15)



// 17. Extract Specific Keys from Array of Objects
// Problem:
// Given:

// const users = [
//   { name: "Alice", age: 25, role: "admin" },
//   { name: "Bob", age: 30, role: "user" }
// ];
// Use destructuring inside .map() to get an array of only the names.

// Expected: ["Alice", "Bob"]

// Edge Cases:
// Missing name → should be undefined.


const users17 = [
    { name: 'Alice', age: 25, role: 'admin' },
    { name: 'bob', age: 30, role: 'user' }
]

const items = users17.map((item, index) => {
    return item.name
})

// console.log(items)




// 18. Default Values in Function Parameters
// Problem:
// Write:

// function createProfile({ username, bio = "No bio provided" })
// If bio is missing, it should use the default.

// Example:
// Input: { username: "John" }
// Output: "John No bio provided"

function createProfile({ username, bio = 'No bio was provided' }) {
    return `${username} ${bio}`
}

console.log(createProfile({ username: 'john' }))    




// 19. Extract & Rename from Nested Object
// Problem:
// Given:

// const company = {
//   ceo: { name: "Sam", age: 50 },
//   location: "India"
// };

// Extract:
// ceo.name → ceoName
// location → hq

// Edge Cases:
// Missing ceo → ceoName should be undefined.

const company19 = {
    ceo19: { name19: "Sam", age: 50 },
    location: 'India'
}

const { ceo19: { name19: ceoName }, location: hq } = company19;
console.log(ceoName,hq)




// 20. Array of Objects + Rest Operator
// Problem:
// Given:

// const students = [
//   { name: "A", score: 90 },
//   { name: "B", score: 85 },
//   { name: "C", score: 88 }
// ];

// Extract:
// First student’s name into topStudent
// Rest of the students into others

// Edge Cases:
// Only 1 student → others should be empty array.


const students20 = [
    { name: 'A', score: 90 },
    { name: 'B', score: 85 },
    { name: 'C', score: 88 }
]

const [{name:topStudent},...others] = students20;
console.log(topStudent,others)