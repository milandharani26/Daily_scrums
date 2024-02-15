const Person = function (fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;

    //never do this       naver make a method inside of construction function if you create 100 new Peson's than this function will attahed to 100 objects.
    // this.calAge = function(){
    //     console.log(2037 - this.age);
    // }
};

const milan = new Person("milan", 2003);
console.log(milan);

// 1.new {} is created
// 2.function is called, this = {}
// 3.{} is linked to prototype
// 4.function is automatically return {}

const sachin = new Person("sachin", 2002);
console.log(sachin);

const dx = new Person("dixit", 2003);
console.log(dx);

Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
};

Person.prototype.greet = function () {
    console.log(`${this.firstName} is saying hello to you`);
};

milan.calcAge();
milan.greet();

// dx.greet();
// sachin.greet();

const User = function (userName, password, email) {
    this.userName = userName;
    this.password = password;
    this.email = email;
};

const milan1 = new User("ONEXMILAN", 991344, "milandharni26@gmail.com");
console.log(milan1);

User.prototype.userGreet = function () {
    console.log(`Welcome, ${this.userName} with email ${this.email}`);
};
milan1.userGreet();

console.log(milan1.__proto__);
console.log(milan1.__proto__ === User.prototype); //output : true means milan objects prototype is same as User constructure prototype  ---> milan1.__proto__ === User.prototype

console.log("------");
console.log(Person.prototype.isPrototypeOf(milan));
// constructure prototype is prototype of objects which uses the methods.  means milan and other object jo method use kar rahe hai vaha se constucture ki prototype set hoti hai.

console.log(User.prototype.isPrototypeOf(milan1));
console.log(User.prototype.isPrototypeOf(User)); //constructure is not a prototype of it self

Person.prototype.species = "HOMO SAPIANS";

console.log(milan.species, sachin.species);

console.log(milan.__proto__);
console.log(milan.__proto__.__proto__);
console.log(milan.__proto__.__proto__.__proto__);

//? milan.__proto__ --> is Person.prototype    |      points to constructure function's prototype
//? milan.__proto__.__proto__ --> is object.prototype  |  points to object's prototype.
//? milan.__proto__.__proto__.proto__ --> is null  |  object's prototype is null and prototype chain stop here.

//! person.prototype.constructure is itself constructure function.
console.dir(Person.prototype.constructor);

const h1 = document.querySelector("h1");

console.dir(h1); //this element also hase prototype scopeing

//! make a class by write class

// class Person{
//     constructor(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge(){
//         return 2037-this.birthYear;
//     }
// }

//!constructor function inheritance
const Student = function (firstName, birthYear, cource) {
    // console.log(this)
    Person.call(this, firstName, birthYear);
    this.cource = cource;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`my name is ${this.firstName} and i am study ${this.cource}`);
};

const mike = new Student("mike", 2020, "computer");

mike.introduce();
mike.calcAge();

console.log(mike.__proto__.__proto__);

//!now inheritance with class method
class StudentCl extends Person {
    constructor(fullName, birthYear, course) {
        //always needs to happen first!
        super(fullName, birthYear);
        console.log(this);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
}

const mila = new StudentCl("milan dharani", 2003, "computer science");

mila.introduce();
milan.calcAge();

//!with object.create

const PersonProto = {
    calcAge() {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
// console.log(steven.__proto__);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`this is ${this.firstName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("jay", 2010, "computer science");
console.log(jay.__proto__);

jay.introduce();


//!Encapsulation private and public fiels

// (1)public field
// (2)private field
// (3)public method
// (4)private method
// there is also a static version
class Account {
    //? (1) public field (instance)
    locale = navigator.language;

    //? (2) private field
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        //protected property
        this.#pin = pin;
        //this._movements = [];
        // this.locale = navigator.language;

        console.log(`thanks for opening an account, ${owner}`);
    }

    //? (3) public methods

    //? public interface
    getMovements() {
        return this.#movements;
    }

    getPin() {
        return this.#pin;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestloan(val) {
        if (this.#approveloan(val)) {
            this.deposit(val);
            console.log("loan approved");
        }

        return this
    }

    //? (4) private method

    #approveloan(val) {
        return true;
    }


    //? (5) static methods

    static helper() {
        console.log("static helper method");
    }



}

const acc1 = new Account("milan", "doller", "5555");

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestloan(1000);

console.log(acc1);   //output : acc:{...} object
console.log(acc1.getMovements());  //output : [250, -140, 1000]
console.log(acc1.getPin());     //output : 5555 


// console.log(acc1.#movements);  //output : syntex error private field must declarde in an enclosing class. we can also see movements with geMovements() method.


//? static method run on class it self not on instance. 
//? so static method is use on Account not on acc1.
Account.helper();  //output : static helper method 


acc1.deposit(500).deposit(500).withdraw(250).requestloan(25000).withdraw(4000);

console.log(acc1.getMovements()); 