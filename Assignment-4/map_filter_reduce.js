//task:1
const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shampoo", price: 10, category: "Personal Care" },
    { name: "Chair", price: 50, category: "Furniture" },
    { name: "Book", price: 15, category: "Stationery" },
    { name: "Headphones", price: 200, category: "Electronics" }
];
const productNamesUppercase = products.map(product => product.name.toUpperCase());
console.log(productNamesUppercase);
// Output: ["LAPTOP", "SHAMPOO", "CHAIR", "BOOK", "HEADPHONES"]


//task-2
const electronicsProducts = products.filter(product => product.category === "Electronics");

console.log(electronicsProducts)
// Output:  [{…}, {…}]
// 0
// : 
// {name: 'Laptop', price: 1000, category: 'Electronics'}
// 1
// : 
// {name: 'Headphones', price: 200, category: 'Electronics'}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)


//task-3
const totalPrice = products.reduce((total, product) => total + product.price, 0);

console.log("Total Price:", totalPrice);
//Total Price: 1275


//Task-4
function calculateTotalPriceByCategory(category) {
    return products
        .filter(product => product.category === category) 
        .map(product => product.price) 
        .reduce((total, price) => total + price, 0); 
}


const electronicsTotal = calculateTotalPriceByCategory("Electronics");
console.log("Total Price of Electronics:", electronicsTotal);
//Total Price of Electronics: 1200