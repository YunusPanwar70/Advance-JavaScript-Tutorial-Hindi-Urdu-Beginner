document.getElementById("btn").addEventListener("click",
    function loadData() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        }
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true); // Use 'readme.txt' instead of 'redme.txt'
        xhttp.send();
    })