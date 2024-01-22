function sortDrinkByPrice(drinks) {

    return drinks.sort(function(a, b) {
        return  b.price - a.price;
    });
}

const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "limee", price: 30 },
    { name: "pepsi", price: 20 },
];

const sortedDrinks = sortDrinkByPrice(drinks);
console.log(sortedDrinks);





