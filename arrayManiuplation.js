// Question 1: Changing Array Length
const arr = [1, 2, 3];
arr.length = 5;
// console.log(arr);

// Question 2: Using splice() to Modify Elements
const numbers = [1, 2, 3, 4];
numbers.splice(1, 2, 99, 100);
// console.log(numbers);

// Question 3: Array Reference with concat()
const a = [1, 2];
const b = [3, 4];
const concat = a.concat(b);
b[0] = 99
// console.log(concat)

// Question 4: Mutating Array Inside map()
const arrs = [1, 2, 3];
arrs.map((value, index, array) => {
    array[index + 1] = value + 10;
    return value
})
// console.log(arrs)

// Question 5: Resetting and Pushing into Array
const items = ['a', 'b', 'c', 'd'];
items.length = 0;
items.push('x');
// console.log(items);

//  Question 6: Array.fill with reference type
const arrr = new Array(3).fill([]);
// arrr[0].push(1);
arrr[0].push(2)
// console.log(arrr);

//  Question 7: Splice vs Slice
const arr7 = [1, 2, 3, 4, 5];
const spliced = arr7.splice(2, 2);
// console.log(arr7);

// Question 8: Map Return Behavior
const arr8 = [1, 2, 3];
const mapped = arr8.map(num => {
    if (num % 2 === 0) return;
    return num * 2
})

// console.log(mapped);

// Question 9: FlatMap Complexity
const arr9 = [1, 2, 3];
const res = arr9.flatMap(x => [x * 2, x * 3]);
// console.log(res);

// Question 10: Array.from with Mapping
const str = "123";
const resp = Array.from(str, Number);
// console.log(resp);


// Question 11: Array Cloning and Mutation
const arr11 = [1, 2, 3];
const copy = arr11.slice();
copy[0] = 99;
// console.log(arr11)

// Question 12: Flatten Array
const arr12 = [1, [2, [3, 4]]];
const flatenArr = arr12.flat();
// console.log(arr12.flat())

// Question 13: FlatMap Usage
const nums13 = [1, 2, 3];
const respp = nums13.flatMap(n => [n * 2]);
// console.log(respp);

// Question 14: Splice Behavior
const fruits = ['apple', 'banana', 'mango'];
fruits.splice(1, 1, 'grape');
// console.log(fruits);

// Question 15: Array Length Property
const list15 = [10, 20, 30];
list15.length = 1;
// console.log(list15)

// Question 16: Array slice
const arr16 = [1, 2, 3, 4, 5];
const result16 = arr16.slice(1, 4);
// console.log(result16);

//  Question 17: Array splice
const arr17 = [1, 2, 3, 4, 5];
arr17.splice(2, 2, 99, 100);
// console.log(arr17);

// Question 18: Array findIndex   // first element which will fulfil the condition 
const arr18 = [10, 20, 30, 40];
const result18 = arr18.findIndex(num => num > 25);
// console.log(result18)

// Question 19: Array includes
const arr19 = ['pen', 'paper', 'notebook'];
// console.log(arr19.includes('pen'))

// Question 20: Array some
const nums20 = [2, 4, 6, 8];
const result20 = nums20.some(num => num % 2 !== 0);
// console.log(result20);

// Question 21: every()
const nums21 = [2, 4, 6, 8];
const result21 = nums21.every(num => num % 2 === 0);
// console.log(result21)

// Question 22: flat()
const arr22 = [1, [2, [3, [4]]]];
const result22 = arr22.flat(2);
// console.log(result22);

// Question 23: reduce()
const arr23 = [1, 2, 3, 4];
const sum23 = arr23.reduce((acc, val) => acc + val, 0);
// console.log(sum23)

// Question 24: map() with string
const words24 = ['a', 'b', 'c'];
const capitalized = words24.map(word => word.toUpperCase());
// console.log(capitalized);

// Question 25: filter()
const numbers25 = [10, 15, 20, 25];
const filtered = numbers25.filter(num => num > 15);
// console.log(filtered);

// 🔹 26. Chained map and filter
const nums26 = [1, 2, 3, 4, 5, 6];
const result26 = nums26.map(n => n * 2).filter(n => n % 4 === 0);
// console.log(result26);

// 🔹 27. Sparse array behavior
const arr27 = [1, , 3];
// console.log(arr27.map(x => x * 2))

// 🔹 28. FlatMap
const data28 = [1, 2, 3];
const result28 = data28.flatMap(n => [n, n * 2]);
// console.log(result28);

// 🔹 29. Reducing to object
const letters = ['a', 'b', 'a', 'c'];
const count = letters.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

// console.log(count);

// 🔹 30. Includes with object reference
const a30 = { x: 1 };
const b30 = { x: 2 };

const arr30 = [a30];
// console.log(arr.includes(b30));
// console.log(arr30)

// ✅ 31. ReduceRight with string
const chars31 = ['a', 'b', 'c'];
const res31 = chars31.reduceRight((acc, val) => acc + val);
// console.log(res31); // ? 

// ✅ 32. Destructuring in for-of
const users32 = [['abhi', 23], ['tiwari', 30]];
for (const [name, age] of users32) {
    // console.log(name,age)
}

// ✅ 33. Spread with strings
const word33 = 'Hi!';
const result33 = [...word33];
// console.log(result33);


// 🔢 LeetCode-Style Array Manipulation
// 1. Return the sum of all elements in an array.
const array1 = [1, 2, 3, 4];
const sum = array1.reduce((acc, curr) => acc + curr, 0)
// console.log(sum);

// 2. Return a new array with each element doubled.
const array2 = [1, 2, 3];
const doubleArr = array2.map(num => num * 2);
// console.log(doubleArr);

// 3. Find the maximum value in an array.
const array3 = [1, 7, 3, 9, 5];
const maximum = array3.reduce((acc, curr) =>
    acc > curr ? acc : curr
    , 0)

// console.log(maximum)

// 4. Count how many even numbers are in the array.
const array4 = [1, 2, 3, 4, 5, 6];

const evenCount = array4.filter(num => num % 2 === 0).length;
// console.log(evenCount);

// 5. Return a new array that contains only the positive numbers.
const array5 = [1, -2, 3, -4, 5];
const positivenums = array5.filter(nums => nums > 0)
// console.log(positivenums);


// 6. Remove duplicates from an array.
// Example: [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]

const array6 = [1, 2, 2, 3, 4, 4];

const removeDuplicates = array6.filter((value, index) => array6.indexOf(value) === index)
// console.log(removeDuplicates)

// 7. Return the second largest number in the array.
const arr07 = [30, 55, 28, 20];
const sortt = arr07.sort((a, b) => b - a)[1];
// console.log(sortt)


// try finding third largest number 
function secondLarge(arr) {
    // let result = 0;
    let secondMax = 0;
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num
        } else if (num > secondMax && num < max) {
            secondMax = num
        }
    }
    return secondMax;
}

// console.log(secondLarge(arr07))

// 8. Rotate an array to the right by k steps.
// Example: ([1, 2, 3, 4, 5], k = 2) → [4, 5, 1, 2, 3]


const array8 = [1, 2, 3, 4, 5];
// pops basically removes the last element and returns it
// so array8.pop() will return 5
// unshift adds element at the starting of array
// now array8.unshift(5) will add 5 at the starting of the array
function rotate(arr, steps) {
    for (let i = 0; i < steps; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}

// console.log(rotate(array8, 2))

// 9. Find the intersection of two arrays (common elements).
// Example: [1, 2, 3, 4], [3, 4, 5, 6] → [3, 4]

const array9a = [1, 2, 3, 4];
const array9b = [3, 4, 5, 6];
const mergedArr = [...array9a, ...array9b];

const commonArr = mergedArr.filter((num, index) => mergedArr.indexOf(num) !== index)

// console.log(commonArr)


// 10. Return the array in reverse order, without using .reverse().
// Example: [1, 2, 3] → [3, 2, 1]
const array10 = [1, 2, 3];

function reverseArr(arr) {
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i])
    }

    return reverse;
}

// console.log(reverseArr(array10))

// 11. Find the Missing Number
// Problem:
// You are given an array containing n distinct numbers taken from 0, 1, 2, ..., n.
// Find the one number that is missing from the array.

// Example:
// Input: [3, 0, 1]
// Output: 2

// Edge Cases:
// Missing number at start ([1,2,3]) → 0
// Missing number at end ([0,1,2]) → 3
// Log: Missing number.

const array11 = [0, 1, 2, 3];
const inputarr = [1, 2, 0]

function missingNums(inputarr) {
    const actualsum = inputarr.reduce((acc, cur) => acc + cur, 0);
    const n = inputarr.length;
    const expectedSum = (n * (n + 1)) / 2;
    return expectedSum - actualsum
}

// console.log(missingNums(inputarr))


// 12. Find the First Non-Repeating Element
// Problem:
// Given an array, find the first element that does not repeat.

// Example:
// Input: [4, 5, 1, 2, 1, 4]
// Output: 5

// Edge Cases:
// All repeating → return null
// Single element array → element itself
// Log: First non-repeating element (or null).


const array12 = [4, 20, 20, 7, 9, 4];
function firstNonRepeatingNumber(arr) {
    let count = {};
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1
    }

    for (let num of arr) {
        if (count[num] === 1) {
            return num
        }
    }
    return null
}

// console.log(firstNonRepeatingNumber(array12))



// 13. Find All Duplicate Numbers
// Problem:
// Return all numbers that appear more than once in the array.

// Example:
// Input: [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [2, 3]

// Edge Cases:
// No duplicates → []
// All duplicates → unique set of duplicates only
// Log: Array of duplicate numbers.


const array13 = [4, 3, 2, 7, 8, 2, 3, 1];
const dublicateNums = array13.filter((value, index) => array13.indexOf(value) !== index)
// console.log(dublicateNums)




// 14. Group Elements by Frequency
// Problem:
// Given an array, group numbers based on how many times they appear.

// Example:
// Input: [1, 1, 2, 2, 2, 3]
// Output: { "1": 2, "2": 3, "3": 1 }

// Edge Cases:
// All unique → all have frequency 1
// All same → one key with full count
// Log: Object of frequency counts.

const array14 = [1, 1, 2, 2, 2, 3];

function countFrequency(arr) {
    let count = {};
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }
    return count;

}

// console.log(countFrequency(array14));



// 15. Move All Zeroes to the End
// Problem:
// Given an array, move all 0s to the end while keeping the order of non-zero elements the same.

// Example:
// Input: [0, 1, 0, 3, 12]  
// Output: [1, 3, 12, 0, 0]

// Edge Cases:
// All zeroes → [0,0,0] → [0,0,0]
// No zeroes → return array unchanged
// Mixed negative numbers

// Log: Final rearranged array.


const array15 = [0, 1, 0, 3, 12];

function zerosatEnd(arr) {
    let withoutzeroarr = [];
    let zeroarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroarr.push(arr[i])
        } else {
            withoutzeroarr.push(arr[i])
        }

    }
    return [...withoutzeroarr, ...zeroarr];
}
// console.log(zerosatEnd(array15))

// 16. Check if Array is Sorted
// Problem:
// Check whether the given array is sorted in non-decreasing order.

// Example:
// Input: [1, 2, 2, 3] → true  
// Input: [1, 3, 2] → false

// Edge Cases:
// Empty array → true
// Single element array → true
// All equal elements → true
// Log: true or false.

const array16 = [1, 3, 2];

function isSorted(arr) {
    let result = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] >= arr[i]) {
            result = true
        } else {
            result = false
        }
    }
    return result
}

// console.log(isSorted(array16))


// 17. Find k-th Largest Element
// Problem:
// Find the k-th largest element in the array.

// Example:
// Input: [3, 2, 1, 5, 6, 4], k = 2  
// Output: 5

// Edge Cases:
// k = 1 → largest number
// k > array length → return null
// Duplicates in array
// Log: k-th largest number.

const array17 = [3, 2, 1, 5, 6, 4];
const sort17 = array17.sort((a, b) => b - a)[2];
// console.log(sort17)

function sort17(arr){
    for( i = 0;)
    return arr;
} 



// 18. Merge Two Sorted Arrays
// Problem:
// Merge two sorted arrays into one sorted array (without using .sort()).
// Example:

// Input: [1, 3, 5], [2, 4, 6]  
// Output: [1, 2, 3, 4, 5, 6]

// Edge Cases:
// One array empty → return the other
// All elements from one array smaller than the other
// Log: Merged sorted array.

const array18a = [1, 3, 5];
const array18b = [2, 4, 6];
function mergeSortedArray(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    for (let i = 0; i < mergedArray.length - 1; i++) {
        for (let j = 0; j < mergedArray.length - i - 1; j++) {
            if (mergedArray[j] > mergedArray[j + 1]) {
                let temp = mergedArray[j];
                mergedArray[j] = mergedArray[j + 1];
                mergedArray[j + 1] = temp;
            }
        }
    }
    return mergedArray
}

console.log(mergeSortedArray(array18a, array18b))