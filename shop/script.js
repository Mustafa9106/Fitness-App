let cartItemCount = 0;

function addToCart() {
  cartItemCount++;
  updateCartBadge();
}

function updateCartBadge() {
  const cartIcon = document.getElementById('badge');
  cartIcon.textContent = cartItemCount;
}