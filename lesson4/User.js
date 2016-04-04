'use strict';

// Symbol可以用作私有属性
let getName = Symbol('getName');

module.exports = class User{
    [getName](){
        return 'zengliang';
    }

    print(){
        console.log(this[getName]());
    }


};
