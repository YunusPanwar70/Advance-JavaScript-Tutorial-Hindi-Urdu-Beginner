// Spread Operator

function sum(name, ...args) {
    let sum = 0;

    for (let i in args) {
        sum += args[i]
    }
    return `${name},${sum}`
}


let num = [10, 20, 30];

console.log(sum("Yahoo Baba", ...num));


// Varable Spread Operator

let arr = [10, 20, 30, 40];

console.log(...arr); //Not a Array

// console.log([...arr]); Convert in Array

let arr1 = [50, 60, 70];

let arr2 = arr1;

// let arr2 = [...arr1] Cloning nahi karega

arr1.push(80);

console.log(arr2);

let arr3 = arr.concat(arr1);

console.log(arr3);

// Concat with Spread operator 

let arr4 = [...arr, arr1]

console.log(arr4);

// Add Other Value

let arr5 = [5, ...arr, arr1, 65]

console.log(arr5);

// Spread Operator use with Object

let obj = {
    name: "Yahoo Baba",
    course: "BTech"
};

let obj1 = {
    age: 25
};

// Mearge to Object

let obj2 = {...obj, ...obj1 };

console.log(obj2);