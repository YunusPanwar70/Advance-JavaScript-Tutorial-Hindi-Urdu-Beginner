// let a = ['Apple', "Orange", "Grapes"];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// for (const values of a) {
//     console.log(values);
// }
// let b = a[Symbol.iterator]();
// let result = b.next();
// console.log(result);

// let numbers = [100, 200, 300];
// let iter = numbers[Symbol.iterator]();
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);

// let result = iter.next();
// while (!result.done) {
//     console.log(result.value);
//     result = iter.next();
// }

// let str = 'Yahoo Baba';

// let iter = str[Symbol.iterator]();

// let result = iter.next();

// while (!result.done) {
//     console.log(result.value);
//     result = iter.next();
// }

// for (const char of str) {
//     console.log(char);
// }


// Khud ka iterator banana

function numbersIterator(arr) {
    let nextNum = 0;
    return {
        next() {
            if (nextNum < arr.length) {
                return {
                    value: arr[nextNum++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }

        }
    }
}

let numbers = [100, 200, 300, 400, 500];

let num = numbersIterator(numbers);
console.log(num.next());
num.next()
console.log(num.next());
console.log(num.next().value);
console.log(num.next());
console.log(num.next());
console.log(num.next());