/**
 * Created by shadow on 2016.2.1.
 */
'use strict';

//将对象赋值给变量{name:name}右则name是对象变量名，可以简写成以下方式
var {name} = {name:'leo',age:33};
console.log(name);

//例2：嵌套解析，a和b是模式了，不能被解析
//let obj = {
//    a:{
//        b:{
//            c:123
//        }
//    }
//};
//let {c} = obj;
//console.log(c);


//例3：默认值
//let [x=15,y] = [undefined,12];
//console.log(x,y);

//var obj = {
//    name:'leo',
//    age:22
//};
//var {name,id='007',age} = obj;
//console.log(name,id,age);


//例4：更改变量名又要设置默认值
//var obj = {
//    name:'leo',
//    age:22
//};
//var {name,id:uid='007',age} = obj;
//console.log(name,uid,age);


//例5：错误异常，结构里没有x这个属性，就会错误异常
//let {x:{y}} = {name:{y:12}};


//通过结构赋值，可以从数组和对象中提取变量
var [a,b,c] = 'hello';
console.log(a,b,c);
//a、b、c分别赋值h、e、l














































