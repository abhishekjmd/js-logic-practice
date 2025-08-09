// 🧩 Problem 1: map with side effects
let result1 = [1, 2, 3].map(num => {
    // console.log(num);
    return num * 2
})

// console.log(result1);

// 🧩 Problem 2: filter and truthy values
const arr2 = [0, 1, false, 2, '', 3];
const filtered2 = arr2.filter(Boolean);
// console.log(filtered2)

// 🧩 Problem 3: reduce with no initial value
const nums3 = [1, 2, 3, 4];
const output3 = nums3.reduce((acc, curr) => {
    return acc + curr
});
// console.log(output3);


// 🧩 Problem 4: forEach return behavior
const res4 = [10, 20, 30].forEach(num => {
    return num * 2
})

// console.log(res4)

// 🧩 Problem 5: map chaining
const nums5 = [1, 2, 3];
const final = nums5.map(x => x + 1).map(x => x * 2);
// console.log(final);

// 🧩 Problem 6: map and object references
const arr6 = [{ count: 1 }, { count: 2 }];
const newArr6 = arr6.map(obj => {
    obj.count += 1
    return obj
})

// console.log(arr6)

// 🧩 Problem 7: filter() with index condition
const names7 = ['Alex', 'Bob', 'Charlie', 'Dave'];
const filtered7 = names7.filter((num, index) => index % 2 === 0);
// console.log(filtered7)

// 🧩 Problem 8: reduce() returning an object
const letters8 = ['a', 'b', 'a', 'c', 'b'];
const count8 = letters8.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
}, {})

// console.log(count8)

// 🧩 Problem 9: some() with numbers
const nums9 = [3, 7, 9];
const result9 = nums9.some(n => n % 2 === 0);
// console.log(result9);

// 🧩 Problem 10: map with parseInt
const nums10 = ['10', '10', '10'];
const parsed10 = nums10.map(parseInt);
// console.log(parsed10);

// 🧩 Problem 11: reduce() mutation trick
const arr10 = [1, 2, 3];
const outPut10 = arr10.reduce((acc, curr, index) => {
    acc.push(curr * 2);
    return acc
}, [])

// console.log(outPut10)

// 🧩 Problem 12: Chained map() + filter() subtle bug
const nums12 = [1, 2, 3, 4];
const result12 = nums12.map(n => {
    if (n % 2 === 0) return;
    return n * 2
}).filter(Boolean);
// console.log(result12);

// 🧩 Problem 13: forEach() with this
const obj13 = {
    nums13: [1, 2, 3],
    factor: 2,
    multiply() {
        this.nums13.forEach(function (n) {
            console.log(n * this.factor)
        })
    }
}

// obj13.multiply();

// 🧩 Problem 14: reduce() with no return
const nums14 = [1, 2, 3];
const result = nums14.reduce((acc, curr) => {
    acc += curr
})

// console.log(result);


// 🧩 Problem 15: filter() with indexOf
const arr15 = [1, 2, 2, 3, 4, 4, 5];
const unique15 = arr15.filter((item, index) => {
    return arr15.indexOf(item) === index
})

// console.log(unique15);


// leetcode style questions

// 🧩 Q1: Double and Filter Even
// Given an array of numbers, return a new array where each number is doubled and only even results are included.

// Example:
// Input: [1, 2, 3, 4]
// Output: [4, 8]

const prob1 = [1, 2, 3, 4];
const probResult = prob1.map(num => { return num * 2 }).filter((n) => n % 2 === 0)
// console.log(probResult);





// 🧩 Q2: Count Frequency
// Given an array of strings, return an object showing the count of each string.
// Input: ["apple", "banana", "apple", "orange", "banana"]
// Output: { apple: 2, banana: 2, orange: 1 }


const prob2 = ['apple', 'banana', 'apple', 'orange', 'banana'];

function countFrequency(arr) {
    let result = {};
    arr.forEach((num, index) => {
        result[num] = (result[num] || 0) + 1
    })
    return result
}

// console.log(countFrequency(prob2));


// 🧩 Q3: Capitalize First Letters
// Given an array of words, return a new array where the first letter of each word is capitalized.

// Example:
// Input: ["hello", "world"]
// Output: ["Hello", "World"]



const prob3 = ['hello', 'world'];
function capitalizeFirstLetter(arr) {
    const result = arr.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1)
    });
    return result
}

// console.log(capitalizeFirstLetter(prob3));





// 🧩 Q4: Remove Duplicates
// Given an array, return a new array with only the first occurrence of each value, using HOFs (avoid Set).

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

const prob4 = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
    let result = arr.filter((value, index) => prob4.indexOf(value) === index);
    return result
}

// console.log(removeDuplicates(prob4))




// 🧩 Q5: Flatten an Array
// Given a 2D array (array of arrays), flatten it into a single array.

// Example:
// Input: [[1, 2], [3, 4], [5]]
// Output: [1, 2, 3, 4, 5]

const prob5 = [[1, 2], [3, 4], [5]];
function flattenArray(arr) {
    let result10 = [];
    const flatarr = (arr) => {

        for (let key in arr) {
            const value = arr[key];
            if (Array.isArray(value)) {
                flatarr(value)
            } else {
                result10.push(value);
            }
        }
    }
    flatarr(arr,)
    return result10
}

// console.log(flattenArray(prob5))




// 🧩 Q6: Group By Property
// Given an array of objects, group them by a given property name and return an object.
// Use reduce().

// Example:
// Input:
// [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" }
// ], "role"

// Output:
// {
//   admin: [
//     { name: "Alice", role: "admin" },
//     { name: "Charlie", role: "admin" }
//   ],
//   user: [
//     { name: "Bob", role: "user" }
//   ]
// }


const prob6 = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Charlie", role: "admin" }
]

function groupByProperty(arr, role) {
    let result = {};
    for (let value of arr) {
        const key = value[role];
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(value);
    }
    return result;
}

// console.log(groupByProperty(prob6, 'role'))




// 🧩 Q7: Average Score
// Given an array of student score objects, return the average score rounded to 2 decimal places.

// Example:
// Input: [
//   { name: "Alice", score: 90 },
//   { name: "Bob", score: 75 },
//   { name: "Charlie", score: 80 }
// ]
// Output: 81.67


const prob7 = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 80 }
]


function findAverage(arr) {
    let result = arr.reduce((acc, curr) => acc + curr.score, 0) / arr.length
    return result.toFixed(2);
}

// console.log(findAverage(prob7))




// 🧩 Q8: Extract Unique Tags
// Given an array of blog post objects (each having a tags array), return a sorted array of unique tags.

// Example:
// Input: [
//   { title: "Post 1", tags: ["js", "web", "frontend"] },
//   { title: "Post 2", tags: ["frontend", "design"] },
//   { title: "Post 3", tags: ["js", "node"] }
// ]
// Output: ["design", "frontend", "js", "node", "web"]


const prob8 = [
    { title: "Post 1", tags: ["js", "web", "frontend"] },
    { title: "Post 2", tags: ["frontend", "design"] },
    { title: "Post 3", tags: ["js", "node"] }
]


function uniqueTags(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let value of arr[i].tags) {
            if (!result.includes(value)) {
                result.push(value)
            }
        }
    }
    let final = result.sort();
    return final
}

// console.log(uniqueTags(prob8))




// 🧩 Q9: Transform CSV to Object
// You’re given a CSV string of user data and an array of keys.
// Return an array of objects mapping keys to values.

// Example:
// Input:
// csv = "Alice,25,Developer\nBob,30,Designer"
// keys = ["name", "age", "role"]

// Output:
// [
//   { name: "Alice", age: "25", role: "Developer" },
//   { name: "Bob", age: "30", role: "Designer" }
// ]