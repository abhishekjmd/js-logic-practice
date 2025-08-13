// 🔹 Problem 1: Simple Closure
// function greetUser(name) {
//   return function () {
//     console.log(`Hi, ${name}`);
//   };
// }
// const greet = greetUser("Abhi");
// greet(); // ?


// 🔹 Problem 2: Counter (as you did earlier)
// function delayedLog() {
//   let message = "I'm remembered!";
//   setTimeout(function () {
//     console.log(message);
//   }, 1000);
// }
// delayedLog();






// leetcode style questions
// Q1: Simple Counter
// Write a function createCounter() that returns two functions:

// increment() → increases the counter by 1
// getValue() → returns the current counter value

// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// console.log(counter.getValue()); // 2

function createCounter() {
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
}

// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.getValue());

// Q2: Counter with Private Reset
// Modify createCounter() so it has a private reset() function that sets the counter to 0,
// and is only callable internally after increment() reaches 5.

// const counter = createCounter();
// counter.increment(); // 1
// ...
// counter.increment(); // (after hitting 5, resets to 0 automatically)

function createCounterTwo() {
  let count = 0;
  function reset() {
    count = 0;
  }
  return {
    increment() {
      if (count > 5) {
        reset();
      }
      count++;
      return count;
    },
    getValue() {
      return count;
    },
  };
}

const counterTwo = createCounterTwo();
// console.log(counterTwo.increment());
// console.log(counterTwo.increment());
// console.log(counterTwo.increment());
// console.log(counterTwo.increment());
// console.log(counterTwo.increment());
// console.log(counterTwo.increment());
// console.log(counterTwo.increment());
// console.log(counterTwo.increment());

// Q3: Multiple Independent Counters
// Implement createCounter() so that multiple counters don’t interfere with each other.

// const c1 = createCounter();
// const c2 = createCounter();
// c1.increment(); // 1
// c2.increment(); // 1  (separate counter)

function createCounterThree() {
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
}

const c1 = createCounterThree();
const c2 = createCounterThree();

// console.log(c1.increment());
// console.log(c2.increment());

// Q4: Countdown Timer
// Write createCountdown(start) that decreases the count each time decrement() is called.
// When it hits 0, it should print "Time's up!" and not go negative.

// const timer = createCountdown(3);
// timer.decrement(); // 2
// timer.decrement(); // 1
// timer.decrement(); // Time's up!
// timer.decrement(); // Time's up!

function createCountdown(value) {
  let countdown = value;
  return {
    decrement() {
      if (countdown <= 1) {
        return `Time's up!`;
      } else {
        countdown--;
        return countdown;
      }
    },
  };
}

const timer = createCountdown(3);
// console.log(timer.decrement());
// console.log(timer.decrement());
// console.log(timer.decrement());
// console.log(timer.decrement());

// Q5: Closure in Loops Trap
// Fix the following so that each timeout prints 1, 2, 3 instead of 4, 4, 4.

// for (var i = 1; i <= 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 1000);
// }

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    // console.log(i);
  }, i * 1000);
}

// Q6: Counter with Step Size
// Write a createCounter(step) function that increments by a custom step size.
// Example:

// const counter = createCounter(3);
// console.log(counter.increment()); // 3
// console.log(counter.increment()); // 6

function createCounterSix(step) {
  let count = 0;
  return {
    increment() {
      count += step;
      return count;
    },
  };
}

const counterSix = createCounterSix(3);
// console.log(counterSix.increment());
// console.log(counterSix.increment());
// console.log(counterSix.increment());

// Q7: Counter with Upper Limit
// Create createLimitedCounter(limit) that resets to 0 when the counter exceeds the limit.

// const counter = createLimitedCounter(5);
// console.log(counter.increment()); // 1
// ...
// console.log(counter.increment()); // 0 (after hitting 5)

function createLimitedCounter(limit) {
  let count = 0;
  return {
    increment() {
      if (count >= limit) {
        count = 0;
        return count;
      }
      count++;
      return count;
    },
  };
}

const counterLimit = createLimitedCounter(5);
// console.log(counterLimit.increment());
// console.log(counterLimit.increment());
// console.log(counterLimit.increment());
// console.log(counterLimit.increment());
// console.log(counterLimit.increment());
// console.log(counterLimit.increment());
// console.log(counterLimit.increment());
// console.log(counterLimit.increment());

// Q8: Debounced Counter

// Write a counter where increment() is ignored if it’s called within 1 second of the last increment.

// const counter = createDebouncedCounter();
// counter.increment(); // 1
// counter.increment(); // ignored (within 1s)

function createDebounceCounter() {
  let count = 0;
  let lastCallTime = 0;
  return {
    increment() {
      let now = Date.now();
      if (now - lastCallTime >= 1000) {
        count++;
        lastCallTime = now;
        console.log(count);
        return count;
      } else {
        console.log("ignored");
      }
      return count;
    },
  };
}

const counterDebounce = createDebounceCounter();
// console.log(counterDebounce.increment());
// console.log(counterDebounce.increment());
// console.log(counterDebounce.increment());
// console.log(counterDebounce.increment());
// console.log(counterDebounce.increment());

// Q9: Once-Only Counter
// Make a createOnceCounter() that allows increment only once, no matter how many times you call it.

// const counter = createOnceCounter();
// counter.increment(); // 1
// counter.increment(); // 1 (unchanged)

function createOnceCounter() {
  let count = 0;
  let called = false;
  return {
    increment() {
      if (called === false) {
        count++;
        called = true;
        return count;
      }
      return count;
    },
  };
}

const ounceCounter = createOnceCounter();
// console.log(ounceCounter.increment());
// console.log(ounceCounter.increment());
// console.log(ounceCounter.increment());
// console.log(ounceCounter.increment());

// Q10: Counter Factory with Multiple Named Counters

// Make a CounterFactory() that can create multiple named counters, all private inside the factory.

// const factory = CounterFactory();
// factory.create("A");
// factory.increment("A"); // 1
// factory.create("B");
// factory.increment("B"); // 1
// factory.increment("A"); // 2

function CounterFactory() {
  let factory = {};
  return {
    create(key) {
      if (!factory.hasOwnProperty(key)) {
        factory[key] = 0;
      }
    },
    increment(key) {
      if (!factory.hasOwnProperty(key)) {
        throw new Error(`counter ${key} does not exist`);
      }
      factory[key]++;
      return factory[key];
    },
  };
}

// const factory = CounterFactory();
// factory.create("A");
// console.log(factory.increment("A"));
// factory.create("B");
// console.log(factory.increment("B"));
// console.log(factory.increment("A"));

