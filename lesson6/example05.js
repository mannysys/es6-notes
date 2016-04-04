'use strict';

function * fn(){
    let qq;
    try{
        //yield默认情况下返回undefined值，不会抛出异常
        qq = yield ff; // ff没有定义捕获异常
    }catch(e){
        console.log('qq have error!');
    }
    console.log(qq);
}

let g = fn();

g.next(); //第一次运行时候是进入方法体内
//第二次运行才返回赋值给yield的值
g.next('qq 1566523');

//如果方法内没有捕获异常可以在外面做捕获异常
//try{
//    g.throw('error!');
//}catch(e){
//    console.log('error 2');
//}







































































