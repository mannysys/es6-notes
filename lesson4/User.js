'use strict';

// Symbol��������˽������
let getName = Symbol('getName');

module.exports = class User{
    [getName](){
        return 'zengliang';
    }

    print(){
        console.log(this[getName]());
    }


};
