interface IProduct {
    id?: number,
    name: string,
    category: Array<ProductCategory>,
    price: number,
    inStock: number,
    
}

type ProductCategory = 'Gaming' | 'PC' | 'Mobile' | 'TV' | 'Home Cinema' | 'Sound' | 'Decoration' | 'Kitchen' | 'Gardening' | 'Music' | 'Gadgets' | 'Gift Cards'

type ProductData = IProduct

class Product implements IProduct {
    id?: number
    name: string
    category: Array<ProductCategory>
    price: number
    inStock: number

    constructor(data: ProductData) {
        this.name = data.name
        this.category = data.category
        this.price = data.price
        this.inStock = data.inStock
    }
}


const monitor144hz : ProductData =  {
    name: "Monitor 144Hz",
    category: ['TV', 'PC'],
    price: 320,
    inStock: 7
}

const prod_1 = new Product(monitor144hz)

console.log(prod_1.name)