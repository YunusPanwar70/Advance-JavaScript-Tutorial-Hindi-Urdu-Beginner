// Old Type Work

function hello() {
    console.log("Hello");
}

hello();

let hey = function(params) {
    console.log("How are you");
};

hey();

// Arrow Function

let a = () => console.log("Yahoo Baba");

a();

// Old & New

let welcome = function(name) {
    return `hello & welcome ${name}`
}
console.log(welcome("Yahoo baba"));

// new

let welcome1 = (name1) => {
    return `hello ${name1} `
}

console.log(welcome1("Yahoo baba"));




let welcome2 = (name2, age) => {
    return `hello ${name2} ${age} `
}

console.log(welcome2("Yahoo baba", 25));
console.log(typeof welcome2);