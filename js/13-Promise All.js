let promisecall = function(returnData, message) {
    function(resolve, reject) {
        setTimeout(() => {
            console.log(`The ${message} promise has resolved`);
            resolve(returnData);
        }, returnData, 100)
    }
}

let p1 = new Promise(promisecall(10, "first"));
let p2 = new Promise(promisecall(20, "secound"));
let p3 = new Promise(promisecall(30, "third"));

let total = 0;

Promise.all([p1, p2, p3]).then((result) => {
    for (let i in result) {
        { total += result[i] }
    }
    console.log(`Results: ${result}`);
    console.log(`Total:  ${total}`);
}).catch((error) => [
    console.log(`Error: ${error}`);
])