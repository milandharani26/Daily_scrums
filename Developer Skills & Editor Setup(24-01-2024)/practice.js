"use strict";

//problem 1:

/*we work for a company building a smart home thermometer. Our most recent tasj in this:"Given an array of temperature of one day, calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error." */

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/*  1) understanding the problem
        - what is temp amplitute ? Answer : difference between highest and lowest temp
        - How to compute max and min temperaturs
        - what's a sensor error ? And what to do?

    2) Breaking up into sub-problems 
        - How to ignore errors?
        - Find max value in temp array
        - Find min value in temp array
        - Subtract min from max (amplitude) and return it
*/

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);

  return max - min;
};

// calcTempAmplitude([1, 3, 4, 5]);

const amplitute = calcTempAmplitude(temperature);

console.log(amplitute);

//Problem 2:
// Function should now receive 2 arrays of temp

/*  1) Understanding the problem 
        - with 2 arrays, should we implement functionality twicw ? No! just merge two arrays

    2) Breaking up into sub-problems
        - How to merge to arrays
        - 
*/

const calcTempAmplitudeNew = function (t1, t2) {
  let temps = t1.concat(t2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);

  return max - min;
};

const amplituteNew = calcTempAmplitudeNew(temperature, [1, 2, 34, 54]);

console.log(amplitute);

// learn debugging from here

const measurekelvin = function(){

    const measurement = {
        type:"temp",
        unit:"celsius",

        // c) FIX
        // value : Number(prompt("degree celsius : ")),
        value:10,
    };

    // B) FIND
    console.table(measurement);

    const kelvin = measurement.value + 273;

    return kelvin;
}

// A) IDENTIFY
console.log(measurekelvin());
