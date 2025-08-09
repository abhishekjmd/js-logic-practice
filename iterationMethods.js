// Q1 — for...in with Array (keys) with in keys come
const arr1 = ['A', 'B', 'C'];
for (let key in arr1) {
    // console.log(key)
}

// Q2 — for...of with Array (values)
const arr2 = ["A", 'B', 'C'];
for (let value of arr2) {
    // console.log(value);
}

// Q3 — for...in with Object (keys)
const user3 = { name: 'Abhi', age: 23 };
for (let key in user3) {
    // console.log(key)
}


// Q4 — for...of with Object.values() (values)
const user4 = { name: 'Abhi', age: 23 };
for (let value of Object.values(user4)) {
    // console.log(value)
}

// Q5 — for...of with Object.entries() (key-value pairs)
const user5 = { name: 'Abhi', age: 23 };
for (let [key, value] of Object.entries(user5)) {
    // console.log(key,value)
}

// Q6 — for...in Includes Inherited Keys
const parent6 = { p: 1 };
const child = Object.create(parent6);
child.c = 2;
for (let key in child) {
    // console.log(key);
}

// Q7 — for...of Directly on Object (Error?)
const obj7 = { a: 1, b: 2 };
// for(let value of obj7){
//     // console.log(value)
// }

// Q8 — Object.keys() with Array
const arr8 = ['x', 'y', 'z'];
// console.log(Object.keys(arr8));

// Q9 — Object.values() with Mixed Object
const obj9 = { a: 'Hello', b: 42, c: true };
// console.log(Object.values(obj9))


// Q10 — Object.entries() in Destructuring
const obj = { lang: "JS", level: "Beginner" };

for (let [key, value] of Object.entries(obj)) {
    // console.log(`${key} => ${value}`);
}


// Q11 — for...in with Array Indexes
const nums11 = [10, 20, 30];
nums11.extra = 40;

for (let key in nums11) {
    //   console.log(key)
}

// Q12 — for...of Skips Non-Indexed Keys
const nums12 = [10, 20, 30];
nums12.extra = 40;

for (let values of nums12) {
    // console.log(values)
}


// Q13 — Iterating Over String
for (let char of 'Hi') {
    // console.log(char)
}

// Q14 — Object.keys() on Nested Object
const user14 = {
    name: 'Abhi',
    address: { city: 'Delhi', zip: 110001 }
};

// console.log(Object.keys(user14));

// Q15 — Object.entries() + for...of
const obj15 = { a: 1, b: 2, c: 3 };
for (const [k, v] of Object.entries(obj15)) {
    // console.log(k,v)
}

// Q16 — Deleting Keys While Iterating (for...in)
const obj16 = { a: 1, b: 2, c: 3 };
for (let key in obj16) {
    // console.log(key);
    delete obj16.b;
};

// Q17 — Adding Keys While Iterating (for...in)
const obj17 = { a: 1, d: 2 };
for (let key in obj17) {
    // console.log(key);
    obj17.b = 2;
    obj17.c = 3;
}

// Q18 — Modifying Array While Iterating (for...of)
const arr18 = [1, 2, 3];
for (let num of arr18) {
    // console.log(num);
    arr18.push(num + 3);
    if (arr18.length > 6) break;

}

// Q19 — Non-Enumerable Properties & for...in
const obj19 = { a: 1 };
const copyObj = Object.defineProperty(obj19, 'b', { value: 2, enumerable: false });
for (let key in obj19) {
    // console.log(key);
};

// console.log(copyObj);


// Q20 — Object.keys() Ignores Prototype Keys
const proto = { p: 1 };
const obj20 = Object.create(proto);
obj20.a = 2;

// console.log(Object.keys(obj20));


// Q21 — for...in with array
const arr21 = [10, 20, 30];
arr21.extra = 40;

for (let key in arr21) {
    // console.log(key)
}




// 1. Count Properties in an Object
// Problem:
// Write a function countProps(obj) that counts how many properties (keys) exist in an object.

// Example:

// Input: { a: 1, b: 2, c: 3 }
// Output: 3

// Edge Cases:
// Empty object → 0
// Properties with undefined values still count.

const prob1 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(prob1).length)


// 2. Sum All Numeric Values in Object
// Problem:
// Write a function sumObjectValues(obj) that sums all numeric values inside an object.

// Example:

// Input: { a: 10, b: "hi", c: 20 }
// Output: 30

// Edge Cases:
// No numeric values → 0
// Nested objects are ignored.


const prob2 = { a: 10, b: 'hi', c: 20 }

function sumObjectValues(obj) {
    let sum = 0;
    for (let value of Object.values(obj)) {
        if (typeof value === 'number') {
            sum += value
        }
    }
    return sum
}

console.log(sumObjectValues(prob2))




// 3. Iterate Over Array and Double Values
// Problem:
// Write a function doubleArray(arr) that returns a new array with all elements doubled using for…of.

// Example:

// Input: [1, 2, 3]
// Output: [2, 4, 6]

// Edge Cases:
// Empty array → return empty array.


const prob3 = [1, 2, 3];
function doubleArray(arr) {
    let result = [];
    for (let value of arr) {
        result.push(value *= 2)
    }
    return result
}

console.log(doubleArray(prob3))



// 4. Convert Object to Array of [key, value] Pairs
// Problem:
// Write a function objectToPairs(obj) that converts an object to an array of [key, value] pairs using Object.entries().

// Example:

// Input: { a: 1, b: 2 }
// Output: [["a", 1], ["b", 2]]

// Edge Cases:
// Empty object → [].

const prob4 = { a: 1, b: 2 };
function objectToPairs(obj) {
    return Object.entries(obj)
}
console.log(objectToPairs(prob4))




// 5. Reverse Keys of Object
// Problem:
// Write a function reverseObjectKeys(obj) that returns an array of keys in reverse order using Object.keys().

// Example:

// Input: { a: 1, b: 2, c: 3 }
// Output: ["c", "b", "a"]
// Edge Cases:

// Empty object → [].

const prob5 = { a: 1, b: 2, c: 3 };

function reverseObjectKeys(obj) {
    const arr = Object.keys(obj);
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}

console.log(reverseObjectKeys(prob5))




// 6. Count String Lengths in an Array
// Problem:
// Given an array of strings, return an object where each key is the string and the value is its length.
// Use for...of.

// Example:
// Input: ["hi", "hello", "ok"]
// Output: { hi: 2, hello: 5, ok: 2 }

// Edge Cases:
// Empty array → return {}.
// Strings with spaces → count spaces as well.


const prob6 = ['hi', 'hello', 'ok'];

function keyCountArray(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = arr[i].length;
    }
    return result
}


console.log(keyCountArray(prob6));




// 7. Find Keys with Even Values
// Problem:
// Given an object, return an array of keys whose values are even numbers.
// Use for...in.

// Example:
// Input: { a: 2, b: 3, c: 4 }
// Output: ["a", "c"]

// Edge Cases:
// No even values → return empty array.
// Negative even numbers count as even.

const prob7 = { a: 2, b: 3, c: 4 };

function getEvenKeys(obj) {
    let result = [];
    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            result.push(key);
        }
    }
    return result
}

console.log(getEvenKeys(prob7))



// 8. Convert Entries Back to Object
// Problem:
// You are given an array of [key, value] pairs. Convert it back into an object.
// Use Object.fromEntries().

// Example:

// Input: [["a", 1], ["b", 2]]
// Output: { a: 1, b: 2 }

// Edge Cases:
// Empty array → return {}.
// Duplicate keys → last one overwrites.


const prob8 = [['a', 1], ['b', 2]];

function arrayToObject(arr) {
    return Object.fromEntries(arr);
}

console.log(arrayToObject(prob8))




// 9. Sum All Values in Nested Objects
// Problem:
// Given an object where values may be numbers or nested objects, return the sum of all numbers.
// Use for...in recursively.

// Example:
// Input: { a: 2, b: { x: 3, y: { z: 5 } } }
// Output: 10

// Edge Cases:
// Empty object → return 0.
// No numbers at all → return 0.


const prob9 = { a: 2, b: { x: 3, y: { z: 5 } } }

function getSum(obj) {
    // let key = '';
    let result = 0;
    const sum = (obj2) => {
        for (let key in obj2) {
            let value = obj2[key];
            if (typeof obj2[key] === 'object') {
                sum(value);
            } else {
                result += value
            }
        }
    }
    sum(obj);
    return result
}

console.log(getSum(prob9));



// 10. Group Words by First Letter
// Problem:
// Given an array of words, group them by their first letter into an object.
// Use for...of.

// Example:

// Input: ["apple", "ant", "banana", "ball"]
// Output: { a: ["apple", "ant"], b: ["banana", "ball"] }

// Edge Cases:
// Empty array → return {}.
// Words starting with capital vs lowercase → treat as same letter or separate.


const prob10 = ['apple', 'ant', 'banana', 'ball'];

function arrayOfWords(arr) {
    let result = {};
    for (let value of arr) {
        let firstWord = value.slice(0, 1);
        if (firstWord === value.slice(0, 1)) {
            if (!result[firstWord]) {
                result[firstWord] = [];
            }
            result[firstWord].push(value)

        }
    }
    return result
}
console.log(arrayOfWords(prob10))



// 11. Invert Object Keys and Values
// Problem:
// Given an object, return a new object where keys become values and values become keys.
// Use Object.entries() and any loop.

// Example:

// Input: { a: 1, b: 2, c: 3 }
// Output: { 1: "a", 2: "b", 3: "c" }

// Edge Cases:
// Duplicate values → last key overwrites.
// Non-string values as keys → auto-convert to string.

const prob11 = { a: 1, b: 2, c: 3 };
function invertObjectValueKeys(obj) {
    let result = {};
    for (let key in obj) {
        const value = obj[key];
        result[value] = key
    }
    return result
}

console.log(invertObjectValueKeys(prob11))



// 12. Count Frequency of First Letters
// Problem:
// Given an array of strings, return an object counting how many words start with each letter.
// Use for...of.

// Example:

// Input: ["apple", "ant", "banana", "ball", "bat"]
// Output: { a: 2, b: 3 }

// Edge Cases:
// Empty array → {}.
// Mixed case letters → decide if case-sensitive.


const prob12 = ['apple', 'ant', 'banana', 'ball', 'bat'];

function firstLetterFrequency(arr){
  let result = {};
  for(let value of arr){
    let firstWord = value.slice(0,1);
    if(value.slice(0,1) === firstWord){
        result[firstWord] = (result[firstWord] || 0) + 1;
    }
  }
  return result;
}

console.log(firstLetterFrequency(prob12))


// 15. Find All Keys Containing a Letter
// Problem:
// Given an object and a letter, return an array of keys that contain that letter.
// Use Object.keys().

// Example:

// Input: { apple: 1, banana: 2, mango: 3 }, letter = "a"
// Output: ["apple", "banana", "mango"]

// Edge Cases:
// Case sensitivity.
// No keys match → empty array.


