document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.getElementById('categories-container') as HTMLDivElement;
  
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((categories: string[]) => {
        categories.forEach((category) => {
          const div = document.createElement('div');
          div.classList.add('category');
          div.innerHTML = `
            <h3>${category}</h3>
            <a href="category.html?category=${category}">View Products</a>
          `;
          categoriesContainer.appendChild(div);
        });
      })
      .catch((error) => console.error('Error fetching categories:', error));
  });
  