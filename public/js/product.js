async function loadProducts() {

    const res = await fetch(
        "http://localhost:5000/api/products"
    );

    const products = await res.json();

    let output = "";

    products.forEach(product => {

        output += `
        <div style="
        border:1px solid black;
        margin:10px;
        padding:10px">

            <img
            src="${product.image}"
            width="200"
            height="200">

            <h3>${product.name}</h3>

            <p><b>Brand:</b> ${product.brand}</p>

            <p><b>Category:</b> ${product.category}</p>

            <p>₹${product.price}</p>

            <p>${product.description}</p>

            <button onclick="
            addToCart(
            '${product.name}',
            ${product.price}
            )">
            Add To Cart
            </button>

        </div>
        `;
    });

    document.getElementById(
        "products"
    ).innerHTML = output;
}

function addToCart(name, price){

    let cart =
    JSON.parse(
    localStorage.getItem("cart")
    ) || [];

    cart.push({
        name,
        price,
        qty:1
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " Added To Cart");
}

loadProducts();