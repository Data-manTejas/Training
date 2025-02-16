document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items') as HTMLUListElement;
    const cartTotal = document.getElementById('cart-total') as HTMLParagraphElement;
    const clearCartButton = document.getElementById('clear-cart') as HTMLButtonElement;
  
    let cart: Array<{ id: number; title: string; price: number; image: string }> =
      JSON.parse(localStorage.getItem('cart') || '[]');
  
    function renderCart(): void {
      cartItemsContainer.innerHTML = '';
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<li>Your cart is empty.</li>';
        cartTotal.textContent = '';
        return;
      }
  
      let total = 0;
      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${item.image}" alt="${item.title}" style="width:50px;height:50px;">
          ${item.title} - $${item.price.toFixed(2)}
          <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(li);
        total += item.price;
      });
  
      cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
  
    (window as any).removeItem = (index: number): void => {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    };
  
    clearCartButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear the cart?')) {
        cart = [];
        localStorage.removeItem('cart');
        renderCart();
      }
    });
  
    renderCart();
  });
  