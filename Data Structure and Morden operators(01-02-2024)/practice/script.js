//! sperd operator

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

//spread pick all values of array one by one and place at where you type speared operator  <--> taking all the elemnt out of array and write it. means it doesn't create variable.

// we can do this
// const [a,b,c] = [...arr];
// console.log(a,b,c);

// console.log(arr);
// console.log(newArr);

const newArr2 = [...arr, 1, 2, 3];
// console.log(newArr2);

//!------------------------------------------

const restaurant = {
  name: "Classico Italiano",
  location: "via Angel tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzaria", "vegetarian", "Organic"],
  starterManu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "pasta", "Risotto"],

  openingHours: {
    thusday: {
      start: "9am",
      end: "10pm",
    },
    friday: {
      start: "9am",
      end: "10pm",
    },
    saturday: {
      start: "10am",
      end: "12pm",
    },
  },

  order: function ({startIndex, mainIndex}) {
    return [this.starterManu[startIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (food1, food2, food3) {
    console.log(`you ordered ${food1}, ${food2} and ${food3} for your lunch`);
  },
};

//?copy array
// const mainMenu = [...restaurant.mainMenu]

//?copy 2 array
const menu = [...restaurant.starterManu, ...restaurant.mainMenu];
// console.log(menu);

//!------------------------------------------
//?spreade use when we need multiple values using comma like array and functions argument

//spread use on Iterables
//Iterables : arrays, string, maps, sets. --> NOT objects

// const str = "milan";
// console.log(...str);

// const letters = [...str, ' ', "ok"];
// console.log(letters);

//!------------------------------------------
// const ingredients = [
//   prompt("make order1: "),
//   prompt("make order2: "),
//   prompt("make order3: "),
// ]
// console.log(ingredients);

//?we can pass spread operator in function
// restaurant.orderPasta(...ingredients);

//!------------------------------------------

const newRestaurent = { foundedIn: 2003, ...restaurant, founder: "milan" };
// console.log(newRestaurent);

//!------------------------------------------

//! rest parameter
//rest because on right side of =
const arr2 = [1, 2, ...[3, 4]];

//rest because on left side of
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a,b,others);

//? rest element must be the last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterManu,
];
// console.log(pizza, risotto, otherFood);

//1)rest in objects
const { saturday, ...othersday } = { ...restaurant.openingHours };
// console.log(saturday, othersday);

//2)rest in functions
// const add = function(...numbers){
//   let sum = 0;

//   for(let i = 0; i<numbers.length; i++){
//     sum += numbers[i];
//   }
//   console.log(sum);
// }
// add(2,3);
// add(2,3,4,5);
// add(2,3,4,5,6);
// add(2,3,5,6,7,7,8);

//NOTE : when you write value by comma  example : const arr = [1,2,34]    use spread   ---> const arr = [..arr1]
//NOTE : when you write variables by comma example: const [pizza,ristto] = [arr]  use rest ---> const [pizza,ristto,...others] = [1,2,34]

//!------------------------------------------

//! short Circuiting
//operators use ANY data type, return any data type,short-circuting

//! short Circuiting in -----> OR operator
// jab value true milegi instant vo value return ho jayega
// use to set defalut value
console.log("----OR----");

// console.log( 5 || "hello");                       //output : 5
// console.log("" || "milan");                       //output : milan
// console.log(true || 0);                           //output : true
// console.log(undefined || null);                   //output : null
// console.log(undefined || 0 || '' || "milan" || 23 || null);  //output : "milan"

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);   //output : 23

// this is a easier way to set default value
const guest2 = restaurant.numGuests || 10;
// console.log(guest2);   //output : 23

//! short Circuiting in -----> AND operator
// jab value false milegi instant vo value return ho jayega
// use to evaluate second condition if first if true
console.log("----AND----");

// console.log(0 && "ok");                         //output : 0
// console.log(2 && "jonas")                       //output : jonas
// console.log(2 && 0);                            //output : 0
// console.log("hello" && 23 && null && 'jonas');  //output : null

//simple if statement
// if(restaurant.orderPasta){
//   restaurant.orderPasta("masrum", "onion");
// }

//same statement with &&
// const newCatogories = restaurant.orderPasta && restaurant.orderPasta("masrum", "onion");

//! short Circuiting in -----> NULLISH operator ES2020
//Nullish : null and undefined  (NOT for   0 , " " and false )

restaurant.numGuests = 0;
const guessCorrect = restaurant.numGuests ?? 10;
console.log(guessCorrect); //output : 0

//mordern operators ES2021

const rest1 = {
  name: "chapri",
  numGuests: 0,
};

const rest2 = {
  name: "La milono",
  owner: "milano",
};

//!OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||=10;
// rest2.numGuests ||=10;

//!nullish assignment operator (null or undefined)
//this is same as a or but it will also work on 0," ", false.
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// console.log(rest1); //output : with numGuests = 0
// console.log(rest2); // add property with numGuests = 10

//!AND with assignment operator
// normal approch
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
