let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function getTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function renderCart() {
  const list = document.getElementById("cart-list");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    list.innerHTML += `
      <div class="bg-white p-3 mb-2 rounded shadow flex justify-between items-center">
        <div>
          <p class="font-bold">${item.name}</p>
          <p>${item.price.toLocaleString()}đ</p>
        </div>

        <button onclick="removeItem(${index})"
          class="bg-red-500 text-white px-3 py-1 rounded">
          ❌ Xóa
        </button>
      </div>
    `;
  });

  document.getElementById("total").innerText =
    "Tổng: " + getTotal().toLocaleString() + "đ";
}

renderCart();