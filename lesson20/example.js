/**
 * Created by shadow on 2016.1.31.
 */

'use strict';

class User {
    constructor() {

    }
}

var p = {
    getName(){}
};

var user = new User();
console.log(user.__proto__ === User.prototype);
user.__proto__ = p;

//д����
Object.setPrototypeOf(user,p);
var proto = Object.getPrototypeOf(user);//������
console.log(proto === user.__proto__);