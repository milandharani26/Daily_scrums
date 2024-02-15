const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const somee = movements.some((mov, index) => {
  return mov > 0;
});

// console.log(1,somee)

const everyy = movements.every((mov, index, array) => {
  //this function can get 3 args (value, index,arr).
  // console.log(index,array)
  return mov > 0;
});

// console.log(2,everyy);

const flat = [[1, 2, 3], 4, 5, 6, 7, [8, 9, 10]];
const flatedArr = flat.flat();
// console.log(flatedArr);

const arrDeep = [
  [[1, 2], 3],
  [4, [5, 6], 7, 8],
];
// console.log("\n",arrDeep.flat()) //output : [[1,2],3,4,[5,6],7,8]
//?this will remove 1 layer of nested array but if you want flat array like above so you have to give argument in flat method for how many layers you want to flate

// console.log("\n",arrDeep.flat(2));

//overall balance
// const accountMovement = accounts.map(acc => acc.movements);
// const balance = accountMovement.flat().reduce((acc,value)=>{
//     return acc+value;
// },0)
// console.log(balance);

//! we can do this also
const overAllBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance);

//! flatMap()
const balanceFlatMap = accounts
  .flatMap((acc) => acc.movements) //flat map goes only 1 level deep in array if want to go more deep than you have to use flat again.
  .reduce((acc, mov) => acc + mov, 0);
// console.log(balanceFlatMap);

//!sort()

//return < 0, A, B (KEEP ORDER).
//return > 0, B, A (SWITCH ORDER).

// const sortedArr = movements.sort((a,b)=>{
//     if(a>b) return 1;
//     if(b>a) return -1;
// })
const sortedArr = movements.sort((a, b) => a - b);
// console.log(sortedArr);

//!create array

const y = new Array(7);
y.fill(1);
// console.log(y);

y.fill(2, 3);
// console.log(y)

y.fill(5, 1, 3); //fill(value, start, end) like slice.
// console.log(y);

// new way to create an array
const z = Array.from({ length: 7 }, () => 1);
// console.log(z);

const x = Array.from({ length: 7 }, (cur, i) => i + 1); //<--- this callback function is like we are doing map on empty array.
// console.log(x);


//create a 10 rendom values array for dice 
const dice = Array.from(
  { length: 10 },
  () => Math.trunc(Math.random() * 6) + 1
);
// console.log(dice)



