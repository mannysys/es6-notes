/**
 * Created by shadow on 2016.1.30.
 */
'use strict';
//������������

class A {
    constructor(){
        this.name = 'leo';
    }
    getName(){
    }
}

class B extends A{
    constructor(){
        super();
        this.age = 22;
    }

    getAge(){
    }

    [Symbol('fullname')](){

    }
}

var b = new B;

// Object.keys�ܹ��õ�����Ŀ�ö�ٵ����ԣ����ò���ԭ�����ϵ�����
// �ò���Symbols ����
console.log(Object.keys(B.prototype));

// Object.getOwnPropertyNames(b) �ܹ��õ���������
// ��������ö�ٵ����ԣ����ò���ԭ�����ϵ�����
// �ò���Symbols ����
console.log(Object.getOwnPropertyNames(B.prototype));

// ���Եõ������ Symbols���ԣ���������ö�ٵ�����
console.log(Object.getOwnPropertySymbols(B.prototype));


for(let key in b){
    console.log(key);
}

























































