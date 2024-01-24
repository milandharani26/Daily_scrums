
var arr1 = [9, 1, 1, 9]
var arr2 = [2, 4, 8, 3]
var arr3 = [3, 2, 1, 2]

const squre = (arr) => {
    var newArr = [];
    var answer = arr.forEach((num) => {
        return newArr.push(num * num);
    });

    return console.log(newArr);
}

squre(arr1);
squre(arr2);
squre(arr3);

