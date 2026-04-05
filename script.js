const products = [
  {
    id: 1,
    name: "Ly sứ trắng",
    price: 50000,
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
  },
  {
    id: 2,
    name: "Ly thủy tinh",
    price: 70000,
    img: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec"
  },
  {
    id: 3,
    name: "Ly giữ nhiệt",
    price: 120000,
    img: "https://images.unsplash.com/photo-1590080877777-52d6f9c7e9b5"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  updateCartCount();
  alert("Đã thêm vào giỏ!");
}

function renderProducts() {
  const list = document.getElementById("product-list");
  const keyword = document.getElementById("search").value.toLowerCase();

  list.innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(keyword))
    .forEach(p => {
      list.innerHTML += `
        <div class="bg-white p-4 rounded-xl shadow hover:scale-105 transition duration-300">
          
          <img src="${p.img}" class="w-full h-40 object-cover rounded mb-2">

          <h3 class="font-bold">${p.name}</h3>

          <p class="text-orange-500 font-bold">${p.price.toLocaleString()}đ</p>

          <button onclick="addToCart(${p.id})"
            class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 mt-2 rounded w-full">
            Thêm vào giỏ
          </button>
        </div>
      `;
    });

  updateCartCount();
}

// chạy
renderProducts();