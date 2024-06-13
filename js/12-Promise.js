// Promise => 
// 1 - Pending => Jab tak result nahi aata.
// 2 - FullFilled => Jab promise successfully complete ho jata hai aur result milta hai
// 3 - Reject => Jab promise fail ho jata hai aur koi error aati hai.

//          Promise
// resolve()        reject()
//  then()           catch()

// function prom(complete) {
//     return new Promise(function (resolve, reject) {
//         console.log('Fetching Data, Please Wait.');

//         setTimeout(() => {
//             if (complete) {
//                 resolve('I am successfull');
//             } else {
//                 reject('I am failed.');
//             }
//         }, 1000);
//     });
// }
// prom(true).then(function (result) { console.log(result); }).catch(function (error) { console.log(error); })

// let onFulFillment = (result) => {
//     console.log(result);
// }
// let onRejection = (error) => {
//     console.log(error);
// }
// prom(true).then(onFulFillment);
// prom(false).catch(onRejection);

// function prom(a, b) {
//     return new Promise(function (resolve, reject) {
//         console.log('Fetching Data, Please Wait.');
//         let c = a / b;
//         setTimeout(() => {
//             if (a, b) {
//                 resolve(`Your answer: ${c}`);
//             } else {
//                 reject('Failed to calculate');
//             }
//         }, 1000);
//     });
// }
// prom(5, 2).then(function (result) { console.log(result); }).catch(function (error) { console.log(error); })

// Real life example by AJAX

function prom() {
    return new Promise(function (resolve, reject) {
        console.log('Fetching data, please wait');
        setTimeout(() => {
            $.get('https://jsonplaceholder.typicode.com/posts', function (data) {
                resolve(data);
            }).fail(err => {
                reject('Fail to load JSON.')
            })
        }, 2000)
    });
}
prom().then(function (result) { console.log(result); }).catch(function (error) { console.log(error); })

// let MyPromise = new Promise(function (resolve, reject) {
//     let success = true;
//     if (success) {
//         resolve('Success');
//     } else {
//         reject('Failure!')
//     }
// })
// MyPromise.then(function (result) { console.log(result); }).catch(function (error) { console.log(error); });