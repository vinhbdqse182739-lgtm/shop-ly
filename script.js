const products = [
  { id: 1, name: "Ly sứ trắng", price: 50000 },
  { id: 2, name: "Ly thủy tinh", price: 70000 },
  { id: 3, name: "Ly giữ nhiệt", price: 120000 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (el) el.innerText = cart.length;
}

function addToCart(id) {
  cart.push(products.find(p => p.id === id));
  saveCart();
  updateCartCount();
}

function renderProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;

  list.innerHTML = "";

  products.forEach(p => {
    list.innerHTML += `
      <div class="border p-3 rounded shadow">
        <h3>${p.name}</h3>
        <p>${p.price}đ</p>
        <button onclick="addToCart(${p.id})"
          class="bg-green-500 text-white px-2 py-1 mt-2 rounded">
          Mua
        </button>
      </div>
    `;
  });

  updateCartCount();
}

renderProducts();