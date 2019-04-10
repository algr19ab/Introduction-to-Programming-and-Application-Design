generateShopDOM(); // render the initial DOM

const buttons = document.querySelectorAll('.add-cart-btn'); // Initiate button bindings

function addToShoppingCart(e) {
    const id = this.dataset.id;
    const quantity = +this.previousElementSibling.value
    addToCart(id, quantity); // addToCart(String: id, Number: quantity)
    this.previousElementSibling.value = 1; // reset the quantity value to 1
}

buttons.forEach(button => button.addEventListener('click', addToShoppingCart)); // addEventListener to each button

document.getElementById('search-text').addEventListener('input', (e) => {
    console.log(e.target.value);
    console.log(e.target.value);
})
