// Object oriented Programing Es6 Version Modular &  Reusable Kar sakhte he

// Prototype jab tkk call nahi kare ge tab tk call nahi hoge yeh 

class hello {
    message() {
        console.log("Hello Everyone");
    }
    sorry() {
        console.log("Sorry Everyone");
    }
};

let a = new hello();
a.message();
a.sorry();

// Constructor Method Autometic call hote hai object banane par bhi autometic call hoga

class student {
    constructor() {
        console.log("Constructor Function");
    }
}
let b = new student();

// 2nd Mehtods

class student1 {
    constructor() {
        let name;
        console.log("2nd Constructor Method");
    }
    hello() {
        console.log("Hello " + this.name);
    }
}

let c = new student1();
c.name = "Yahoo Baba";
c.hello();

// 3rd Methods

class student2 {
    constructor(name1) {
        this.Studentname = name1;
        console.log("3rd constructot Method ");
    }
    hello() {
        console.log("Hello " + this.Studentname);
    }
}

let d = new student2("Yahoo Baba's")
d.hello();

// 4th Methods

class student3 {
    constructor(name2, age) {
        this.Studentname = name2;
        this.studentage = age;
        console.log("4th Constructor Function");
    }
    hello() {
        console.log(`Hello  ${this.Studentname} your age is ${this.studentage}`);
    }
}
let e = new student3("Yassu", 18);
let f = new student3("Yunus", 18)
e.hello();
f.hello();

// Static me object banaye bina use kar sakhte hai

class student4 {
    constructor(name3, age1) {
        this.studentname = name3;
        this.studentage = age1;
        console.log("5th Constructor Method");
    }
}