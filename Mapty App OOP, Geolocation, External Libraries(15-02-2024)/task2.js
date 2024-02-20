function zerocurrentMaxCountArr(arr, k) {
    let maxOnes = 0;
    let maxcurrentMaxCountArr = [];

    // [1,0,1,1,0,0,0,1]

    for (let i = 0; i < arr.length; i++) {
        let Count = 0;
        let onesCount = 0;
        let currentMaxCountArr = [];

        for (let j = i; j < arr.length && Count <= k; j++) {

            if (arr[j] === 0) {
                if (Count < k) {
                    Count++;
                    currentMaxCountArr.push(j);
                } else {
                    break;
                }
            }


            // console.log(currentMaxCountArr,onesCount,"onescount");

            onesCount++;

        }

        // console.log(currentMaxCountArr,onesCount,"outside loop");

        if (onesCount > maxOnes) {
            maxOnes = onesCount;
            maxcurrentMaxCountArr = currentMaxCountArr;
        }
    }

    return maxcurrentMaxCountArr;
}


const binaryArr = [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1]
// const binaryArr = [1,0,0,0,0,0,0,0,1,0,1,0];

const answer = zerocurrentMaxCountArr(binaryArr, 1);


console.log(answer);