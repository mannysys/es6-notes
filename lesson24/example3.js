/**
 * Created by shadow on 2016.1.31.
 */

'use strict';

//var fn = n=> n*3; 如果箭头函数内只有一条执行语句，可以不写大括号

//如果不写小括号可以用n来代替个参数
var fn = n=>{
    console.log(n);
}

fn(12);

// 不写return，自动会返回值的，如果写了大括号要用return返回值
var fn2 = n=> n*2;
console.log(fn2(5));