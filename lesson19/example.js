/**
 * Created by shadow on 2016.1.30.
 */
'use strict';
//遍历对象属性

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

// Object.keys能够得到自身的可枚举的属性，但得不到原型链上的属性
// 得不到Symbols 属性
console.log(Object.keys(B.prototype));

// Object.getOwnPropertyNames(b) 能够得到自身属性
// 包括不可枚举的属性，但得不到原型链上的属性
// 得不到Symbols 属性
console.log(Object.getOwnPropertyNames(B.prototype));

// 可以得到自身的 Symbols属性，包括不可枚举的属性
console.log(Object.getOwnPropertySymbols(B.prototype));


for(let key in b){
    console.log(key);
}

























































