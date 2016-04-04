/**
 * Created by shadow on 2016.1.30.
 */
'use strict';

//静态方法assign是把其他对像属性方法拷贝到其它对象属性方法去

//把第二个参数对像属性拷贝到第一个对象去
//注意：第一参数对象是全等于obj，我们来证明下
//Symbol属性也可以拷贝
var obj = {};
var skey = Symbol('testname');
var obj2 = Object.assign(obj,{name:'leo'},{age:27},{[skey]:'ok good'});

console.log(obj === obj2 , obj);
console.log(obj[skey]);


// 例:
// 如果test方法的参数options没有传参数，可以用默认的DEFAULT_OPTIONS
const DEFAULT_OPTIONS = {
    name:'leo'
};

function test(opts){
    let options = Object.assign({},DEFAULT_OPTIONS,opts);
    console.log(options);
}

test();//没有传值

test({name:'zengliang'});//有传值










































