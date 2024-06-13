// AJAX => JQUERY => 
//                  1 - $.ajax();
//                  2 - $.get();
//                  3 - $.post();
// fetch('../html/readme.txt').then(function (response) {
//     return response.text()
// }).then(function (data) {
//     // console.log(data);
//     document.write(data)
// })
// 'https://jsonplaceholder.typicode.com/todos/1'

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
//     return response.json()
// }).then(function (data) {
//     // console.log(data);
//     for (const x in data) {
//         let a = `${data[x].name} - ${data[x].email} <br>`
//         document.write(a)
//     }
// }).catch(function (error) {
//     console.log(error);
// })

// if (window.fetch) {
//     document.getElementById('dataForm').addEventListener('submit', function (e) {
//         e.preventDefault();

//         // let obj = {
//         //     title: document.getElementById('titleText').value,
//         //     body: document.getElementById('bodyText').value,
//         //     userId: document.getElementById('userId').value,
//         // };

//         fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             // body: JSON.stringify(obj),
//             body: new FormData(document.getElementById('dataForm')),
//             headers: {
//                 // 'Content-type': 'application/json; charset=UTF-8',
//                 'Content-type': 'application/x-www-form-urlencoded',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json));
//     });
// } else {
    
// }

// server se data fetch kar ke lata hai JSON our text formate me