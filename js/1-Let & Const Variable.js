// Old Version Variable

// Var

// var x = "Hello";
// var x = "World"; Re diclar
// x = "Wow"; Reasing

// Let 

// let y = "Hello";
// let y = "world"; Re diclar Erorr
// y = "Wow"; Reasing Kar Sakhte 

// Const 

// const z = "Hello";
// const z = "World" Re diclar Error
// z = "Wow" Reasign Nahi Kar Sakte

// New Version

// Global Scope Var

if (1 === 1) {
    var a = "Hello";
};
console.log(a);

// Block Scope Let

if (1 === 1) {
    let b = "Hello";
    console.log(b); //Right Condition
};
// console.log(b); Error

// Block Scope Const

if (1 === 1) {
    const c = "Hello";

    console.log(c); //Right Condition 
};
// console.log(c); Error

// Loop Example

// Global Scope Var 

for (var i = 1; i <= 5; i++) {
    document.write(i + "<br>");
};
console.log(i);

// Block Scope Let Error

for (let j = 1; j <= 5; j++) {
    document.write(i + "<br>")
}
// console.log(j); Error

// Block Scope Const Error

for (let k = 1; k <= 5; k++) {
    document.write(k + "<br>")
}
// console.log(k); Error