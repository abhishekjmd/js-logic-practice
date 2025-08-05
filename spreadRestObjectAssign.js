// 1. Copy Array Using Spread
const arr1 = [1, 2, 3];
const copy1 = [...arr1];
// console.log(arr1 === copy1)

// 2. Merge Arrays with Spread
const a2 = [10, 20];
const b2 = [30, 40];
const merged2 = [...a2, ...b2];
// console.log(merged2)

// 3. Rest in Array Destructuring
const [x, ...y] = [5, 6, 7, 8];
// console.log(x,y)

// 4. Object.assign Copy
const obj4 = { a: 1, b: 2 };
const copyObj4 = Object.assign({}, obj4);
// console.log(copyObj4);
// console.log(obj4 === copyObj4);

// 5. Merge Objects with Spread
const obj5a = { name: 'Abhi', age: 23 };
const obj5b = { age: 30, city: 'Delhi' };
const merged5 = { ...obj5a, ...obj5b };
// console.log(merged5)

// 6. Spread with Nested Arrays
const arr6a = [1, [2, 3]];
const arr6b = [...arr6a];
arr6b[1][0] = 99;
// console.log(arr6a);
// console.log(arr6b)

// 7. Rest Operator in Function Parameters
function sum7(first, ...rest) {
    return rest.reduce((acc, val) => acc + val, first);
}

// console.log(sum7(1,2,3,4))

// 8. Merge Multiple Objects with Spread
const obj8a = { a: 1, b: 2 };
const obj8b = { b: 3, c: 4 };
const obj8c = { c: 5, d: 6 };

const merged8 = { ...obj8a, ...obj8b, ...obj8c };
// console.log(merged8)

// 9. Clone Object with Object.assign (Shallow Copy)
const user9 = { name: "Abhi", skills: ["JS", "React"] };
const clone9 = Object.assign({}, user9);
clone9.skills.push("Node.js");
// console.log(user9.skills);
// console.log(clone9.skills);

// 10. Spread in Array Destructuring with Defaults
const nums = [5];
const [a = 1, b = 2, ...rest] = nums
// console.log(a, b, rest)





// 1. Merge Two Arrays Without Duplicates
// Problem:
// Given two arrays, merge them into one array without duplicates using the spread operator.

// Example:

// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 3, 4, 5]

// Edge Cases:
// One array empty → return other array.
// All elements same → return unique set.

const prob1a = [1, 2, 3];
const prob1b = [3, 4, 5];
const mergeda = [...prob1a, ...prob1b];
const filtered = mergeda.filter((value, index) => mergeda.indexOf(value) === index)
// console.log(filtered)




// 2. Clone and Modify Array
// Problem:
// Given an array, create a shallow clone using spread, then modify the clone without affecting the original (for primitives).

// Example:

// Input: [10, 20, 30]
// Modify clone → change first element to 99

// Output: original = [10, 20, 30], clone = [99, 20, 30]

// Edge Cases:
// Empty array.
// Array with only one element.


const prob2 = [10, 20, 30];
const copyProb2 = [...prob2];
copyProb2[0] = 99;
// console.log(copyProb2);
// console.log(prob2);




// 3. Merge Multiple Objects
// Problem:
// Merge 3 objects into one using spread. Later objects should overwrite earlier keys.

// Example:

// Input: {a: 1}, {b: 2, a: 5}, {c: 3}
// Output: {a: 5, b: 2, c: 3}

// Edge Cases:
// Overlapping keys.
// Empty object.

const prob3a = { a: 1 };
const prob3b = { b: 2, a: 5 };
const prob3c = { c: 3 };

const mergedProb3 = { ...prob3a, ...prob3b, ...prob3c };
// console.log(mergedProb3)



// 4. Sum of Numbers Using Rest
// Problem:
// Write a function sum(...nums) that takes any number of numbers and returns their sum.

// Example:
// Input: sum(1, 2, 3, 4)
// Output: 10

// Edge Cases:
// No arguments → return 0.
// Single number → return that number.

function sumProb4(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// console.log(sumProb4(1, 2, 3, 4))




// 5. Shallow Copy Pitfall
// Problem:
// Clone an object containing an array using Object.assign. Modify the array in the clone and check if it affects the original.

// Example:

// Input: { skills: ["JS", "React"] }
// Modify → push "Node.js" to cloned object's skills
// Output: Both original and cloned skills updated

// Edge Cases:
// Empty array.
// Nested object inside object.

const prob5 = {
    skills: ['JS', 'React']
}

const copyProb5 = Object.assign({}, prob5);
copyProb5.skills.push('Node.js');
// console.log(prob5);
// console.log(copyProb5);



// 6. Rotate Array Using Spread
// Problem:
// Rotate an array to the right by k positions using spread syntax.

// Example:

// Input: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

// Edge Cases:
// k is 0 → return same array.
// k > array length → rotate with k % length.

const prob6 = [1, 2, 3, 4, 5];
const copyProb6 = [...prob6];

function rotateArray(arr, k) {
    //   let result;
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

// console.log(rotateArray(prob6, 2))






// 7. Merge and Sort Numbers
// Problem:
// Merge multiple number arrays using spread and return them sorted in ascending order.

// Example:

// Input: [3, 1], [4, 2], [7]
// Output: [1, 2, 3, 4, 7]

// Edge Cases:
// Empty arrays.
// All numbers same.

// const prob7a = [3, 1];
// const prob7b = [4, 2];
// const prob7c = [7];
// const mergedProb7 = [...prob7a, ...prob7b, ...prob7c];
// function ascendingOrder(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= arr[i + 1]) {
//             arr[i + 1] = arr[i];
//             arr[i] = arr[i + 1]
//         }
//     }
//     return arr

// }
// // const filteredMerged7 = mergedProb7.filter(nums,index=>mergedProb7)

// console.log(ascendingOrder(mergedProb7))



// const arrRandom = [1, 8, 4, 2, 9, 7];
// function sortArray(arr) {
//     let sorted = [];
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i]
//             sorted.push(min)
//         }
//     }
//     return sorted

// }

// console.log(sortArray(arrRandom))




// 8. Remove First Element Using Rest
// Problem:
// Write a function that removes the first element from an array using rest syntax and returns the rest.

// Example:

// Input: [10, 20, 30, 40]
// Output: [20, 30, 40]

// Edge Cases:
// Empty array → return empty array.
// Single element → return empty array.


const prob8 = [10, 20, 30, 40];
const [a8, ...rest8] = prob8
// console.log(rest8)




// 9. Merge Objects with Nested Array
// Problem:
// Merge two objects containing arrays and make sure both arrays are combined (not overwritten).

// Example:

// Input: { skills: ["JS"] }, { skills: ["React"] }
// Output: { skills: ["JS", "React"] }

// Edge Cases:
// One array empty.
// Same skill twice → keep duplicates for now.


const prob9a = {
    skills: ['JS']
}

const prob9b = {
    skills: ['React']
}

const mergedProb9 = [...prob9a.skills, ...prob9b.skills];
// console.log(mergedProb9);





// 10. Clone Array of Objects (Shallow Copy)
// Problem:
// Clone an array of objects using spread.
// Modify one object in the clone and check if the original changes.

// Example:

// Input: [{ name: "Abhi" }, { name: "Sam" }]
// Modify → clone[0].name = "Changed"

// Output: Original also affected → shallow copy

// Edge Cases:
// Empty array.
// Objects with only primitives

const prob10 = [{name:'Abhi'},{name:'Sam'}];
const copyProb10 = [...prob10];
copyProb10[0].name = 'Changed';
// console.log(prob10)