// 1. Spread Operator (Shallow Copy)
const obj1 = { x: 1, y: { z: 2 } };
const copy1 = { ...obj1 };
copy1.x = 100;
copy1.y.z = 200;
// console.log(obj1.x, obj1.y.z) 

// 2. Array Shallow Copy
const arr2 = [1, [2, 3]];
const copy2 = [...arr2];
copy2[0] = 99;
copy2[1][0] = 88;
// console.log(arr2[0], arr2[1][0]);

// 3. JSON Deep Copy
const obj3 = { a: 1, b: { c: 2 } };
const copy3 = JSON.parse(JSON.stringify(obj3));
copy3.b.c = 500;
// console.log(obj3.b.c)

// 4. structuredClone Deep Copy
const obj4 = { name: 'abhi', details: { age: 23 } };
const copy4 = structuredClone(obj4);
copy4.details.age = 30;
// console.log(obj4.details.age);





// 5. Object Inside Array (Shallow Copy)
// Problem:
// You have an array of objects:

// const arr5 = [{ score: 10 }, { score: 20 }];
// Make a shallow copy using the spread operator.

// Then:
// Change the first object’s score to 99 in the copy.
// Log the original array’s first object score.

// Edge Cases:
// Expect original array to be affected because it’s shallow.

// Log:
// Original first object score.

const arr5 = [{ score: 10 }, { score: 20 }];
const copy5 = { ...arr5 };
copy5[0].score = 99;
// console.log(arr5[0].score)




// 6. Array Inside Object (Shallow Copy)
// Problem:
// You have:

// const obj6 = { name: "Game", levels: [1, 2, 3] };
// Shallow copy it using the spread operator.
// In the copy:
// Push 4 into the levels array.
// Log the original object’s levels.

// Edge Cases:
// Expect original to be affected because nested array is referenced.

// Log:
// Original object’s levels.



const obj6 = { name6: "Game", levels: [1, 2, 3] };
const copy6 = { ...obj6 };
copy6.levels.push(4);
// console.log(obj6.levels);




// 7. Deep Copy with JSON
// Problem:
// You have:

// const obj3 = { title: "Book", chapters: ["Intro", "Story"] };
// Make a deep copy using JSON.parse(JSON.stringify()).
// In the copy:

// Change "Story" to "Ending".
// Log the original object’s chapters.

// Edge Cases:
// No change in original because it’s deep.

// Log:
// Original object’s chapters.


const obj7 = { title: 'Book', chapters: ['Intro', 'Story'] };

const copy7 = JSON.parse(JSON.stringify(obj7));
copy7.chapters[1] = 'Ending';
// console.log(obj7)




// 8. structuredClone with Nested Objects
// Problem:
// You have:

// const obj8 = { author: "Abhi", details: { books: 5, awards: ["Best Author"] } };
// Make a deep copy using structuredClone.
// In the copy:

// Add "Readers Choice" to awards.
// Log the original object’s awards.

// Edge Cases:
// Original should not be affected.

// Log:
// Original object’s awards.


const obj8 = { author: 'Abhi', details: { books: 5, awards: ['Best Author'] } };
const copy8 = structuredClone(obj8);
copy8.details.awards[0] = 'Readers Choice';
// console.log(obj8.details);



// 9. Function Property in Object
// Problem:
// You have:

// const obj9 = { x: 1, fn: () => "Hello" };
// Copy it using:

// Spread operator (shallow)
// JSON method (deep copy attempt)
// Then check:
// What happens to the function in JSON method?
// Is it preserved or lost?

// Edge Cases:
// JSON cannot copy functions — it will remove them.
// Spread operator will keep the reference.

// Log:
// typeof function in both copies.

const obj9 = { x: 1, fn: () => "Hello" };
const shallowCopy9 = { ...obj9 };
const deepCopy9 = JSON.parse(JSON.stringify(obj9));

// console.log(typeof shallowCopy9.fn);
// console.log(typeof deepCopy9.fn)



// 6. Nested Array of Objects (Shallow Copy Trap)
// Problem:

// const data6 = [
//   { id: 1, tags: ["A", "B"] },
//   { id: 2, tags: ["C"] }
// ];
// Create a shallow copy with the spread operator.
// Push "D" into the tags array of the first object in the copy.
// Log the original tags of the first object.

// Expected:
// Original is also modified because tags is shared


const data6 = [
    { id: 1, tags: ['A', 'B'] },
    { id: 2, tags: ['C'] }
]


const copyData6 = [...data6];
copyData6[0].tags.push('D');
// console.log(data6[0].tags)





// 7. Deep Copy Fix for Above
// Problem:
// Using JSON.parse(JSON.stringify()) or structuredClone,
// deep copy the same data1 array and do the same "D" push.

// Expected:
// Original is not modified.


const data7 = [
    { id: 1, tags: ['A', 'B'] },
    { id: 2, tags: ['C'] }
]

const copyDeep7 = JSON.parse(JSON.stringify(data7));
copyDeep7[0].tags.push('D');
// console.log(data7)





// 8. Array of Objects in Object (Shallow Copy)
// Problem:

// const obj8 = {
//   title: "Library",
//   books: [{ name: "JS" }, { name: "React" }]
// };
// Shallow copy using spread.
// Change "JS" to "TypeScript" in the copy.
// Log the original.

// Expected:
// Original is also changed.



const object8 = {
    title: 'Library',
    books: [{ name: 'JS' }, { name: 'React' }]
}


const copyShallow8 = {...object8};
copyShallow8.books[0].name = 'TypeScript';
// console.log(object8)



// 9. Object in Array in Object (Three Levels Deep)
// Problem:

// const data9 = [
//   {
//     category: "Fruits",
//     items: [{ name: "Apple" }, { name: "Banana" }]
//   }
// ];
// Shallow copy using spread.
// Change "Apple" to "Mango" in the copy.
// Log original.

// Expected:
// Original changes — shallow copy only breaks first level.


const data9 = [
  {
    category: "Fruits",
    items: [{ name: "Apple" }, { name: "Banana" }]
  }
];


const copyShallow9 = [...data9];
copyShallow9[0].items[0].name = 'Mango'
// copyShallow9.items[0].name = 'Mango';
console.log(data9)