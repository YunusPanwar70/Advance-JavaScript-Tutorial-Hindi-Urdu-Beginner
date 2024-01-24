// Old Version 

let user = ["Yahoo Baba", 25];
let names = user[0];
let ages = user[1];
// console.log(names, ages);

// Destructuring Array

let user1 = ["Yahoo Baba", 22, "Delhi", ["Male", 25000]];

let [name, age = 20, city, [genrder, salary]] = user1;

console.log(name);
console.log(age);
console.log(city);
console.log(genrder);
console.log(salary);

// Rest Operator
let user2 = ["Yunus", 18, "Jodhpur"]
let [name1, ...args] = user2;
console.log(name1);
console.log(args);

// Use With Funciton

function userS([name3, age3, city3]) {
    console.log(name3);
    console.log(age3);
    console.log(city3);
}

userS(["Yaasu", 18, "Jd"]);

// Secound Example

function fn() {
    return ["Mustafa", 17, "Delhi"];
}

let [name4, age4, city4] = fn();

console.log(city4);