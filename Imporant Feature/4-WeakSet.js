let weak = new WeakSet();
let obj1 = {};
let obj2 = {};

weak.add(obj1);
weak.add(obj2);

console.log(weak.has(obj1));
console.log(weak.has(obj2));
obj1 = null;
console.log(weak.has(obj1));