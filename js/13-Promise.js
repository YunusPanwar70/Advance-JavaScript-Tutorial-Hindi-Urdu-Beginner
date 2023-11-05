// One Methods

let complete = true;

let prom = new Promise(function(resolve, reject) {
    if (complete) {
        resolve("I am successfull.");
    } else {
        reject("I am failed.");
    }
});

console.log(prom);

// Secound Method

// function prom(complete) {
//     return new Promise(function(resolve, reject) {
//         if (complete) {
//             resolve("I am successful");
//         } else {
//             reject("i am failes");
//         }
//     })
// };

// console.log(prom(true));

// Third Methods

// function prom(complete) {
//     return new Promise(function(resolve, reject) {
//         if (complete) {
//             resolve("I am successful")
//         } else {
//             reject("I am failed")
//         }
//     })
// }

// // console.log(prom(true));

// let onfullfilment = (result) => {
//     console.log(result);
// }

// let onrejection = (error) => {
//     console.log(error);
// }

// prom(true).then(onfullfilment);
// prom(true).catch(onrejection);

// Four Method

// function prom(complete) {
//     return new Promise(function(resolve, reject) {
//         console.log("fatching data,please wait");
//         setTimeout(() => {
//             if (complete) {
//                 resolve("i am succesful");
//             } else {
//                 reject("i am failed");
//             }
//         }, 1000)
//     })
// };

// let onfullfilment = (result) => {
//     console.log(result);
// }

// let onrejection = (error) => {
//     console.log(error);
// }

// prom(true).then(onfullfilment).catch(onrejection);

// Five Mehtod

// function prom(complete) {
//     return new Promise(function(resolve, reject) {
//         console.log("Fatching data , please wait");
//         setTimeout(() => {
//             if (complete) {
//                 resolve("i am succesful")
//             } else {
//                 reject("i am failed")
//             }
//         }, 1000)
//     })
// }

// prom(true).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// Six Method

// function prom(a, b) {
//     return new Promise(function(resolve, reject) {
//         console.log("Fatching data ,Please Wait");
//         let c = a / b;
//         setTimeout(() => {
//             if (a, b) {
//                 resolve(`Your answer ${c}`)
//             } else {
//                 reject("fialed calculate")
//             }
//         }, 1000)
//     })
// }


// prom(5, 2).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// Seven With Ajex

// function prom() {
//     return new Promise(function(resolve, reject) {
//         console.log("Featchind data please wait");
//     })
//     setTimeout(() => {
//         $.get("https://jsonplaceholder.typicode.com/posts", function(data) {
//             console.log(data);
//         })
//     })
// }


// prom().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });