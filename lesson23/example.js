/**
 * Created by shadow on 2016.1.31.
 */
'use strict';
//标签模版

//第一个参数是数组，第2和第3个参数可以传值
function tag(strArr,arg1,arg2){
    console.log(strArr);
    console.log(arg1);
    console.log(arg2);
}

let name = 'leo';
let age = 30;

var result = tag`${name}${age}`;