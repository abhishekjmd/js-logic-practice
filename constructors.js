// 🔹 Q1: new keyword omitted
// function Person(name) {
//   this.name = name;
// }
// const p1 = new Person("Abhi");
// console.log(p1); // ?


// 🔹 Q2: new keyword used
// function Person(name) {
//   this.name = name;
// }
// const p1 = new Person("Abhi");
// console.log(p1.name); // ?

// 🔹 Q3: constructor returns object
// function Car(make) {
//   this.make = make;
//   return { make: "Tesla" };
// }
// const c1 = new Car("Toyota");
// console.log(c1.make); // ?


// 🔹 Q4: constructor returns primitive
// function Gadget(name) {
//   this.name = name;
//   return 42;
// }
// const g1 = new Gadget("Phone");
// console.log(g1.name); // ?

// 🔹 Q5: constructor hijack using Function
// function Animal(type) {
//   this.type = type;
//   this.getType = function () {
//     return this.type;
//   }
// }
// const a = new Animal("Dog");
// const b = new a.getType.constructor("return 'Cat'")();
// console.log(b); // ?


// 🔹 Q6: (Title: Nested new operators)
// function Animal(type) {
//   this.type = type;
// }
// Animal.prototype.sound = "Generic Sound";

// const result = new new Animal("Dog").constructor("return 'Meow'");
// console.log(result); // ?


// 🔹 Q7: Chained new with constructor
// function Person(name) {
//   this.name = name;
// }
// const result = new new Person("John").constructor("return 7 * 6");
// console.log(result); // ✅ 42

// 🔹 Q8: Function returning object vs primitive
// function Test() {
//   this.name = "JS";
//   return { topic: "Constructor" };
// }
// const t = new Test();
// console.log(t.name); // ?




// leetcode problems
// Q1. Create a Person Constructor

// Difficulty: Easy

// Write a constructor function Person that takes name and age as parameters and assigns them to the object.

// Example:

// const p1 = new Person("Abhi", 25);
// console.log(p1.name); // "Abhi"
// console.log(p1.age);  // 25

function PersonOne(name, age) {
    this.name = name;
    this.age = age
}

const p1 = new PersonOne('abhi', 25);
// console.log(p1.name);
// console.log(p1.age)






// Q2. Add Method to Constructor Prototype
// Difficulty: Medium

// Using the Person constructor from Q1, add a method introduce() to its prototype that returns:
// "Hi, my name is <name> and I am <age> years old."


// Example:
// const p1 = new Person("Tiwari", 26);
// console.log(p1.introduce());
// "Hi, my name is Tiwari and I am 26 years old."


function PersonTwo(name, age) {
    this.name = name;
    this.age = age
}

PersonTwo.prototype.introduce = function () {
    return `Hi my name is ${this.name} and I am ${this.age} year old`
}

const p2 = new PersonTwo('tiwari', 26);
// console.log(p2.introduce())





// Q3. Constructor Inheritance (Call)

// Difficulty: Medium
// Write two constructors: Animal and Dog.
// Animal takes name

// Dog takes name and breed
// Use .call() so Dog inherits name from Animal.

// Example:
// const d1 = new Dog("Rocky", "German Shepherd");
// console.log(d1.name);  // "Rocky"
// console.log(d1.breed); // "German Shepherd"



function Animal(name) {
    this.name = name;
}

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed
}

const d1 = new Dog('Rocky', 'German Sheoherd');
// console.log(d1.name)
// console.log(d1.breed)





// Q4. Constructor with Default Values

// Difficulty: Medium
// Create a Car constructor that takes brand and model.
// If model is not provided, default it to "Standard".

// Example:
// const c1 = new Car("Toyota");
// console.log(c1.brand); // "Toyota"
// console.log(c1.model); // "Standard"

function Car(brand, model = 'standard') {
    this.brand = brand;
    this.model = model;

}

const c1 = new Car('Toyota',);
// console.log(c1.brand)
// console.log(c1.model)





// Q5. Private Variables in Constructor

// Difficulty: Medium
// Create a Counter constructor where the count is private and only accessible via:
// increment() → increases count by 1
// getValue() → returns the current count

// Example:
// const counter = new Counter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue()); // 2


function Counter() {
    let count = 0;

    this.increment = function () {
        ++count;
    },
        this.getValue = function () {
            return count;
        }

}

const count = new Counter();
count.increment()
count.increment()
// console.log(count.getValue())






// 🧩 Q6. Bank Account Constructor

// Difficulty: Medium
// Create a BankAccount constructor that initializes with ownerName and balance.

// Add methods:
// deposit(amount) → increases balance.
// withdraw(amount) → decreases balance but should not allow negative balance.
// getBalance() → returns current balance.

// Example:
// const acc = new BankAccount("Abhi", 1000);
// acc.deposit(500);
// acc.withdraw(300);
// console.log(acc.getBalance()); // 1200
// acc.withdraw(2000);        


function BankAccount(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.deposit = function (amount) {
        return this.balance += amount
    }
    this.withdraw = function (amount) {
        return Math.max(this.balance -= amount, 0)
    }
    this.getBalance = function () {
        return this.balance
    }
};

const acc = new BankAccount('abhi', 1000);
acc.deposit(500);
acc.withdraw(300);
console.log(acc.getBalance());
acc.withdraw(2000)









// 🧩 Q7. Shape Constructor with Inheritance

// Difficulty: Medium
// Create a Shape constructor with a property name.
// Then create a Rectangle constructor that inherits from Shape and adds properties width and height.

// Add methods:
// area() → returns width * height.
// perimeter() → returns 2 * (width + height).

// Example:
// const rect = new Rectangle("MyRect", 5, 10);
// console.log(rect.name);        // "MyRect"
// console.log(rect.area());      // 50
// console.log(rect.perimeter()); // 30


function Shape(name) {
    this.name = name;

}

function Rectangle(name, width, height) {
    Shape.call(this, name);
    this.width = width;
    this.height = height;
};

Rectangle.prototype.area = function () {
    let area = this.width * this.height
    return area
};

Rectangle.prototype.perimeter = function () {
    return 2 * (this.height + this.width)
}

const rect = new Rectangle('myReact', 5, 20);
console.log(rect.name);
console.log(rect.area());
console.log(rect.perimeter())





// 🧩 Q8. Employee and Manager

// Difficulty: Medium–Hard
// Create an Employee constructor with properties: name, position, and salary.

// Add a method getDetails() returning:
// "Alice works as Developer earning 50000".
// Then create a Manager constructor that extends Employee and adds a property team (array of employees).
// Add a method getTeamSize() returning the number of employees in the team.

// Example:
// const emp1 = new Employee("Alice", "Developer", 50000);
// console.log(emp1.getDetails()); // Alice works as Developer earning 50000

// const m1 = new Manager("Bob", "Team Lead", 80000, [emp1]);
// console.log(m1.getDetails());   // Bob works as Team Lead earning 80000
// console.log(m1.getTeamSize());  // 1


function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary

}