// 🔹 Problem 1: Accessing Object Properties
const user = {
  name: "Alice",
  age: 25,
};

// console.log(user.name); // ?
// console.log(user["age"]); // ?


// 🔹 Problem 2: Dynamic Property Access
const key = "role";
const employee = {
  name: "John",
  role: "Engineer",
};

// console.log(employee[key]); // ?


// 🔹 Problem 3: Nested Objects
const company = {
  name: "OpenAI",
  address: {
    city: "San Francisco",
    zip: 94110,
  },
};

// console.log(company.address.city); // ?
// console.log(company["address"]["zip"]); // ?


// 🔹 Problem 4: Object Reference Behavior
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 5;

// console.log(obj1.a); // ?


// 🔹 Problem 5: Adding New Properties
const car = { brand: "Toyota" };
car.model = "Camry";
car["year"] = 2023;

// console.log(car); // ?


// 🔹 Problem 6: Deleting Properties
const person = {
  name: "Sam",
  age: 30,
};

delete person.age;
// console.log(person); // ?


// 🔹 Problem 7: Checking Property Existence
const book = {
  title: "Atomic Habits",
  author: "James Clear",
};

// console.log("title" in book); // ?
// console.log(book.hasOwnProperty("price")); // ?


// 🔹 Problem 8: Object.keys and Object.values
const setting = {
  darkMode: true,
  fontSize: "16px",
};

// console.log(Object.keys(setting)); // ?
// console.log(Object.values(setting)); // ?


// 🔹 Problem 9: Overwriting Properties
const config = {
  debug: true,
};

// config.debug = false;
// console.log(config); // ?


// 🔹 Problem 10: Computed Property Names
const prop = "score";
const student = {
  [prop]: 95,
};

// console.log(student.score); // ?


// 🔹 Problem 11: Shallow Copy Pitfall
const origin = {
  name: 'John',
  hobbies: ['reading', 'gaming']
}

const copy = { ...origin };
copy.hobbies.push('coding');
// console.log(copy.hobbies);
// console.log(origi.hobbies);


// 🔹 Problem 12: Deep Copy Fix
const original = {
  a: 1,
  nested: {
    b: 2
  }
}

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.nested.b = 10;
// console.log(deepCopy.nested.b);
// console.log(original.nested.b)

// 🔹 Problem 13: Object.entries
const settings = { theme: "dark", layout: "grid" };
const entries = Object.entries(settings);
// console.log(entries);

// 🔹 Problem 14:  Property Count
const users = {
  name: 'Jane',
  age: 30,
  city: "Delhi"
};

// const count = Object.keys(users).length;
// console.log(count);

// 🔹 Problem 15:  Optional chaining
const obj = {
  user: {
    profile: {
      email: 'test@gmail.com'
    }
  }
}

// console.log(obj?.user?.profile?.email)

// 🔹 Problem 16:  Merging Two Objects
const a = {
  x: 1,
  y: 2
};

const b = {
  y: 10,
  z: 5
};

const merged = { ...a, ...b };
// console.log(merged);

// 🔹 Problem 17:   Freezing Object
const configs = {
  debug: true
}

Object.freeze(configs);
configs.debug = false;
// console.log(configs.debug)


// 🔹 Problem 18: Filtering Object Entries
const objj = { a: 1, b: 2, c: 3 }
const filteredObject = Object.entries(objj).filter(([key, value]) =>
  value > 1
)

// console.log(filteredObject);

// 🔹 Problem 19: Object Destructuring with Defaults
const { x = 5, y = 10 } = { x: 0 }
// console.log({ x, y });


// 🔹 Problem 20: Iterating Over Object Values
const data = { math: 80, english: 70, science: 90 };
let total = 0;
for (const score of Object.values(data)) {
  total += score
}
// console.log(total);


// 🔹 Problem 1: Merge Two Objects
// Problem Statement:
// Write a function mergeObjects(obj1, obj2) that takes two objects and merges them
//  into one. If both objects have the same key, values from obj2 should override those
//  in obj1.

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// const mergeObjects={...object1,...object2}
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 }
}
// console.log(mergeObjects(object1, object2)); // ?


// 🔹 Problem 2: Count Object Properties
// Problem Statement:
// Write a function countProperties(obj) that returns the number of properties in a given 
// object (not including inherited ones).

const personn = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

// console.log(Object.keys(personn).length)

// 🔹 Problem 3: Remove a Key
// Problem Statement:
// Write a function removeKey(obj, key) that returns a new object with the specified 
// key removed.


const settingss = {
  theme: "dark",
  layout: "grid",
  version: "1.0"
};

function removeKey(setting, key) {
  delete setting[key];
  return setting
}

// console.log(removeKey(settingss, "layout")); // ?


// 🔹 Problem 4: Convert Object to Array
// Problem Statement:
// Write a function objectToArray(obj) that converts an object into an array of key-value 
// pairs.

const configg = {
  api: "v1",
  timeout: 3000
};

function objectToArray(obj) {
  const arr = Object.entries(obj);
  return arr;
}

// console.log(objectToArray(configg)); // ?


// 🔹 Problem 5: Check if Object is Empty
// Problem Statement:
// Write a function isEmpty(obj) that returns true if the object has no properties of 
// its own, otherwise false.

const emptyObj = {};
const filledObj = { key: "value", name: 'abhishek' };

function isEmpty(obj) {
  const isOwn = Object.keys(obj).length === 0;
  return isOwn
}

// console.log(isEmpty(emptyObj)); // ?
// console.log(isEmpty(filledObj)); // ?


// 🔹 Problem 6: Deep Copy Object
// Description:
// Write a function deepCopy(obj) that takes a nested object and returns a deep 
// copy of it. Make sure changing the original object does not affect the copied 
// one.


const originall = {
  a: 1,
  b: {
    c: 2
  }
}

function deepCopyy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
const coppy = deepCopyy(originall)
originall.b.c = 5;
// console.log(coppy);


// 🔹 Problem 7: Count Value Occurrences
// Description:
// Write a function countOccurrences(obj) that counts how many times each value 
// appears in the object.

const dataa = { a: 1, b: 2, c: 1, d: 2, e: 3 }

function occurrencesFunc(obj) {
  let occur = {};
  for (const key in obj) {
    const value = obj[key];
    occur[value] = (occur[value] || 0) + 1
  }
  return occur
}

console.log(occurrencesFunc(dataa));



// 🔹 Problem 8: Flatten Object
// Description:
// Write a function flattenObject(obj) that converts a nested object into a flat object with keys as path.

// Test:
// const nested = { a: 1, b: { c: 2, d: 3 } };
// console.log(flattenObject(nested)); // { a: 1, "b.c": 2, "b.d": 3 }



const nested = {
  a: 1,
  b: {
    c: 2,
    d: 3
  },
  c: [10, 11]
}

function flattenObject(nested) {
  let newObj = {};
  // let parent = ''; 
  const generateFlaten = (nested, parent = '') => {
    for (let key in nested) {
      // let parent = '';
      let value = nested[key];
      const parentKey = parent + key;
      if (typeof value === 'object') {
        // console.log('value within object',);
        generateFlaten(value, key + '.')
      } else {
        newObj[parentKey] = value
        // console.log('else case occured')
      }
    }
  }
  generateFlaten(nested)
  return newObj
}

console.log(flattenObject(nested))
