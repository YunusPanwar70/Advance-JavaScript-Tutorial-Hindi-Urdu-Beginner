function prom() {
    return new Promise(function (resolve, reject) {
        console.log('Fetching data,please wait');
        setTimeout(() => {
            $.get('https://jsonplaceholder.typicode.com/posts', function (data) {
                resolve(data)
            }).fail(function (err) {
                reject('Fail to load data')
            })
        }, 2000)
    })
}
prom().then((result) => console.log(result));