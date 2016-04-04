'use strict';

// yield 值和赋值
function * fn(_name){
    let name = yield _name;//yield默认始终返回undefined
    return name;
}

let it = fn('leo');
console.log(it.next());
//如果要yield返回值，只能通过next方式赋值
console.log(it.next('liang'));






























