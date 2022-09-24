// Array methods MAP, FILTER, REDUCE

let shopItems = [
    {name: "Mouse", price: 20 },
    {name: "Display", price: 3500 },
    {name: "Keyboard", price: 1250 },
    {name: "Adapter", price: 120 },
    {name: "C-Cable", price: 50 },
    {name: "Laptop-Bag", price: 240 },
    {name: "MacBook-Pro", price: 2450 },
    {name: "I-Pad", price: 980 },
];

// some(); returs true or false according to a validation statement ej; items under $300
shopItems.some(item => console.log(item.price <= 300));


// forEach()
// shopItems.forEach(item => console.log(item.name));






// Find() example
// let findItem = shopItems.find(items => items.name === "MacBook-Pro")
// console.log(findItem);


// Arrow function made by myself "FILTER example" =)
// console.log(shopItems.filter(items => items.price < 1000));

// MAP example
// console.log(shopItems.map(items => items.name));


