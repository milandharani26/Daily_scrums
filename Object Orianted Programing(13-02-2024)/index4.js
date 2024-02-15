const sameLetterPattern = function (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        let foundInStr2 = false;
        let foundInStr1 = false;

        for (let j = 0; j < str1.length; j++) {
            if (str1[i] === str1[j]) {
                if (str2[i] !== str2[j]) {
                    return false; 
                }
                foundInStr1 = true;
            }

            if (str2[i] === str2[j]) {
                if (str1[i] !== str1[j]) {
                    return false; 
                }
                foundInStr2 = true;
            }
        }

        if (!foundInStr1 || !foundInStr2) {
            return false;
        }
    }

    return true;
};

const answer = sameLetterPattern("ABC", "XYZ");
console.log(answer); 
