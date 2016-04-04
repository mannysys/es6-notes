/**
 * Created by shadow on 2016.1.31.
 */
'use strict';

//例1：数组结构化赋值
//var arr = [1,2,3];
//var [a,b,c] = arr;
//console.log(a,b,c);

//例2：多维数组结构解析赋值
//let arr = [22,[5,8],11];
//let [a,[b,c],d] = arr;
//console.log(a,b,c,d);

//例3：变量的交换，将x的值和y值做交换
//let x = 11;
//let y =22;
//[y,x] = [x,y];
//console.log(x,y);

//例4：不完全解析
//let arr = [22,[5,8],11];
//let [a,[,c],d] = arr;
//console.log(a,c,d);

//例5：不能被数组解析的值是以下这些
//let [x,y] = NaN; //undefined, null, {}

//例6：Set解析赋值
//let [x,y] = new Set([22,33]);
//console.log(x,y);

//例7：所有实现了Interator的数据结构都能被数组解析
//class Group{
//    constructor(){
//
//    }
//    next(){
//        return {value:'leo',done:false};
//    }
//    [Symbol.iterator](){
//        return this;
//    }
//
//}
//
//let group = new Group();
//let [x,y] = group;
//console.log(x,y);

// ...运算符 转换成数组。x是解析成1，y是解析成2到6的一个数组
var [x,...y] = [1,2,3,4,5,6];
console.log(x,y);

















