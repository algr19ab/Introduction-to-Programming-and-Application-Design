class Product {
    constructor(name, id) {
        this.name = name,
        this.id = id
    }
}

class lineItem {
    constructor(product, quantity) {
        this.product = product
        this.quantity = quantity
    }
}


var product = new Product('Rose', 456789)
var lineItem1 = new lineItem('Red Rose', 7)
var lineItem2 = new lineItem(product, 7)

console.log(product)
console.log(lineItem1)
console.log(lineItem2)
console.log(lineItem2.product.id)
