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
    // delete obj16.b;
};

// Q17 — Adding Keys While Iterating (for...in)
const obj17 = { a: 1, d: 2 };
for (let key in obj17) {
    // console.log(key);
    // obj17.b = 2;
    // obj17.c = 3;
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
const copyObj =  Object.defineProperty(obj19, 'b', { value: 2, enumerable: false });
for(let key in obj19){
    // console.log(key);
};

// console.log(copyObj);


// Q20 — Object.keys() Ignores Prototype Keys
const proto = { p: 1 };
const obj20 = Object.create(proto);
obj20.a = 2;

console.log(Object.keys(obj20));
