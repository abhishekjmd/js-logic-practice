// ✅ 1. Basic IIFE Execution
(function () {
    //   console.log("Hello from IIFE");
})();


// ✅ 2. IIFE with Parameters
(function (name) {
    //   console.log(`Welcome, ${name}`);
})("Abhi");


// ✅ 3. IIFE + Private Variables
(function () {
    let secret = "Hidden Info";
})();
// console.log(secret); // ?


// ✅ 4. IIFE Returning a Function (Closure Preview)
const counter = (function () {
    let count = 0;
    return function () {
        return ++count;
    };
})();

// console.log(counter()); // ?
// console.log(counter()); // ?
// console.log(counter()); // ?


// ✅ 5. Arrow IIFE
(() => {
    //   console.log("Arrow IIFE works!");
})();


// ✅ 6. IIFE in Loops
for (var i = 0; i < 3; i++) {
    (function (j) {
        setTimeout(() => {
            //   console.log(j);
        }, 1000);
    })(i);
}

// ✅ 7. Global Scope Leak
(function () {
    myVar = "Leaked!";
})();
// console.log(myVar); // ?


// ✅ 8. IIFE with Object Return
const config = (function () {
    const secret = "abc123";
    return {
        getSecret: function () {
            return secret;
        }
    };
})();

// console.log(config.getSecret()); // ?
// console.log(config.secret); // ?


//  ✅ 9. Nested IIFEs
(function outer() {
    //   console.log("Outer IIFE");
    (function inner() {
        // console.log("Inner IIFE");
    })();
})();


// ✅ 10. IIFE with Function Hoisting Trap
(function () {
    //   console.log(foo()); // ?
    function foo() {
        return "Hello";
    }
})();

// 11. Classic Loop Trap (var without IIFE)
for (var i = 0; i < 3; i++) {
    (function (i) {
        // console.log(i);
    })(i);
}

// ✅ 12. IIFE and Hoisting Trap
(function () {
    //   console.log(typeof a); // ?
    var a = 5;
})();

// 🔹 13. IIFE with this trap
const obj = {
    name: "Abhi",
    log: (function () {

        // console.log(this.name);
    })()
};

obj.log();

const objj = {
  name: "Abhi",
  log: (function() {
    let capturedName = 'Abhi';
    return function() {
      console.log(capturedName);
    };
  })()
};

// objj.log(); // ✅ Output: undefined because `this.name` was still global, but it's callable


// ✅ 14. Module Pattern via IIFE
const UserModule = (function () {
    let username = 'abhi';
    return {
        // userName: username,
        getUserName: function () {
            return username
        },
        setUserName: function (newName) {
            username = newName
        },

    }
})()

// console.log(UserModule.getUserName())
// UserModule.setUserName("tiwari");
// console.log(UserModule.getUserName());
// console.log(UserModule.userName)


// ✅ 15. IIFE with return inside loop (trickier closure)
let funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = (function (j) {
        return function () {
            return j * j
        }
    })(i);
}

// console.log(funcs[0]())
// console.log(funcs[1]()); // ?
// console.log(funcs[2]()); // ?


// ✅ 16. IIFE returning object with private counter
const Counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    reset: function () {
      count = 0;
    }
  };
})();

// console.log(Counter.increment()); // ?
// console.log(Counter.increment()); // ?
// Counter.reset();
// console.log(Counter.increment()); // ?


// leetcode style problems
// 1. Counter with IIFE
// Problem Statement:
// Create a counter using an IIFE that starts from 0 and exposes two functions:

// increment() → increases the counter by 1.
// getValue() → returns the current counter value.
// The counter should maintain its value between calls without using global variables.

// Example:
// counter.increment(); // 1
// counter.increment(); // 2
// counter.getValue();  // 2

// Edge Cases:
// Calling getValue() before increment() should return 0.
// Multiple counters should not interfere with each other.

const counterr = (function () {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    getValue() {
      return count;
    },
  };
})();

// console.log(counterr.increment());
// console.log(counterr.increment());
// console.log(counterr.getValue());

// 2. Private Configuration (IIFE)
// Problem Statement:
// Use an IIFE to create a config object that stores API keys and URLs privately.

// Expose two methods:
// get(key) → returns the value for the given key.
// set(key, value) → updates the value for the given key.
// No other code should be able to access or modify the internal data directly.

// Example:
// config.get('API_KEY'); // "123abc"
// config.set('API_KEY', 'xyz789');
// config.get('API_KEY'); // "xyz789"

// Edge Cases:
// Getting a non-existent key should return undefined.
// Keys should be case-sensitive.

const configg = (function () {
  const settings = {
    API_KEY: "123Abc",
  };
  return {
    get: function (key) {
      //   apiKey = key;
      return settings.hasOwnProperty(key) ? settings[key] : undefined;
    },
    set: function (key, value) {
      settings[key] = value;
    },
  };
})();

// console.log(configg.get("API_KEY"));
// configg.set("API_KEY", "xyz789");
// console.log(configg.get("API_KEY"));

//Q3: IIFE Sum Calculator
// Problem Statement:
// Write an IIFE that takes two numbers as arguments and immediately logs their sum.

// Requirements:
// The function should be executed immediately after it is defined.
// It should not pollute the global scope (no global variables).

// Output the result in the console.

// Example:
// // Input:
// (4, 5)

// // Output:
// 9

// Edge Cases:
// If either argument is not a number, log "Invalid input".
// Works for negative numbers and zero.

// (function (a, b) {
//   if (typeof a && typeof b === "number") {
//     console.log(a + b);
//   } else {
//     console.log("Invalid input");
//   }
// })(4, 5);

//Q4: Problem Statement:
// Create a counter using an IIFE that:

// Starts from a given initial value (passed as an argument to the IIFE).
// Has three methods:

// increment() → increases by 1
// decrement() → decreases by 1
// getValue() → returns the current value

// Rules:
// The value should be private (not directly accessible).
// If no initial value is provided, it should start from 0.

// Example:
// const counter = createCounter(5); // starts at 5
// counter.increment(); // 6
// counter.decrement(); // 5
// counter.getValue();  // 5

// Edge Cases:
// Works when no initial value is given.
// Works for negative starting values.

const createCounter = (function (value) {
  let count = value;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    },
  };
})(5);

// const counters = createCounter(5);
// console.log(createCounter.increment());
// console.log(createCounter.decrement());
// console.log(createCounter.getValue());

// Problem 5 – Execute Function Only Once (Once Function)
// Description:
// Write a function once(fn) that takes a function fn and returns a new function that can only be executed once.
// After the first call, it should always return the result of the first execution.
// You must use an IIFE internally to store the state.

// Example:
// const add = (a, b) => a + b;
// const onceAdd = once(add);

// console.log(onceAdd(2, 3)); // 5
// console.log(onceAdd(4, 5)); // 5 (still returns first result)

// Function Signature:
// function once(fn) {
//     // your code
// }

// Constraints:

// fn is always a pure function
// Must use IIFE for state handling
// No global variables
function once(fn) {
  return (function () {
    let called = false;
    let result;
    return function (...args) {
      if (!called) {
        result = fn(...args);
        called = true;
      }
      return result;
    };
  })();
}
const add = (a, b) => a + b;
const onceAdd = once(add);

// console.log(onceAdd(2, 4));

// Problem 6 – Run N Times Only
// Description:
// Write a function runNTimes(fn, n) that returns a new function which will execute fn at most n times.
// After that, it should always return the last computed result.
// Use an IIFE to maintain private state.

// Example:
// const multiply = (a, b) => a * b;
// const thriceMultiply = runNTimes(multiply, 3);

// console.log(thriceMultiply(2, 3)); // 6  (1st call)
// console.log(thriceMultiply(3, 3)); // 9  (2nd call)
// console.log(thriceMultiply(4, 3)); // 12 (3rd call)
// console.log(thriceMultiply(5, 3)); // 12 (limit reached, return last result)
// console.log(thriceMultiply(9, 9)); // 12 (still return last result)

// Function Signature:
// function runNTimes(fn, n) {
//     // your code
// }

// Constraints:
// n >= 1
// You must use IIFE for state
// No global variables

function runNTimes(fn, n) {
  return (function () {
    let limit = 0;
    let result;
    return function (...args) {
      if (limit < n) {
        limit++;
        result = fn(...args);
      }
      return result;
    };
  })();
}

const multiply = (a, b) => a * b;
const thriceMultiply = runNTimes(multiply, 3);

// console.log(thriceMultiply(2, 3));
// console.log(thriceMultiply(3, 3));
// console.log(thriceMultiply(4, 3));
// console.log(thriceMultiply(5, 3));
// console.log(thriceMultiply(6, 3));

// Problem 7 – oncePerXSeconds
// Description:
// Write a function oncePerXSeconds(fn, interval) that returns a new function that can only run once during every interval seconds.
// If it’s called again before the time passes, return the last result.

// Example:
// const sayHi = (name) => `Hi ${name}`;
// const sayHiOncePer3 = oncePerXSeconds(sayHi, 3);

// console.log(sayHiOncePer3("A")); // runs → "Hi A"
// console.log(sayHiOncePer3("B")); // within 3s → returns "Hi A"
// setTimeout(() => console.log(sayHiOncePer3("C")), 3100); // after 3.1s → runs again → "Hi C"

// Function Signature:

// function oncePerXSeconds(fn, interval) {
//     // your code
// }

// Constraints:
// Must use IIFE for state
// No global variables
// interval is given in seconds (can convert to ms)
