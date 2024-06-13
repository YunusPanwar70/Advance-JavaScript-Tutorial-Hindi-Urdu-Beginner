//      A            J           A      X
// Asynchronus   JavaScript     And    XML

// AJAX is tecnique for createing fast and dynamic web page

// Ajax JavaScript me "Asynchronous JavaScript and XML" ka short form hai jo web pages ko background me server se data fetch karne aur update karne ke liye istemal hota hai.

// XMLHttpRequest =>   request background me jati hai server ke jariye Response lekr aati hai without page refres kare content dikha dete hai. 

// content 3 formate me aata hai 1-Text File 2-XMLDate 3-JSON Data

// in ke jariye 5 step me devied hota hai => 

// 1 - readtState => 0 - request not intialized
//                   1 - server connection established
//                   2 - request recived 
//                   3 - processing request

// status  && reponseText or ResponseXML
// 200: OK
// 403: forbidden server not reponse 
// 404: not found

// XMLHttpRequest.OPENED('get',filname.txt,true); ture mean asyncronse mode on hai jab tk respone nahi aata kaam chalta hai.

function loadData() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            // document.getElementById('demo').innerHTML = this.responseText
        } else if (this.readyState == 4 && this.status == 404) {
            document.getElementById('demo').innerHTML = 'File not found'
        }
    }
    xhttp.open('GET', 'https://dummyjson.com/products/1', true)
    xhttp.send();
}
// YunusPanwar70 sbi username & password P@nwar12 && Panwar@12