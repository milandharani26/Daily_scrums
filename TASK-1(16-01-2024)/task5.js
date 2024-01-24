const decimalToBinary = (decimalNumber)=> {
    if (isNaN(decimalNumber) || decimalNumber < 0 || Math.floor(decimalNumber) !== decimalNumber) {
        return "Invalid input. Please enter a non-negative integer.";
    }

    if (decimalNumber === 0) {
        return "0";
    }

    let binaryResult = "";
    while (decimalNumber > 0) {
        binaryResult = (decimalNumber % 2) + binaryResult;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binaryResult;
}


const decimalNumber = 12;
console.log(`Decimal: ${decimalNumber}, Binary: ${decimalToBinary(decimalNumber)}`);


