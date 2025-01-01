let weak = new WeakMap();
let obj1 = {};
let obj2 = {};
// set is use to give value in Object
weak.set(obj1, 'Value 1');
weak.set(obj2, 'Value 2'); 
// get is use to get WeakMap values
console.log(weak.get(obj1));
console.log(weak.get(obj2));
// null is use to remove reference
obj1 = null;
console.log(weak.get(obj1));  // Undefined