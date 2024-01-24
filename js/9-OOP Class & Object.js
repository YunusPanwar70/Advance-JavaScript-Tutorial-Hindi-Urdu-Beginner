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

// b.name = "Yahoo Baba";
b.hellos();
c.hellos();
// Object banana ki jrurt nahi he class name dekr call kar sakhte hai
student.staticMethod();