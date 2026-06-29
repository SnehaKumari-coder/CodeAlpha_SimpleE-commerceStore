function placeOrder(){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

let total = 0;

cart.forEach(item=>{
total += item.price;
});

const order = {

orderId:
"ORD" + Date.now(),

total: total
};

let orders =
JSON.parse(
localStorage.getItem("orders")
) || [];

orders.push(order);

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

localStorage.removeItem("cart");

alert(
"Order Placed Successfully!\n\nOrder ID: "
+ order.orderId
);

window.location.href =
"orders.html";
}