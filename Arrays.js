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

// Arrow function made by myself "FILTER example" =)
// console.log(shopItems.filter(items => items.price < 1000));

// MAP example
console.log(shopItems.map(items => items.name));

