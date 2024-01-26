function* generateit() {
    console.log('First Message');
    yield 'Yield No,1'
    console.log('Secound Message');
    yield 'Yield No,1'
    // console.log('Third Message');
}

let g = generateit();
console.log(g.next());
console.log(g.next());
// console.log(g);