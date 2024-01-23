//! chellange 1
const calcAverage = (value1, value2, value3)=>{
    return (value1 + value2 + value3)/3;
}

//*test  average score of both the teams
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreDolphins);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins wins 🏆 ${avgDolphins} vs ${avgKoalas}`)
    }
    else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas wins 🏆 ${avgDolphins} vs ${avgKoalas}`)
    }
    else{
        console.log('no team wins')
    }
}

checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(500,100);

scoreDolphins = calcAverage(85,54,41)
scoreKoalas = calcAverage(23,34,27)

checkWinner(scoreDolphins, scoreKoalas);


//!chellenge 2
const calTip = (bill)=>{
    return bill>=50 && bill<=300 ? bill * 0.15 : bill * 0.2;
}

const bill = [125, 555, 44];
const tip = [calTip(bill[0]), calTip(bill[1]), calTip(bill[2])];
const totalAmount = [bill[0]+tip[0], bill[1]+tip[1], bill[2]+tip[2] ]

// console.log("bill \t\t tip")
// console.log(bill, tip);

// console.log("total Amount")
// console.log(totalAmount);

console.log(`\nbills : ${bill} \ntips : ${tip} \ntotals : ${totalAmount}`)

//!chellenge 3

const mark = {
fullname:"Mark Miller",
 mass:78,
 height : 1.69,
 calBmi: function(){
    this.bmi = this.mass / this.height **2;
    return this.bmi;
 }
};


const john = {
    fullname:"john Smith",
     mass:92,
     height : 1.95,
     calBmi: function(){
        this.bmi = this.mass / this.height **2;
        return this.bmi;
     }
    };

mark.calBmi();
john.calBmi();

console.log(mark.bmi, john.bmi);


    if (mark. bmi> john.bmi) {
        console.log(`${mark.fullname}'s (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})`);
    }
    else{
        console.log(`${john.fullname}'s (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})`);
    }
    




//! chellenge 4

const billValues = [275, 40, 430];

// Function to calculate tip
const calculateTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

billValues.forEach((bill) => {
  // Calculate tip
  const tip = calculateTip(bill);

  // Calculate total value
  const totalValue = bill + tip;

  // Print the result
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
  );
});




