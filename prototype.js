// 🔹 Problem 1: Inheriting method via __proto__
// const user = {
//   name: "Abhi",
//   greet() {
//     return "Hello " + this.name;
//   },
// };

// const admin = {
//   name: "Tiwari",
//   __proto__: user,
// };

// console.log(admin.greet());

// 🔹 Problem 2: Shared method from constructor’s prototype
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHi = function () {
//   return `Hi ${this.name}`;
// };

// const person1 = new Person("Abhi");
// const person2 = new Person("Tiwari");

// console.log(person1.sayHi === person2.sayHi);


// 🔹 Problem 3: Property from prototype vs own property
// const obj = {
//   a: 10,
// };

// const obj2 = Object.create(obj);
// obj2.b = 20;

// console.log(obj2.a);
// console.log(obj2.hasOwnProperty("a"));


// 🔹 Problem 4: Chained prototype inheritance
// function Animal() {}
// Animal.prototype.eats = true;

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.barks = true;

// const d = new Dog();

// console.log(d.eats);
// console.log(d.barks);


// 🔹 Problem 5: Shadowing prototype property with instance property
// function Foo() {}
// Foo.prototype.x = 10;

// const f1 = new Foo();
// const f2 = new Foo();

// f1.x = 20;

// console.log(f1.x);
// console.log(f2.x);


// 🔹 Problem 6: Object.create and prototype link
// const base = {
//   sayHi() {
//     return "Hi from base";
//   },
// };

// const child = Object.create(base);
// console.log(child.sayHi());


// 🔹 Problem 7: Prototype method override
// function Person() {}
// Person.prototype.sayHi = function () {
//   return "Hello!";
// };

// const p = new Person();
// p.sayHi = function () {
//   return "Overridden Hello!";
// };

// console.log(p.sayHi());


// 🔹 Problem 8: Multiple instances sharing prototype method
// function Car() {}
// Car.prototype.drive = function () {
//   return "Vroom!";
// };

// const car1 = new Car();
// const car2 = new Car();

// console.log(car1.drive === car2.drive);


// 🔹 Problem 9: Manual prototype assignment
// const base = {
//   greet: function () {
//     return "Hey!";
//   },
// };

// const newObj = {};
// newObj.__proto__ = base;

// console.log(newObj.greet());


// 🔹 Problem 10: __proto__ vs prototype confusion
// function Gadget() {}
// Gadget.prototype.use = function () {
//   return "Using gadget";
// };

// const g = new Gadget();

// console.log(g.__proto__ === Gadget.prototype);
// console.log(Gadget.__proto__ === Function.prototype);


// 🔹 Problem 11: Constructor's prototype replaced
// function Person() {
//   this.name = "Abhi";
// }
// Person.prototype = {
//   greet() {
//     return "Hello " + this.name;
//   },
// };

// const p = new Person();

// console.log(p.greet());


// 🔹 Problem 12: Changing prototype after instance creation
// function Person() {
//   this.name = "Tiwari";
// }
// const p1 = new Person();

// Person.prototype.sayHi = function () {
//   return "Hi " + this.name;
// };

// console.log(p1.sayHi());


// 🔹 Problem 13: Deleting prototype property
// function User() {}
// User.prototype.role = "admin";

// const u1 = new User();

// delete User.prototype.role;

// console.log(u1.role);


// 🔹 Problem 14: Constructor with own method + prototype method
// function Box() {
//   this.type = "wood";
//   this.describe = function () {
//     return "Box made of " + this.type;
//   };
// }
// Box.prototype.describe = function () {
//   return "Prototype Box";
// };

// const b = new Box();
// console.log(b.describe());


// 🔹 Problem 15: Inheritance + overriding prototype
function Animal() { }
// Animal.prototype.sound = function () {
//   return "generic sound";
// };

// function Cat() {}
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.sound = function () {
//   return "meow";
// };

// const kitty = new Cat();
// console.log(kitty.sound());


// 🔹 Problem 16: Nested prototype chain resolution
// const grandParent = {
//   house: "villa",
// };
// const parent = Object.create(grandParent);
// parent.car = "BMW";

// const child = Object.create(parent);
// child.bike = "Duke";

// console.log(child.house);
// console.log(child.car);
// console.log(child.bike);

// 🔹 Problem 17: instanceof vs __proto__
// function Human() {}

// const h = new Human();

// console.log(h instanceof Human);
// console.log(h.__proto__ === Human.prototype);


// 🔹 Problem 18: Reassigning __proto__
// const A = {
//   value: 1,
// };
// const B = {
//   value: 2,
// };

// const C = {
//   value: 3,
//   __proto__: A,
// };

// C.__proto__ = B;

// console.log(C.value);


// 🔹 Problem 19: Function constructor without prototype method
// function Gadget(name) {
//   this.name = name;
// }
// const g1 = new Gadget("Phone");

// console.log(typeof g1.sayHi);


// 🔹 Problem 20: Arrow function inside prototype
// function User(name) {
//   this.name = name;
// }
// User.prototype.greet = () => {
//   return "Hello " + this.name;
// };

// const u = new User("Abhi");
// console.log(u.greet());




// leetcode 
// Q1: Shared Method via Prototype

// Create a constructor function Person that takes name as a parameter. Add a method sayHello() to its prototype so all instances can call it.

// Example:
// const p1 = new Person("Alice");
// const p2 = new Person("Bob");

// p1.sayHello(); // "Hello, my name is Alice"
// p2.sayHello(); // "Hello, my name is Bob"


function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`)
};

const p1 = new Person('Alice')
const p2 = new Person('bob');

// p1.sayHello();
// p2.sayHello();





// Q2: Prototype Chain Inheritance

// Create a constructor function Animal with a method speak(). Then create a constructor function Dog that inherits from Animal using the prototype chain.

// Example:
// const d = new Dog("Buddy");
// d.speak(); // "Animal speaking"
// d.bark();  // "Woof! Woof!"


function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log('Animal speaking')
};

function Dog(name) {
    Animal.call(this, name);
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog

Dog.prototype.bark = function () {
    console.log('Woof! Woof!')
}

const d = new Dog('bunny');
// d.speak();
// d.bark()





// Q3: Overriding Prototype Method
// Create a constructor function Vehicle with a method move(). Then create a constructor function Car that inherits from Vehicle and overrides the move() method.

// Example:
// const c = new Car();
// c.move(); // "Car is moving"

function Vehicle() { }

Vehicle.prototype.move = function () {
    console.log('vehicle is moving')
};

function Car() { }
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.move = function () {
    console.log('car is moving');
};

const c = new Car();
// c.move()






// Q4: Checking Prototype Chain

// Create a constructor function Shape. Create another constructor function Circle that inherits from Shape. Write code to check if:
// Circle.prototype.__proto__ === Shape.prototype
// circleInstance instanceof Shape

// Example:
// const s = new Shape();
// const c = new Circle();
// console.log(c instanceof Shape); // true
// console.log(Circle.prototype.__proto__ === Shape.prototype); // true


function Shape() { };
function Circle() { }
Circle.prototype.__proto__ = Shape.prototype;

const s4 = new Shape();
const c4 = new Circle();
// console.log(c4 instanceof Shape); // true
// console.log(Circle.prototype.__proto__ === Shape.prototype);





// Q5: Prototype Property Sharing
// Create a constructor function Student that has a property school shared among all instances through its prototype.

// Example:
// const s1 = new Student("John");
// const s2 = new Student("Emma");

// console.log(s1.school); // "ABC School"
// console.log(s2.school); // "ABC School"


function Student(name) {
    this.name = name
};

Student.prototype.school = 'ABC school'

const s1 = new Student('John');
const s2 = new Student('Emma');

// console.log(s1.school);
// console.log(s2.school)






// Q6: Prototype vs Own Properties
// Create a constructor Book with title. Add a prototype property category = "General".

// Check with hasOwnProperty() which properties are direct vs prototype properties.

// Example:

// const b1 = new Book("JS Basics");
// console.log(b1.title);           // "JS Basics"
// console.log(b1.category);        // "General"
// console.log(b1.hasOwnProperty("title"));    // true
// console.log(b1.hasOwnProperty("category")); // false


function Book(title) {
    this.title = title
}

Book.prototype.category = 'General';
const b1 = new Book('JS Basics');
console.log(b1.title);
console.log(b1.category);
console.log(b1.hasOwnProperty('title'))
console.log(b1.hasOwnProperty('category'))






// Q7: Extending Built-in Prototypes
// Add a method last() to the Array.prototype that returns the last element of the array.

// Example:

// const arr = [1, 2, 3];
// console.log(arr.last()); // 3

const arr = [1, 2, 3];
Array.prototype.last = function () {
    return this[this.length - 1]
}

console.log(arr.last())





// Q8: Prototype Reassignment
// Create a constructor Laptop with a property brand. Reassign its prototype with an object containing a method getBrand().
// Show that previously created objects lose access to the new prototype method.

// Example:

// const l1 = new Laptop("Dell");
// Laptop.prototype = {
//   getBrand() { return this.brand; }
// };
// const l2 = new Laptop("HP");

// console.log(typeof l1.getBrand); // undefined
// console.log(l2.getBrand());      // "HP"


function Laptop(brand) {
    this.brand = brand
}


const l1 = new Laptop('Dell');

Laptop.prototype = {
    getBrand() {
        return this.brand
    }
}
const l2 = new Laptop('HP');

console.log(typeof l1.getBrand);
console.log(l2.getBrand())




// Q9: Prototype-based Method Sharing
// Create a constructor Counter with a property count initialized to 0.
// Add increment() and getCount() methods on the prototype (not inside the constructor).

// Example:

// const c1 = new Counter();
// c1.increment();
// c1.increment();
// console.log(c1.getCount()); // 2


function Counter() {
    this.count = 0;

}

Counter.prototype = {
    increment() {
        return ++this.count;
    },
    getCount() {
        return this.count
    }
}

const c1 = new Counter();
c1.increment();
console.log(c1.getCount())




// Q10: Multi-level Prototype Chain
// Create three constructors: GrandParent, Parent, Child.

// Parent inherits from GrandParent.
// Child inherits from Parent.
// Demonstrate that childInstance can access methods from both Parent and GrandParent.

// Example:
// const gc = new Child();
// gc.grandParentMethod(); // from GrandParent
// gc.parentMethod();      // from Parent


function GrandParent() { };

function Parent() { }
GrandParent.prototype.grandParentMethod = function () {
    return 'from GrandParent'
}
Parent.prototype = Object.create(GrandParent.prototype);
Parent.prototype.constructor = Parent

Parent.prototype.parentMethod = function () {
    return 'from Parent';
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child;

function Child() {
    return 'from Children'
}


const gc = new Child();
console.log(gc.grandParentMethod())
console.log(gc.parentMethod())