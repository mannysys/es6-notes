/**
 * Created by shadow on 2016.1.31.
 */
'use strict';
//��ǩģ��

//��һ�����������飬��2�͵�3���������Դ�ֵ
function tag(strArr,arg1,arg2){
    console.log(strArr);
    console.log(arg1);
    console.log(arg2);
}

let name = 'leo';
let age = 30;

var result = tag`${name}${age}`;