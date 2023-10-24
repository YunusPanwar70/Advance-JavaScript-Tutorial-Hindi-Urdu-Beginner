// // Old Type Work

function hello() {
    console.log("Hello");
};
hello()

let hey = function() {
    console.log("World");
};
hey()

// Arrow Function

let a = () => console.log("How");
a();

// Old & New

let b = function(name) {
    return `Are ${name}`
}
console.log(b("You!"));

// New With Arrow Function 


let c = (name1) => {
    return `Hello ${name1}`
}
console.log(c("Yahoo Baba"));

// Multipal arrow function

let d = (names, age) => {
    return `Hello ${names} ${age}`
}
console.log(d("Yunus", 18));
console.log(typeof d);