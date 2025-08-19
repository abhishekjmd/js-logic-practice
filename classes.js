// 🔹 Problem 1: Basic Class Instantiation
// class User {
//     constructor(name) {
//         this.name = name
//     }

//     greet() {
//         return `Hello ${this.name}`
//     }
// }

// const user2 = new User('Abhi');
// console.log(user2.greet());

// 🔹 Problem 2:  Inheritance and super
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     return `${this.name} makes a noise`;
//   }
// }

// class Dog extends Animal {
//     speak() {
//     return `${this.name} barks`;
//   }

// }

// const d = new Dog("Rocky");
// console.log(d.speak());


// 🔹 Problem 3:  Static Method Confusion
// class MathTools {
//   static double(x) {  // this are defined on the class itself not on the instance (new object)
//     return x * 2;
//   }

//   triple(x) {
//     return x * 3;
//   }
// }

// const m = new MathTools();
// console.log(m.double(4));


// 🔹 Problem 4:  Private Field
// class Secret{
//     #code = '1234';
//     reveal(){
//       return this.#code
//     }
// }

// const s = new Secret();
// console.log(s.reveal());
// console.log(s.#code);

// 🔹 Problem 5:  Private Field
// class A {
//   constructor() {
//     console.log("A");
//   }
// }

// class B extends A {
//   constructor() {
//     console.log("B");
//     super(); // this is the method to call the parent class
//   }
// }

// const obj = new B();

// 🔹 Problem 6:   What will be the output?
// class A {
//   greet() {
//     console.log("Hello from A");
//   }
// }

// class B extends A {
//   greet() {
//     super.greet();
//     console.log("Hello from B");
//   }
// }

// new B().greet();

// 🔹 Problem 7:   What will be the output?
// class Animal {
//   static category = "mammal";

//   static info() {
//     return `Category: ${this.category}`;
//   }
// }

// class Dog extends Animal {
//   static category = "dog";
// }

// console.log(Dog.info());


// Problem 8:   What will be the output of the following code?
// class Counter {
//   #count = 0;

//   increment() {
//     this.#count++;
//     console.log(this.#count);
//   }
// }

// const c = new Counter();
// c.increment();
// c.increment();
// console.log(c.#count);


// 🔹 Problem 9:   Static vs Instance Method Confusion
// class Car {
//   static type() {
//     return "Sedan";
//   }

//   type() {
//     return "SUV";
//   }
// }

// const myCar = new Car();
// console.log(Car.type());
// console.log(myCar.type());


// 🔹 Problem 10:   Overriding Static Method
// class Parent {
//   static greet() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//   static greet() {
//     console.log("Hello from Child");
//   }
// }

// Parent.greet();
// Child.greet();


// 🔹 Problem 11:   Access Private Field in Class
// class BankAccount {
//   #balance = 1000;

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount();
// console.log(account.getBalance());
// console.log(account.#balance);



// 🔥 LeetCode-Style JavaScript Challenges 🚀


// 🔹 Problem 1:  Implement a Counter Class
// Problem Statement:

// Create a class `Counter` that can do the following:

// - Accepts an integer `initialValue` as a constructor argument.
// - Has three methods:
//     - `increment()` → increases the counter by 1 and returns the value.
//     - `decrement()` → decreases the counter by 1 and returns the value.
//     - `reset()` → resets the counter back to the initial value and returns it.


class Counter {
    constructor(initialvalue) {
        this.initialvalue = initialvalue;
        this.count = initialvalue
    }

    increment() {
        return ++this.count
    }

    decrement() {
        return --this.count;
    }
    reset() {
        this.count = this.initialvalue;
        return this.count
    }
};

const counter = new Counter(5);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());







// 🔹 Problem 2:  Classes & Method Binding

// You need to implement a class called Calculator that supports basic operations and allows method chaining.
// ✅ Requirements:
// Constructor takes no arguments.
// The class has the following methods:
// add(number) → adds number to the result.
// subtract(number) → subtracts number from the result.
// multiply(number) → multiplies the result by number.
// divide(number) → divides the result by number (if number is 0, return "Cannot divide by 0").
// clear() → resets result to 0.
// getResult() → returns the current result.
// All methods except getResult should return this to allow chaining


class Calculator {
    constructor() {
        this.result = 0;
    }
    add(number) {
        this.result += number;
        return this;
    };
    subtract(number) {
        this.result -= number;
        return this
    }
    multiply(number) {
        this.result *= number;
        return this
    }
    divide(number) {
        if (number === 0) {
            console.log('cannot divide by zero')
        } else {
            this.result /= number
            return this;
        }
    }
    clear() {
        this.result = 0;
        return this
    }
    getValue() {
        return this.result
    }

}

const calc = new Calculator();

// console.log(calc.add(5).subtract(2).multiply(10).divide(3).clear().getValue())






// 🔹 Problem 3: Object-Oriented Programming (OOP), Class, Encapsulation,
// Problem Statement:
// 🔧 Details:
// constructor(accountNumber, accountHolderName, balance)
// Initializes the account with provided number, holder name, and initial balance.

// deposit(amount)
// Adds the amount to the balance. If the amount is negative or 0, throw an error.

// withdraw(amount)
// Deducts the amount from the balance.
// If the amount is negative or greater than current balance, throw an error.

// checkBalance()
// Returns the current balance.

// getDetails()
// Returns an object with accountNumber, accountHolderName, and balance.



class Bank {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance
    }
    deposit(number) {
        if (number <= 0) {
            throw new Error('pls enter valid amount')
        } else {
            this.balance += number;
        }
    }
    withdraw(number) {
        if (number <= 0) {
            throw new Error('pls enter valid amount')
        } else {
            this.balance -= number;

        }
    }

    checkBalance() {
        return this.balance;
    }

    getDetails() {
        return {
            accountNumber: this.accountNumber,
            accountHolderName: this.accountHolderName,
            balance: this.balance
        }
    }
}


const bank = new Bank('1234567890', 'abhishek', 2000);
bank.deposit(8000);
bank.withdraw(1000);
// console.log(bank.checkBalance());
// console.log(bank.getDetails())







// 🔹 Problem 4:  Implement a Bank Account System (Class-Based) diff question
// refine of above question
// A constructor taking (accountNumber, holderName, balance)
// Methods:
// deposit(amount)
// withdraw(amount)
// checkBalance()
// A static method: getTotalAccounts() → returns how many objects have been created.

// 🧠 Constraints:
// withdraw should not allow overdrawing.
// Total accounts should be tracked using a static variable.

// ⬇️ Implement the class — don't log or run, just define.
// refined version of above question
// with tweaks like totalAccounts and also the 



class BankAccountSystem {
    static totalAccounts = 0;
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber,
            this.holderName = holderName,
            this.balance = balance,
            BankAccountSystem.totalAccounts++
    }
    deposit(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error('insufficient balance')
        } else {
            this.balance -= amount
        }
    }
    checkBalance() {
        return this.balance
    }
    getTotalAccounts() {
        return BankAccountSystem.totalAccounts
    }
}


const bankSystem1 = new BankAccountSystem(1234567890, 'himanshu', 5000);
const bankSystem2 = new BankAccountSystem(12345, 'harsh', 15000);
bankSystem1.deposit(15000);
bankSystem1.withdraw(3000);
// console.log(bankSystem1.checkBalance());;
// console.log(bankSystem1.getTotalAccounts())







// 🔹 Problem 5:  Implement User and Admin Class with Access Control
// **Problem Statement:**

// Design two classes: `User` and `Admin` using JavaScript.

// - `User` should have:
//     - `username` (string)
//     - `email` (string)
//     - a method `login()` that returns:

//         `"User <username> has logged in"`

// - `Admin` should inherit from `User` and also have:
//     - `role` (default: `"admin"`)
//     - a method `deleteUser(user)` that removes the given user from a static `User.userList`.

// ---

// ### 🛠 Additional Requirements:

// - Track all users using a **static list**: `User.userList`
// - On every `new User(...)`, the user should be automatically added to the static list.
// - `Admin.deleteUser(user)` should remove that user from the list by matching `username`.

// ---

// ### 💡 Expected Usage:

// ```
// const user1 = new User("Abhi", "abhi@email.com");
// const user2 = new User("Ravi", "ravi@email.com");
// const admin = new Admin("SuperAdmin", "admin@email.com");

// console.log(user1.login());
// "User Abhi has logged in"

// console.log(User.userList.length);
// 3

// admin.deleteUser(user2);
// console.log(User.userList.length);




class User {
    static userList = []
    constructor(username, email) {
        this.username = username,
            this.email = email,
            User.userList.push({ username: this.username, email: this.email })
    }
    login() {
        return `use ${this.username} has logged in`
    }
}

class admin extends User {
    constructor(username, email) {
        super(username, email)
        this.role = 'admin'

    }
    deleteUser(user) {
        User.userList = User.userList.filter((value) => user.username !== value.username)

    }
}


const user1 = new User('abhi', 'abhi@gmail.com');
const user2 = new User('himansh', 'himanshu@gmail.com');
const adminOne = new admin('superAmin', 'admin@gmail.com');
// adminOne.deleteUser(user1)
// console.log(User.userList.length)









{/*
   🔹 Problem 6:  Implement a Library System
   Create a Book class and a Library class. The system should support:

 ✅ Requirements:
 Book class:
 Has properties: title, author, and isAvailable (default true).
 Method: borrow() — marks the book as not available.
 Method: returnBook() — marks the book as available.

 Library class:
 Has a list of books (this.books).
 Method: addBook(book) — adds a book to the library.
 Method: borrowBook(title) — if available, borrows the book and returns it; else returns "Not Available".
 Method: returnBook(title) — returns the book back to the library.
 Method: listAvailableBooks() — returns a list of titles that are available.

💡 Example:
 const b1 = new Book("The Alchemist", "Paulo Coelho");
 const b2 = new Book("1984", "George Orwell");

 const library = new Library();
 library.addBook(b1);
 library.addBook(b2);

 console.log(library.borrowBook("1984")); // 1984
 console.log(library.borrowBook("1984")); // Not Available
 library.returnBook("1984");
 console.log(library.listAvailableBooks()); // [ 'The Alchemist', '1984' ]


    */}



class Book {
    constructor(title, author, isAvailable = true) {
        this.title = title,
            this.author = author,
            this.isAvailable = isAvailable
    }

    borrow() {
        this.isAvailable = false
    }
    returnBook() {
        this.isAvailable = true
    }
}


class Library {
    constructor() {
        this.books = []
    }

    addBook(book) {
        const exist = this.books.some(value => value.title === book.title);
        if (!exist) {
            this.books.push(book)
        } else {
            console.log(`book with title ${this.title} already exists in the library`)
        }
    }
    borrowBook(book) {
        const exist = this.books.some(value => value.title === book.title);
        if (exist) {
            this.books = this.books.filter(value => value.title !== book.title)

            book.borrow()
        }
    }

}










// Q7. Implement a Rectangle Class

// Create a Rectangle class with:
// Constructor taking width and height
// Method getArea() that returns the area of the rectangle
// Method getPerimeter() that returns the perimeter

// Example:
// const rect = new Rectangle(5, 10);
// rect.getArea();      // 50
// rect.getPerimeter(); // 30



class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width
    }
    getArea() {
        return this.height * this.width
    }
    getPerimeter() {
        return 2 * (this.height + this.width)
    }
}

const rect = new Rectangle(5, 10);
// console.log(rect.getArea());
// console.log(rect.getPerimeter());




// Q8. Student Grade System

// Create a Student class with:
// Constructor taking name and marks (array of numbers)
// Method getAverage() returning the average of marks
// Method getGrade() returning "A" if avg ≥ 90, "B" if avg ≥ 75, "C" if avg ≥ 50, otherwise "F"

// Example:
// const student = new Student("Alice", [80, 90, 100]);
// student.getAverage(); // 90
// student.getGrade();   // "A"


class Student {
    static average;
    constructor(name, marks = []) {
        this.name = name;
        this.marks = marks
    }
    getAverage() {
        Student.average = this.marks.reduce((acc, curr) => acc + curr, 0) / this.marks.length;
        return Student.average;
    }
    getGrade() {
        if (Student.average >= 90) {
            return 'A'
        } else if (Student.average >= 75) {
            return 'B'
        } else if (Student.average >= 50) {
            return 'C'
        } else {
            return 'F'
        }
    }
}

const student = new Student('Alice', [80, 90, 100]);
// console.log(student.getAverage());
// console.log(student.getGrade())





// Q9. Inheritance: Vehicle → Car

// Create a Vehicle class with:
// Property brand
// Method start() that logs "brand started"
// Extend it into a Car class with:
// Additional property model
// Method drive() that logs "brand model is driving"

// Example:
// const car = new Car("Toyota", "Camry");
// car.start(); // "Toyota started"
// car.drive(); // "Toyota Camry is driving"


class Vehicle {
    constructor(brand) {
        this.brand = brand
    }
    start() {
        return `${this.brand} started`
    }
}


class Car extends Vehicle {
    constructor(brand, model) {
        super(brand)
        this.model = model

    }
    drive() {
        return `${this.brand} ${this.model} is driving`
    }
}

const car = new Car('Toyota', 'Camry');
// console.log(car.start());
// console.log(car.drive())





// Q5. Library System

// Create two classes:
// Book → properties: title, author
// Library → has a list of books with methods:
// addBook(book) → add a book
// removeBook(title) → remove by title
// listBooks() → return array of titles

// Example:
// const lib = new Library();
// lib.addBook(new Book("JS Guide", "Kyle Simpson"));
// lib.addBook(new Book("Eloquent JS", "Marijn Haverbeke"));
// lib.listBooks(); // ["JS Guide", "Eloquent JS"]
// lib.removeBook("JS Guide");
// lib.listBooks(); // ["Eloquent JS"]



class BookAnother {
    constructor(title, author) {
        this.title = title,
            this.author = author
    }
}

class LibraryAnother {
    constructor() {
        this.booklists = [];
    }
    addBook(book) {
        const exist = this.booklists.some(value => value.title === book.title);
        if (!exist) {
            this.booklists.push(book);
        } else {
            return `the book with title ${book.title} already exists`
        }
    }
    removeBook(book) {
        this.booklists = this.booklists.filter(b => b.title !== book);

    }
    listBooks() {
        return this.booklists
    }
}


const lib = new LibraryAnother();
lib.addBook(new BookAnother("JS Guide", "Kyle Simpson"));
lib.addBook(new BookAnother("Eloquent JS", "Marijn Haverbeke"));
lib.addBook(new BookAnother("Eloquent JS", "Marijn Haverbeke"));
console.log(lib.listBooks()); // ["JS Guide", "Eloquent JS"]
console.log(lib.removeBook("JS Guide"));
console.log(lib.listBooks()); // ["Eloquent JS"]