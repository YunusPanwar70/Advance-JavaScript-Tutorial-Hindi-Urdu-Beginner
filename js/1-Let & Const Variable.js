// Global

if (1 === 1) {
    var a = "hello";
};

console.log(a);

// Block

if (1 === 1) {
    let a = "hello";
};

console.log(a);

// Block & error

if (1 === 1) {
    const c = "Hello";
}

// console.log(c);

// Global

for (var i = 0; i <= 5; i++) {
    document.write(i + "<br>")
}
console.log(i);

// Block & error

for (let i = 0; i <= 5; i++) {
    document.write(i + "<br>")
}
console.log(i);

// Block & error


for (const i = 0; i <= 5; i++) {
    document.write(i + "<br>")
}
// console.log(i); error