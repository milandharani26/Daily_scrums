const sameLetterPattern = function (str1, str2) {
    const str1Arr = [...str1];
    const str2Arr = [...str2];
  
    const len = str1Arr.length;

    let index = 0;
    let index2 = 0;
  
    let flag = true;
  
for (let i = 0; i < str1.length; i++) {
    
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str1.length; j++) {
            if(str1[i] == str1[j]){
                index = j + 1;
            }
        }
    }

    

    for (let i = 0; i < str2.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if(str1[i] == str1[j]){
                index2 = j + 1;
            }
        }
    }




    
}

    if(index == index2){
        return true;
    }
    else{
        return false;
    }
  
  };
  
//   const answer = sameLetterPattern(")WSWT", "OWXWR");
  const answer = sameLetterPattern("145", "?)(");
  console.log(answer);
  
  