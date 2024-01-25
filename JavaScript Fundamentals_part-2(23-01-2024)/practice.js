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

///////////////////////////////

  const milan = {
    firstName: "milan",
    lastName: "Dharani",
    birthYear: 2003,
    job: "MERN DEVELOPER",
    friends: ["sachin", "rushil", "darshit"],
    hasDeiversLicence: true,
  
    // calcAge : function(birthyear){
    //     return 2024 - birthyear;
    // },
  
    // calcAge : function(){
  
    //     //? this point to the method who call it.in this calAge() method call by milan object in line 25 so this.birthYear would be a milan object's birthYear value.
  
    //     return 2024 - this.birthYear;
    // },
  
    calcAge: function () {
      //? here we can also store value using this by making variable using this and than that variable stored in property which call method as written below
      this.age = 2024 - this.birthYear;
      return this.age;
    },
  
    getSummary: function() {
      return `${this.firstName} is ${this.calcAge()}-year old ${
        this.job
      }, and he hase ${this.hasDeiversLicence ? "a" : "no"} driver's licence`;
    },
  };
  
  // console.log(milan.calcAge(2003));  //1
  // console.log(milan.calcAge())       //2
  // console.log(milan.calcAge());      //3
  
  //* if i use once calcAge than it will stored in milan object so now i have just call age as below and value remain same.
  //console.log(milan.age)    //3 // but to use this you have to use calAge method onece
  
  // "milan is 21-years old MERN DEVELOPER, and he has a driver's licence"

  console.log(milan.getSummary());
  










  //*  for loop
  const arr = [
    "milan",
    "dharani",
    21,
    "developer",
    ["sachin", "rushil", "darshit"],
    true,
  ];
  
  // for (let i = 0; i<arr.length; i++){
  //     console.log(arr[i],typeof(arr[i]))
  // }
  
  const birth = [1970, 2007, 1978, 2020];
  
  //* now we calculate age using for llop and store in new array
  
  const ages = [];
  
  for (let i = 0; i < birth.length; i++) {
    ages.push(2024 - birth[i]);
  }
  
  // console.log(ages);
  
  console.log("---ONLY STRINGS---");
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") continue;
    console.log(arr[i], typeof arr[i]);
  }
  
  console.log("---BREAK WITH NUMBER---");
  
  for (let i = 0; i < arr.length; i++) {
      if( typeof arr[i] === "number") break;
      console.log(arr[i], typeof arr[i]);
  }
  
  
  //? looping in reverse
  
  for (let i = arr.length-1; i >= 0; i--) {
      console.log(i, arr[i]);
  }
  