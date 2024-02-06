//! for of loop

const restaurant = {
    name: "Classico Italiano",
    location: "via Angel tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzaria", "vegetarian", "Organic"],
    starterManu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "pasta", "Risotto"],

    openingHours: {
        thu: {
            start: "9am",
            end: "10pm",
        },
        fri: {
            start: "9am",
            end: "10pm",
        },
        sat: {
            start: 0,
            end: "12pm",
        },
    },

    order({ startIndex, mainIndex }) {
        return [this.starterManu[startIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function (food1, food2, food3) {
        return `you ordered ${food1}, ${food2} and ${food3} for your lunch`;
    },
};

const menu = [...restaurant.starterManu, ...restaurant.mainMenu];

for (const [item, idx] of menu.entries()) {
    // console.log(item, idx);
}

//! Enhance object literals

const weekdays = ["mon", "tues", "weds", "thus", "fri", "sat", "sun"];
//? refrence object is above
// openingHours = {
//     [weekdays[3]]: {
//         start: "9am",
//         end: "10pm",
//     },
//     [weekdays[4]]: {
//         start: "9am",
//         end: "10pm",
//     },
//     [`day-${2+1}`]: {
//         start: "10am",
//         end: "12pm",
//     },
// };

// const restaurant = {
//     name: "Classico Italiano",
//     location: "via Angel tavanti 23, Firenze, Italy",
//     categories: ["Italian", "Pizzaria", "vegetarian", "Organic"],
//     starterManu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
//     mainMenu: ["Pizza", "pasta", "Risotto"],

//     openingHours  //we can directly write this object here

//     order({ startIndex, mainIndex }) {
//         return [this.starterManu[startIndex], this.mainMenu[mainIndex]];
//     },

//     orderPasta(food1, food2, food3) {
//         console.log(`you ordered ${food1}, ${food2} and ${food3} for your lunch`);
//     },
// };

//!---------------------------------------------------

//! optional chaining

//normal syntax
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//     console.log(restaurant.openingHours.mon.open);
// }

//with optional chaining
// console.log(restaurant.openingHours.mon?.start);
// console.log(restaurant.openingHours.thu?.start);

// multiple checks
// console.log(restaurant.openingHours?.sat?.start);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
    const open = restaurant.openingHours[day]?.start ?? "closed";
    // console.log(`on ${day} we open at ${open}`);
}

//-->methods
// if method exist
// console.log(restaurant.orderPasta?.(0, 1, 2) ?? "method does not exist");

//if method does not exist
// console.log(restaurant.orderResotto?.(0, 1) ?? "method does not exist");

//-->arrays
// const users = [{name:"milan", email:"milandharani26@gmail.com"}];

const users = [];
// console.log(users[0]?.name ?? "user array empty");

//! loop over object

//property NAMES
const properties = Object.keys(restaurant.openingHours);

// console.log(properties);

let openStr = `we are open on ${properties.length} days: `;

for (const day of properties) {
    openStr += `${day},`;
}
// console.log(openStr);

//property values
const values = Object.values(restaurant.openingHours);
// console.log(values);

//Entire Object
const enteries = Object.entries(restaurant.openingHours);

//for(const original,{original key: our key name, original : our})
for (const [key, { start: open, end: close }] of enteries) {
    // console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//! sets
const orderSet = new Set([
    "pasta",
    "pizza",
    "pizza",
    "risotto",
    "pasta",
    "pizza",
]);

orderSet.add("paneer");
orderSet.add("paneer");
orderSet.delete("risotto");
// console.log(orderSet.has("pizza"));
// orderSet.clear();
// console.log(orderSet);

//? looping in sets

for (const order of orderSet) {
    // console.log(order);
}

//! if we want unique value from an array and make a new array

const restorent = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

//here we make new array of restorent staff position.
const restorentPositions = [...new Set(restorent)];
// console.log(restorentPositions);
// console.log(restorentPositions.length);

// console.log(new Set("milan keshubhai dharani").size);

//! MAP Data Structure

const rest = new Map();
rest.set("name", "milan");
rest.set(1, "ahmedabad gujarat");

//? rest.set() return whole map object
// console.log(rest.set(2, "bandra bombay"));

// we can write this

rest
    .set("categories", ["india", "intalian", "pizzaria"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "we are open")
    .set(false, "we are closed");
// console.log(rest);

//? get values from map
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

const time = 21;

// console.log(rest.get(time > rest.get('open') && time < rest.get("close")));

// console.log(rest.has('categories'));

// rest.clear();
rest.delete(2); //here inside delete() give key of map;
// console.log(rest);
// console.log(rest.size);

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "heading");

console.log(rest);

// other way to set value in Map
const questions = new Map([
    ["question", "best programming in the world"],
    [1, "c"],
    [2, "java"],
    [3, "javaScript"],
    ["correct", 3],
    [true, "correct 🥳"],
    [false, "try again"],
]);

console.log(questions);

const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

//quize app
// console.log(questions.get("question"));

for (const [key, value] of questions) {
    if (typeof key === "number") {
        // console.log(`answer ${key}:${value}`);
    }
}

// const answer = Number(prompt('your answer'));
// console.log(answer);

// console.log(questions.get(questions.get("correct") === answer));

//convert map in to array

console.log([...questions]);
console.log([...questions.keys()]);
console.log([...questions.values()]);

//!string methods
const email = "hello@jonas.io";
const loginemail = "    HEllo@jonas.io\n";

const normalizedEmail = loginemail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replcing
const priceL = "288,97€";
console.log(priceL);

const priceUS = priceL.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All pessengers come to bording door 23. boarding door 23";

// console.log(announcement.replace("door", "gate")); //? Output : All pessengers come to bording gate 23. boarding door 23
//this will only converts first door to gate second time it will remain same.

//? converts using regular expression
// console.log(announcement.replace(/door/g, "gate"));

console.log(announcement.replaceAll("door", "gate"));

// console.log(announcement.match("A"));

//boolean
const plane = "AirbusA320neo";

//?includes
console.log(plane.includes("A320"));

//?startswith
console.log(plane.startsWith("AIR"));

//?endswith
console.log(plane.endsWith("ne0"));

//?split() and join()
//! NOTE : in splite devide array by split string and return new array.
//! NOTE : in join connect(join) array by whatever string you give to join() function and return string.
const username = "I+am+milan+dharani";
const splitedName = username.split("+");
console.log(splitedName);

const [firstName, lastName] = "milan dharani".split(" ");
const newName = ["Mr", firstName, lastName.toUpperCase()].join("-");
console.log(typeof newName);


const capitalizeName = function (name) {
    const names = name.split(" ");
    const nameUpper = [];

    for (const n of names) {
        nameUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(nameUpper.join(" "));
}

capitalizeName("milan dharani")


//padding 
const message = "got to gate no 23. "
console.log(message.padStart(25, "+").padEnd(30, '-'));
console.log("milan".padStart(25, "+").padEnd(30, '-'));

const makeCreditcard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
}
console.log(makeCreditcard(5555449885));
console.log(makeCreditcard(5555868678));


//?repeat()
console.log(message.repeat(5));
