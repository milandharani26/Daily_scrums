function getValue(shapeObject) {
    const shape = shapeObject.shape;
    const value = shapeObject.value;

    const circleArea = (radius) => Math.PI * Math.pow(radius, 2);
    const circleParameter = (radies) => 2 * Math.PI * radies;

    const squareArea = (side) => Math.pow(side, 2);
    const squreParameter = (side) => 4 * side;

    const rectangleArea = (length, width) => length * width;
    const rectangleParameter = (length, width) => 2 * (length + width);

    const triangleArea = (base, height) => 0.5 * base * height;
    const triangleParameter = (base, side1, side2) => base + side1 + side2;

    if (!shape) {
        return "Error: Shape is not specified.";
    }

    switch (shape) {
        case "circle":
            return value === "area" ? circleArea(shapeObject.radius) : circleParameter(shapeObject.radius);

        case "square":
            return value === "area" ? squareArea(shapeObject.side) : squreParameter(shapeObject.side);

        case "rectangle":
            return value === "area" ? rectangleArea(shapeObject.length, shapeObject.width) : rectangleParameter(shapeObject.length, shapeObject.width);

        case "triangle":
            return value === "area" ? triangleArea(shapeObject.base, shapeObject.height) : triangleParameter(shapeObject.base, shapeObject.side1, shapeObject.side2);

        default:
            return "Error: Unknown shape.";
    }
}

// Example usage:
const result = getValue({
    shape: "circle",
    value: "area",
    radius: 10
});

console.log(result);



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


