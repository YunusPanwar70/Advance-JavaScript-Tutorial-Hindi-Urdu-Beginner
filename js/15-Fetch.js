fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => { return response.text(); })

.then((data) => { console.log(data); })