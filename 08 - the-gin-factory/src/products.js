// Initialize the products and cart array
let products = [];
let cart = [];


// Load the current database of products from localStorage
const loadProducts = () => {
        products = [new Gin('Flor De Sevilla', 'Tanqueray', 216.66, './img/29279_0.jpg', '98336088-aa0f-4147-804a-bce1dce2d36e'),
        new Gin('Rangpur', 'Tanqueray', 225.33, './img/28221_0.jpg', '7aae3eb0-6611-4259-ab8f-4fae4a5d1bbe'),
        new Gin('Monkey 47', 'Schwarzwald Dry Gin', 281.00, './img/24854_0.jpg', '631220f1-cf75-4fe2-8ff2-8457873e1c82'),
        new Gin('Lovage Gin', 'Tanqueray', 386.58, './img/29277_0.jpg', '631220f1-cf75-4fe2-8ff2-8457873e1c82'),
        new Gin('Momentum Holy Basil', 'German Dry Gin', 291.32, './img/27907_0.jpg', '94c48341-e790-4249-9077-b31f0a961ec6'),
        new Gin('Gin', 'Jinzu', 277.97, './img/28031109_0.jpg', 'ec043065-d9e5-4e31-b542-a147ba518e2f')];
}

// Create a function to get the most recent list of products
function getProducts() {
        return products;
}

// Load the products
loadProducts()

// Create a function to find a product/item based on it's ID
// The function should take both the array and ID as inputs
const findProductById = (data, id) => {
        const product = data.find((product) => {
                return product.id === id
        })

        return product
}


/**
 * SHOPPING CART
 */

// Create a function that adds a product by it's ID and its quantity to the shopping cart
const addToCart = (id, quant) => {
        console.log(`${id} has ben added ${quant} times`);
        if (!findProductById(cart, id)) {
                cart.push({ ...findProductById(products, id), quantity: quant })
        } else {
                findProductById(cart, id).quantity += quant
        }
        saveCart()
}


// Create a function that loads the cart from localStorage
const loadCart = function () {
        if (localStorage.getItem('cart') === null) {
                cart = []
        } else {
                cart = JSON.parse(localStorage.getItem('cart'))
        }

        // localStorage.getItem('cart') === null ? cart = [] : cart [] = JSON.parse(localStorage.getItem('cart'))
}

// Create a function that saves your cart to localStorage
const saveCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart))
}

// Create a function that returns the current shopping cart
const getCart = () => {
        return cart
}


// Create a function that calcualtes the total price of the cart
const calculteTotal = () => {
        let total = 0

        cart.forEach((item) => {
                total += item.price * item.quantity
        })

        return total
}


// Make sure to load the cart array
loadCart()