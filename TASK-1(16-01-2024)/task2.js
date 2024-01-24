var str = "Hello I wanna learn JavaScript";

const randomStr = (str) =>{

    let answer = str.split('').map(char =>
        Math.random() < 0.5 ? char : char.toUpperCase()
    ).join('');

    return answer;
}

  let originalString = "Hello I wanna learn JavaScript";
  let randomlyCapitalizedString = randomStr(originalString);
  
  console.log("\nOriginal string:", originalString,"\n");
  console.log("Randomly capitalized string:", randomlyCapitalizedString);
  
