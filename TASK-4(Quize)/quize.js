const arrayOfFruits = [
    {
      apple: 10,
      orange: 2,
      banana: 3,
    },
    {
      mango: 4,
      guava: 3,
      grapes: 9,
    },
    {
      papaya: 10,
      apple: 9,
      orange: 9,
    },
    {
      orange: 8,
      mango: 2,
      grapes: 3,
      customFruit: 9,
      hello: 10,
    },
  ];

  var newFruits = {}

  for (let i = 0; i < arrayOfFruits.length; i++) {
    const element = arrayOfFruits[i];
    
    for (const key in element) {

            if(key in newFruits){
                newFruits[key] += element[key];  
            }
            else{
                newFruits[key] = element[key];
            }
    }

  }


  console.log(newFruits);