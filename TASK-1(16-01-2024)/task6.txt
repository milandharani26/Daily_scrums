function getValue({shape, radius, hight, width}) {

    var n = "square";

    switch (n) {
        case "square":
            let squareArea = hight * hight;
            return console.log(`\narea of square with height ${hight}: ${squareArea}`);

        case 2:
            let reactangleArea = hight * width;
            return console.log(`\narea of rectangle with height ${hight} and width ${width}: ${reactangleArea}`);

        case 3:
            let triangleArea = 1 / 2(hight * width);
            return console.log(`\narea of triangle with height ${hight}: ${triangleArea}`);

        case 4:
            let circleArea = 3.14 * radius * radius;
            return console.log(`\narea of circle with height ${radius}: ${circleArea}`);

        default:
            return console.log("\nenter valid shape")
    }
}


// console.log("press 1 for square");
// console.log("press 2 for rectangle");
// console.log("press 3 for tringle");
// console.log("press 4 for circle");

// let shape = prompt('enter shape :')
let shape = 2;


// area(shape,radius, height,width)

area(shape, 0, 2, 5);


// (getValue(
//     {
//         shape:"square",
//         value:"area",
//         radius:10,
//         length:19
//     }
// )) ;=> return 10*10 *3.14;