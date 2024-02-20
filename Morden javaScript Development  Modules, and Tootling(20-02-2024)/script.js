//Importing module

// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// addToCart("bread", 5);
// console.log(price, tq);
console.log("Importing module");
// console.log(shippingcost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';

add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart);


//? this is a top level await here we can use await without having async
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);


//getting last post

const getLastPort = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return { title: data.at(-1).title, text: data.at(-1).body }
}

const lastPost = getLastPort();
console.log(lastPost);

// not a clean
// lastPost.then(last=>console.log(last));

const lastpost2 = await getLastPort();
console.log(lastpost2);