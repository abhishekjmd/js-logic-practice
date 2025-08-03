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
const people19=[
    {name:'Sam',age:19},
    {name:'Alex',age:25}
]

for (const {name,age} of people19){
    // console.log(name,age)
}

// 🔹 Problem 20: Destructuring in Function Parameters
function printUser({ name, age }) {
  console.log(name, age);
}
// printUser({ name: "Ravi", age: 28 });
