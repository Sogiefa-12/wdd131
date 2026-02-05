// Product data (must match form.js)
const products = [
  { id: "p1", name: "Laptop Pro" },
  { id: "p2", name: "Wireless Headphones" },
  { id: "p3", name: "Smart Watch" },
  { id: "p4", name: "Bluetooth Speaker" }
];

// Get URL parameters
const params = new URLSearchParams(window.location.search);

// Find product name from ID
const productId = params.get("product");
const product = products.find(p => p.id === productId);

document.getElementById("product").textContent =
  product ? product.name : "Unknown Product";

// Rating
document.getElementById("rating").textContent =
  params.get("rating") ? `${params.get("rating")} / 5` : "Not provided";

// Installation date
document.getElementById("installDate").textContent =
  params.get("installDate") || "Not provided";

// Features (checkboxes)
const features = params.getAll("features");
document.getElementById("features").textContent =
  features.length ? features.join(", ") : "None selected";

// Written review
document.getElementById("review").textContent =
  params.get("review") || "No additional comments";

// Review counter
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("count").textContent = count;
