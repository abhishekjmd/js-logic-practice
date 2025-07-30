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
const arr11 = [1,2,3];
const copy = arr11.slice();
copy[0] = 99;
// console.log(arr11)

// Question 12: Flatten Array
const arr12 = [1,[2,[3,4]]];
const flatenArr = arr12.flat();
// console.log(arr12.flat())

// Question 13: FlatMap Usage
const nums13 = [1, 2, 3];
const respp = nums13.flatMap(n => [n * 2]);
// console.log(respp);

// Question 14: Splice Behavior
const fruits = ['apple','banana','mango'];
fruits.splice(1,1,'grape');
// console.log(fruits);

// Question 15: Array Length Property
const list15 = [10,20,30];
list15.length = 1;
// console.log(list15)

// Question 16: Array slice
const arr16 = [1,2,3,4,5];
const result16 = arr16.slice(1,4);
// console.log(result16);

//  Question 17: Array splice
const arr17 = [1, 2, 3, 4, 5];
arr17.splice(2, 2, 99, 100);
// console.log(arr17);

// Question 18: Array findIndex   // first element which will fulfil the condition 
const arr18 = [10,20,30,40];
const result18 = arr18.findIndex(num=>num>25);
// console.log(result18)

// Question 19: Array includes
const arr19 = ['pen','paper','notebook'];
// console.log(arr19.includes('pen'))

// Question 20: Array some
const nums20 = [2,4,6,8];
const result20 = nums20.some(num=>num % 2 !==0 );
// console.log(result20);