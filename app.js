let products = [
    { name: "Laptop", price: 80000 },
    { name: "Mobile", price: 40000 },
    { name: "Shoes", price: 5000 },
    { name: "Shirt", price: 3000 }
];


// 1. Show all items

products.forEach(function(item) {
    console.log(item.name, item.price);
});


// 2. Filter items

let filtered = products.filter(function(item) {
    return item.price > 10000;
});

console.log(filtered);


// 3. Total price

let total = 0;

products.forEach(function(item) {
    total = total + item.price;
});

console.log("Total Price:", total);