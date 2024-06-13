// Object Orientation Program

// They are 3 typeof Object Constructor & Prototype & Static

// 1) Constructor :- class ka ek naya object banaya jaata hai, to yeh method khud ba khud call hota hai. 

// 2) Prototype :- ek JavaScript concept hai jo har object ke saath juda hota hai. Har object ek prototype ko refer karta hai, jo ek doosre object ka blueprint hota hai.

// 3) Static :- class level par hota hai, matlab ki yeh properties aur methods hote hain jo kisi specific object ke saath nahi judte, balki seedha class ke saath judte hain.

class hello {
    message() {
        console.log("Hello Evreyone");
    }
    sorry() {
        console.log("Sorry Evreyone");
    }
}
let a = new hello();
a.message();
a.sorry();

// Constructor Method

class student {
    constructor(name, age) {
        this.studentname = name;
        this.studentage = age;
        console.log("Constructor Function");
    }

    hellos() {
        console.log(`Hello ${this.studentname} Your age is ${this.studentage}`);
    }

    static staticMethod() {
        console.log("Static Method");
    }
}
let b = new student("Yahoo Baba", 25);
let c = new student("Yaasu", 19);

b.name = "Yahoo Baba";
b.hellos();
c.hellos();
// Object banana ki jrurt nahi he class name dekr call kar sakhte hai
student.staticMethod();