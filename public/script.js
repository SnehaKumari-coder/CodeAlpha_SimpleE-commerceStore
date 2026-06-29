let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("/products")
.then(res => res.json())
.then(products => {

```
let output = "";

products.forEach(product => {

    output += `
    <div class="card">

        <img
        src="https://via.placeholder.com/200x150"
        alt="${product.name}">

        <h2>${product.name}</h2>

        <p>₹${product.price}</p>

        <button onclick="addToCart('${product.name}', ${product.price})">
            Add To Cart
        </button>

    </div>
    `;
});

document.getElementById("products").innerHTML = output;
```

});

function addToCart(name, price){

```
let existing =
cart.find(item => item.name === name);

if(existing){

    existing.qty =
    (existing.qty || 1) + 1;

}else{

    cart.push({
        name,
        price,
        qty: 1
    });
}

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

alert(name + " added to cart!");
```

}
