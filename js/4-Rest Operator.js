function sum(name, course, ...args) {
    console.log(arguments);

    document.write(` Hello ${name} ${course}: `);
    let sum = 0;

    for (const i in args) {
        sum += args[i]
    }
    document.write(sum + "<br>");
}

// sum(20, 30, 40)
sum("yahoo baba", "Btech", 20, 30)
sum("Yunus", "Bca", 90, 20)