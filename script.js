const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });

 
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const productToAdd = products.find((p) => p.id === productId);
  
  if (productToAdd) {
    cart.push(productToAdd);
    renderCart();
  }
}


function clearCart() {
  cart = []; 
  renderCart(); 
}


productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const productId = parseInt(e.target.getAttribute("data-id"));
    addToCart(productId);
  }
});

clearCartBtn.addEventListener("click", clearCart);


renderProducts();
renderCart();