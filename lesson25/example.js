/**
 * Created by shadow on 2016.1.31.
 */
'use strict';

//��1������ṹ����ֵ
//var arr = [1,2,3];
//var [a,b,c] = arr;
//console.log(a,b,c);

//��2����ά����ṹ������ֵ
//let arr = [22,[5,8],11];
//let [a,[b,c],d] = arr;
//console.log(a,b,c,d);

//��3�������Ľ�������x��ֵ��yֵ������
//let x = 11;
//let y =22;
//[y,x] = [x,y];
//console.log(x,y);

//��4������ȫ����
//let arr = [22,[5,8],11];
//let [a,[,c],d] = arr;
//console.log(a,c,d);

//��5�����ܱ����������ֵ��������Щ
//let [x,y] = NaN; //undefined, null, {}

//��6��Set������ֵ
//let [x,y] = new Set([22,33]);
//console.log(x,y);

//��7������ʵ����Interator�����ݽṹ���ܱ��������
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

// ...����� ת�������顣x�ǽ�����1��y�ǽ�����2��6��һ������
var [x,...y] = [1,2,3,4,5,6];
console.log(x,y);

















