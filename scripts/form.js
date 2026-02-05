const products = [
    { id: "p1", name: "Laptop Pro" },
    { id: "p2", name: "wireless Headphones" },
    { id: "p3", name: "Smart Watch" },
    { id: "p4", name: "Bluetooth Speaker" },
];

const select = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});