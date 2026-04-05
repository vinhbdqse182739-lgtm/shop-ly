// Lấy danh sách user đã đăng ký
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Lưu danh sách user
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Lưu user đang đăng nhập
function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

// Lấy user đang đăng nhập
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser")) || null;
}

// Đăng ký
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const message = document.getElementById("registerMessage");

    if (!name || !email || !password) {
      message.innerText = "Vui lòng nhập đầy đủ thông tin";
      message.className = "text-center mt-4 font-medium text-red-500";
      return;
    }

    const users = getUsers();
    const existedUser = users.find(user => user.email === email);

    if (existedUser) {
      message.innerText = "Email này đã được đăng ký";
      message.className = "text-center mt-4 font-medium text-red-500";
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);

    message.innerText = "Đăng ký thành công! Chuyển sang đăng nhập...";
    message.className = "text-center mt-4 font-medium text-green-600";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);
  });
}

// Đăng nhập
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const message = document.getElementById("loginMessage");

    const users = getUsers();
    const foundUser = users.find(
      user => user.email === email && user.password === password
    );

    if (!foundUser) {
      message.innerText = "Sai email hoặc mật khẩu";
      message.className = "text-center mt-4 font-medium text-red-500";
      return;
    }

    setCurrentUser(foundUser);

    message.innerText = "Đăng nhập thành công!";
    message.className = "text-center mt-4 font-medium text-green-600";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
}