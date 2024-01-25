// String Value 
let a = Symbol("Hello");
let b = Symbol("Hello");
console.log(a);
// console.log(typeof a);
// alert(a.toString())
// alert(a.description)
console.log(a.description);

// Object

let age = Symbol("age");
let user = {
    name: "Yahoo Baba",
    class: "B-tech",
}
user[age] = 25;
user["gender"] = "Male";
// console.log(user);
console.log(user[age]);
console.log(JSON.stringify(user));