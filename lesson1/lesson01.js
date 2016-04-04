'use strict';

//变量作用域访问
//{
//    var a = 12;
//    let b = 15;
//    {
//        console.log(a,b);
//    }
//}

//泄密
//for(let i=0;i<5;i++){
//
//}
//console.log(i);

//提升
//function f(){
//    console.log(a);
//    var a=12;
//}

//虽然外部定义变量a，
//但是函数内部如果也定义a的话，外面变量a将失效，块级let无法提升的
//var a = 12;
//function f(){
//    console.log(a);
//    let a;
//}
//f();

//{
//    let a;
//    var a;
//}

//代替立即执行匿名函数
//var config = (function(){
//    var config = [];
//    config.push(1);
//    config.push(2);
//    config.push(5);
//    return config;
//})();
//let config;
//{
//    config = [];
//    config.push(1);
//    config.push(2);
//    config.push(5);
//}

//函数不被提升
//function a(){console.log(1);}
//function f(){
//    a();
//    if(false){
//        function a(){console.log(2);}
//    }
//}
//f();

//实际的例子
//var arr = [];
//function f(){
//    for(let i=0;i<5;i++){
//        arr.push(function(){
//            console.log(i);
//        })
//    }
//}
//f();
//arr[1]();

//常量 const使用，对物理内存地址不可更改
const a = 12;

//对象可以被更改
const aa = {
    name:'leo'
};
aa.name = 'zeng liang';
aa.email = '32323@qq.com';
//彻底封装冻结这个对象，就不能在更改了
Object.freeze(aa);

console.log(aa);







































