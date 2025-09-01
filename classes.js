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


// class Counter {
//     constructor(initialValue) {
//         this.initialValue = initialValue
//         this.count = initialValue
//     }
//     // resetValue = this.initialValue
//     increment() {
//         this.count++
//         return this.count;
//     }
//     decrement() {
//         this.count--;
//         return this.count;
//     }
//     reset() {
//         this.count = this.initialValue;
//         return this.count
//     }
// }

// const counter = new Counter(5);
// console.log( counter.increment()); // 6
// console.log(counter.increment()); // 7
// console.log(counter.reset());     // 5
// console.log(counter.decrement()) // 4


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

// class Calculator {
//     constructor() {
//         this.result = 0;
//     }
//     add(number) {
//         this.result += number;
//         return this;
//     }
//     subtract(number) {
//         this.result -= number
//         return this;
//     }

//     multiply(number) {
//         this.result *= number
//         return this;
//     }

//     divide(number) {
//         this.result /= number;
//         return this
//     }

//     getResult() {
//         return this.result;
//     }
// }


// const calc = new Calculator();
// const result = calc
//     .add(10)
//     .subtract(2)
//     .multiply(3)
//     .divide(2)
//     .getResult()

// console.log(result); 


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


// class BankAccount {
//     constructor(accountNumber, accountHolder, balance) {
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.balance = balance
//     }
//     deposit(amount) {
//         this.balance += amount;
//     }
//     withdraw(amount) {
//         this.balance -= amount;
//     }
//     checkBalance() {
//         return this.balance
//     }
//     getDetails() {
//         return {
//             accountNumber: this.accountNumber,
//             accountHolder: this.accountHolder,
//             balance: this.balance
//         }
//     }

// }


// const account = new BankAccount("123456", "Abhishek", 1000);
// account.deposit(500);      // balance = 1500
// account.withdraw(200);     // balance = 1300
// console.log(account.checkBalance());  // 1300
// console.log(account.getDetails());




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

// class BankAccount {
//     static totalAccounts =0;
//     constructor(accountNumber, accountHolder, balance) {
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//         BankAccount.totalAccounts++ 
//     }

//     deposit(amount) {
//         this.balance += amount
//     }
//     withdraw(amount) {
//         if (amount <= 0) {
//             throw new Error('withdraw amount shall be greater then 0')
//         }
//         if (amount > this.balance) {
//             throw new Error('withdraw amount shall be less then current balance')
//         }
//         this.balance -= amount;
//     }

//     checkbalance() {
//         return this.balance;
//     }

//     static getTotalAccount() {
//         return BankAccount.totalAccounts
//     }
// }

// const a1 = new BankAccount("123", "Abhi", 1000);
// const a2 = new BankAccount("456", "Ravi", 2000);

// console.log(BankAccount.getTotalAccount());




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
// // "User Abhi has logged in"

// console.log(User.userList.length);
// // 3

// admin.deleteUser(user2);

// console.log(User.userList.length);

{/*
class User {
    static listUsers = [];
    constructor(username, email) {
        this.username = username;
        this.email = email;
        User.listUsers.push(this);
    }
    login() {
        return `User ${this.username} has logged in`
    }

    static userList() {
        return User.listUsers
    }
}

class Admin extends User {
    constructor(username, email) {
        super(username, email);
        this.role = 'admin'
    }
    deleteUser(user) {
        User.listUsers = User.listUsers.filter(u => u.username !== user.username)
    }
}


const user1 = new User('abhi', 'abhi@gmail.com');
const user2 = new User('himanshu', 'himanshu@gmail.com');
const admin = new Admin('superAdmin', 'admin@gmail.com');
console.log(user1.login());
console.log(user2.login());
console.log(User.userList().length);
admin.deleteUser(user2)
console.log(User.userList().length);
*/}


{/*
       
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
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }

    borrow() {
        return this.available = false;
    }

    returnBook() {
        return this.available = true;
    }
}

class Library extends Book {
    static libraryList = []
    constructor(title, author) {
        super(title, author);
        this.borrow = title;
    }
    addBook(book) {
        const found = Library.libraryList.find(u => u.title === book.title)
        if (!found) {
            Library.libraryList.push(book)
        }
    }

    borrowBook(title) {
        const book = Library.libraryList.find(u => u.title === title);
        if (book && book.available) {
            book.available = false
        }
        return null
    }

    returnBook(title){

    }

    // logBook() {
    //     return Library.libraryList
    // }
    // borrowBook(title) {

    // }

}
const b1 = new Book("The Alchemist", "Paulo Coelho");
const b2 = new Book("1984", "George Orwell");

const library = new Library();
library.addBook(b1)
library.addBook(b2)
// console.log(library.borrowBook(b1));
// console.log(library.logBook());
