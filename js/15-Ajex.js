// document.createElement("table");
document.getElementById("btn").addEventListener("click",
    function loadData() {
        let xhttp = new XMLHttpRequest();
        xhttp.getResponseHeader("Content-type", "application/json")

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                let data1 = JSON.parse(this.responseText);
                let print = document.getElementById("data")
                let node = "<tr><td>" + data1[0].id + "</td><td>" + data1[0].name + "</td><td>" + data1[0].email + "</td><td>" + data1[0].address.city + "</td></tr>";
                print.appendChild(node);
            }
        }
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
        xhttp.send();
    });