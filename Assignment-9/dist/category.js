"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (!category) {
        console.error('Category not found in URL');
        return;
    }
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => response.json())
        .then((products) => {
        products.forEach((product) => {
            const div = document.createElement('div');
            div.classList.add('product');
            div.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
          `;
            productsContainer.appendChild(div);
        });
    })
        .catch((error) => console.error('Error fetching products:', error));
});
window.addToCart = (id, title, price, image) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ id, title, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} added to cart!`);
};
