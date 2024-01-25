// class employee {
//     constructor(name) {
//         console.log(`Constructor : Employee ${name}`);
//     }
// }

// class manager extends employee {
//     constructor(name) {
//         super();
//         console.log(`Constructor : Employee ${name}`);
//     }
// }

// let a = new manager("Yahoo Baba");


// 2nd

// class employee {
//     constructor(name) {
//         this.empname = name;
//         console.log(`Constructor : Employee`);
//     }

//     info() {
//         console.log(`Employee : Name ${this.empname}`);
//     }
// }

// class manager extends employee {
//     info() {
//         super.info();
//         console.log(`Manager : Employee ${this.empname}`);
//     }
// }

// let a = new manager("Yahoo Baba");
// a.info();

// 3rd 

// class employee {
//     constructor(name, age, salary) {
//         this.empname = name;
//         this.empage = age;
//         this.empsalary = salary;
//         console.log(`Constructor : Employee`);
//     }

//     info() {
//         document.write(`<h3>Employee Name</h3>
//         Name : ${this.empname} <br>
//         Age : ${this.empage}<br>
//         Salary : ${this.empsalary}`)
//     }
// }

// class manager extends employee {
//     info() {
//         let ta = 1000;
//         let pa = 300;
//         let totalSalary = this.empsalary + ta + pa;

//         document.write(`<h3>Employee Name</h3> 
//         Name : ${this.empname} <br>
//         Age : ${this.empage}<br>
//         Salry : ${totalSalary}`)
//     }
// }

// let a = new manager("Yahoo Baba", 25, 25000);
// let b = new employee("Yunus", 19, 20000)
// a.info();
// b.info();


// 4th Class

class employee {
    constructor(name, age, salary) {
        this.empname = name;
        this.empage = age;
        this.empsalary = salary;
        // console.log(`Constructor : Employee`);
    }

    info() {
        document.write(`<h3>Employee Name</h3>
        Name : ${this.empname} <br>
        Age : ${this.empage}<br>
        Salary : ${this.empsalary}`)
    }
}

class manager extends employee {
    info() {
        let ta = 1000;
        let pa = 300;
        let totalSalary = this.empsalary + ta + pa;

        document.write(`<h3>Employee Name</h3> 
        Name : ${this.empname} <br>
        Age : ${this.empage}<br>
        Salry : ${totalSalary}`)
    }
}

let a = new manager("Yahoo Baba", 25, 25000);
// let b = new employee("Yunus", 19, 20000)
a.info();
// b.info();