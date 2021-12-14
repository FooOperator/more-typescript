var Product = /** @class */ (function () {
    function Product(data) {
        this.name = data.name;
        this.category = data.category;
        this.price = data.price;
        this.inStock = data.inStock;
    }
    return Product;
}());
var monitor144hz = {
    name: "Monitor 144Hz",
    category: ['TV', 'PC'],
    price: 320,
    inStock: 7
};
var prod_1 = new Product(monitor144hz);
console.log(prod_1.name);
