'use strict';

let name = Symbol('name');

let obj = {
    age:22,
    [name]:'leo'
};

//通过以下3种方式，都是得不到Symbol属性key
//console.log(Object.keys(obj));

//for(let k in obj){
//    console.log(k);
//}
//console.log(Object.getOwnPropertyNames(obj));


//通过下面这种方式能得到Symbol属性key和值
let key = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[key]);


















