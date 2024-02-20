//Exporting module
console.log("Exporting module");

//!bloking code
//? await outside any module it could be block entire module and also other module in which we are exporting this module.
console.log("Start fatching users 💥");
await fetch("https://jsonplaceholder.typicode.com/posts");
console.log("Finish fatching 💥");


const shippingCost = 10;
export const cart = [];


export const addToCart = function (product, quentity) {
  cart.push({ product, quentity });
  console.log(`${quentity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;


//? here we can named and default export both at same time but don't do in production.

// export { totalPrice, totalQuantity }
export { totalPrice, totalQuantity as tq };

export default function (product, quentity) {
  cart.push({ product, quentity });
  console.log(`${quentity} ${product} added to cart`);
}
