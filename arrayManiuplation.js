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
console.log(result33);


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
const array5 = [1,-2,3,-4,5];
const positivenums = array5.filter(nums=>nums>0)
// console.log(positivenums);

