const arr = [
  [0, 0, 0],
  [2, 1, 1],
  [2, 2, 2],
];

const canSeeStage = function (mainArray) {
  let flag = true;
  const flatedArr = mainArray.flat();

  console.log(flatedArr);

  flatedArr.forEach((elem, i, arr) => {
    if (flag) {
      if (i <= arr.length - 2)
        if (arr[i] <= arr[i + 1]) {
          flag = true;
        } else {
          flag = false;
        }

      // console.log(arr[i], arr[i + 1]);
    }

    // console.log(flag,i);
  });

  return flag;
};

const answer = canSeeStage(arr);

console.log(answer);
