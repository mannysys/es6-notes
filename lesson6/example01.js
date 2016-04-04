'use strict';

// Generator函数
// 使用yield可以将Generator函数内部分成几段去执行
// 每一个断点是通过yield去暂停的
// 当调用一次，是执行了函数内部一次
function * fn(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

// Generator函数执行后返回的是一个指针是实现了iterator
// 调用next()就执行方法
let it = fn();
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

for(let v of it){
    console.log(v);
}














