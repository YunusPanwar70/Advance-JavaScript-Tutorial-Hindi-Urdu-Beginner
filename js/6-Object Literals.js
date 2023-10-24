// First Example

let name = "Yahoo Baba";
let course = "BTech";

let obj = {
    name,
    course
};
console.log(obj);

// Secound Example

let n = "name";

let obj1 = {
    [n]: "Yunus",
    course: "BCA"
};
console.log(obj1);
console.log(obj1.name);

// Third Example With Arthmetic Operator

let n1 = "student";

let obj2 = {
    [n1 + "name"]: "Yunus Panwar",
    course: "BCA 1st"
}
console.log(obj2);


// Four With Function Method

let n2 = "student";

let obj3 = {
    [n2 + "name"]: "Yaasu",
    course: "BCA For lips Clg",
    detail: function() {
        return `${this.studentname} is student of ${this.course}`
    }
}
console.log(obj3);
console.log(obj3.detail());


// let na = "student";

// let obj2 = {
//     [na + "name"]: "Yunus",
//     course: "bca",
//     details: function() {
//         return `${this.studentname} is student of ${this.course}`
//     }
// }

// console.log(obj2);

// console.log(obj2.details());

// // Four 

// let n3 = "Student";

// let obj3 = {
//     [n3 + "name"]: "Yassu",
//     collage: "lips",
//     detail: function() {
//         return ` ${ this.Studentname} is student collage name ${course}`
//     }
// }
// console.log(obj3.detail());

// // Five

// let n4 = "Student";

// let obj4 = {
//     [n4 + "name"]: "yaasu",
//     course: "laptop",
//     show() {
//         return ` ${this.Studentname} is and doing ${course}`
//     }
// }

// console.log(obj4['show']());

// // Six

// let name6 = "yahoo baba";
// let course6 = "BTech";

// function student(name6, course6) {
//     return { name6, course6 }
// }

// console.log(student(name6, course6));

// // Seven

// let fname = "yahoo";
// let lname = "baba";
// let sub = "BTech";

// function student(fname, lname, sub) {
//     let fullname = fname + " " + lname;
//     return { fullname, sub }
// }

// let s = student(fname, lname, sub);
// console.log(s.fullname);