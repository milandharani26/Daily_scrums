function getValue({shape, value, radius, side, length, width, height, base, side1, side2}) {

    var circle = {
        area: function (radius) {
            return Math.PI * Math.pow(radius, 2);
        },
        parameter: function (radius) {
            return 2 * Math.PI * radius;
        },
        volume: function (radius) {
            return Math.PI * Math.pow(radius, 3);
        }
    }

    var square = {
        area: function (side) {
            return Math.pow(side, 2);
        },
        parameter: function (side) {
            return 4 * side;;
        },
        volume: function (side) {
            return Math.pow(side, 3);
        }
    }
    
    var rectangle = {
        area: function (length, width) {
            return length * width;
        },
        parameter: function (length, width) {
            return 2*(length + width);
        },
        volume: function (length, width, height) {
            return length * width * height;
        }
    }
    
    var triangle = {
        area: function (base, height) {
            return 0.5 * base * height;
        },
        parameter: function (base, side1, side2) {
            return base + side1 + side2;
        },
        volume: function (base, height) {
            return base * height;
        }
    }
    
    if (!shape) {
        return "Error: Shape is not specified.";
    }

    switch (shape) {

        case "circle":
            return circle[value](radius)

        case "square":
            return square[value]

        case "rectangle":
            return rectangle[value]

        case "triangle":
            return triangle[value]
            
        default:
            return "Error: Unknown shape.";
    }
}

// Example usage:

const result = getValue({
    shape: "circle",
    value: "area",
    radius:10,
});

console.log(result);

