// JavaScript ES 2017
// async => anytime return promise
// async => resolve => then  &&  reject => catch

// await => kai bhi assign kar sakhte hai our ush kaam ko rok kar baaki sare kaam karne ke baad ruka hua kaam start hoga

// main use await => server se data fetch kar ke lane me hota hai

// async function test() {
//     return 'Hello'
// }
// test().then(function (result) {console.log(result);})
// console.log(test());

async function asaw() {
    try {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
        const students = await reponse.json();
        return students
    } catch (error) {
        console.log(error);
    }
    // const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const students = await reponse.json();
    // return (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}
asaw().then(function (res) {console.log(res);})
// .catch(function (error) {
//     console.log(error);
// }) 