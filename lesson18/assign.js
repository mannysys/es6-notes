/**
 * Created by shadow on 2016.1.30.
 */
'use strict';

//��̬����assign�ǰ������������Է��������������������Է���ȥ

//�ѵڶ��������������Կ�������һ������ȥ
//ע�⣺��һ����������ȫ����obj��������֤����
//Symbol����Ҳ���Կ���
var obj = {};
var skey = Symbol('testname');
var obj2 = Object.assign(obj,{name:'leo'},{age:27},{[skey]:'ok good'});

console.log(obj === obj2 , obj);
console.log(obj[skey]);


// ��:
// ���test�����Ĳ���optionsû�д�������������Ĭ�ϵ�DEFAULT_OPTIONS
const DEFAULT_OPTIONS = {
    name:'leo'
};

function test(opts){
    let options = Object.assign({},DEFAULT_OPTIONS,opts);
    console.log(options);
}

test();//û�д�ֵ

test({name:'zengliang'});//�д�ֵ










































