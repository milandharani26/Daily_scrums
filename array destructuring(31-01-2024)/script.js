"use strict";

//! array destructuring

const restaurant = {
  name: "Classico Italiano",
  location: "via Angel tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzaria", "vegetarian", "Organic"],
  starterManu: [" Focaccia", " Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "pasta", "Risotto"],

  order: function (startIndex, mainIndex) {
    return [this.starterManu[startIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3];
const [a, b, c] = arr;
// console.log(a, b, c);
// console.log(arr);

let [main, , secondry] = restaurant.categories;
// console.log("before swap :",main, secondry);

//!switching values with variables
const temp = main;
main = secondry;
secondry = temp;
// console.log(main,secondry);

//!switching values with desctructuring
[main, secondry] = [secondry, main];
// console.log("after swap :",main, secondry);

const [starter, mainCource] = restaurant.order(2, 0);
//?here starter and mainCOurce are not array elements. this are like simple variables we just strore value together with array.
// console.log(starter, mainCource);

//! destructuring the destructring
const arrayDes = [1, 2, [3, 4]];
const [i, , [x, y]] = arrayDes;
// console.log(i, x, y);

//! default value
const [p1, p2, p3] = [7, 8];
// console.log("without default value : ", p1, p2, p3); // output : 7 8 undefined

// this is how we can give default value and we can also do this function argument
const [p = 1, q = 1, r = 2] = [8, 9];
// console.log("with default value : ", p, q, r); //output : 8, 9, 2

//! object destructuring

const obj = {
  firstName: "milan",
  lastName: "dharani",
  age: 21,
  work: "MERN developer",
};

const { firstName, lastName, age } = obj;

// console.log(firstName, lastName, age); // output : milan dharani 21

//? if you want to give different variable name than object than you have to write syntex like below
// so have to write object key name : your variable

const { firstName: fsname, lastName: surname, age: old } = obj;

// object destructuring with different name
// console.log(fname, surname, old);

//! default value to object
// we can add value like nickname which is not in object
const { nickName = [], firstName: fstname = [] } = obj;
console.log(nickName, fstname);

//mutating variables

let mutA = 10;
let mutB = 20;

const obj1 = { mutA: 23, mutB: 7, mutC: 14 };
//this is how we can mutate variables with objects
({ mutA, mutB } = obj1);

console.log(mutA, mutB);

//nested
const obj3 = {
  fname: "milan",
  lname: "dharani",
  education: {
    school: "sanskar vidyalaya",
    college: "sal college",
  },

  // restaurantBill : function(obj){
  //     console.log(obj)
  // },

  restaurantBill: function ({ bill=100, total=130, tip=30 }) {
    console.log(bill, total, tip);
  },
};

const {
  fname,
  education: { school, college },
} = obj3;
console.log(`${fname}, ${school}, ${college}`);

//here we pass object as a argument in function and destructure it and use it.
obj3.restaurantBill({ bill: 220, tip: 30, total: 250});
obj3.restaurantBill({tip:20, total:250 }); //here w edon't pass the bill so default value is assigned


const obg5 = {
    name : "user",
    password : 789789,
    username : "123X"
}


const { password , ...credentials } = obj5







