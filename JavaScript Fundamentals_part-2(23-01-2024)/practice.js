// declarative function
function calAge1(birthyear) {
    return 2024 - birthyear;
  }
  const age1 = calAge1(2000);
  // console.log(age1);
  
  //expressive function
  const calAge2 = function (birthyear) {
    return 2024 - birthyear;
  }
  const age2 = calAge2(2000);
  // console.log(age2);
  
  //arrow function
  const callAge3 = (birthyear) => 2024 - birthyear;
  const age3 = callAge3(2000);
  // console.log(age3);
  
  
  const yearsToRetirement = (bithyear, firstname)=>{
      const currentAge = 2024-bithyear;
      const retirementTime = 65-currentAge;
  
      return`${firstname} retires in ${retirementTime} years`;
  }
  
  console.log(yearsToRetirement(2003, "milan"));
  
  
  
  const fruitPices = (fruit) =>{
      return fruit * 4;
  }
  
  
  const fruitProcessor = (apple, orange) =>{
      const applePices = fruitPices(apple);
      const orangePices = fruitPices(orange);
  
      return`${applePices} of apple and ${orangePices} of orange`;
  }
  
  const juice = fruitProcessor(2,3);
  
  console.log(juice);