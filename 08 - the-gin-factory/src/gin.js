class Gin {
    constructor(name, brand, price, img_url, id) {
        this.name = name,
        this.brand = brand,
        this.price = price,
        this.img_url = img_url,
        this.id = id
    };

    // Create a method that renders the Gin's HTML structure with dynamic data
    renderHTML() {
       return `<tr>
                    <td>
                        <img src="${this.img_url}" style="height: 125px">
                    </td>
                    <td>${this.name}</td>
                    <td>${this.brand}</td>
                    <td>${this.price}</td>
                    <td>
                        <input type="number" class="quantity" min="1" max="99" value="1">
                        <button class="add-cart-btn" data-id="${this.id}" data-name="John">Add to Cart</button>
                    </td>
                </tr>
    `};
}



