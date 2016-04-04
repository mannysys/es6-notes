'use strict';


function sum(a,b){
    return a + b;
}

function * fn(){
    // yield做为参数可以这样写的
    let result = sum(yield 1,yield 3);
    //let result = sum(yield 1,5 + (yield 3) );
    //一个表达式中，需要把yield语句括起来
    console.log('my qq：' + (yield qq));
}

fn();