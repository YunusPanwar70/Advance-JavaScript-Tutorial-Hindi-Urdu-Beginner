// Old Version 

let user = ["Yahoo Baba", 25];
let names = user[0];
let ages = user[1];
// console.log(name, age);

// Destructuring Array

let user1 = ["Yahoo Baba", 25, "Delhi"];

let [name, age = 20, city] = user1;

console.log(name);
console.log(age);
console.log(city);