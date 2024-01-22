var arr = [0, 2, 4, 6,7]

const revArr = (arr) => {

    var reverse_arr = [];
    var length = arr.length;

    for (let i = length-2; i >= 0; i--) {
        reverse_arr.push(arr[i]);
    }
    var answer = arr.concat(reverse_arr);

    return console.log(answer);
}

revArr(arr);


