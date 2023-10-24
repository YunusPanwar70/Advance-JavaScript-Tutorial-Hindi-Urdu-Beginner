// Example 


// class fruits {

// }
// class vegetables extends fruits {

// }

// let f = new fruits();
// let v = new vegetables();

// First Method

// class employee {
//     constructor(name) {
//         console.log("Constructor : Employee " + name);
//     }

//     info() {

//     }
// }

// class manager extends employee {

//     constructor(name) {
//         super();
//         console.log("Constructor : Manager " + name);
//     }
// }
// let a = new manager("Yahoo Baba");

// Secound Method

// class employee {
//     constructor(name) {
//         this.empname = name;
//         console.log("Constructor : Employee 2 ");
//     }

//     info() {
//         console.log("Employee Name : " + this.empname);
//     }
// }

// class manager extends employee {
//     info() {
//         console.log("Manager Name : " + this.empname);
//         super.info();
//     }
// }

// let b = new manager("Yunus");
// b.info();

// Third Method
class employee {
    constructor(name, age, salary) {
        this.empname = name;
        this.empage = age;
        this.empsalary = salary;
        console.log("Constructor Employee 3");
    }

    info() {
        console.log(`Employee Class 
        Name : ${this.empname}
        Age : ${this.empage}
        Salary ${this.empsalary}`);
    }
}

class manager extends employee {
    info() {
        let ta = 1000;
        let pa = 300;
        let totalsalay = this.empsalary + ta + pa;

        console.log(`Manager Class 
        Name: ${this.empname}
        Age :${this.empage}
        Salary : ${this.empsalary}`);

    }
}
class test extends manager {

}

let c = new manager("Yassu", 18, 10000)
let d = new employee("Yunus", 18, 20000)
c.info();
d.info();

let f = new test("hello", 2, 34324);
f.info();