/**
 * Created by shadow on 2016.2.1.
 */
'use strict';

//������ֵ������{name:name}����name�Ƕ�������������Լ�д�����·�ʽ
var {name} = {name:'leo',age:33};
console.log(name);

//��2��Ƕ�׽�����a��b��ģʽ�ˣ����ܱ�����
//let obj = {
//    a:{
//        b:{
//            c:123
//        }
//    }
//};
//let {c} = obj;
//console.log(c);


//��3��Ĭ��ֵ
//let [x=15,y] = [undefined,12];
//console.log(x,y);

//var obj = {
//    name:'leo',
//    age:22
//};
//var {name,id='007',age} = obj;
//console.log(name,id,age);


//��4�����ı�������Ҫ����Ĭ��ֵ
//var obj = {
//    name:'leo',
//    age:22
//};
//var {name,id:uid='007',age} = obj;
//console.log(name,uid,age);


//��5�������쳣���ṹ��û��x������ԣ��ͻ�����쳣
//let {x:{y}} = {name:{y:12}};


//ͨ���ṹ��ֵ�����Դ�����Ͷ�������ȡ����
var [a,b,c] = 'hello';
console.log(a,b,c);
//a��b��c�ֱ�ֵh��e��l














































