//! chellenge 1
// mark's weight and height
const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / (markHeight * markHeight);

// jogn's weight and height
const johnMass = 95;
const johnHeight = 1.88;
const johnBMI = johnMass / (johnHeight * johnHeight);

//boolean variable markHighterBMI
const markHighterBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI,markHighterBMI);



//! chellenge 2
// add on of chellenge 1
if (markBMI > johnBMI) {
  console.log(`mark's BMI is higher than john's ${markBMI}`);
} else {
  console.log(`john's BMI is higher than mark's ${johnBMI}`);
}



//! chellenge 3
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

// Function to calculate average score
const calculateAverage = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

// Function to determine the winner
const determineWinner = (dolphinsAvg, koalasAvg) => {
  if (dolphinsAvg >= koalasAvg * 2) {
    return "Dolphins win!";
  } else if (koalasAvg >= dolphinsAvg * 2) {
    return "Koalas win!";
  } else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    return "Dolphins win!";
  } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    return "Koalas win!";
  } else {
    return "It's a draw!";
  }
};

// Calculate average scores
const dolphinsAverage = calculateAverage(dolphinsScores);
const koalasAverage = calculateAverage(koalasScores);

// Determine the winner and print the result
console.log(`Dolphins average: ${dolphinsAverage}`);
console.log(`Koalas average: ${koalasAverage}`);
console.log(determineWinner(dolphinsAverage, koalasAverage));



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





