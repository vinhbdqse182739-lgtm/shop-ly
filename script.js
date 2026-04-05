const products = [
  {
    id: 1,
    name: "Ly sứ trắng tối giản",
    price: 50000,
    oldPrice: 79000,
    rating: 4.8,
    badge: "Bán chạy",
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Ly thủy tinh trong suốt",
    price: 70000,
    oldPrice: 99000,
    rating: 4.7,
    badge: "Mới",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Ly giữ nhiệt cao cấp",
    price: 120000,
    oldPrice: 159000,
    rating: 4.9,
    badge: "Sale 25%",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Ly cafe vintage",
    price: 65000,
    oldPrice: 85000,
    rating: 4.6,
    badge: "Hot",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Ly gốm decor bàn làm việc",
    price: 89000,
    oldPrice: 119000,
    rating: 4.8,
    badge: "Yêu thích",
    img: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Ly đôi quà tặng",
    price: 150000,
    oldPrice: 199000,
    rating: 4.9,
    badge: "Quà tặng",
    img: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=800&q=80"
  }
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
  const product = products.find(p => p.id === id);
  if (!product) return;

  cart.push(product);
  saveCart();
  updateCartCount();
  alert("Đã thêm vào giỏ hàng");
}

function renderProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;

  const searchInput = document.getElementById("search");
  const keyword = searchInput ? searchInput.value.toLowerCase() : "";

  list.innerHTML = "";

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(keyword)
  );

  filteredProducts.forEach(product => {
    list.innerHTML += `
      <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div class="relative">
          <img src="${product.img}" alt="${product.name}" class="w-full h-64 object-cover">
          <span class="absolute top-4 left-4 bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            ${product.badge}
          </span>
        </div>

        <div class="p-5">
          <div class="text-sm text-amber-500 mb-2">⭐ ${product.rating} / 5</div>
          <h3 class="text-xl font-bold mb-2">${product.name}</h3>

          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl font-bold text-orange-500">${product.price.toLocaleString()}đ</span>
            <span class="text-stone-400 line-through">${product.oldPrice.toLocaleString()}đ</span>
          </div>

          <button
            onclick="addToCart(${product.id})"
            class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    `;
  });

  updateCartCount();
}

renderProducts();
updateCartCount();
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser")) || null;
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}

function renderAuthArea() {
  const authArea = document.getElementById("auth-area");
  if (!authArea) return;

  const currentUser = getCurrentUser();

  if (currentUser) {
    authArea.innerHTML = `
      <span class="font-medium text-gray-700">Xin chào, ${currentUser.name}</span>
      <button onclick="logout()" class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl font-medium transition">
        Đăng xuất
      </button>
    `;
  } else {
    authArea.innerHTML = `
      <a href="login.html" class="bg-white text-orange-500 border border-white px-4 py-2 rounded-xl font-semibold hover:bg-orange-50 transition shadow-sm">
        Đăng nhập
      </a>
      <a href="register.html" class="bg-orange-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-orange-600 transition">
        Đăng ký
      </a>
    `;
  }
}

renderAuthArea();