//          Promise
// resolve()        reject()
//  then()           catch()

// Resolve => Saare Promise Resolve hone par then call ho jayega
// Reject  => Agr ek bhi function Reject hota hai to cathc function call ho jaayega

// Resolve => 
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('First Promise has resolved');
//         resolve(10);
//     }, 1 * 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20)
//     }, 2 * 1000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The third promise has resolved');
//         resolve(30);
//     }, 3 * 1000);
// })
// let total = 0;
// Promise.all([p1, p2, p3]).then((result) => {
//     for (let i in result) {
//         total += result[i]
//     }
//     console.log(`Result : ${result}`);
//     console.log(`Total : ${total}`);
// }).catch((erorr) => console.log(`Error : ${erorr}`));

// Reject => 
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('First Promise has resolved');
//         resolve(10);
//     }, 1 * 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has failed');
//         reject('Failed')
//     }, 2 * 1000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The third promise has resolved');
//         resolve(30);
//     }, 3 * 1000);
// })
// let total = 0;
// Promise.all([p1, p2, p3]).then((result) => {
//     for (let i in result) {
//         total += result[i]
//     }
//     console.log(`Result : ${result}`);
//     console.log(`Total : ${total}`);
// }).catch((erorr) => console.log(`Error : ${erorr}`));

let promiseCall = function (reuturnData, message) {
    return function (resolve, reject) {
        setTimeout(() => {
            console.log(`This ${message} Promise has resolved`);
            resolve(reuturnData);
        }, reuturnData * 1000);
    }
};
let p1 = new Promise(promiseCall(10, 'First'));
let p2 = new Promise(promiseCall(20, 'second'));
let p3 = new Promise(promiseCall(30, 'Third'));
let p4 = new Promise(function (resolve, reject) {
    reject('The 4th promise has rejected.')
});

let total = 0;
Promise.all([p1, p2, p3, p4]).then((result) => {
    for (let i in result) {
        total += result[i]
    }
    console.log(`Result : ${result}`);
    console.log(`Total : ${total}`);
}).catch((erorr) => console.log(`Error : ${erorr}`));