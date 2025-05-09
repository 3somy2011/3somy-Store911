let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const product = this.closest('.product');
    const name = product.dataset.name;
    const price = product.dataset.price;

    cart.push({ name, price });

    product.querySelector('h3').classList.add('added');
  });
});

document.querySelector('.go-to-account').addEventListener('click', function() {
  const cartContainer = document.querySelector('.cart');
  const cartItems = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const p = document.createElement('p');
    p.textContent = `${item.name}: ${item.price} جنيه`;
    cartItems.appendChild(p);
    total += Number(item.price);
  });

  cartTotal.textContent = `إجمالي الحساب: ${total} جنيه`;

  cartContainer.style.display = 'block';
});
