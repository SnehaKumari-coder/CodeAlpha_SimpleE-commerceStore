let orders =
JSON.parse(
localStorage.getItem("orders")
) || [];

let output = "";

orders.forEach(order => {

output += `
<div style="
border:1px solid black;
padding:10px;
margin:10px">

<h3>${order.orderId}</h3>

<p>Total: ₹${order.total}</p>

<p>Status: Processing</p>

</div>
`;
});

document.getElementById(
"orders"
).innerHTML = output;