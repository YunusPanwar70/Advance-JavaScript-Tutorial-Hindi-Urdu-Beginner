// Multipal Number Value Sum

// function sum(...arr) {

//     console.log(arguments);

//     let sum = 0;

//     for (let i in arguments) {
//         sum += arguments[i]
//     }
//     return sum

// }
// console.log(sum(10));
// console.log(sum(10, 20));
// console.log(sum(10, 20, 30));
// console.log(sum(10, 20, 30, 40));
// console.log(sum(10, 20, 30, 40, 50));

// Multipal Number Value Sum & String

// function sum1(name, ...arr) {
// console.log(arguments);

// console.log(name);

//     let num = 0;

//     for (let j in arr) {
//         num += arr[j]
//     }
//     return `${name} ${num}`
// }


// console.log(sum1("Yahoo", 10, 20, 30));
// console.log(sum1("Baba", 10, 20, 30, 40));


function num1(name, course, ...arr) {
    let val = 0;

    for (let k in arr) {
        val += arr[k]
    }
    return `${name} ${course} ${val}`
}



console.log(num1("Yahoo Baba", "BTech", 10, 20, 30, 40));
console.log(num1("Yunus Panwar", "BCA", 10, 20, 30, 40));