console.log("AYRA BABY PRODUCTS.JS");

async function loadProducts() {

    const res = await fetch(
        "http://localhost:5000/api/products"
    );

    const products = await res.json();

    const params =
    new URLSearchParams(
        window.location.search
    );

    const selectedCategory =
    params.get("category");

    let filteredProducts = products;

    if(selectedCategory){

        filteredProducts =
        products.filter(product =>

            product.category &&
            product.category.toLowerCase() ===
            selectedCategory.toLowerCase()

        );

    }

    console.log(filteredProducts);

    let output = "";

    filteredProducts.forEach(product => {

        output += `
        <div class="card">

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
            ${product.price},
            '${product.image}'
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

loadProducts();

function addToCart(
    name,
    price,
    image
){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.push({
        name,
        price,
        image,
        qty:1
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " Added To Cart 💖");
}