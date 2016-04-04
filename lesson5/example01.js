'use strict';

// ±éÀúÊı×é
let arr = ['a','b','c'];

var iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


