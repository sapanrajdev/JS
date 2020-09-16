function compareBy(propName) {
    return function (a, b) {
        let x = a[propName],
            y = b[propName];

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1
        } else {
            return 0;
        }
    }
}

let products = [
    {name: 'IPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

products.sort(compareBy('name'));

console.table(products);